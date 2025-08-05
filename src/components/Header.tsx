"use client";

import { useState } from "react";
import { Menu, X, Smartphone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SubTracker</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              Benefits
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <button
              onClick={() => scrollToSection("features")}
              className="block px-3 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200 w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block px-3 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200 w-full text-left"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="block px-3 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200 w-full text-left"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block px-3 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200 w-full text-left"
            >
              Testimonials
            </button>
            <div className="pt-4 pb-2">
              <button className="w-full px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
