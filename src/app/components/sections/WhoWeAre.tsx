'use client';

import Image from 'next/image';
import { ArrowRight, Globe2, BadgeCheck, Clock3, Users } from 'lucide-react';

export default function WhoWeAre() {
    const stats = [
        { icon: Globe2, label: 'Island-wide Coverage' },
        { icon: BadgeCheck, label: '95% First-Visit Repair Success' },
        { icon: Clock3, label: '24/7 Emergency Support' },
        { icon: Users, label: '20+ Years of Experience' },
    ];

    return (
        <section id="about" className="bg-white py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Image */}
                    <div className="order-2 lg:order-1">
                        <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-gray-100">
                            <Image
                                src="/images/about/about-technician.png"
                                alt="Frosstec technician working on refrigeration equipment"
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="order-1 lg:order-2 max-w-[620px]">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full 
bg-primary/5 
border border-primary/15 
shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
backdrop-blur-xl 
mb-5"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                            <span className="text-primary font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.2em]">
                                WHO WE ARE
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold text-primary leading-[1.15] mb-5">
                            Your Trusted Partner in Commercial Refrigeration
                        </h2>

                        {/* Paragraphs */}
                        <div className="space-y-4 mb-8">
                            <p className="text-[1.0625rem] text-gray-700 leading-[1.7]">
                                At Frosstec, we combine technical expertise, responsive service, and dependable refrigeration solutions to support the efficient, reliable, and uninterrupted operation of your business.
                            </p>
                            <p className="text-[1.0625rem] text-gray-700 leading-[1.7]">
                                Our team of highly trained technicians specialises in the installation, maintenance, and repair of all major makes and models of commercial refrigeration equipment, delivering prompt response times and exceptional service standards.
                            </p>

                            <p className="text-[1.0625rem] text-gray-700 leading-[1.7]">
                                We proudly serve a diverse range of industries, including hospitality, supermarkets, retail, distribution, food processing, and seafood operations, ensuring that critical refrigeration systems continue to perform at their best.
                            </p>
                            <p className="text-[1.0625rem] text-gray-700 leading-[1.7]">
                                With a commitment to technical excellence, reliability, and customer satisfaction, Frosstec is the trusted partner businesses rely on to keep their operations running smoothly.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;

                                return (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Icon
                                                className="w-5 h-5 text-primary"
                                                strokeWidth={2.4}
                                            />
                                        </div>

                                        <p className="text-[0.82rem] font-semibold text-primary leading-tight">
                                            {stat.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full text-[0.9rem] font-bold tracking-[0.02em] hover:bg-primary/90 hover:shadow-[0_4px_18px_rgba(14,22,48,0.35)] active:scale-[0.97] transition-all duration-[220ms] focus:outline-none focus:ring-2 focus:ring-primary/20"
                            >
                                <span>Learn More About Us</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-[220ms] group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}