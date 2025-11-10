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
            src="/video1.mp4"
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
            src="/video2.mp4"
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Problem – Site and Service Improvement
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Identifying and addressing areas for improvement is essential to maintaining
          a high-quality user experience. Whether it’s optimizing site speed,
          enhancing service offerings, or refining design elements, continuous
          improvement is key.
        </p>

        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            Site and Service Improvement{" "}
            <span className="bg-blue-600 text-xs text-white font-medium px-2 py-0.5 rounded-md">
              REAL
            </span>
          </h3>
          <p className="text-gray-300 leading-relaxed">
            To stay ahead in a competitive market, the status of consistency across
            and between your websites and services. We dive deep into performance
            analysis, user behavior, and customer feedback to uncover personalized
            areas for advancement. From optimizing load times and refining user
            interfaces to improving service features and functionality.
          </p>
        </div>
      </div>
    </section>
  );
}
