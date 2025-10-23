"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Book an Appointment", desc: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.", img: "https://framerusercontent.com/images/jf5Edk6UnnAYbFaVz0pd2pfgwM.jpg" },
  { number: "02", title: "Choose Your Service", desc: "Select your preferred service type from our comprehensive list — whether it’s a full inspection, oil change, or repair.", img: "https://framerusercontent.com/images/CHxiZJgmHuz1HyaOqLrjkyXfuWk.jpg" },
  { number: "03", title: "Confirm Your Request", desc: "Review your choices and confirm your appointment for a seamless experience.", img: "https://framerusercontent.com/images/6S1PRaCBleEPYp8RUipsLXq38.jpg" },
  { number: "04", title: "Drop Off Your Vehicle", desc: "Arrive at our service centre at your scheduled time and we’ll handle the rest.", img: "https://framerusercontent.com/images/K3xd8CXmyvy3Mw1k6EowpoToeQ.jpg" },
  { number: "05", title: "Service and Repair", desc: "Our expert technicians perform the required services using quality parts and care.", img: "https://framerusercontent.com/images/oLRD2PRr1Q5k9XTG8WIF3IuoeI.jpg" },
  { number: "06", title: "Review and Pick Up", desc: "Inspect your vehicle and drive away with confidence — service complete!", img: "https://framerusercontent.com/images/i8EyTJe1RV5Jo4o4vXJAaKZoqM.jpg" },
];

export default function ServiceProcess() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const [active, setActive] = useState(false);      // section in view
  const [released, setReleased] = useState(false);  // bottom reached -> allow page scroll

  // Lock/unlock body scroll
  const lockBody = () => document.body.classList.add("no-scroll");
  const unlockBody = () => document.body.classList.remove("no-scroll");

  // Helper: is list scrolled to bottom?
  const atBottom = () => {
    const el = listRef.current;
    if (!el) return false;
    return el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
  };

  useEffect(() => {
    // Observe when section is primarily visible
    const sec = sectionRef.current;
    if (!sec) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Section பெரும்பாகம் தெரிஞ்சா active
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActive(true);
        } else {
          setActive(false);
        }
      },
      { threshold: [0, 0.5, 0.75, 1] }
    );
    io.observe(sec);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    let touchStartY = 0;

    const handleWheel = (e) => {
      if (!active || released) return; // allow page scroll
      // Lock page scroll & route wheel delta to inner list
      e.preventDefault();
      lockBody();
      el.scrollTop += e.deltaY;

      if (atBottom()) {
        // once bottom hit while scrolling down, release
        unlockBody();
        setReleased(true);
      }
    };

    const handleTouchStart = (e) => {
      if (!active || released) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!active || released) return;
      const currentY = e.touches[0].clientY;
      const dy = touchStartY - currentY; // swipe up => positive

      // redirect touch scroll into inner list
      e.preventDefault();
      lockBody();
      el.scrollTop += dy;
      touchStartY = currentY;

      if (atBottom()) {
        unlockBody();
        setReleased(true);
      }
    };

    const handleTouchEnd = () => {
      if (!active || released) return;
      // keep locked until bottom reached
      lockBody();
    };

    // Attach globally so even "outside start" scroll gets captured when section appears
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // When section becomes inactive or released, ensure body is free
    if (!active || released) {
      unlockBody();
    } else {
      lockBody();
    }

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      unlockBody();
    };
  }, [active, released]);

  // When user scrolls back up above section, reset released so behavior repeats next time
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Section fully below viewport (user scrolled up) -> reset
      if (rect.top > window.innerHeight || rect.bottom < 0) {
        setReleased(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* body lock style */}
      <style jsx global>{`
        body.no-scroll {
          overflow: hidden;
          touch-action: none;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="bg-gradient-to-br from-black via-[#0b0b0b] to-[#1a1a1a] text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE (Fixed) */}
          <div className="lg:sticky lg:top-28 self-start">
            <motion.h6
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-orange-500 uppercase tracking-widest mb-3 text-sm font-semibold"
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
              className="inline-block bg-[#ff4d24] hover:bg-[#ff3b0f] text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
            >
              Best Services
            </motion.a>
          </div>

          {/* RIGHT SIDE (Inner scroll list) */}
          <div
            ref={listRef}
            className="h-[75vh] overflow-y-scroll pr-2 space-y-6 touch-pan-y"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              overscrollBehavior: "contain", // prevent bounce chaining
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
                {/* Background Image */}
                <motion.img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-56 object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 group-hover:opacity-95 transition-all duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <span className="bg-[#ff4d24] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm mb-3 shadow-md shadow-[#ff4d2420]">
                    {step.number}
                  </span>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-[#ff4d24] transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Hide scrollbar (WebKit) */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </div>
      </section>
    </>
  );
}
