import es from '../locales/es.json';
import en from '../locales/en.json';
import type { StrictlyMatched } from './types';

export type LocaleSchema = typeof es;

const _enMatchesEs: StrictlyMatched<typeof es, typeof en> = en;

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type SupportedLanguage = keyof typeof languages;
export const defaultLang: SupportedLanguage = 'es';

export const locales: Record<SupportedLanguage, LocaleSchema> = {
  es,
  en: _enMatchesEs as LocaleSchema,
};
