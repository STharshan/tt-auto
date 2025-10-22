"use client";
import React from "react";

const steps = [
  {
    number: "01",
    title: "Book an Appointment",
    desc: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
    img: "https://framerusercontent.com/images/jf5Edk6UnnAYbFaVz0pd2pfgwM.jpg",
  },
  {
    number: "02",
    title: "Choose Your Service",
    desc: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
    img: "https://framerusercontent.com/images/CHxiZJgmHuz1HyaOqLrjkyXfuWk.jpg",
  },
  {
    number: "03",
    title: "Confirm Your Request",
    desc: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
    img: "https://framerusercontent.com/images/6S1PRaCBleEPYp8RUipsLXq38.jpg",
  },
  {
    number: "04",
    title: "Drop Off Your Vehicle",
    desc: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
    img: "https://framerusercontent.com/images/K3xd8CXmyvy3Mw1k6EowpoToeQ.jpg",
  },
  {
    number: "05",
    title: "Service and Repair",
    desc: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
    img: "https://framerusercontent.com/images/oLRD2PRr1Q5k9XTG8WIF3IuoeI.jpg",
  },
  {
    number: "06",
    title: "Review and Pick Up",
    desc: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
    img: "https://framerusercontent.com/images/i8EyTJe1RV5Jo4o4vXJAaKZoqM.jpg",
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-gradient-to-br from-black via-[#0b0b0b] to-[#1a1a1a] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div>
          <h6 className="text-orange-500 uppercase tracking-widest mb-3 text-sm font-semibold">
            Your Vehicle’s Service Adventure
          </h6>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Drive Through Our Service Process
          </h2>
          <a
            href="/services"
            className="inline-block bg-[#ff4d24] hover:bg-[#ff3b0f] text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
          >
            Best Services
          </a>
        </div>

        {/* Right Section - Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative overflow-hidden rounded-lg h-70 group border border-white/10"
            >
              {/* Background Image */}
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-56 object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 bg-gradient-to-br from-[#ff4d2420] via-black/60 to-black/80 transition-opacity duration-300 group-hover:bg-black/80"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#ff4d24] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}