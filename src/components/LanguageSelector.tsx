import React from 'react';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import { LanguageCode } from '../types';
import { Check, Languages } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onSelectLanguage,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-stone-700">
          <Languages className="w-5 h-5 text-rose-600" />
          <span className="text-sm font-bold tracking-wide uppercase text-stone-600">
            Select Language • மொழியைத் தேர்ந்தெடுக்கவும் • भाषा चुनें • భాషను ఎంచుకోండి
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        {SUPPORTED_LANGUAGES.map((lang) => {
          const isSelected = currentLanguage === lang.code;

          return (
            <button
              key={lang.code}
              onClick={() => onSelectLanguage(lang.code)}
              className={`relative flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-xl text-center transition-all duration-200 ${
                isSelected
                  ? 'bg-rose-700 text-white shadow-md ring-4 ring-rose-200 scale-[1.02]'
                  : 'bg-stone-50 hover:bg-rose-50 text-stone-800 border border-stone-200 hover:border-rose-200'
              }`}
              aria-pressed={isSelected}
            >
              {isSelected && (
                <span className="absolute top-2 right-2 w-4 h-4 bg-white text-rose-700 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}

              {/* Native Script - Large for recognition */}
              <span className={`text-xl sm:text-2xl font-bold mb-0.5 ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                {lang.label}
              </span>

              {/* English Label for reference */}
              <span className={`text-xs font-semibold ${isSelected ? 'text-rose-100' : 'text-stone-500'}`}>
                {lang.englishLabel}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
