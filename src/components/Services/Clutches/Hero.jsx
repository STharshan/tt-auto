import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white px-6 py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #020617 0%, #040c1a 40%, #003cff 100%)",
      }}
    >
      {/* === Inline Animation Styles === */}
      <style>{`
        @keyframes glowOne {
          0%, 100% {
            transform: translateX(17px) translateY(24px) rotate(-1.7deg) skewY(1.7deg);
            opacity: 0.3;
          }
          50% {
            transform: translateX(-20px) translateY(-15px) rotate(1deg) skewY(-1deg);
            opacity: 0.5;
          }
        }

        @keyframes glowTwo {
          0%, 100% {
            transform: translateX(-3px) translateY(20px) rotate(-0.3deg) skewX(0.15deg) skewY(0.15deg);
            opacity: 0.3;
          }
          50% {
            transform: translateX(25px) translateY(-25px) rotate(1deg) skewX(-0.15deg) skewY(-0.15deg);
            opacity: 0.5;
          }
        }

        .glowOne {
          animation: glowOne 12s ease-in-out infinite alternate;
        }
        .glowTwo {
          animation: glowTwo 15s ease-in-out infinite alternate;
        }
      `}</style>

      {/* === Glowing Backgrounds === */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-[#0055ff]/30 blur-[120px] rounded-full glowOne"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#00b4ff]/20 blur-[100px] rounded-full glowTwo"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        {/* ===== Left Section ===== */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            <span className="block bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Clutches
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Expert clutch repairs and replacements for smooth gear shifting and performance.
          </p>

          {/* Tags */}
          <div className="flex gap-4 pt-4">
            <div className="px-5 py-2 bg-linear-to-t from-[#0055ff33] to-[#9999991a] border border-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-white text-sm font-medium">Clutches</p>
            </div>
            <div className="px-5 py-2 bg-linear-to-t from-[#0055ff33] to-[#9999991a] border border-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-white text-sm font-medium">Service</p>
            </div>
          </div>
        </div>

        {/* ===== Right Card ===== */}
        <div className="relative bg-linear-to-br from-[#001533] via-[#010a1a] to-[#001b3f] rounded-2xl p-10 border border-white/10 shadow-[0_0_80px_-20px_rgba(0,85,255,0.5)] overflow-hidden">
          {/* Background pattern */}
          <img
            src="https://framerusercontent.com/images/QMirkdl4WPEe5bmSFhvVcssWj4.svg"
            alt="Star line glow"
            className="absolute bottom-0 right-0 w-[200px] h-[200px] opacity-15 pointer-events-none select-none"
          />

          {/* Content */}
          <div className="space-y-6 relative z-10">
            <div>
              <p className="text-white/60 text-sm">Services</p>
              <h4 className="text-xl font-semibold">Clutch Repair & Replacement</h4>
            </div>

            <div className="h-px bg-white/10"></div>

            <div>
              <p className="text-white/60 text-sm">Category</p>
              <h4 className="text-xl font-semibold">Transmission Systems</h4>
            </div>

            <div className="h-px bg-white/10"></div>

            <div>
              <p className="text-white/60 text-sm">Client</p>
              <h4 className="text-xl font-semibold">
                Manual Vehicle Owners
              </h4>
            </div>

            {/* === Book Now Button (Calls on click) === */}
            <a
              href="tel:+447976246720"
              className="inline-block mt-6 px-6 py-3 bg-[#0055ff] hover:bg-[#0041cc] rounded-lg font-medium text-white shadow-[0_8px_30px_rgba(0,85,255,0.5)] border-2 border-[#0055ff]/30 transition-all"
            >
               Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
