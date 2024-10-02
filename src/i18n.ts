import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";

// #region : mock-phase
import en from "@locales/en.json";
import th from "@locales/th.json";
// #endregion

const resources = {
  en: {
    mock: en,
  },
  th: {
    mock: th,
  },
};

const lang = Cookies.get("i18nextLng") || "en";

i18n
  .use(initReactI18next) // Bind react-i18next to the instance
  .init({
    resources,
    lng: lang, // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
