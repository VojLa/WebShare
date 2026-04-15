import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { translations } from './translations'

const I18nContext = createContext(null)

const DEFAULT_LANG = 'cs'
const STORAGE_KEY = 'lang'
const SUPPORTED_LANGUAGES = [
  { code: 'cs', label: 'Čeština', flag: '🇨🇿' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
]

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo(() => {
    const t = (key) => translations[lang]?.[key] ?? key

    return {
      lang,
      setLang,
      t,
      supportedLanguages: SUPPORTED_LANGUAGES,
    }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
