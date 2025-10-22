import React from 'react';
import { Check, X, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function CarCarePackages() {
    const premiumFeatures = [
        {
            icon: <Check className="h-5 w-5" />,
            title: "Engine Diagnostic:",
            description: "Advanced diagnostics to identify and address potential issues."
        },
        {
            icon: <Check className="h-5 w-5" />,
            title: "Alignment Check:",
            description: "Ensure wheels are properly aligned for optimal handling."
        },
        {
            icon: <Check className="h-5 w-5" />,
            title: "Air Filter Replacement:",
            description: "Replace engine air filter for improved performance."
        },
        {
            icon: <Check className="h-5 w-5" />,
            title: "AC System Check:",
            description: "Inspect and test the air conditioning system for optimal cooling."
        },
        {
            icon: <Check className="h-5 w-5" />,
            title: "Interior Vacuum:",
            description: "Thorough vacuuming of the interior to keep your car clean and fresh."
        }
    ];

    const basicFeatures = [
        {
            icon: <X className="h-5 w-5" />,
            title: "Oil Change:",
            description: "Replace old oil with high-quality synthetic oil to ensure your engine runs smoothly."
        },
        {
            icon: <X className="h-5 w-5" />,
            title: "Tire Rotation:",
            description: "Rotate tires to promote even wear and extend tire life."
        },
        {
            icon: <X className="h-5 w-5" />,
            title: "Brake Inspection:",
            description: "Comprehensive check of brake pads, rotors, and fluid to ensure safety."
        },
        {
            icon: <X className="h-5 w-5" />,
            title: "Fluid Top-Off:",
            description: "Refill essential fluids, including windshield washer, brake, and coolant."
        }
    ];

    const contactLinks = [
        {
            icon: <Phone className="h-6 w-6" />,
            title: "+1-800-123-4567",
            href: "tel:+1-800-123-4567"
        },
        {
            icon: <Mail className="h-6 w-6" />,
            title: "autofix@example.com",
            href: "mailto:autofix@example.com"
        },
        {
            icon: <MessageCircle className="h-6 w-6" />,
            title: "Telegram Chat",
            href: "https://web.telegram.org/a/"
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Our Location",
            href: "https://www.google.com/maps"
        }
    ];

    return (
        <section className=" bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Right Column - Contact Info */}
                    <div className="lg:col-span-1 ">
                        <div className="lg:sticky lg:top-8">
                            {/* Title */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-0.5 w-12 bg-orange-500"></div>
                                    <h6 className="text-xs sm:text-sm font-semibold text-orange-500 uppercase tracking-wider">
                                        Discover Our Complete Car Care
                                    </h6>
                                </div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                    Essential Service Package
                                </h2>
                            </div>

                            {/* Contact Links */}
                            <nav className="space-y-4 ">
                                {contactLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 border border-white/10 rounded-lg p-4 bg-black hover:bg-white/5 transition-all"
                                    >
                                        <div className="h-0.5 w-8 bg-orange-500 flex-shrink-0"></div>
                                        <div className="flex items-center justify-center h-12 w-12 border-r border-white/10 flex-shrink-0 text-orange-500">
                                            {link.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="text-sm sm:text-base font-semibold group-hover:text-orange-500 transition-colors">
                                                {link.title}
                                            </h6>
                                        </div>
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                    {/* Left Column - Packages */}
                    <div className="lg:col-span-2 space-y-6  max-w-lg mx-auto">
                        {/* Premium Package */}
                        <div className="border border-white/10 rounded-lg p-6 sm:p-8 bg-black/50 backdrop-blur-sm">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <h6 className="text-sm sm:text-base font-semibold text-gray-400">PREMIUM</h6>
                                <div className="h-3 w-3 bg-orange-500 rounded"></div>
                                <h6 className="text-sm sm:text-base font-semibold">CARE PACKAGE</h6>
                            </div>

                            {/* Price */}
                            <div className="border border-white/10 rounded-lg p-4 mb-6 flex items-center justify-between">
                                <h6 className="text-sm sm:text-base font-semibold text-gray-400">PRICE:</h6>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">$199</h3>
                            </div>

                            {/* Features */}
                            <div className="space-y-4 mb-6">
                                {premiumFeatures.map((feature, index) => (
                                    <div key={index} className="flex gap-4 border border-white/10 rounded-lg p-4 items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                                            <div className="text-orange-500">{feature.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm sm:text-base text-gray-300">
                                                <span className="text-white font-semibold">{feature.title}</span> {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all border-2 border-orange-500 shadow-lg shadow-orange-500/30">
                                Purchase a package now
                            </button>
                        </div>

                        {/* Basic Package */}
                        <div className="border border-white/10 rounded-lg p-6 sm:p-8 bg-black/50 backdrop-blur-sm">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <h6 className="text-sm sm:text-base font-semibold text-gray-400">BASIC</h6>
                                <div className="h-3 w-3 bg-orange-500 rounded"></div>
                                <h6 className="text-sm sm:text-base font-semibold">CARE PACKAGE</h6>
                            </div>

                            {/* Price */}
                            <div className="border border-white/10 rounded-lg p-4 mb-6 flex items-center justify-between">
                                <h6 className="text-sm sm:text-base font-semibold text-gray-400">PRICE:</h6>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">$99</h3>
                            </div>

                            {/* Features */}
                            <div className="space-y-4 mb-6">
                                {basicFeatures.map((feature, index) => (
                                    <div key={index} className="flex gap-4 border border-white/10 rounded-lg p-4 items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                                            <div className="text-red-500">{feature.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm sm:text-base text-gray-300">
                                                <span className="text-white font-semibold">{feature.title}</span> {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all border-2 border-orange-500 shadow-lg shadow-orange-500/30">
                                Purchase a package now
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}