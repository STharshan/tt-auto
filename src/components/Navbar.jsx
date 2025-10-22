import React, { useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full z-50">
      {/* Navbar content */}
      <div className="relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png" // ✅ place your logo in /public/logo.png
              alt="LogiNord Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <a href="#home" className="hover:text-[#E23B0F] transition">
              Home
            </a>
            <a href="#about" className="hover:text-[#E23B0F] transition">
              About Us
            </a>
            <a href="#services" className="hover:text-[#E23B0F] transition">
              Services
            </a>
            <a href="#fleet" className="hover:text-[#E23B0F] transition">
              Fleet
            </a>
            <a href="#industries" className="hover:text-[#E23B0F] transition">
              Industries
            </a>
            <a href="#contact" className="hover:text-[#E23B0F] transition">
              Contact Us
            </a>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center gap-2 bg-[#E23B0F] hover:bg-[#c22f0c] px-6 py-2 rounded-full font-semibold transition">
              Get a Quote <FiArrowRight />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-black/70 backdrop-blur-md text-white px-6 pb-4 space-y-3">
            <a href="#home" className="block">
              Home
            </a>
            <a href="#about" className="block">
              About Us
            </a>
            <a href="#services" className="block">
              Services
            </a>
            <a href="#fleet" className="block">
              Fleet
            </a>
            <a href="#industries" className="block">
              Industries
            </a>
            <a href="#contact" className="block">
              Contact Us
            </a>
            <button className="mt-3 w-full flex items-center justify-center gap-2 bg-[#E23B0F] hover:bg-[#c22f0c] px-4 py-2 rounded-full font-semibold transition">
              Get a Quote <FiArrowRight />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
