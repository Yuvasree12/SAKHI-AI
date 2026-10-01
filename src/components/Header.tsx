import React from 'react';
import { Volume2, VolumeX, PhoneCall, HelpCircle, Sparkles } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/languages';

interface HeaderProps {
  language: LanguageCode;
  voiceGuidanceEnabled: boolean;
  onToggleVoiceGuidance: () => void;
  onPlayWelcomeInstructions: () => void;
  isSpeaking: boolean;
  onStopSpeaking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  voiceGuidanceEnabled,
  onToggleVoiceGuidance,
  onPlayWelcomeInstructions,
  isSpeaking,
  onStopSpeaking,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <header className="bg-gradient-to-r from-rose-900 via-rose-800 to-amber-900 text-white shadow-lg sticky top-0 z-40">
      {/* Top Banner / Reassurance bar */}
      <div className="bg-rose-950/80 px-4 py-1.5 text-xs text-rose-200 border-b border-rose-800/40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>100% Free Government Assistance • Zero Technical Skills Required</span>
          </div>
          <a
            href="tel:181"
            className="flex items-center gap-1 text-amber-200 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            title="Free 24x7 Women Helpline"
          >
            <PhoneCall className="w-3 h-3 text-amber-300" />
            <span>{t.helpline}</span>
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Logo & Titles */}
          <div className="flex items-start gap-3">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-300 to-white p-0.5 shadow-md flex-shrink-0">
              <div className="w-full h-full bg-rose-900 rounded-[14px] flex items-center justify-center text-2xl">
                🌸
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
                  {t.appName}
                  <span className="text-xs font-semibold px-2 py-0.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full uppercase tracking-wider">
                    Voice AI
                  </span>
                </h1>
              </div>
              <p className="text-sm sm:text-base font-semibold text-rose-100">
                {t.appTitle}
              </p>
              <p className="text-xs sm:text-sm text-amber-200/90 font-medium italic mt-0.5">
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* Quick Audio Controls & Voice Help in Header */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={onPlayWelcomeInstructions}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-white/20 active:bg-white/30 text-rose-100 rounded-xl text-xs sm:text-sm font-semibold backdrop-blur-sm transition-all border border-white/15 shadow-sm"
              title="Listen to instructions in your language"
            >
              <HelpCircle className="w-4 h-4 text-amber-300" />
              <span>{t.playInstructions}</span>
            </button>

            {isSpeaking ? (
              <button
                onClick={onStopSpeaking}
                className="flex items-center gap-1.5 px-3 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all animate-pulse"
              >
                <VolumeX className="w-4 h-4" />
                <span>{t.stopVoice}</span>
              </button>
            ) : (
              <button
                onClick={onToggleVoiceGuidance}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                  voiceGuidanceEnabled
                    ? 'bg-rose-600/60 text-white border-rose-400/50 shadow-inner'
                    : 'bg-black/20 text-rose-200 border-white/10 hover:bg-black/30'
                }`}
                title="Toggle automatic voice speech"
              >
                <Volume2 className="w-4 h-4 text-amber-300" />
                <span>{voiceGuidanceEnabled ? t.voiceGuidanceOn : t.voiceGuidanceOff}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
