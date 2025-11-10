"use client";
import React from "react";

export default function SolutionSection() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
      {/* Image Container */}
      <div className="w-full max-w-5xl rounded-2xl border border-gray-700 overflow-hidden mb-10">
        <div className="bg-[#1a1a1a] flex items-center justify-center p-8 md:p-12">
          <img
            src="/logo.png"
            alt="Spray Can"
            className="w-64 sm:w-72 md:w-80 lg:w-96 object-contain"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-4xl text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Solution – Communication and Deployment
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Effective communication and smooth deployment are at the heart of our
          process. We keep you informed every step of the way, ensuring your
          vision is brought to life exactly as you imagined. Our team
          collaborates closely with you to address any questions or concerns.
        </p>

        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            Communication{" "}
            <span className="bg-blue-600 text-xs text-white font-medium px-2 py-0.5 rounded-md">
              REAL
            </span>
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Clear communication and efficient deployment are essential to the
            success of any project. We maintain open lines of communication
            throughout the entire process, ensuring your goals and expectations
            are met. Our team actively listens and collaborates with you to
            refine details and offer guidance. When it’s time to deploy, we
            ensure a smooth transition, handling all technical aspects to
            guarantee a flawless launch.
          </p>
        </div>
      </div>
    </section>
  );
}
