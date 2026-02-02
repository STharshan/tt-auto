import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const services = [
    { name: "MOT", path: "/services/mot" },
    { name: "Brakes", path: "/services/brake" },
    { name: "Timing Belts", path: "/services/time-belts" },
    { name: "Batteries", path: "/services/batteries" },
    { name: "Suspension", path: "/services/suspension" },
    { name: "Servicing", path: "/services/servicing" },
    { name: "Clutches", path: "/services/clutches" },
    { name: "Diagnostics", path: "/services/diagnostics" },
    { name: "Aircon", path: "/services/aircon" },
    { name: "Customisation", path: "/services/customisation" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black shadow-md" : "bg-transparent"
        }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 py-2 flex justify-between items-center transition-colors duration-500 ${scrolled ? "text-white" : "text-white"
          }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo-white.png"
            alt="TT Automotive Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-semibold relative">
          <HashLink to="/#" className="hover:text-[#861918] transition">
            Home
          </HashLink>
          <HashLink to="/#about" className="hover:text-[#861918] transition">
            About Us
          </HashLink>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 hover:text-[#861918] transition"
            >
              Services
              <FiChevronDown
                size={16}
                className={`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""
                  }`}
              />
            </button>

            {showDropdown && (
              <div className="absolute left-0 top-full mt-2 bg-black border border-gray-700 rounded-md shadow-lg w-48 py-2 z-50">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#861918]/80 transition"
                    onClick={() => setShowDropdown(false)} // close dropdown on click
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

          </div>

          <HashLink to="/#package" className="hover:text-[#861918] transition">
            Package
          </HashLink>
          <HashLink
            to="/#testimonials"
            className="hover:text-[#861918] transition"
          >
            Testimonials
          </HashLink>
          <HashLink to="/review" className="hover:text-[#861918] transition">
            Review
          </HashLink>
          <HashLink to="/#contact" className="hover:text-[#861918] transition">
            Contact Us
          </HashLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a href="#contact">
            <button className="px-7 py-2.5 bg-linear-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-medium text-base rounded-lg border-2 border-white/15 shadow-[0_6px_25px_rgba(255,0,0,0.4)] transition-all duration-300">
              Get In Touch
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX size={26} className="hover:text-[#861918]" />
            ) : (
              <FiMenu size={26} className="hover:text-[#861918]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full px-6 pb-4 space-y-3 backdrop-blur-md transition-all duration-300 ${scrolled ? "bg-black text-white" : "bg-black/80 text-white"
            }`}
        >
          <HashLink to="/#" className="block hover:text-[#861918]">
            Home
          </HashLink>
          <HashLink to="/#about" className="block hover:text-[#861918]">
            About Us
          </HashLink>

          {/* Mobile Services */}
          <div className="border-t border-gray-700 pt-2">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex justify-between w-full items-center text-left hover:text-[#861918]"
            >
              Services
              <FiChevronDown
                size={16}
                className={`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""
                  }`}
              />
            </button>
            {showDropdown && (
              <div className="mt-2 space-y-2 pl-4">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-sm text-gray-300 hover:text-white transition"
                    onClick={() => {
                      setShowDropdown(false); // Close dropdown on click
                      setIsOpen(false);        // Optionally close mobile menu too
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

          </div>

          <HashLink to="/#package" className="block hover:text-[#861918]">
            Package
          </HashLink>
          <HashLink to="/#testimonials" className="block hover:text-[#861918]">
            Testimonials
          </HashLink>
          <HashLink to="/review" className="block hover:text-[#861918]">
            Review
          </HashLink>
          <HashLink to="/#contact" className="block hover:text-[#861918]">
            Contact Us
          </HashLink>

          <div className="pt-4">
            <button className="w-full px-7 py-2.5 bg-linear-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-medium text-base rounded-lg border-2 border-white/15 shadow-[0_6px_25px_rgba(255,0,0,0.4)] transition-all duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
