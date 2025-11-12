"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCircleDot } from "react-icons/fa6";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  // ✅ Smooth Scroll Function
  const scrollToServices = () => {
    const serviceSection = document.getElementById("service");
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="brake1.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-7xl px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center space-y-8 py-24 sm:py-32"
        data-aos="fade-up"
      >
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Diesel System Specialist
          <br className="hidden sm:block" />
        </h1>

        {/* Subheading + Button Row */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Text */}
          <div
            className="space-y-2 sm:space-y-3 text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <p className="flex items-center gap-2">
              <span className="text-[#861918] text-lg sm:text-xl">
                <FaCircleDot />
              </span>
              The UK’s largest independent
            </p>
            <span className="text-[#861918]">diesel engine specialist</span>
          </div>

          {/* Buttons */}
          <div
            className="group flex items-center shrink-0"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            {/* Primary Button → Scrolls to Services */}
            <button
              onClick={scrollToServices}
              className="border border-[#861918] rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-[15px] font-medium transition-all duration-300 group-hover:bg-[#861918]"
            >
              Know Our Services
            </button>

            {/* Circle Button */}
            <button
              onClick={scrollToServices}
              className="w-10 sm:w-12 h-10 sm:h-12 border border-[#861918] rounded-full transform group-hover:translate-x-1.5 flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:bg-[#861918] relative overflow-hidden ml-2"
            >
              <img
                src="/icon.svg"
                alt="arrow"
                className="w-4 sm:w-5 h-4 sm:h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
