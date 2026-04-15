import { useState, useEffect, useCallback } from 'react';
import { base44 } from '@/api/base44Client';

const SUPPORTED_LANGUAGES = [
  { code: 'cs', label: 'Čeština', flag: '🇨🇿' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

let translationsCache = {};
let currentLang = localStorage.getItem('lang') || 'cs';
let listeners = new Set();

function notify() {
  listeners.forEach(fn => fn());
}

async function loadTranslations(langCode) {
  if (translationsCache[langCode]) return;
  const records = await base44.entities.Translation.filter({ language_code: langCode }, '-created_date', 200);
  const map = {};
  records.forEach(r => { map[r.key] = r.value; });
  translationsCache[langCode] = map;
}

export default function useTranslation() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const listener = () => setTick(t => t + 1);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  useEffect(() => {
    loadTranslations(currentLang).then(notify);
  }, []);

  const t = useCallback((key) => {
    const map = translationsCache[currentLang];
    if (!map) return key;
    return map[key] || key;
  }, []);

  const setLanguage = useCallback(async (code) => {
    currentLang = code;
    localStorage.setItem('lang', code);
    await loadTranslations(code);
    notify();
  }, []);

  return {
    t,
    language: currentLang,
    setLanguage,
    languages: SUPPORTED_LANGUAGES,
  };
}