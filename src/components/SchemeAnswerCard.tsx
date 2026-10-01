import React from 'react';
import {
  Volume2,
  VolumeX,
  FileCheck,
  MapPin,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Gift,
  HelpCircle,
  FileText,
  Building2,
  ArrowRight,
  Gauge
} from 'lucide-react';
import { SchemeInfo, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/languages';

interface SchemeAnswerCardProps {
  scheme: SchemeInfo;
  language: LanguageCode;
  isSpeaking: boolean;
  onReplayVoice: () => void;
  onStopVoice: () => void;
  onSpeakSection: (text: string) => void;
  speechRate: number;
  onToggleSpeechRate: () => void;
  onAskQuestion: (query: string) => void;
}

export const SchemeAnswerCard: React.FC<SchemeAnswerCardProps> = ({
  scheme,
  language,
  isSpeaking,
  onReplayVoice,
  onStopVoice,
  onSpeakSection,
  speechRate,
  onToggleSpeechRate,
  onAskQuestion,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <article className="w-full bg-white rounded-3xl p-5 sm:p-8 shadow-md border-2 border-rose-200 mt-6">
      {/* Top Banner with Scheme Title & Voice Controls */}
      <div className="bg-gradient-to-r from-rose-900 to-amber-900 -mx-5 -mt-5 sm:-mx-8 sm:-mt-8 p-5 sm:p-7 rounded-t-3xl text-white shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-amber-400 text-stone-900 font-extrabold text-xs rounded-full uppercase tracking-wider mb-2">
              {t.stepSchemeName}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {scheme.schemeName}
            </h2>
            {scheme.officialName && scheme.officialName !== scheme.schemeName && (
              <p className="text-sm font-medium text-rose-200 mt-0.5">
                {scheme.officialName}
              </p>
            )}
          </div>

          {/* Prominent Voice Player Bar */}
          <div className="flex items-center gap-2 flex-wrap">
            {isSpeaking ? (
              <button
                onClick={onStopVoice}
                className="flex items-center gap-2 px-4 py-2.5 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-bold rounded-2xl shadow-lg transition-all"
                title={t.stopVoice}
              >
                <VolumeX className="w-5 h-5" />
                <span className="text-sm">{t.stopVoice}</span>
              </button>
            ) : (
              <button
                onClick={onReplayVoice}
                className="flex items-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 active:scale-95 text-stone-900 font-bold rounded-2xl shadow-lg transition-all"
                title={t.replayVoice}
              >
                <Volume2 className="w-5 h-5 text-rose-900" />
                <span className="text-sm">{t.replayVoice}</span>
              </button>
            )}

            {/* Speech rate toggle (0.8x slow vs 1.0x normal) */}
            <button
              onClick={onToggleSpeechRate}
              className="flex items-center gap-1.5 px-3 py-2.5 bg-white/15 hover:bg-white/25 active:scale-95 text-white rounded-2xl text-xs sm:text-sm font-semibold border border-white/20 transition-all"
              title="Change speech speed"
            >
              <Gauge className="w-4 h-4 text-amber-300" />
              <span>{speechRate < 0.95 ? t.speedSlow : t.speedNormal}</span>
            </button>
          </div>
        </div>

        {/* Quick summary box inside banner */}
        {scheme.summary && (
          <div className="mt-4 pt-3 border-t border-rose-700/50 flex items-start gap-2 text-rose-100 text-sm sm:text-base leading-relaxed">
            <span className="text-xl">💡</span>
            <p>{scheme.summary}</p>
          </div>
        )}
      </div>

      {/* 8 Structured Steps Content */}
      <div className="mt-6 space-y-5 text-stone-800">
        {/* Step 2: Purpose */}
        <section className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-rose-600" />
              <span>{t.stepPurpose}</span>
            </h3>
            <button
              onClick={() => onSpeakSection(scheme.purpose)}
              className="p-1.5 hover:bg-stone-200 rounded-lg text-stone-600 transition-colors"
              title="Listen to this section"
            >
              <Volume2 className="w-4 h-4 text-rose-700" />
            </button>
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
            {scheme.purpose}
          </p>
        </section>

        {/* Step 3: Benefits & Financial Assistance (Highlighted!) */}
        <section className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-2xl p-4 sm:p-6 border-2 border-emerald-300 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-extrabold text-emerald-950 text-base sm:text-lg flex items-center gap-2">
              <Gift className="w-5 h-5 text-emerald-600" />
              <span>{t.stepBenefits}</span>
            </h3>
            {scheme.financialAmount && (
              <span className="px-3 py-1 bg-emerald-700 text-white font-black text-xs sm:text-sm rounded-full shadow-sm">
                {scheme.financialAmount}
              </span>
            )}
          </div>
          <p className="text-sm sm:text-base text-emerald-900 leading-relaxed font-semibold">
            {scheme.benefits}
          </p>
        </section>

        {/* Step 4: Eligibility */}
        <section className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-600" />
              <span>{t.stepEligibility}</span>
            </h3>
            <button
              onClick={() => onSpeakSection(scheme.eligibility.join('. '))}
              className="p-1.5 hover:bg-stone-200 rounded-lg text-stone-600 transition-colors"
              title="Listen to eligibility"
            >
              <Volume2 className="w-4 h-4 text-rose-700" />
            </button>
          </div>
          <ul className="space-y-2">
            {scheme.eligibility.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-stone-700 font-medium">
                <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Step 5: Required Documents */}
        <section className="bg-amber-50/70 rounded-2xl p-4 sm:p-5 border border-amber-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-amber-700" />
              <span>{t.stepDocuments}</span>
            </h3>
            <button
              onClick={() => onSpeakSection(scheme.documents.join('. '))}
              className="p-1.5 hover:bg-amber-200 rounded-lg text-amber-900 transition-colors"
              title="Listen to required documents"
            >
              <Volume2 className="w-4 h-4 text-amber-900" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {scheme.documents.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-amber-200/80 shadow-xs"
              >
                <FileText className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="text-sm font-semibold text-stone-800">{doc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Step 6: Application Process */}
        <section className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-rose-600" />
              <span>{t.stepProcess}</span>
            </h3>
            <button
              onClick={() => onSpeakSection(scheme.applicationProcess.join('. '))}
              className="p-1.5 hover:bg-stone-200 rounded-lg text-stone-600 transition-colors"
              title="Listen to steps"
            >
              <Volume2 className="w-4 h-4 text-rose-700" />
            </button>
          </div>
          <ol className="space-y-3">
            {scheme.applicationProcess.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-rose-700 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base font-semibold text-stone-800">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Step 7: Where to Apply */}
        <section className="bg-blue-50/70 rounded-2xl p-4 sm:p-5 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-700" />
              <span>{t.stepWhereToApply}</span>
            </h3>
            <button
              onClick={() => onSpeakSection(scheme.whereToApply)}
              className="p-1.5 hover:bg-blue-200 rounded-lg text-blue-800 transition-colors"
              title="Listen to location"
            >
              <Volume2 className="w-4 h-4 text-blue-800" />
            </button>
          </div>
          <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-blue-200 shadow-xs">
            <Building2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base font-bold text-blue-950">
              {scheme.whereToApply}
            </p>
          </div>
        </section>

        {/* Step 8: Important Next Step (Do This First!) */}
        <section className="bg-gradient-to-r from-rose-600 to-amber-600 rounded-2xl p-5 sm:p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-black text-white text-base sm:text-lg flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-200 animate-bounce" />
              <span>{t.stepNextStep}</span>
            </h3>
            <button
              onClick={() => onSpeakSection(scheme.nextStep)}
              className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              title="Listen to next step"
            >
              <Volume2 className="w-5 h-5 text-amber-200" />
            </button>
          </div>
          <p className="text-base sm:text-lg font-bold text-white bg-black/20 p-4 rounded-xl border border-white/20 mt-2 leading-relaxed">
            👉 {scheme.nextStep}
          </p>
        </section>

        {/* Suggested Next Questions */}
        {scheme.suggestedQuestions && scheme.suggestedQuestions.length > 0 && (
          <div className="pt-4 border-t border-stone-200">
            <p className="text-xs uppercase font-extrabold text-stone-500 tracking-wider mb-2.5">
              Related questions you can ask:
            </p>
            <div className="flex flex-wrap gap-2">
              {scheme.suggestedQuestions.map((sq, idx) => (
                <button
                  key={idx}
                  onClick={() => onAskQuestion(sq)}
                  className="px-3.5 py-2 bg-stone-100 hover:bg-rose-50 hover:text-rose-800 text-stone-700 text-xs sm:text-sm font-semibold rounded-xl border border-stone-200 transition-all text-left"
                >
                  💬 {sq}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
