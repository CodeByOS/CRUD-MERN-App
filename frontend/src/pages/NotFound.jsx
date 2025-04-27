import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-8xl font-extrabold text-red-600 mb-4 animate-bounce">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
