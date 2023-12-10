import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './locales/index.js';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources, // передаем переводы текстов интерфейса в формате JSON
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, // экранирование уже есть в React, поэтому отключаем
    },
  });

export default i18next;
