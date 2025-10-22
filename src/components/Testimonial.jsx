import React from "react";

const testimonials = [
    {
        name: "Jason Stew",
        role: "Toyota Tacoma Owner",
        image: "/avatar1.jpg", // Replace with actual image paths
        quote:
            "For numerous years, my family and I have placed our complete trust in John's Auto Repair for the care and repair of our vehicles.",
    },
    {
        name: "John Smith",
        role: "Honda CR-V Owner",
        image: "/avatar2.jpg",
        quote:
            "I've trusted this team for years. They solved an electrical issue no other shop could fix. Always professional, reliable, and friendly — I won't go anywhere else.",
    },
    {
        name: "Emily Rodriguez",
        role: "Porsche Panamera Owner",
        image: "/avatar3.jpg",
        quote:
            "Exceptional service. They replaced my sedan's brakes and now it drives like new — smooth, quiet stops. Great attention to detail and super professional throughout the process.",
    },
    {
        name: "Michael Johnson",
        role: "Ford F-150",
        image: "/avatar4.jpg",
        quote:
            "My truck had engine trouble and they diagnosed it fast. Clear communication, solid repairs, and now it runs like new. I'm definitely sticking with them.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-gray-50 py-5 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <p className="text-sm text-gray-400 tracking-widest">TESTIMONIALS</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
                    What Our Clients Say
                </h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                {/* Left Image */}
                <div className="lg:col-span-2">
                    <video
                        src="/mechanic.mp4" // Replace with your actual video path
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Testimonials */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <p className="text-gray-700 mb-4">&quot;{t.quote}&quot;</p>
                            <div className="flex items-center mt-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover mr-3"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-right mt-8">
                <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                >
                    VIEW ON GOOGLE
                </a>
            </div>
        </section>
    );
}
