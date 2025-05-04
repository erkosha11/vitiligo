import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationRu from './locales/ru/translation.json'
import translationEn from './locales/en/translation.json'
import translationKz from './locales/kz/translation.json'

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRu },
    en: { translation: translationEn },
    kz: { translation: translationKz }
  },
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
