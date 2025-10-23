import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-start text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="vedio.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 md:px-16 lg:px-24 w-full space-y-6">
        {/* Logo */}
        {/* <div className="mb-4 sm:mb-6">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
            LogiNord
          </span>
        </div> */}

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
          Your Freight, delivered <br className="hidden sm:block" />
          with <span className="text-[#E23B0F]">Precision.</span>
        </h1>

        {/* Subheading */}
        <div className="space-y-2 sm:space-y-3 text-gray-200 text-base sm:text-lg md:text-xl">
          <p className="flex items-center gap-2">
            <span className="text-[#E23B0F] text-lg sm:text-xl">●</span>
            Across Europe and the US
          </p>
          <p>Reliable transport. Real-time tracking.</p>
          <p>Tailored logistics for your business.</p>
        </div>

        {/* Button */}
        <div className="pt-6 sm:pt-8 flex justify-start sm:justify-center md:justify-end">
          <button className="group inline-flex items-center gap-2 sm:gap-3 border-2 border-[#E23B0F] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-[#E23B0F] transition-all">
            Know Our Services
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
