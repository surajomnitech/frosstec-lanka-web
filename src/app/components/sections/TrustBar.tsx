'use client';

import { PhoneCall, MapPin, Wrench, UserCheck } from 'lucide-react';

export default function TrustBar() {
    const trustItems = [
        {
            icon: PhoneCall,
            title: "24/7 Emergency\nSupport",
            description: "We're always ready when you need us."
        },
        {
            icon: MapPin,
            title: "Island-Wide\nService",
            description: "Operating across Sri Lanka to serve your business."
        },
        {
            icon: Wrench,
            title: "Preventative\nMaintenance",
            description: "Maximize performance and minimize unexpected downtime."
        },
        {
            icon: UserCheck,
            title: "Experienced\nTechnicians",
            description: "Skilled professionals you can trust."
        }
    ];

    return (
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 -mt-20 relative z-20 mb-28">
            <div className="bg-[#071B3A]/96 border border-white/[0.12] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm min-h-[110px] px-6 sm:px-8 py-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
                    {trustItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-4 text-left px-2 sm:px-4 py-2 ${
                                index < trustItems.length - 1 
                                    ? 'lg:border-r border-white/[0.12]' 
                                    : ''
                            }`}
                        >
                            {/* Icon with Premium Glow */}
                            <div className="w-[54px] h-[54px] bg-accent/[0.12] border-[1.5px] border-accent/70 rounded-full flex items-center justify-center shadow-[0_0_24px_rgba(224,92,26,0.3)] flex-shrink-0">
                                <item.icon className="w-[26px] h-[26px] text-accent" strokeWidth={2.2} />
                            </div>
                            
                            {/* Text Content */}
                            <div className="flex-1 min-w-0">
                                <div className="text-white font-bold text-[0.9rem] leading-[1.3] whitespace-pre-line">
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