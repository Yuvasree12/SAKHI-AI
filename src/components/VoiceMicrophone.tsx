import React from 'react';
import { Mic, Square, Loader2, Volume2, AlertCircle } from 'lucide-react';
import { LanguageCode, VoiceStatus } from '../types';
import { TRANSLATIONS } from '../data/languages';

interface VoiceMicrophoneProps {
  language: LanguageCode;
  status: VoiceStatus;
  interimTranscript: string;
  errorMessage: string | null;
  onStartListening: () => void;
  onStopListening: () => void;
  isUnsupported: boolean;
}

export const VoiceMicrophone: React.FC<VoiceMicrophoneProps> = ({
  language,
  status,
  interimTranscript,
  errorMessage,
  onStartListening,
  onStopListening,
  isUnsupported,
}) => {
  const t = TRANSLATIONS[language];

  const isListening = status === 'listening' || status === 'requesting_permission';
  const isProcessing = status === 'processing';
  const isSpeaking = status === 'speaking';

  // Status message rendering
  const renderStatusBadge = () => {
    if (status === 'requesting_permission') {
      return (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 font-bold text-sm sm:text-base border border-amber-300">
          <Loader2 className="w-4 h-4 animate-spin text-amber-700" />
          <span>Microphone Permission Requested...</span>
        </span>
      );
    }
    if (isListening) {
      return (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-900 font-bold text-sm sm:text-base border border-rose-300 animate-pulse">
          <span className="w-3 h-3 rounded-full bg-rose-600 animate-ping" />
          <span>{t.listening}</span>
        </span>
      );
    }
    if (isProcessing) {
      return (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 font-bold text-sm sm:text-base border border-blue-300">
          <Loader2 className="w-4 h-4 animate-spin text-blue-700" />
          <span>{t.processing}</span>
        </span>
      );
    }
    if (isSpeaking) {
      return (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-bold text-sm sm:text-base border border-emerald-300">
          <Volume2 className="w-4 h-4 text-emerald-700 animate-bounce" />
          <span>{t.answerReady}</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-700 font-semibold text-sm sm:text-base border border-stone-200">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        <span>{t.ready}</span>
      </span>
    );
  };

  return (
    <div className="w-full bg-gradient-to-b from-white via-rose-50/40 to-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100 flex flex-col items-center text-center">
      {/* Status Pill */}
      <div className="mb-6">{renderStatusBadge()}</div>

      {/* Main Microphone Button */}
      <div className="relative my-2">
        {/* Pulsing ring waves when listening */}
        {isListening && (
          <>
            <div className="absolute -inset-4 rounded-full bg-rose-400/30 animate-ping pointer-events-none" />
            <div className="absolute -inset-8 rounded-full bg-rose-300/20 animate-pulse pointer-events-none" />
          </>
        )}

        {isListening ? (
          <button
            onClick={onStopListening}
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-rose-700 to-red-600 text-white flex flex-col items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-150 border-4 border-white ring-8 ring-rose-200"
            aria-label={t.stopListening}
          >
            <Square className="w-10 h-10 fill-white text-white mb-1" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase">
              {t.stopListening}
            </span>
          </button>
        ) : (
          <button
            onClick={onStartListening}
            disabled={isProcessing || isUnsupported}
            className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center shadow-xl transition-all duration-200 border-4 border-white ${
              isProcessing
                ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                : 'bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 text-white hover:scale-105 active:scale-95 ring-8 ring-rose-100/80 shadow-rose-900/20'
            }`}
            aria-label={t.tapToSpeak}
          >
            {isProcessing ? (
              <Loader2 className="w-12 h-12 animate-spin text-white" />
            ) : (
              <>
                <Mic className="w-12 h-12 text-white mb-1" />
                <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase px-2 text-center leading-tight">
                  {t.tapToSpeak}
                </span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Primary Instruction Label */}
      <h2 className="text-lg sm:text-xl font-bold text-stone-800 mt-5">
        {isListening ? t.listening : t.askInOwnLanguage}
      </h2>

      {/* Interim / Recognized Speech Box */}
      {interimTranscript && (
        <div className="mt-4 w-full max-w-lg bg-rose-50/80 border border-rose-200 rounded-2xl p-4 text-stone-900 shadow-inner">
          <p className="text-xs uppercase font-bold text-rose-700 tracking-wider mb-1">
            {isListening ? 'Recognized Speech (கேட்கப்பட்ட வார்த்தைகள்):' : 'Your Question:'}
          </p>
          <p className="text-base sm:text-lg font-medium text-stone-900 italic">
            "{interimTranscript}"
          </p>
        </div>
      )}

      {/* Error Message Box */}
      {errorMessage && (
        <div className="mt-4 w-full max-w-md bg-amber-50 border border-amber-300 rounded-2xl p-4 flex items-start gap-3 text-left">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-900">{errorMessage}</p>
            <p className="text-xs text-amber-700 mt-1">
              You can also use the text input below to type your question.
            </p>
          </div>
        </div>
      )}

      {/* Unsupported Speech Recognition Warning */}
      {isUnsupported && (
        <div className="mt-4 w-full max-w-md bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
          {t.errorUnsupported}
        </div>
      )}
    </div>
  );
};
