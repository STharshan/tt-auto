import React from "react";

export default function CreditSection() {
  return (
    <section id="about" className="scroll-m-10 w-full bg-linear-to-br from-black via-[#0b0b0b] to-[#1a1a1a] py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full">
          <img
            src="/image.png"
            alt="Car interior"
            className="w-full h-auto rounded-lg object-cover shadow-[0_0_25px_rgba(255,77,36,0.2)]"
          />
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            About Us
          </h2>

          <p className="text-lg md:text-xl font-medium mb-6 text-gray-100">
           Driven by passion and powered by generations of expertise.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Based in Leicester, our family-run business spans two generations, combining decades of hands-on experience with modern automotive innovation. From small local garages to high-performance specialists across the Midlands, we’re trusted for our outstanding quality, reliability, and precision.
          </p>
           <p className="text-gray-400 leading-relaxed mt-3">
            Our team is committed to delivering the same level of care and attention — whether it’s a routine service or complex performance work. Over the years, we’ve built our reputation through <strong>honesty, craftsmanship, and long-term partnerships</strong> with customers who value genuine expertise.
          </p>
           <p className="text-gray-400 leading-relaxed mt-3">
           At the heart of everything we do is a simple goal: <strong>to keep every vehicle performing at its best </strong> - no matter the make, model, or challenge.
          </p>
        </div>
      </div>
    </section>
  );
}
