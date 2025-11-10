"use client";
import React from "react";

export default function ProblemSection() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
      {/* Videos Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Video 1 */}
        <div className="rounded-2xl border border-gray-700 overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
          <video
            src="/mot.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Video 2 */}
        <div className="rounded-2xl border border-gray-700 overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
          <video
            src="/mot1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-4xl text-center md:text-left">
       

        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            Mot{" "}
            <span className="bg-blue-600 text-xs text-white font-medium px-2 py-0.5 rounded-md">
              ttauto
            </span>
          </h3>
          <p className="text-gray-300 leading-relaxed">
             Keep your vehicle safe and road-legal with our comprehensive MOT testing in Leicester. Our certified technicians carry out every inspection following DVSA standards, checking brakes, lights, emissions, tyres, and suspension to ensure your car meets all legal requirements. We provide honest, transparent assessments with clear explanations, so you always know what’s needed to pass.

Whether you drive a family car, van, or fleet vehicle, we make the MOT process smooth and stress-free. With our quick turnaround times and free re-test options on repairs, we help keep you on the road safely and affordably. Book your Leicester MOT test with us today for peace of mind and professional care.
          </p>
        </div>
      </div>
    </section>
  );
}
