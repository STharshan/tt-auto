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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 py-2 flex justify-between items-center transition-colors duration-500 ${scrolled ? "text-black" : "text-white"
          }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="LogiNord Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-semibold">
          <a href="#home" className="hover:text-[#861918] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#861918] transition">
            About Us
          </a>
          <a href="#services" className="hover:text-[#861918] transition">
            Services
          </a>
          <a href="#fleet" className="hover:text-[#861918] transition">
            Fleet
          </a>
          <a href="#industries" className="hover:text-[#861918] transition">
            Industries
          </a>
          <a href="#contact" className="hover:text-[#861918] transition">
            Contact Us
          </a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center group">
          <button className="border border-[#861918] rounded-full px-6  py-2  text-sm sm:text-base md:text-[15px] font-medium transition-all duration-300 group-hover:bg-[#861918]">
            Get a Quote
          </button>

          {/* Circle Button */}
          <button className="w-10 h-10 border border-[#861918] rounded-full transform  group-hover:translate-x-1.5 flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:bg-[#861918] relative overflow-hidden">
            <img
              src={
                scrolled
                  ? " /black.svg" // black arrow
                  : "/icon.svg" // white arrow
              }
              alt="arrow"
              className="w-4 sm:w-5 h-4 sm:h-5 transition-all duration-300"
            />
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
          className={`md:hidden absolute top-full left-0 w-full px-6 pb-4 space-y-3 backdrop-blur-md transition-all duration-300 ${scrolled ? "bg-white text-black" : "bg-black/80 text-white"
            }`}
        >
          <a href="#home" className="block hover:text-[#861918]">
            Home
          </a>
          <a href="#about" className="block hover:text-[#861918]">
            About Us
          </a>
          <a href="#services" className="block hover:text-[#861918]">
            Services
          </a>
          <a href="#fleet" className="block hover:text-[#861918]">
            Fleet
          </a>
          <a href="#industries" className="block hover:text-[#861918]">
            Industries
          </a>
          <a href="#contact" className="block hover:text-[#861918]">
            Contact Us
          </a>
          <div className="hidden md:flex items-center group">
            <button className="border border-[#861918] rounded-full px-6  py-2  text-sm sm:text-base md:text-[15px] font-medium transition-all duration-300 group-hover:bg-[#861918]">
              Get a Quote
            </button>

            {/* Circle Button */}
            <button className="w-10 h-10 border border-[#861918] rounded-full transform  group-hover:translate-x-1.5 flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:bg-[#861918] relative overflow-hidden">
              <img
                src="https://framerusercontent.com/images/3NSshCmK7vz6VHCPAq6twmsYQ.svg"
                alt="arrow"
                className="w-4 sm:w-5 h-4 sm:h-5 "
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
