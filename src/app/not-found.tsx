// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">
        Oops! The page you're looking for can't be found.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition"
      >
        Go back to Home
      </a>
    </div>
  );
}
