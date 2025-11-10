"use client";
import React, { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What do I need to get started?",
      answer:
        "To get started, simply share your project details and goals with us. We'll guide you through the process and provide the tools and support needed to bring your vision to life.",
    },
    {
      question: "What kind of customization is available?",
      answer:
        "We offer extensive customization options including design modifications, feature additions, and complete branding adjustments to match your specific requirements.",
    },
    {
      question: "How easy is it to edit for beginners?",
      answer:
        "Our platform is designed with beginners in mind. We provide intuitive interfaces, step-by-step guides, and comprehensive documentation to make editing straightforward and accessible.",
    },
    {
      question: "Let me know more about moneyback guarantee?",
      answer:
        "We offer a satisfaction guarantee. If you're not completely satisfied with your purchase, you can request a refund within the specified period as outlined in our terms and conditions.",
    },
    {
      question: "Do I need to know how to code?",
      answer:
        "No coding knowledge is required! Our user-friendly interface allows you to create and customize without writing a single line of code. However, if you do know how to code, advanced customization options are available.",
    },
    {
      question: "What will I get after purchasing the template?",
      answer:
        "After purchase, you'll receive immediate access to all template files, comprehensive documentation, lifetime updates, and dedicated customer support to help you get started.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Header */}
          <div className="lg:pr-8">
            <button className="inline-flex items-center gap-2 text-gray-400 text-sm mb-6 hover:text-white transition-colors">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              How We Work?
            </button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Frequently
              <br /> Asked Questions
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Have questions? Our FAQ section has you covered with quick answers
              to the most common inquiries.
            </p>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const contentRef = useRef(null);
              const [height, setHeight] = useState(0);

              useEffect(() => {
                if (openIndex === index && contentRef.current) {
                  setHeight(contentRef.current.scrollHeight);
                } else {
                  setHeight(0);
                }
              }, [openIndex]);

              return (
                <div
                  key={index}
                  className="border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-700"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between duration-300 p-5 sm:p-6 text-left bg-transparent hover:bg-gray-900/30 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-medium pr-4">
                      {faq.question}
                    </span>
                    <div className="shrink-0">
                      {openIndex === index ? (
                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  <div
                    style={{
                      maxHeight: `${height}px`,
                    }}
                    className={`transition-all duration-500 ease-in-out overflow-hidden`}
                  >
                    <div
                      ref={contentRef}
                      className={`px-5 sm:px-6 pb-5 sm:pb-6 pt-0 transition-opacity duration-500 ${
                        openIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
