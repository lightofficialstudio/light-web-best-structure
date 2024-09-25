"use client"; // Ensure this is a client component

import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // Import i18n configuration

export default function LanguageSwitcher() {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // Store the selected language in localStorage
  };

  return (
    <div>
      <div>{t("welcome")}</div>
      <div>now language is : {i18n.language}</div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("th")}>ไทย</button>
    </div>
  );
}
