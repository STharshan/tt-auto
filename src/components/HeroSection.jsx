
import { CONTACT } from "../constants/contact";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-6 md:px-6 lg:px-6 xl:px-6 pt-44 pb-24 sm:py-28 lg:py-32">
        <div className="flex flex-col items-center lg:items-start gap-10 text-center lg:text-left">
          {/* Left Content */}
          <div className="max-w-2xl space-y-6 mx-auto lg:mx-0 lg:pl-20">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="block">Built On Skill.</span>
              <span className="block">Backed By</span>
              <span className="block">Experience</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-lg uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/80 font-medium">
              MOT & Service Station
            </p>

            {/* Buttons */}
            <div className="group flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-0">
              <a href={CONTACT.phoneHref}>
                <button className="border border-[#861918] rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-[15px] font-medium transition-all duration-300 group-hover:bg-[#861918]">
                  {CONTACT.phoneDisplay}
                </button>
              </a>

              <button className="w-10 sm:w-12 h-10 sm:h-12 border border-[#861918] rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:bg-[#861918] relative overflow-hidden sm:-ml-px">
                <img
                  src="/icon.svg"
                  alt="arrow"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                />
              </button>
            </div>

            <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-center lg:justify-start gap-5 sm:gap-12 lg:gap-16">
              <div className="rounded-2xl px-4 py-3">
                <img
                  src="/driver-white.png"
                  alt="DVSA logo"
                  className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto pointer-events-none select-none opacity-95"
                />
              </div>
              <div className="rounded-2xl px-4 py-3 lg:ml-10">
                <img
                  src="/dvla.jpg"
                  alt="DVLA logo"
                  className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto pointer-events-none select-none opacity-95 [clip-path:polygon(50%_0%,100%_100%,0%_100%)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
