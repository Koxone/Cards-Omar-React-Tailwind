// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locals/es.json";
import en from "./locals/en.json";

const currentLanguage = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: currentLanguage, 
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
