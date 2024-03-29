import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Arabic from './languages/ar.json';
import English from './languages/en.json';
import frensh from './languages/fr.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: English
  },
  ar: {
    translation: Arabic
  },
  fr: {
    translation: frensh
  }
};

i18n.use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    detectio:{
        order: ['localStorage','htmlTag'],
        caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react:{
        useSuspense: false
    }
  });

  export default i18n;