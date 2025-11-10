"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
      {/* Image Container */}
      <div className="w-full max-w-5xl rounded-2xl border border-gray-700 overflow-hidden mb-10">
        <div className="bg-[#1a1a1a] flex items-center justify-center p-8 md:p-12">
          <img
            src="/spray-can-analysis.png"
            alt="Performance Spray Cans"
            className="w-64 sm:w-72 md:w-80 lg:w-96 object-contain"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-4xl text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Analysis – Performance and Responsiveness
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          We prioritize optimal performance and seamless responsiveness across all devices.
          Our approach ensures fast loading times and smooth navigation, providing an
          excellent user experience on both desktop and mobile.
        </p>

        {/* Subsection: Performance */}
        <div className="text-left mb-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            Performance{" "}
            <span className="bg-blue-600 text-xs text-white font-medium px-2 py-0.5 rounded-md">
              REAL
            </span>
          </h3>

          <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-1">
            <li>
              <span className="font-medium">Fast Loading Speed:</span> We optimize images,
              scripts, and resources to ensure quick load times.
            </li>
            <li>
              <span className="font-medium">Optimized Code:</span> Clean and efficient coding
              practices keep our apps lightweight and minimize unnecessary elements.
            </li>
            <li>
              <span className="font-medium">Scalability:</span> Our performance-focused design
              ensures your website scales across bandwidth tiers.
            </li>
          </ul>
        </div>

        {/* Subsection: Responsiveness */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">Responsiveness</h3>
          <p className="text-gray-300 leading-relaxed">
            Responsiveness is key to delivering an exceptional user experience across all
            devices. We ensure that your website adjusts seamlessly to any screen size,
            from mobile phones to desktops, providing a consistent and intuitive interface.
            With fluid layouts and optimized navigation, users will enjoy smooth interactions
            no matter how they access your site.
          </p>
        </div>
      </div>
    </section>
  );
}
