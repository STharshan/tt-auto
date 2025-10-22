import React from "react";

export default function CreditSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full">
          <img
            src="/image.png"
            alt="Car interior"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Right Text Section */}
        <div className="text-gray-800">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            We help you <span className="text-blue-700 font-bold">get credit.</span>
          </h2>

          <p className="text-lg md:text-xl font-medium mb-6 text-gray-900">
            Get pre-approved in minutes and let our finance team get you the
            best rate from our top lenders.
          </p>

          <p className="text-gray-600 leading-relaxed">
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
