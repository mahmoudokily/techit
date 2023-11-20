import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import LanguageDetector from 'i18next-browser-languagedetector';
// import backend from "i18next-http-backend";
// import enTranslation from './locales/en/translations.json'
// import itTranslation from './locales/it/translations.json'
// import esTranslation from './locales/es/translations.json'
// import frTranslation from './locales/fr/translations.json'
// import deTranslation from './locales/de/translations.json'
// import UserService from './../shared/services/UserServices';

i18n
  .use(initReactI18next)
  // .use(backend)
  // .use(LanguageDetector)
  .init(
    {
      fallbackLng: "en",
      supportedLngs: [
        "en",
        "en-US",
        "it",
        "it-IT",
        "fr",
        "fr-FR",
        "es",
        "es-ES",
        "de",
        "de-DE",
      ],
      debug: false,
      interpolation: { escapeValue: false },
      resources: {
        en: {
          translation: {},
        },

        it: {
          translation: {},
        },
      },
      // backend: {
      //    //change me for production
      //    loadPath: "http://localhost:3000/locales/{{lng}}/translations.json",
      // },
    },
    (err, t) => {
      if (err) console.error("i18n Error", err);
    }
  );

export default i18n;
