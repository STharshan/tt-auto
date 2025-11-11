"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // animate only once
      offset: 100, // trigger offset
    });
  }, []);

  return (
    <section
      id="contact"
      className="scroll-m-10 bg-black text-white py-20 px-6 lg:px-16 font-[Inter]"
    >
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Left Column - Contact Info */}
        <div data-aos="fade-right">
          <h2 className="text-4xl font-bold mb-6 text-[#861918]">Get In Touch</h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <span className="font-semibold text-white">General inquiries:</span>{" "}
              <a href="tel:+447976246720" className="hover:underline text-[#861918]">+44 7976 246720</a>
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a href="mailto:info@ttauto.co.uk" className="hover:underline text-[#861918]">info@ttauto.co.uk</a>
            </li>
            <li>
              <span className="font-semibold text-white">Website:</span>{" "}
              <a
                href="https://www.ttauto.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#861918]"
              >
                www.ttauto.co.uk
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Address:</span>{" "}
              <a
                href="https://www.google.com/maps/dir//34+Rowsley+St,+Leicester+LE5+5JJ,+United+Kingdom/@52.6264902,-1.1898754,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48776146e6f563e9:0x205103aac7960b1d!2m2!1d-1.1074655!2d52.6265152?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#861918]"
              >
               T T Autos Leicester Ltd, 34 Rowsley St, Leicester LE5 5JJ, United Kingdom
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Opening Hours:</span>{" "}
              9:00 AM – 5:00 PM (Mon–Fri)
            </li>
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <form
          className="bg-[#111] p-8 rounded-2xl shadow-lg"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-[#1A1A1A] text-gray-200 border border-gray-700 focus:border-[#861918] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-[#1A1A1A] text-gray-200 border border-gray-700 focus:border-[#861918] outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-[#1A1A1A] text-gray-200 border border-gray-700 focus:border-[#861918] outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#861918] text-black font-semibold py-3 px-6 rounded-md hover:bg-[#070981] transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
