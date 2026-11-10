import en from '../locales/en.json';
import es from '../locales/es.json';
import type { StrictlyMatched } from './types';

export type LocaleSchema = typeof en;

const _esMatchesEn: StrictlyMatched<typeof en, typeof es> = es;

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type SupportedLanguage = keyof typeof languages;
export const defaultLang: SupportedLanguage = 'en';

export const locales: Record<SupportedLanguage, LocaleSchema> = {
  en,
  es: _esMatchesEn as LocaleSchema,
};
