import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function PartnersCarousel() {
  const logos = [
    "/l1.png",
    "/l2.png",
    "/l3.png",
    "/l4.png",
    "/l5.png",
    "/l6.png",
    "/l7.png",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS on mount
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-black via-[#0b0b0b] to-[#1a1a1a] py-12">
      <div className="text-center mb-6">
        <h2 className="text-white text-xl font-semibold">Associations</h2>
      </div>

      {/* Carousel container */}
      <div className="overflow-hidden max-w-3xl mx-auto relative w-full">
        <div className="flex space-x-12 animate-scroll">
          {/* Render logos with animation */}
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Partner ${i + 1}`}
              className="partner-logo h-15 w-auto object-contain opacity-80 hover:opacity-100 transition"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
