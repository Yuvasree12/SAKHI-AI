import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/languages';

export interface SpeechRecognitionHandlers {
  onStart: () => void;
  onInterimResult: (transcript: string) => void;
  onFinalResult: (transcript: string) => void;
  onError: (errorType: 'permission_denied' | 'no_speech' | 'unavailable' | 'unsupported' | 'unknown', message?: string) => void;
  onEnd: () => void;
}

export class VoiceService {
  private recognition: any = null;
  private currentStream: MediaStream | null = null;
  private isListening: boolean = false;
  private currentLanguage: LanguageCode = 'ta';
  private speechRate: number = 0.9; // 0.9 is gentle, clear and well-paced for first-time users
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private onVoicesChangedCallback: (() => void) | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.updateVoiceForLanguage(this.currentLanguage);
        if (this.onVoicesChangedCallback) {
          this.onVoicesChangedCallback();
        }
      };
    }
  }

  public setLanguage(lang: LanguageCode) {
    this.currentLanguage = lang;
    this.updateVoiceForLanguage(lang);
  }

  public setRate(rate: number) {
    this.speechRate = rate;
  }

  public getRate(): number {
    return this.speechRate;
  }

  public isSpeechRecognitionSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
  }

  public isSpeechSynthesisSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return 'speechSynthesis' in window;
  }

  /**
   * Request microphone permission and start speech recognition
   */
  public async startListening(handlers: SpeechRecognitionHandlers): Promise<boolean> {
    if (!this.isSpeechRecognitionSupported()) {
      handlers.onError('unsupported', TRANSLATIONS[this.currentLanguage].errorUnsupported);
      return false;
    }

    // Stop any existing synthesis
    this.stopSpeaking();

    // 1. Explicitly request microphone permission
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.currentStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      }
    } catch (err: any) {
      console.warn('Microphone permission rejected or error:', err);
      handlers.onError('permission_denied', TRANSLATIONS[this.currentLanguage].errorMicPermission);
      return false;
    }

    try {
      const SpeechRecognitionClass = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      this.recognition = new SpeechRecognitionClass();

      // Set language code
      const langMap: Record<LanguageCode, string> = {
        ta: 'ta-IN',
        en: 'en-IN',
        hi: 'hi-IN',
        te: 'te-IN'
      };
      this.recognition.lang = langMap[this.currentLanguage] || 'en-IN';
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;

      let finalCapturedText = '';

      this.recognition.onstart = () => {
        this.isListening = true;
        handlers.onStart();
      };

      this.recognition.onresult = (event: any) => {
        let interim = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const item = event.results[i];
          const transcript = item[0]?.transcript || '';
          if (item.isFinal) {
            finalCapturedText += transcript;
          } else {
            interim += transcript;
          }
        }

        if (interim) {
          handlers.onInterimResult((finalCapturedText + ' ' + interim).trim());
        }
      };

      this.recognition.onerror = (event: any) => {
        console.error('Speech recognition error event:', event.error);
        this.cleanupMediaStream();
        this.isListening = false;

        if (event.error === 'not-allowed') {
          handlers.onError('permission_denied', TRANSLATIONS[this.currentLanguage].errorMicPermission);
        } else if (event.error === 'no-speech') {
          handlers.onError('no_speech', TRANSLATIONS[this.currentLanguage].errorNotUnderstood);
        } else if (event.error === 'audio-capture' || event.error === 'network') {
          handlers.onError('unavailable', TRANSLATIONS[this.currentLanguage].errorMicUnavailable);
        } else {
          handlers.onError('unknown', event.error);
        }
      };

      this.recognition.onend = () => {
        this.cleanupMediaStream();
        this.isListening = false;
        handlers.onEnd();

        const cleanedResult = finalCapturedText.trim();
        if (cleanedResult) {
          handlers.onFinalResult(cleanedResult);
        }
      };

      this.recognition.start();
      return true;
    } catch (err: any) {
      console.error('Failed to initialize speech recognition:', err);
      this.cleanupMediaStream();
      this.isListening = false;
      handlers.onError('unavailable', TRANSLATIONS[this.currentLanguage].errorMicUnavailable);
      return false;
    }
  }

  public stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
    }
    this.cleanupMediaStream();
    this.isListening = false;
  }

  private cleanupMediaStream() {
    if (this.currentStream) {
      try {
        this.currentStream.getTracks().forEach((track) => track.stop());
      } catch (e) {
        // ignore
      }
      this.currentStream = null;
    }
  }

  /**
   * Speak text in the current language
   */
  public speak(
    text: string,
    options?: {
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: any) => void;
      rate?: number;
    }
  ): void {
    if (!this.isSpeechSynthesisSupported()) {
      if (options?.onEnd) options.onEnd();
      return;
    }

    // Cancel any previous utterance
    window.speechSynthesis.cancel();

    // Clean text of symbols, bullets, asterisks, markdown, and excessive brackets
    const cleanText = text
      .replace(/[*#_~`>]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText) {
      if (options?.onEnd) options.onEnd();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    const langMap: Record<LanguageCode, string> = {
      ta: 'ta-IN',
      en: 'en-IN',
      hi: 'hi-IN',
      te: 'te-IN'
    };
    utterance.lang = langMap[this.currentLanguage] || 'en-IN';
    utterance.rate = options?.rate || this.speechRate;
    utterance.pitch = 1.0;

    // Try finding matching voice
    if (!this.selectedVoice) {
      this.updateVoiceForLanguage(this.currentLanguage);
    }
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }

    utterance.onstart = () => {
      if (options?.onStart) options.onStart();
    };

    utterance.onend = () => {
      if (options?.onEnd) options.onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      if (options?.onError) options.onError(e);
      if (options?.onEnd) options.onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }

  public stopSpeaking() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public isSpeaking(): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
    return window.speechSynthesis.speaking;
  }

  public pauseSpeaking() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
  }

  public resumeSpeaking() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
  }

  private updateVoiceForLanguage(lang: LanguageCode) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    const langMap: Record<LanguageCode, string[]> = {
      ta: ['ta-IN', 'ta_IN', 'ta', 'tamil'],
      en: ['en-IN', 'en_IN', 'en-GB', 'en-US', 'en'],
      hi: ['hi-IN', 'hi_IN', 'hi', 'hindi'],
      te: ['te-IN', 'te_IN', 'te', 'telugu']
    };

    const targetPrefixes = langMap[lang] || ['en'];

    // Find exact match first
    let found = voices.find((v) =>
      targetPrefixes.some((prefix) => v.lang.toLowerCase().replace('_', '-').startsWith(prefix.toLowerCase()))
    );

    // If not found by lang tag, search in voice name
    if (!found) {
      found = voices.find((v) =>
        targetPrefixes.some((prefix) => v.name.toLowerCase().includes(prefix.toLowerCase()))
      );
    }

    if (found) {
      this.selectedVoice = found;
    }
  }
}

export const voiceService = new VoiceService();
