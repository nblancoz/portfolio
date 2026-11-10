import { defaultLang, locales, type SupportedLanguage, type LocaleSchema } from './ui';
import type { NestedKeyOf } from './types';

export type { SupportedLanguage } from './ui';
export type TranslationKey = NestedKeyOf<LocaleSchema>;

export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') {
    return 'es';
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
  return `/es${cleanPath === '/' ? '' : cleanPath}`;
}

export function getSwitchLocalePath(currentUrl: URL, targetLang: SupportedLanguage): string {
  const pathname = currentUrl.pathname;
  const isCurrentlyEs = pathname === '/es' || pathname.startsWith('/es/');

  let basePath = pathname;
  if (isCurrentlyEs) {
    basePath = pathname.replace(/^\/es(?:\/|$)/, '/');
  }

  if (!basePath.startsWith('/')) {
    basePath = `/${basePath}`;
  }

  if (targetLang === defaultLang) {
    return basePath;
  }

  return `/es${basePath === '/' ? '' : basePath}`;
}
