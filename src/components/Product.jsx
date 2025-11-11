"use client";
import React from "react";
import { Check, X, Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function CarCarePackages() {
  // Feature data
  const premiumFeatures = [
    { icon: <Check className="h-5 w-5" />, title: "Oil Filter Replacement:", description: "Replace old oil filter to maintain engine efficiency." },
    { icon: <Check className="h-5 w-5" />, title: "Fluid Top-Ups:", description: "Screen wash, coolant, and essential levels refilled." },
    { icon: <Check className="h-5 w-5" />, title: "Brake Fluid & System Check:", description: "Ensure braking performance and safety." },
    { icon: <Check className="h-5 w-5" />, title: "Steering Fluid Inspection:", description: "Check and maintain correct steering fluid levels." },
    { icon: <Check className="h-5 w-5" />, title: "Full Vehicle Health Check:", description: "Comprehensive inspection for early issue detection." },
    { icon: <Check className="h-5 w-5" />, title: "Engine Bay Clean:", description: "Professional cleaning to keep your engine area spotless." },
    { icon: <Check className="h-5 w-5" />, title: "Tyre Pressure Adjustment:", description: "Correct tyre pressure for optimal safety and fuel economy." },
  ];

  const basicFeatures = [
    { icon: <X className="h-5 w-5" />, title: "Everything Included in the Interim Service:", description: "All checks, top-ups, and cleaning services from the Interim Package." },
    {
      icon: <X className="h-5 w-5" />,
      title: "Comprehensive Filter Replacement:",
      description: (
        <>
          Petrol Vehicles: Engine oil filter, air filter, cabin/pollen filter, and spark plugs replaced. <br />
          Diesel Vehicles: Engine oil filter, air filter, cabin/pollen filter, and fuel filter replaced.
        </>
      )
    },
    { icon: <X className="h-5 w-5" />, title: "Engine Oil Change:", description: "Fresh, high-grade engine oil for smoother performance and longer engine life." },
    { icon: <X className="h-5 w-5" />, title: "Fluid Top-Ups:", description: "All key fluids replenished — brake fluid, steering fluid, screen wash, and coolant — ensuring optimal performance and safety." },
  ];

  // Contact links
  const contactLinks = [
    { icon: <Phone className="h-6 w-6" />, title: "+44 7976 246720", href: "tel:+447976246720" },
    { icon: <Mail className="h-6 w-6" />, title: "info@ttauto.co.uk", href: "mailto:info@ttauto.co.uk" },
    { icon: <MapPin className="h-6 w-6" />, title: "Our Location", href: "https://www.google.com/maps/dir//34+Rowsley+St,+Leicester+LE5+5JJ,+United+Kingdom/@52.6264902,-1.1898754,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48776146e6f563e9:0x205103aac7960b1d!2m2!1d-1.1074655!2d52.6265152?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D" },
  ];

  // Package data
  const packages = [
    {
      type: "INTERIM SERVICE",
      price: "£90",
      features: premiumFeatures,
      btnText: "Book Interim Service",
      iconColor: "text-[#861918]",
      bgColor: "bg-[#861918]/20",
      borderColor: "border-[#861918]/30",
    },
    {
      type: "FULL SERVICE",
      price: "£140",
      features: basicFeatures,
      btnText: "Book Full Service",
      iconColor: "text-red-500",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/30",
    },
  ];

  return (
    <section id="product" className="scroll-m-10 bg-linear-to-b from-black via-[#0b0b0b] to-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-12">
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
              className="border border-white/10 rounded-2xl bg-linear-to-br from-[#151515] to-[#0b0b0b] backdrop-blur-lg p-6 sm:p-8 hover:border-[#861918]/40 hover:shadow-[0_0_25px_rgba(255,77,36,0.25)] transition-all duration-500"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h6 className="text-sm font-semibold text-gray-400">{pkg.type}</h6>
                {/* <div className="h-3 w-3 bg-[#861918] rounded-full"></div> */}
                {/* <h6 className="text-sm font-semibold">CARE PACKAGE</h6> */}
              </div>

              <div className="border border-white/10 rounded-lg p-5 mb-6 flex flex-wrap items-center justify-between bg-[#111]">
                <h6 className="text-sm font-semibold text-gray-400">PRICES STARTING FROM</h6>
                <h3 className="text-4xl sm:text-5xl font-bold text-[#861918]">{pkg.price}</h3>
              </div>

              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border border-white/10 rounded-lg p-3 sm:p-4 items-start hover:bg-white/5 transition-all duration-300"
                  >
                    <div className={`shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-full ${pkg.bgColor} flex items-center justify-center ${pkg.borderColor}`}>
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
