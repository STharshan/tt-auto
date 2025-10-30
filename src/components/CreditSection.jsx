import React from "react";

export default function CreditSection() {
  return (
    <section className="w-full bg-gradient-to-br from-black via-[#0b0b0b] to-[#1a1a1a] py-16 px-6 md:px-12 lg:px-20 text-white">
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
            We help you{" "}
            <span className="text-[#861918] font-bold">get credit.</span>
          </h2>

          <p className="text-lg md:text-xl font-medium mb-6 text-gray-100">
            Get pre-approved in minutes and let our finance team get you the
            best rate from our top lenders.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Our extensive experience in the industry has enabled us to cultivate
            valuable relationships that we leverage to your advantage. This
            includes our partnerships with trusted lenders, guaranteeing you the
            most competitive rates available. Apply now through our fully secure
            credit application and kickstart your journey to a newer, more
            luxurious car today.
          </p>
        </div>
      </div>
    </section>
  );
}
