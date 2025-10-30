"use client";
import React from "react";
import { Check, X, Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function CarCarePackages() {
  // Feature data
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

  // Contact links
  const contactLinks = [
    { icon: <Phone className="h-6 w-6" />, title: "+1-800-123-4567", href: "tel:+1-800-123-4567" },
    { icon: <Mail className="h-6 w-6" />, title: "autofix@example.com", href: "mailto:autofix@example.com" },
    { icon: <MessageCircle className="h-6 w-6" />, title: "Telegram Chat", href: "https://web.telegram.org/a/" },
    { icon: <MapPin className="h-6 w-6" />, title: "Our Location", href: "https://www.google.com/maps" },
  ];

  // Package data
  const packages = [
    {
      type: "PREMIUM",
      price: "$199",
      features: premiumFeatures,
      btnText: "Purchase Premium Package",
      iconColor: "text-[#861918]",
      bgColor: "bg-[#861918]/20",
      borderColor: "border-[#861918]/30",
    },
    {
      type: "BASIC",
      price: "$99",
      features: basicFeatures,
      btnText: "Purchase Basic Package",
      iconColor: "text-red-500",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/30",
    },
  ];

  return (
    <section id="product" className="scroll-m-10 bg-gradient-to-b from-black via-[#0b0b0b] to-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr] gap-12">

        {/* LEFT COLUMN */}
        <div className="space-y-8 lg:sticky lg:top-24 self-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-12 bg-[#861918]"></div>
              <h6 className="text-xs sm:text-sm font-semibold text-[#861918] uppercase tracking-wider">
                Discover Our Complete Car Care
              </h6>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Essential Service Packages
            </h2>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Choose from our professionally designed car care packages to keep your vehicle running at its best.
            </p>
          </div>

          {/* Contact Links */}
          <div className="space-y-3">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-white/10 rounded-xl p-4 bg-[#111]/70 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-10 w-10 text-[#861918]">
                  {link.icon}
                </div>
                <div>
                  <h6 className="text-sm sm:text-base font-semibold group-hover:text-[#861918] transition-colors">
                    {link.title}
                  </h6>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="flex flex-col gap-10 mt-10 lg:mt-0 overflow-visible lg:overflow-y-auto lg:max-h-[80vh] lg:pr-2 hide-scrollbar"
          style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain", scrollbarGutter: "stable" }}
        >
          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              scrollbar-width: none;
            }
          `}</style>

          {/* Packages */}
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-2xl bg-gradient-to-br from-[#151515] to-[#0b0b0b] backdrop-blur-lg p-6 sm:p-8 hover:border-[#861918]/40 hover:shadow-[0_0_25px_rgba(255,77,36,0.25)] transition-all duration-500"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h6 className="text-sm font-semibold text-gray-400">{pkg.type}</h6>
                <div className="h-3 w-3 bg-[#861918] rounded-full"></div>
                <h6 className="text-sm font-semibold">CARE PACKAGE</h6>
              </div>

              <div className="border border-white/10 rounded-lg p-5 mb-6 flex flex-wrap items-center justify-between bg-[#111]">
                <h6 className="text-sm font-semibold text-gray-400">PRICE</h6>
                <h3 className="text-4xl sm:text-5xl font-bold text-[#861918]">{pkg.price}</h3>
              </div>

              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border border-white/10 rounded-lg p-3 sm:p-4 items-start hover:bg-white/5 transition-all duration-300"
                  >
                    <div className={`flex-shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-full ${pkg.bgColor} flex items-center justify-center ${pkg.borderColor}`}>
                      <div className={pkg.iconColor}>{feature.icon}</div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="text-white font-semibold">{feature.title}</span> {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <button className="w-full bg-[#861918] hover:bg-[#070981] text-white font-semibold py-3 rounded-full transition-all border-2 border-[#861918] shadow-lg shadow-[#861918]/40 text-sm sm:text-base">
                {pkg.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
