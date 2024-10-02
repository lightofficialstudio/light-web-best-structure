"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState } from "@stores/store";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@components/language-switcher";

export default function Page() {
  const { t } = useTranslation("mock");
  const state = useSelector((state: RootState) => state.mockReducer);
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        {/* Language Switcher */}
        <LanguageSwitcher />
        {session ? (
          <>
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
              {t("welcome")}, {session.user?.name}
            </h1>
            <p className="text-gray-600 mb-4">Email: {session.user?.email}</p>
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
              {t("reduxTest")}, {state.draftValues?.firstName}
            </h1>
            <button
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
              onClick={() => signOut()}
            >
              {t("signOut")}
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
              {t("notSignedIn")}
            </h1>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              onClick={() => signIn("google")}
            >
              {t("signIn")}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
