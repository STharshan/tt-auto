

import { FaCircleDot } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/fall.png"
        onError={(e) => (e.currentTarget.style.display = "none")}
      >
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center space-y-8 py-24 sm:py-32">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-xl">
          Built On Skill. Backed By Experience{" "}
          <br className="hidden sm:block" />

        </h1>

        <p className="text-sm sm:text-base md:text-lg uppercase tracking-[0.35em] text-white/80 font-medium">
          MOT & Service Station
        </p>

        {/* Subheading + Button Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-10">

          {/* Buttons */}
          <div className="group flex items-center shrink-0">
            {/* Primary Button */}
            <a href="tel:+441162530770">
              <button className="border border-[#861918] rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-[15px] font-medium transition-all duration-300 group-hover:bg-[#861918]">
                +44 116 253 0770
              </button>
            </a>

            {/* Circle Button */}
            <button className="w-10 sm:w-12 h-10 sm:h-12 border border-[#861918] rounded-full transform  group-hover:translate-x-1.5 flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:bg-[#861918] relative overflow-hidden">
              <img
                src="/icon.svg"
                alt="arrow"
                className="w-4 sm:w-5 h-4 sm:h-5 "
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
