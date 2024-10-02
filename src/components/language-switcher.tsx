"use client";

import i18n from "@/i18n";

const onChangeLanguage = (lang: string) => {
  // Change the language
  i18n.changeLanguage(lang);
};
export default function LanguageSwitcher() {
  return (
    <div>
      <button
        onClick={() => onChangeLanguage("en")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        English
      </button>
      <button
        onClick={() => onChangeLanguage("th")}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ml-4"
      >
        ไทย
      </button>
    </div>
  );
}
