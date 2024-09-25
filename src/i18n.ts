import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      // Other translations
    },
  },
  th: {
    translation: {
      welcome: "ยินดีต้อนรับ",
      // Other translations
    },
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
