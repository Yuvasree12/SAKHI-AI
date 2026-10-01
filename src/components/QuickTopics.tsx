import React from 'react';
import { QUICK_TOPICS } from '../data/popularSchemes';
import { LanguageCode, QuickTopic } from '../types';
import { TRANSLATIONS } from '../data/languages';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface QuickTopicsProps {
  language: LanguageCode;
  onSelectTopic: (topic: QuickTopic) => void;
  isLoading: boolean;
}

export const QuickTopics: React.FC<QuickTopicsProps> = ({
  language,
  onSelectTopic,
  isLoading,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section className="w-full mt-8">
      <div className="flex items-center justify-between mb-3 px-1">
        <div>
          <h2 className="text-lg sm:text-xl font-extrabold text-stone-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>{t.quickQuestionsTitle}</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-medium">
            {t.quickQuestionsSubtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {QUICK_TOPICS.map((topic) => {
          const title = topic.title[language] || topic.title['en'];
          const subtitle = topic.subtitle[language] || topic.subtitle['en'];
          const badge = topic.badge?.[language] || topic.badge?.['en'];

          return (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              disabled={isLoading}
              className="flex items-start gap-3.5 p-4 sm:p-5 bg-white hover:bg-rose-50/70 active:scale-[0.99] rounded-2xl border border-stone-200 hover:border-rose-300 shadow-xs hover:shadow-md transition-all text-left group"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-100/70 group-hover:bg-rose-200/80 flex items-center justify-center text-2xl flex-shrink-0 transition-colors">
                {topic.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base group-hover:text-rose-800 transition-colors line-clamp-1">
                    {title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-rose-600 transition-colors flex-shrink-0" />
                </div>

                <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 font-normal leading-relaxed">
                  {subtitle}
                </p>

                {badge && (
                  <span className="inline-block mt-2 px-2.5 py-0.5 bg-amber-100 text-amber-900 font-extrabold text-[11px] rounded-md border border-amber-300">
                    {badge}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
