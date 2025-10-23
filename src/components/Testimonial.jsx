"use client";
import React from "react";

const testimonials = [
  {
    name: "Jason Stew",
    role: "Toyota Tacoma Owner",
    image: "/avatar1.jpg",
    quote:
      "For numerous years, my family and I have placed our complete trust in John's Auto Repair for the care and repair of our vehicles.",
  },
  {
    name: "John Smith",
    role: "Honda CR-V Owner",
    image: "/avatar2.jpg",
    quote:
      "I've trusted this team for years. They solved an electrical issue no other shop could fix. Always professional, reliable, and friendly — I won't go anywhere else.",
  },
  {
    name: "Emily Rodriguez",
    role: "Porsche Panamera Owner",
    image: "/avatar3.jpg",
    quote:
      "Exceptional service. They replaced my sedan's brakes and now it drives like new — smooth, quiet stops. Great attention to detail and super professional throughout the process.",
  },
  {
    name: "Michael Johnson",
    role: "Ford F-150",
    image: "/avatar4.jpg",
    quote:
      "My truck had engine trouble and they diagnosed it fast. Clear communication, solid repairs, and now it runs like new. I'm definitely sticking with them.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-black via-[#0b0b0b] to-[#1a1a1a] py-20 px-4 md:px-8 lg:px-16 text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm text-orange-500 tracking-widest uppercase">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          What Our Clients Say
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        {/* Left Video */}
        <div className="lg:col-span-2">
          <video
            src="/mechanic.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl shadow-[0_0_20px_rgba(255,77,36,0.2)]"
          />
        </div>

        {/* Right Testimonials */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111]/70 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-md hover:border-[#ff4d24]/40 transition-all duration-500 group"
            >
              <p className="text-gray-300 mb-4 leading-relaxed italic group-hover:text-gray-100 transition-colors">
                “{t.quote}”
              </p>

              <div className="flex items-center mt-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover mr-3 border border-[#ff4d24]/20"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Link */}
      <div className="text-right mt-10">
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff4d24] font-semibold hover:underline tracking-wide"
        >
          View on Google
        </a>
      </div>
    </section>
  );
}
