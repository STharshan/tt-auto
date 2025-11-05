"use client";
import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Repair Service",
    subtitle:
      "If your customer is cost-conscious and prepared to wait a few days, then repair might be a preferred option.",
    image:
      "https://framerusercontent.com/images/jf5Edk6UnnAYbFaVz0pd2pfgwM.jpg",
  },
  {
    id: 2,
    title: "Distribution",
    subtitle:
      "Our full range not only includes products relevant to our specialism – diesel fuel injection.",
    image:
      "https://framerusercontent.com/images/CHxiZJgmHuz1HyaOqLrjkyXfuWk.jpg",
  },
  {
    id: 3,
    title: "Remanufacturing Service",
    subtitle:
      "Remanufacturing is accurately defined as bringing product back to its original specification.",
    image:
      "https://framerusercontent.com/images/6S1PRaCBleEPYp8RUipsLXq38.jpg",
  },
  {
    id: 4,
    title: "Diesel Vehicle Workshop",
    subtitle:
      "Endorsed by all major OE brands including Bosch, Delphi, Denso, Stanadyne, VDO and Zexel.",
    image:
      "https://framerusercontent.com/images/K3xd8CXmyvy3Mw1k6EowpoToeQ.jpg",
  },
];

const ServiceSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="service"
      className="relative bg-gradient-to-br from-black via-[#0b0b0b] to-[#1a1a1a] py-20 px-6 md:px-12 font-['Poppins'] text-white border-t border-[#1A1A1A]"
    >
      {/* 🔥 Red glow accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#861918]/15 to-transparent blur-[180px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#ff4d24]/10 to-transparent blur-[160px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Layout wrapper */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
        {/* Left Text */}
        <div className="self-start lg:sticky lg:top-24 lg:h-fit">
          <h6 className="text-[#861918] uppercase tracking-widest mb-3 text-sm font-semibold">
            Your Vehicle’s Service Adventure
          </h6>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight uppercase text-white">
            Drive Through{" "}
            <span className="bg-gradient-to-r from-[#ff4d24] to-[#861918] bg-clip-text text-transparent">
              Our Service Process
            </span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-md leading-relaxed text-sm sm:text-base">
            Discover our comprehensive vehicle services — from expert diesel
            repairs to remanufacturing and diagnostics. Every process is handled
            with precision, quality, and genuine passion for automotive
            excellence.
          </p>

          <button className="mt-8 bg-[#861918] text-white font-semibold px-6 py-3 rounded-md uppercase hover:bg-[#ff4d24] hover:shadow-[0_0_25px_rgba(255,77,36,0.4)] transition-all text-sm sm:text-base">
            Best Services
          </button>
        </div>

        {/* Right Services List */}
        <div className="flex flex-col gap-8 relative">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center transition-all duration-300 ease-out border-b border-[#2a2a2a] pb-6"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Text */}
              <div>
                <h3
                  className={`text-[20px] sm:text-[22px] md:text-[24px] font-semibold uppercase tracking-wide transition-colors duration-300 ${
                    hoveredId === service.id
                      ? "text-[#ff4d24]"
                      : "text-[#EAEAEA]"
                  }`}
                >
                  <span
                    className={`mr-2 sm:mr-3 text-[22px] sm:text-[26px] md:text-[28px] font-bold transition-colors ${
                      hoveredId === service.id
                        ? "text-[#861918]"
                        : "text-[#555555]"
                    }`}
                  >
                    {service.id.toString().padStart(2, "0")}
                  </span>
                  {service.title}
                </h3>
                <p
                  className={`uppercase font-semibold text-xs sm:text-sm mt-1 transition-colors ${
                    hoveredId === service.id
                      ? "text-[#ff4d24]"
                      : "text-[#888888]"
                  }`}
                >
                  {service.subtitle}
                </p>
              </div>

              {/* Image */}
              <div className="w-full sm:w-[280px] h-40 sm:h-[170px] mt-4 sm:mt-0 relative overflow-hidden rounded-md [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)] shadow-[0_0_15px_rgba(255,77,36,0.1)]">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`absolute w-full h-full object-cover transition-all duration-500 ease-out transform ${
                    hoveredId === service.id
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-5 scale-95"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-transparent via-[#ff4d24]/10 to-transparent transition-opacity duration-500 ${
                    hoveredId === service.id ? "opacity-40" : "opacity-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
