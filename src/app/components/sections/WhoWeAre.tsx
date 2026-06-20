'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SectionPill } from '../ui/SectionPill';

export default function WhoWeAre() {
    return (
        <section id="about" className="bg-surface-cool py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-white/70">
                            <Image
                                src="/images/about/about-technician.jpg"
                                alt="Frosstec technician working on refrigeration equipment"
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 max-w-[620px]">
                        <SectionPill variant="light">WHO WE ARE</SectionPill>

                        <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold text-primary leading-[1.15] mb-5">
                            Your Trusted Partner in Commercial Refrigeration
                        </h2>

                        <div className="space-y-4 mb-8">
                            <p className="text-[1.0625rem] text-gray-700 leading-[1.7]">
                                At Frosstec, we combine technical expertise, responsive service,
                                and dependable refrigeration solutions to support the efficient,
                                reliable, and uninterrupted operation of your business.
                            </p>

                            <p className="text-[1.0625rem] text-gray-700 leading-[1.7]">
                                Our team of highly trained technicians specialises in the
                                installation, maintenance, and repair of all major makes and
                                models of commercial refrigeration equipment, delivering prompt
                                response times and exceptional service standards.
                            </p>

                            <p className="text-[1.0625rem] text-gray-700 leading-[1.7]">
                                We proudly serve a diverse range of industries, including
                                hospitality, supermarkets, retail, distribution, food processing,
                                and seafood operations, ensuring that critical refrigeration
                                systems continue to perform at their best.
                            </p>

                            <p className="text-[1.0625rem] text-gray-700 leading-[1.7]">
                                With a commitment to technical excellence, reliability, and
                                customer satisfaction, Frosstec is the trusted partner businesses
                                rely on to keep their operations running smoothly.
                            </p>
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <a
                                href="#company-profile"
                                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full text-[0.9rem] font-bold tracking-[0.02em] hover:bg-primary/90 hover:shadow-[0_4px_18px_rgba(14,22,48,0.35)] active:scale-[0.97] transition-all duration-[220ms] focus:outline-none focus:ring-2 focus:ring-primary/20"
                            >
                                <span>View Vision & Values</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-[220ms] group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}