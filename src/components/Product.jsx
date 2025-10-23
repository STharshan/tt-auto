"use client";
import React from "react";
import { Check, X, Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function CarCarePackages() {
  const premiumFeatures = [
    { icon: <Check className="h-5 w-5" />, title: "Engine Diagnostic:", description: "Advanced diagnostics to identify and address potential issues." },
    { icon: <Check className="h-5 w-5" />, title: "Alignment Check:", description: "Ensure wheels are properly aligned for optimal handling." },
    { icon: <Check className="h-5 w-5" />, title: "Air Filter Replacement:", description: "Replace engine air filter for improved performance." },
    { icon: <Check className="h-5 w-5" />, title: "AC System Check:", description: "Inspect and test the air conditioning system for optimal cooling." },
    { icon: <Check className="h-5 w-5" />, title: "Interior Vacuum:", description: "Thorough vacuuming of the interior to keep your car clean and fresh." },
  ];

  const basicFeatures = [
    { icon: <X className="h-5 w-5" />, title: "Oil Change:", description: "Replace old oil with high-quality synthetic oil to ensure your engine runs smoothly." },
    { icon: <X className="h-5 w-5" />, title: "Tire Rotation:", description: "Rotate tires to promote even wear and extend tire life." },
    { icon: <X className="h-5 w-5" />, title: "Brake Inspection:", description: "Comprehensive check of brake pads, rotors, and fluid to ensure safety." },
    { icon: <X className="h-5 w-5" />, title: "Fluid Top-Off:", description: "Refill essential fluids, including windshield washer, brake, and coolant." },
  ];

  const contactLinks = [
    { icon: <Phone className="h-6 w-6" />, title: "+1-800-123-4567", href: "tel:+1-800-123-4567" },
    { icon: <Mail className="h-6 w-6" />, title: "autofix@example.com", href: "mailto:autofix@example.com" },
    { icon: <MessageCircle className="h-6 w-6" />, title: "Telegram Chat", href: "https://web.telegram.org/a/" },
    { icon: <MapPin className="h-6 w-6" />, title: "Our Location", href: "https://www.google.com/maps" },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-[#0b0b0b] to-[#1a1a1a] text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16">
        
        {/* LEFT COLUMN */}
        <div className="lg:sticky lg:top-28 self-start space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-12 bg-orange-500"></div>
              <h6 className="text-xs sm:text-sm font-semibold text-orange-500 uppercase tracking-wider">
                Discover Our Complete Car Care
              </h6>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Essential Service Packages
            </h2>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Keep your car in top condition with our professional care packages. Whether it’s regular maintenance or premium upgrades — we’ve got you covered.
            </p>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-white/10 rounded-xl p-4 bg-[#111]/70 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-10 w-10 text-orange-500">
                  {link.icon}
                </div>
                <div>
                  <h6 className="text-base font-semibold group-hover:text-orange-500 transition-colors">
                    {link.title}
                  </h6>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="max-h-[80vh] overflow-y-auto pr-2 space-y-12"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* PREMIUM PACKAGE */}
          <div className="border border-white/10 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0b0b0b] backdrop-blur-lg p-8 hover:border-orange-500/40 hover:shadow-[0_0_25px_rgba(255,77,36,0.3)] transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <h6 className="text-sm font-semibold text-gray-400">PREMIUM</h6>
              <div className="h-3 w-3 bg-orange-500 rounded-full"></div>
              <h6 className="text-sm font-semibold">CARE PACKAGE</h6>
            </div>

            <div className="border border-white/10 rounded-lg p-5 mb-8 flex items-center justify-between bg-[#111]">
              <h6 className="text-sm font-semibold text-gray-400">PRICE</h6>
              <h3 className="text-5xl font-bold text-orange-500">$199</h3>
            </div>

            <div className="space-y-4 mb-8">
              {premiumFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 border border-white/10 rounded-lg p-4 items-start hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                    <div className="text-orange-500">{feature.icon}</div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold">
                      {feature.title}
                    </span>{" "}
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all border-2 border-orange-500 shadow-lg shadow-orange-500/40">
              Purchase Premium Package
            </button>
          </div>

          {/* BASIC PACKAGE */}
          <div className="border border-white/10 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0b0b0b] backdrop-blur-lg p-8 hover:border-orange-500/40 hover:shadow-[0_0_25px_rgba(255,77,36,0.3)] transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <h6 className="text-sm font-semibold text-gray-400">BASIC</h6>
              <div className="h-3 w-3 bg-orange-500 rounded-full"></div>
              <h6 className="text-sm font-semibold">CARE PACKAGE</h6>
            </div>

            <div className="border border-white/10 rounded-lg p-5 mb-8 flex items-center justify-between bg-[#111]">
              <h6 className="text-sm font-semibold text-gray-400">PRICE</h6>
              <h3 className="text-5xl font-bold text-orange-500">$99</h3>
            </div>

            <div className="space-y-4 mb-8">
              {basicFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 border border-white/10 rounded-lg p-4 items-start hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                    <div className="text-red-500">{feature.icon}</div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold">
                      {feature.title}
                    </span>{" "}
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all border-2 border-orange-500 shadow-lg shadow-orange-500/40">
              Purchase Basic Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
