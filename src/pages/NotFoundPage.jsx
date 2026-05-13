import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-xl font-semibold text-gray-900 -mt-4">
        Page not found
      </h1>
      <Link
        to="/"
        className="text-sm text-gray-500 hover:text-gray-900 transition-colors py-2.5 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 mt-4"
      >
        Go home
      </Link>
    </div>
  );
}