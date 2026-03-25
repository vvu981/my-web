"use client";

import { useEffect, useState } from 'react';
import { availableLanguages, type Language } from '../i18n/portfolio';

const LANG_STORAGE_KEY = 'lang';

function isLanguage(value: string | null): value is Language {
  return Boolean(value) && availableLanguages.includes(value as Language);
}

export function useCurrentLanguage(initialLanguage: Language = availableLanguages[0]) {
  // Keep first render deterministic (SSR and client hydration must match).
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const stored = globalThis.localStorage.getItem(LANG_STORAGE_KEY);
      if (isLanguage(stored)) {
        setLanguage((prev) => (prev === stored ? prev : stored));
      }
    } catch {
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;
    try {
      globalThis.localStorage.setItem(LANG_STORAGE_KEY, language);
    } catch {
    }
  }, [language, isReady]);

  return { language, setLanguage };
}
