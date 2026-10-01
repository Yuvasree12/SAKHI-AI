export type LanguageCode = 'ta' | 'en' | 'hi' | 'te';

export interface LanguageConfig {
  code: LanguageCode;
  speechCode: string; // e.g. 'ta-IN', 'en-IN', 'hi-IN', 'te-IN'
  label: string; // Native name
  englishLabel: string;
  flag: string;
}

export interface SchemeInfo {
  schemeName: string;
  officialName?: string;
  summary: string;
  purpose: string;
  benefits: string;
  financialAmount?: string;
  eligibility: string[];
  documents: string[];
  applicationProcess: string[];
  whereToApply: string;
  nextStep: string;
  spokenSummary: string;
  departmentOrMinistry?: string;
  tags?: string[];
  suggestedQuestions?: string[];
}

export type VoiceStatus = 'idle' | 'requesting_permission' | 'listening' | 'processing' | 'speaking' | 'error';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  audioText?: string;
  scheme?: SchemeInfo;
  timestamp: number;
}

export interface QuickTopic {
  id: string;
  icon: string;
  title: Record<LanguageCode, string>;
  query: Record<LanguageCode, string>;
  subtitle: Record<LanguageCode, string>;
  badge?: Record<LanguageCode, string>;
}
