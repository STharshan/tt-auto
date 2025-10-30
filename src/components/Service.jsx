"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ServiceProcess() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // detect mobile device (screen width < 768)
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // no scroll lock on mobile

    const section = sectionRef.current;
    const list = listRef.current;
    if (!section || !list) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= 100 && rect.bottom > 100;
      const bottomReached =
        list.scrollTop + list.clientHeight >= list.scrollHeight - 5;

      if (isVisible && !bottomReached) {
        document.body.classList.add("stop-scroll");
      } else {
        document.body.classList.remove("stop-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    list.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      list.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("stop-scroll");
    };
  }, [isMobile]);

  const steps = [
    {
      number: "01",
      title: "Repair Service",
      desc: "If your customer is cost-conscious and prepared to wait a few days, then repair might be a preferred option over remanufacture, which offers the benefit of quick turnaround and assured long term reliability, although at a higher cost. We repair thousands of components every year, using OE equipment, software, genuine parts and trained engineers, so our work is of the highest quality.",
      img: "https://framerusercontent.com/images/jf5Edk6UnnAYbFaVz0pd2pfgwM.jpg",
    },
    {
      number: "02",
      title: "Distribution",
      desc: "Our full range not only includes products relevant to our specialism – diesel fuel injection – but also a variety of other parts, including braking system components, ancillary items such as fuel filters and electrical supplies, such as starter motors and alternators.",
      img: "https://framerusercontent.com/images/CHxiZJgmHuz1HyaOqLrjkyXfuWk.jpg",
    },
    {
      number: "03",
      title: "Remanufacturing Service",
      desc: "Remanufacturing is accurately defined as bringing product back to its original specification through a combination of genuine spares, approved test equipment, trained personnel and relevant software. It demands a high level of investment in technology and training, but allows us to offer cost effective product that’s as good as new, delivered next day, complete with a comprehensive 12 month warranty.",
      img: "https://framerusercontent.com/images/6S1PRaCBleEPYp8RUipsLXq38.jpg",
    },
    {
      number: "04",
      title: "Diesel Vehicle Workshop",
      desc: "Endorsed by all major OE brands including Bosch, Delphi, Denso, Stanadyne, VDO and Zexel, we have direct access to the leading manufacturers, including their technical updates, official repair programs and spare parts. Our local customers therefore benefit from having a specialist wholesaler nearby, plus a fast and efficient diesel fuel injection workshop service. We never compromise on quality or service.",
      img: "https://framerusercontent.com/images/K3xd8CXmyvy3Mw1k6EowpoToeQ.jpg",
    },
  ];

  return (
    <>
      <style jsx global>{`
        body.stop-scroll {
          overflow: hidden;
          touch-action: none;
        }
      `}</style>

      <section
        id="service"
        ref={sectionRef}
        className="bg-gradient-to-br from-black via-[#0b0b0b] to-[#1a1a1a] text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-28 self-start">
            <motion.h6
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-[#861918] uppercase tracking-widest mb-3 text-sm font-semibold"
            >
              Your Vehicle’s Service Adventure
            </motion.h6>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight"
            >
              Drive Through Our Service Process
            </motion.h2>

            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block bg-[#861918] hover:bg-[#070981] text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
            >
              Best Services
            </motion.a>
          </div>

          {/* RIGHT SIDE */}
          <div
            ref={listRef}
            className={`${
              isMobile
                ? "space-y-6" // normal flow on mobile
                : "h-[75vh] overflow-y-scroll pr-2 space-y-6 touch-pan-y"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              overscrollBehavior: "contain",
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative overflow-hidden rounded-lg h-70 group border border-white/10 hover:border-[#ff4d24]/30 transition-all duration-500 shadow-md hover:shadow-[#ff4d2415]"
              >
                <motion.img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-56 object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 group-hover:opacity-95 transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <span className="bg-[#861918] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm mb-3 shadow-md shadow-[#ff4d2420]">
                    {step.number}
                  </span>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-[#861918] transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Hide scrollbar */}
            {!isMobile && (
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
