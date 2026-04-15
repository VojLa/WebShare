import { useI18n } from '@/i18n/I18nProvider'

export default function useTranslation() {
  const { lang, setLang, supportedLanguages, t } = useI18n()

  return {
    t,
    language: lang,
    setLanguage: setLang,
    languages: supportedLanguages,
    lang,
    setLang,
    supportedLanguages,
  }
}
