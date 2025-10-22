import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change after scrolling 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 py-4 flex justify-between items-center transition-colors duration-500 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
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
          <button className="flex items-center gap-2 bg-[#E23B0F] hover:bg-[#c22f0c] px-6 py-2 rounded-full font-semibold text-white transition">
            Get a Quote <FiArrowRight />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className={`${scrolled ? "text-black" : "text-white"} md:hidden`}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full px-6 pb-4 space-y-3 backdrop-blur-md transition-all duration-300 ${
            scrolled ? "bg-white text-black" : "bg-black/80 text-white"
          }`}
        >
          <a href="#home" className="block hover:text-[#E23B0F]">
            Home
          </a>
          <a href="#about" className="block hover:text-[#E23B0F]">
            About Us
          </a>
          <a href="#services" className="block hover:text-[#E23B0F]">
            Services
          </a>
          <a href="#fleet" className="block hover:text-[#E23B0F]">
            Fleet
          </a>
          <a href="#industries" className="block hover:text-[#E23B0F]">
            Industries
          </a>
          <a href="#contact" className="block hover:text-[#E23B0F]">
            Contact Us
          </a>
          <button className="mt-3 w-full flex items-center justify-center gap-2 bg-[#E23B0F] hover:bg-[#c22f0c] px-4 py-2 rounded-full font-semibold text-white transition">
            Get a Quote <FiArrowRight />
          </button>
        </div>
      )}
    </header>
  );
}
