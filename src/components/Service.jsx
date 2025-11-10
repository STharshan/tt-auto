"use client";
import React from "react";
import { Link } from "react-router-dom";

export default function AutomotiveServicesSection() {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden flex flex-col items-center justify-center">
      {/* ===== Background Layers ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top angled red panels */}
        <div className="absolute top-0 left-0 w-[65%] h-[420px] bg-linear-to-tr from-[#1a0000] via-[#0a0000] to-transparent rounded-tr-[140px]" />
        <div className="absolute top-0 right-0 w-[65%] h-[420px] bg-linear-to-tl from-[#1a0000] via-[#0a0000] to-transparent rounded-tl-[140px]" />

        {/* Red glows */}
        <div className="absolute top-[-150px] left-[-150px] w-[800px] h-[800px] bg-linear-to-br from-red-700/25 to-red-900/15 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[700px] h-[700px] bg-linear-to-tr from-red-600/20 to-black/30 blur-[160px] rounded-full" />
      </div>

      {/* ===== Section Header ===== */}
      <div className="relative z-10 text-center max-w-4xl mb-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-2 leading-tight bg-linear-to-r from-red-500 via-red-300 to-red-500 bg-clip-text text-transparent">
          Our Automotive Services
        </h1>
        <h2 className="text-5xl md:text-6xl font-semibold text-gray-400 mb-6">
          Expert Care For Every Vehicle
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-12">
          Explore our range of car services designed to keep your vehicle performing safely and efficiently.
        </p>

        <button className="px-10 py-3 bg-linear-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-medium text-lg rounded-xl border-[3px] border-white/15 shadow-[0_8px_40px_rgba(255,0,0,0.5)] transition-all duration-300">
          View About Landin
        </button>
      </div>

      {/* ===== Cards Section ===== */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full px-6">
        <ServiceCard
          path="/services/mot"
          iconBg="from-red-500 to-orange-600"
          icon="🧾"
          tag="PRO"
          title="MOT Testing"
          subtitle="Road Safety & Compliance"
          body="DVSA-approved inspections ensuring your car meets safety and emission standards."
        />

        <ServiceCard
          path="/services/brake"
          iconBg="from-orange-600 to-red-700"
          icon="🛞"
          tag="NEW"
          title="Brake Services"
          subtitle="Precision Brake Repair"
          body="We inspect, repair, and replace brakes using OEM-grade parts for maximum performance."
        />

        <ServiceCard
          path="/services/time-belts"
          iconBg="from-rose-500 to-red-700"
          icon="⏱"
          tag="NEW"
          title="Timing Belts"
          subtitle="Reliable Performance"
          body="Keep your engine running perfectly with expert timing belt inspection and replacement."
        />

        <ServiceCard
          path="/services/batteries"
          iconBg="from-red-400 to-red-600"
          icon="🔋"
          tag="PRO"
          title="Batteries"
          subtitle="Power & Reliability"
          body="Premium batteries and diagnostic testing to ensure consistent power and smooth starts."
        />

        <ServiceCard
          path="/services/suspension"
          iconBg="from-red-700 to-black"
          icon="🧱"
          tag="HOT"
          title="Suspension"
          subtitle="Ride Comfort & Control"
          body="Smooth handling, improved control, and comfort with expert suspension service."
        />

        <ServiceCard
          path="/services/customisation"
          iconBg="from-red-600 to-rose-800"
          icon="🚗"
          tag="NEW"
          title="Customisation"
          subtitle="Performance & Style"
          body="Transform your car with bespoke design, styling, and performance enhancements."
        />
      </div>
    </section>
  );
}

/* ===== Service Card Component ===== */
function ServiceCard({ path, iconBg, icon, tag, title, subtitle, body }) {
  return (
    <Link
      to={path}
      className="group relative block rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm p-10 shadow-[0_10px_60px_rgba(0,0,0,0.7)] hover:-translate-y-1 transition-transform duration-300"
    >
      {/* Red underline glow */}
      <div className="absolute -top-px left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-red-500 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon & Tag */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#1f1f1f] to-[#0d0d0d] flex items-center justify-center">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-linear-to-br ${iconBg}`}
          >
            {icon}
          </div>
        </div>
        <span className="text-[11px] font-semibold px-3 py-1 rounded-md bg-linear-to-r from-red-600 to-red-800 border border-white/20 shadow-[0_0_10px_rgba(255,0,0,0.5)]">
          {tag}
        </span>
      </div>

      <h3 className="text-2xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-white/60 mb-4">{subtitle}</p>
      <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-4" />
      <p className="text-base text-white/70 leading-relaxed">{body}</p>
    </Link>
  );
}
