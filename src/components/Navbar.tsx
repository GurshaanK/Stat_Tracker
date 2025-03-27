import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-white shadow-lg flex items-center">
      <h1 className="text-xl font-bold text-gray-800">NBA Stats</h1>
      <div className="border-l border-gray-300 h-6 mx-4"></div>
      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-gray-700 font-medium hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/playersPage"
          className="text-gray-700 font-medium hover:text-blue-500 transition-colors"
        >
          Players
        </Link>
        <Link
          to="/teamsPage"
          className="text-gray-700 font-medium hover:text-blue-500 transition-colors"
        >
          Teams
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
