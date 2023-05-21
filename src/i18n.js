import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json'; // Archivo de traducción en inglés
import esTranslation from './locales/es.json'; // Archivo de traducción en español

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  lng: 'en', // Idioma por defecto
  fallbackLng: 'en', // Idioma de respaldo si no se encuentra la traducción
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
