'use client';

import { PhoneCall, MapPin, Wrench, UserCheck } from 'lucide-react';

export default function TrustBar() {
    const trustItems = [
        {
            icon: PhoneCall,
            title: "24/7 Emergency Support",
            description: "We're always ready when you need us."
        },
        {
            icon: MapPin,
            title: "Island-Wide Service",
            description: "Operating across Sri Lanka to serve your business."
        },
        {
            icon: Wrench,
            title: "Preventative Maintenance",
            description: "Maximize performance and minimize unexpected downtime."
        },
        {
            icon: UserCheck,
            title: "Experienced Technicians",
            description: "Skilled professionals you can trust."
        }
    ];

    return (
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 -mt-14 sm:-mt-20 relative z-20 mb-16 sm:mb-28">
            <div className="bg-[#071B3A]/96 border border-white/[0.12] rounded-lg sm:rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-4 sm:py-7">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4 sm:gap-x-6 sm:gap-y-6 lg:gap-0">
                    {trustItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-4 text-center lg:text-left px-0 sm:px-2 lg:px-4 py-0 sm:py-2 ${
                                index < trustItems.length - 1 
                                    ? 'lg:border-r border-white/[0.12]' 
                                    : ''
                            }`}
                        >
                            {/* Icon with Premium Glow */}
                            <div className="w-10 sm:w-[54px] h-10 sm:h-[54px] bg-accent/[0.12] border-[1.5px] border-accent/70 rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(224,92,26,0.2)] sm:shadow-[0_0_24px_rgba(224,92,26,0.3)] flex-shrink-0">
                                <item.icon className="w-5 sm:w-[26px] h-5 sm:h-[26px] text-accent" strokeWidth={2.2} />
                            </div>
                            
                            {/* Text Content */}
                            <div className="flex-1 min-w-0">
                                <div className="text-white font-bold text-[0.75rem] sm:text-[0.9rem] leading-[1.25] sm:leading-[1.3]">
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}