import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  🏀
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  MyProps
                </span>
                <span className="text-sm text-gray-500 -mt-1">NBA Predictions</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/quem-somos" 
              className="relative px-6 py-4 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 group rounded-xl hover:bg-gray-50"
            >
              Quem Somos
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/como-funciona" 
              className="relative px-6 py-4 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 group rounded-xl hover:bg-gray-50"
            >
              Como Funciona
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="ml-8">
              <Link 
                to="/login" 
                className="relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
              >
                <span className="relative z-10 text-lg">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-4 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white rounded-2xl mt-4 shadow-xl border border-gray-200">
              <Link 
                to="/quem-somos" 
                className="block px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link 
                to="/como-funciona" 
                className="block px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </Link>
              <Link 
                to="/login" 
                className="block px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
