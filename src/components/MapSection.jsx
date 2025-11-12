// components/MapSection.jsx
export default function MapSection() {
  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold mb-6 text-[#861918] text-center">
          Find Us
        </h2>
        <iframe
          className="w-full h-80 rounded-2xl border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.440961710152!2d-1.0970505233317268!3d52.63835597205648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487760d0387e62ff%3A0x9b939bf3c6a3b3e3!2s34%20Rowsley%20St%2C%20Leicester%20LE5%205JJ%2C%20UK!5e0!3m2!1sen!2slk!4v1731504035634!5m2!1sen!2slk"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
