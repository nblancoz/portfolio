import { defaultLang, locales, type SupportedLanguage, type LocaleSchema } from './ui';
import type { NestedKeyOf } from './types';

export type { SupportedLanguage } from './ui';
export type TranslationKey = NestedKeyOf<LocaleSchema>;

export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') {
    return 'en';
  }
  return defaultLang;
}

export function useTranslations(lang: SupportedLanguage) {
  const locale = locales[lang] || locales[defaultLang];

  return function translate(key: TranslationKey): string {
    const keys = key.split('.');
    let value: unknown = locale;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to default language (es)
        let fallbackValue: unknown = locales[defaultLang];
        for (const fk of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
            fallbackValue = (fallbackValue as Record<string, unknown>)[fk];
          } else {
            return key;
          }
        }
        return typeof fallbackValue === 'string' ? fallbackValue : key;
      }
    }

    return typeof value === 'string' ? value : key;
  };
}

export function getLocalizedPath(path: string, lang: SupportedLanguage): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) {
    return cleanPath;
  }
  return `/en${cleanPath === '/' ? '' : cleanPath}`;
}

export function getSwitchLocalePath(currentUrl: URL, targetLang: SupportedLanguage): string {
  const pathname = currentUrl.pathname;
  const isCurrentlyEn = pathname.startsWith('/en');

  // Strip leading /en if present
  let basePath = pathname;
  if (isCurrentlyEn) {
    basePath = pathname.replace(/^\/en(?:\/|$)/, '/');
  }

  // Ensure clean path
  if (!basePath.startsWith('/')) {
    basePath = `/${basePath}`;
  }

  if (targetLang === defaultLang) {
    return basePath;
  }

  return `/en${basePath === '/' ? '' : basePath}`;
}
