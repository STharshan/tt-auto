import React from "react";

export default function CreditSection() {
  return (
    <section id="about" className="scroll-m-10 w-full bg-gradient-to-br from-black via-[#0b0b0b] to-[#1a1a1a] py-16 px-6 md:px-12 lg:px-20 text-white">
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
           Catering for both national and local customers from our headquarters in Loughborough, Leicestershire, we can offer unparalleled expertise and range when it comes to diesel systems. This is the reason why we’ve built up a customer base of over 5,000 independent garages, diesel workshops, motor factors, electrical specialists and fleet companies.
          </p>

          <p className="text-gray-400 leading-relaxed">
         

One of just 28 Authorized Bosch Diesel Centers in the UK, we are also backed by a variety of other OE manufacturers including Delphi, Denso, Stanadyne, VDO and Zexel. Working closely with them enables us to stay at the forefront of diesel injection technology.
          </p>
        </div>
      </div>
    </section>
  );
}
