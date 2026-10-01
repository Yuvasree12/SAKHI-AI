import React, { useState, useEffect, useRef } from 'react';
import { LanguageCode, VoiceStatus, SchemeInfo, QuickTopic } from './types';
import { TRANSLATIONS } from './data/languages';
import { voiceService } from './services/voiceService';
import { fetchSchemeAnswer } from './services/apiService';
import { Header } from './components/Header';
import { LanguageSelector } from './components/LanguageSelector';
import { VoiceMicrophone } from './components/VoiceMicrophone';
import { SchemeAnswerCard } from './components/SchemeAnswerCard';
import { QuickTopics } from './components/QuickTopics';
import { TextInputFallback } from './components/TextInputFallback';
import { Volume2, Sparkles, RefreshCw, MessageSquare } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>('ta');
  const [voiceStatus, setVoiceStatus] = useState<VoiceStatus>('idle');
  const [interimTranscript, setInterimTranscript] = useState<string>('');
  const [activeQuery, setActiveQuery] = useState<string>('');
  const [currentScheme, setCurrentScheme] = useState<SchemeInfo | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [voiceGuidanceEnabled, setVoiceGuidanceEnabled] = useState<boolean>(true);
  const [speechRate, setSpeechRate] = useState<number>(0.9);
  const [hasStartedAudio, setHasStartedAudio] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const t = TRANSLATIONS[language];
  const isSpeechSupported = voiceService.isSpeechRecognitionSupported();
  const answerSectionRef = useRef<HTMLDivElement>(null);

  // Set language in voice service whenever changed
  useEffect(() => {
    voiceService.setLanguage(language);
    document.documentElement.lang = language;
  }, [language]);

  // Handle playing startup welcome voice instruction
  const handlePlayWelcomeInstructions = () => {
    setHasStartedAudio(true);
    setIsSpeaking(true);
    setVoiceStatus('speaking');

    // Use native pronounce text for authentic accent
    const welcomeText = t.welcomeVoicePronounce || t.welcomeVoicePrompt;

    voiceService.speak(welcomeText, {
      rate: speechRate,
      onStart: () => {
        setIsSpeaking(true);
        setVoiceStatus('speaking');
      },
      onEnd: () => {
        setIsSpeaking(false);
        setVoiceStatus('idle');
      },
      onError: () => {
        setIsSpeaking(false);
        setVoiceStatus('idle');
      },
    });
  };

  // Language switch handler with voice guidance
  const handleSelectLanguage = (newLang: LanguageCode) => {
    voiceService.stopSpeaking();
    setLanguage(newLang);
    voiceService.setLanguage(newLang);

    if (voiceGuidanceEnabled) {
      setTimeout(() => {
        const guideText = TRANSLATIONS[newLang].welcomeVoicePronounce || TRANSLATIONS[newLang].welcomeVoicePrompt;
        voiceService.speak(guideText, {
          rate: speechRate,
          onStart: () => setIsSpeaking(true),
          onEnd: () => setIsSpeaking(false),
        });
      }, 200);
    }
  };

  // Microphone listening trigger
  const handleStartListening = async () => {
    setErrorMessage(null);
    setInterimTranscript('');
    voiceService.stopSpeaking();
    setIsSpeaking(false);
    setVoiceStatus('requesting_permission');

    const success = await voiceService.startListening({
      onStart: () => {
        setVoiceStatus('listening');
      },
      onInterimResult: (transcript) => {
        setInterimTranscript(transcript);
      },
      onFinalResult: (transcript) => {
        setInterimTranscript(transcript);
        processUserQuestion(transcript);
      },
      onError: (errorType, msg) => {
        setVoiceStatus('error');
        setErrorMessage(msg || 'An error occurred with voice input.');
        if (msg && voiceGuidanceEnabled) {
          voiceService.speak(msg, {
            rate: speechRate,
            onEnd: () => setVoiceStatus('idle'),
          });
        }
      },
      onEnd: () => {
        // Recognition completed
      },
    });

    if (!success) {
      setVoiceStatus('idle');
    }
  };

  const handleStopListening = () => {
    voiceService.stopListening();
    setVoiceStatus('idle');
  };

  // Core function to send question to AI and speak answer
  const processUserQuestion = async (query: string) => {
    if (!query.trim()) return;

    setActiveQuery(query);
    setVoiceStatus('processing');
    setErrorMessage(null);

    // Optional quick feedback cue
    if (voiceGuidanceEnabled) {
      voiceService.speak(t.guideQuestionUnderstood, {
        rate: 1.0,
      });
    }

    try {
      const scheme = await fetchSchemeAnswer(query, language);
      setCurrentScheme(scheme);
      setVoiceStatus('idle');

      // Scroll smoothly to answer card
      setTimeout(() => {
        answerSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);

      // Automatically read the answer aloud in the selected language
      if (voiceGuidanceEnabled && scheme.spokenSummary) {
        setIsSpeaking(true);
        setVoiceStatus('speaking');

        voiceService.speak(scheme.spokenSummary, {
          rate: speechRate,
          onStart: () => {
            setIsSpeaking(true);
            setVoiceStatus('speaking');
          },
          onEnd: () => {
            setIsSpeaking(false);
            setVoiceStatus('idle');
          },
          onError: () => {
            setIsSpeaking(false);
            setVoiceStatus('idle');
          },
        });
      }
    } catch (err: any) {
      console.error('Error processing query:', err);
      setVoiceStatus('idle');
      setErrorMessage(t.errorNotUnderstood);
    }
  };

  // Voice replay handler
  const handleReplayVoice = () => {
    if (!currentScheme) return;
    const textToSpeak = currentScheme.spokenSummary || currentScheme.summary || currentScheme.schemeName;

    setIsSpeaking(true);
    setVoiceStatus('speaking');

    voiceService.speak(textToSpeak, {
      rate: speechRate,
      onStart: () => {
        setIsSpeaking(true);
        setVoiceStatus('speaking');
      },
      onEnd: () => {
        setIsSpeaking(false);
        setVoiceStatus('idle');
      },
      onError: () => {
        setIsSpeaking(false);
        setVoiceStatus('idle');
      },
    });
  };

  const handleStopVoice = () => {
    voiceService.stopSpeaking();
    setIsSpeaking(false);
    setVoiceStatus('idle');
  };

  const handleSpeakSection = (text: string) => {
    setIsSpeaking(true);
    voiceService.speak(text, {
      rate: speechRate,
      onStart: () => setIsSpeaking(true),
      onEnd: () => setIsSpeaking(false),
    });
  };

  const handleToggleSpeechRate = () => {
    const newRate = speechRate < 0.95 ? 1.0 : 0.8;
    setSpeechRate(newRate);
    voiceService.setRate(newRate);
  };

  const handleSelectQuickTopic = (topic: QuickTopic) => {
    const query = topic.query[language] || topic.query['en'];
    setInterimTranscript(query);
    processUserQuestion(query);
  };

  const handleReset = () => {
    voiceService.stopSpeaking();
    setCurrentScheme(null);
    setActiveQuery('');
    setInterimTranscript('');
    setErrorMessage(null);
    setVoiceStatus('idle');
    setIsSpeaking(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] flex flex-col font-sans">
      {/* Accessible Header */}
      <Header
        language={language}
        voiceGuidanceEnabled={voiceGuidanceEnabled}
        onToggleVoiceGuidance={() => setVoiceGuidanceEnabled(!voiceGuidanceEnabled)}
        onPlayWelcomeInstructions={handlePlayWelcomeInstructions}
        isSpeaking={isSpeaking}
        onStopSpeaking={handleStopVoice}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-6 sm:py-8 space-y-6">
        {/* Startup Audio Welcome Banner for first-time users */}
        {!hasStartedAudio && (
          <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 rounded-3xl p-4 sm:p-5 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl flex-shrink-0 animate-bounce">
                📢
              </div>
              <div>
                <h3 className="font-extrabold text-base sm:text-lg">
                  {language === 'ta' && 'குரல் வழி வழிகாட்டலை இயக்கவா?'}
                  {language === 'en' && 'Listen to Voice Instructions'}
                  {language === 'hi' && 'आवाज़ से निर्देश सुनना चाहते हैं?'}
                  {language === 'te' && 'వాయిస్ సూచనలు వినాలనుకుంటున్నారా?'}
                </h3>
                <p className="text-xs sm:text-sm text-amber-100 font-medium">
                  {t.welcomeVoicePrompt}
                </p>
              </div>
            </div>

            <button
              onClick={handlePlayWelcomeInstructions}
              className="w-full sm:w-auto px-6 py-3 bg-white text-rose-900 hover:bg-amber-50 active:scale-95 font-extrabold text-sm sm:text-base rounded-2xl shadow-lg flex items-center justify-center gap-2 flex-shrink-0 transition-transform"
            >
              <Volume2 className="w-5 h-5 text-rose-700" />
              <span>{t.playInstructions}</span>
            </button>
          </div>
        )}

        {/* 1. Language Selector (Tamil, English, Hindi, Telugu) */}
        <LanguageSelector
          currentLanguage={language}
          onSelectLanguage={handleSelectLanguage}
        />

        {/* 2. Voice Microphone (Primary Voice-First Action) */}
        <VoiceMicrophone
          language={language}
          status={voiceStatus}
          interimTranscript={interimTranscript}
          errorMessage={errorMessage}
          onStartListening={handleStartListening}
          onStopListening={handleStopListening}
          isUnsupported={!isSpeechSupported}
        />

        {/* 3. Text Input Fallback (Below the microphone) */}
        <TextInputFallback
          language={language}
          onSend={processUserQuestion}
          isLoading={voiceStatus === 'processing'}
        />

        {/* 4. Active Question & Answer Section */}
        {currentScheme && (
          <div ref={answerSectionRef} className="pt-2">
            <div className="flex items-center justify-between mb-2 px-1">
              <div className="flex items-center gap-2 text-stone-700">
                <MessageSquare className="w-4 h-4 text-rose-600" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-500">
                  {t.answerReady}
                </span>
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-bold transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{t.clearChat}</span>
              </button>
            </div>

            <SchemeAnswerCard
              scheme={currentScheme}
              language={language}
              isSpeaking={isSpeaking}
              onReplayVoice={handleReplayVoice}
              onStopVoice={handleStopVoice}
              onSpeakSection={handleSpeakSection}
              speechRate={speechRate}
              onToggleSpeechRate={handleToggleSpeechRate}
              onAskQuestion={processUserQuestion}
            />
          </div>
        )}

        {/* 5. Quick Topics for First-Time / Low-Literacy Women */}
        <QuickTopics
          language={language}
          onSelectTopic={handleSelectQuickTopic}
          isLoading={voiceStatus === 'processing'}
        />

        {/* Reassurance Footer info */}
        <footer className="mt-12 pt-8 pb-10 border-t border-stone-200 text-center text-stone-600 text-xs sm:text-sm space-y-2">
          <p className="font-semibold text-stone-800">
            🌸 {t.appName} — {t.appTitle}
          </p>
          <p className="text-stone-500 max-w-xl mx-auto">
            Designed with love for every woman. No prior computer skills or English needed. Powered by Voice AI and official government welfare data.
          </p>
          <p className="text-rose-800 font-bold pt-1">
            Emergency Women Helpline (India): Dial 181 (Toll Free, 24x7)
          </p>
        </footer>
      </main>
    </div>
  );
}
