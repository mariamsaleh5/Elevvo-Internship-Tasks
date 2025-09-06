import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-32 sm:w-40 md:w-60 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
        Dashboard
      </h2>

      <nav className="flex flex-col gap-2 sm:gap-3 md:gap-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded text-sm sm:text-base">
          Overview
        </Link>
        <Link to="/projects" className="hover:bg-gray-700 p-2 rounded text-sm sm:text-base">
          Projects
        </Link>
        <Link to="/profile" className="hover:bg-gray-700 p-2 rounded text-sm sm:text-base">
          Profile
        </Link>
      </nav>
    </div>
  );
}
