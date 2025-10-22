// components/FooterSection.jsx
export default function FooterSection() {
  return (
    <footer className="bg-[#0B0B0B] text-gray-400 py-12 font-[Inter]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8 mb-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">TT Automotive</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Your one-stop-shop for <span className="text-[#E1912F]">Choice, Value, Efficiency</span>, and <br />
              Technical Expertise. Next day delivery, genuine spares, and professional service.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#E1912F] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#E1912F] transition">Service</a></li>
              <li><a href="#" className="hover:text-[#E1912F] transition">Products</a></li>
              <li><a href="#" className="hover:text-[#E1912F] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#E1912F] transition">Contact</a></li>
              <li><a href="#" className="hover:text-[#E1912F] transition">Consumables Catalogue</a></li>
              <li><a href="#" className="hover:text-[#E1912F] transition">Surcharge, Returns & Warranty</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Business Info</h3>
            <ul className="text-sm space-y-2">
              <li><span className="text-white font-semibold">Company Reg:</span> 1153016</li>
              <li><span className="text-white font-semibold">VAT Reg:</span> 115 5821 84</li>
              <li><span className="text-white font-semibold">Opening Hours:</span> 8:30 AM – 5:00 PM (Mon–Fri)</li>
              <li><span className="text-white font-semibold">Phone:</span> 01509 633300</li>
              <li><span className="text-white font-semibold">Email:</span> info@ttauto.co.uk</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>Copyright © 2025 TT Automotive ®</p>
          <p className="mt-2 md:mt-0">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
