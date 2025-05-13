//src/components/Navbar.jsx

import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-6">
        <div>
          <p className="font-bold text-lg">nullBrains.</p>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/#features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link to="/#blog" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
          <Link to="/#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900">
            <IoIosSearch size={20} />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/signin"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="border-b border-gray-200"></div>
    </div>
  );
};

export default Navbar;
