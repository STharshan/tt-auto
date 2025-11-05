"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Review() {

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      gsap.set(cards, {
        yPercent: -50,
        opacity: 0,
      });
      gsap.set(cards[0], {
        yPercent: 0,
        opacity: 1,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=" + cards.length * 500,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });
      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(cards[i], { opacity: 1, yPercent: 0, duration: 1 }, i);
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      title: "Recommended",
      text: "Very happy with the app. Does what it says, simple payments and transactions. Quick account verification and withdrawals. 24/7 support available.",
      name: "Vamsi K.",
      initials: "VK",
      bg: "#BCFFBB",
    },
    {
      title: "Awesome app very user friendly",
      text: "Would highly recommend Jeton to my friends.",
      name: "Leonie A.",
      initials: "LA",
      bg: "#BBD2FF",
    },
    {
      title: "The best payment solution for German customers",
      text: "I've been a Jeton user for a few years! The support was always great and I'm always able to make my payments to the websites I want with no problem.",
      name: "Karl R.",
      initials: "KR",
      bg: "#F5FFBB",
    },
    {
      title: "Easy and Fast",
      text: "Great app for fast and easy transfers. I have been using Jeton for a while now without any problem. I have recently started using their Jeton Card for my everyday purchases too.",
      name: "Dennis P.",
      initials: "DP",
      bg: "#FFBBF0",
    },
  ];
  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-black text-white overflow-hidden"
    >
      {/* :white_check_mark: Jeton Background */}
      <div className="absolute inset-0">
        <img
          src="https://www.jeton.com/_ipx/f_webp&q_80&w_3400/cms/b7c674ecd0ee69b2eca20443cac6272c550ed396-4000x2667.jpg"
          alt="Hear it from our clients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Heading */}
      <div className="relative z-10 text-center pt-32 pb-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#861918]">
          Hear it from our clients
        </h2>
      </div>
      {/* Stack Container */}
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center justify-start h-[80vh]">
        {testimonials.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]
                       p-6 md:p-8 mb-6 opacity-0 transform translate-y-[-50%]"
          >
            <p className="text-lg md:text-xl font-semibold mb-3">{item.title}</p>
            <p className="text-sm md:text-base opacity-80 mb-4">{item.text}</p>
            <div className="flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
                style={{ backgroundColor: item.bg, color: "#360802" }}
              >
                {item.initials}
              </span>
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}