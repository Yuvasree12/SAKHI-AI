import React, { useState } from 'react';
import { Send, Keyboard, CornerDownLeft } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/languages';

interface TextInputFallbackProps {
  language: LanguageCode;
  onSend: (text: string) => void;
  isLoading: boolean;
}

export const TextInputFallback: React.FC<TextInputFallbackProps> = ({
  language,
  onSend,
  isLoading,
}) => {
  const [inputText, setInputText] = useState('');
  const t = TRANSLATIONS[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputText.trim();
    if (!query || isLoading) return;
    onSend(query);
    setInputText('');
  };

  return (
    <div className="w-full bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200 mt-4">
      <div className="flex items-center gap-2 mb-2 text-stone-700">
        <Keyboard className="w-4 h-4 text-stone-500" />
        <span className="text-xs sm:text-sm font-bold text-stone-600 uppercase tracking-wide">
          {t.typeYourQuestion}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t.placeholderInput}
          disabled={isLoading}
          className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-4 py-3.5 text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className={`flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all ${
            !inputText.trim() || isLoading
              ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
              : 'bg-rose-700 hover:bg-rose-800 active:scale-95 text-white shadow-md'
          }`}
        >
          <span>{t.send}</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
