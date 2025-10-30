// components/ContactSection.jsx
export default function ContactSection() {
  return (
    <section id="contact" className="scroll-m-10 bg-black text-white py-20 px-6 lg:px-16 font-[Inter]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column - Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#861918]">Get In Touch</h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <span className="font-semibold text-white">General inquiries:</span>{" "}
              <a href="tel:+441509633300" className="hover:underline text-[#861918]">01509 633300</a>
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a href="mailto:info@ttauto.co.uk" className="hover:underline text-[#861918]">info@ttauto.co.uk</a>
            </li>
            <li>
              <span className="font-semibold text-white">Website:</span>{" "}
              <a href="https://www.ttauto.co.uk" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#861918]">
                www.ttauto.co.uk
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Address:</span>{" "}
              <a
                href="https://maps.app.goo.gl/VGiSQzQgnAgJodiy6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#861918]"
              >
                Unit 6, Royal Way, Off Belton Road, Loughborough, Leicestershire, LE11 5XR
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Opening Hours:</span> 8:30 AM – 5:00 PM (Mon–Fri)
            </li>
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <form className="bg-[#111] p-8 rounded-2xl shadow-lg">
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
