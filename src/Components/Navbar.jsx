import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 text-white no-underline">
              <span className="font-bold text-xl">CryptoSim</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 text-white no-underline">Home</Link>
              <a href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 text-white no-underline">About</a> 
              <a href="/login" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 text-white no-underline">Login</a>
              <a href="/signup" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 text-white no-underline">SignUp</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 text-white no-underline">Home</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 text-white no-underline">About</a>
            <a href="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 text-white no-underline">Login</a>
            <a href="/signup" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 text-white no-underline">SignUp</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

