// components/MapSection.jsx
export default function MapSection() {
  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold mb-6 text-[#861918] text-center">Find Us</h2>
        <iframe
          className="w-full h-80 rounded-2xl border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.9961057680367!2d-1.217!3d52.772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48775ea02d3f4e75%3A0x6b014efb7f5a91f4!2sTT%20Automotive!5e0!3m2!1sen!2suk!4v1637745049173"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
