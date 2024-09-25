import LanguageSwitcher from "@components/language_switcher";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Select Language</h1>
      <div className="flex space-x-4">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
