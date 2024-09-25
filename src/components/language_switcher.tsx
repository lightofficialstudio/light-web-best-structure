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
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-2xl font-bold text-gray-800">{t("welcome")}</div>
      <div className="text-lg text-gray-600">
        {t("nowLanguage")} :{" "}
        <span className="font-semibold">{i18n.language}</span>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => changeLanguage("en")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("th")}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
        >
          ไทย
        </button>
      </div>
    </div>
  );
}
