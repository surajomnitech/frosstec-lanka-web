'use client';

import { Eye, Target, Award } from 'lucide-react';

export default function AboutUs() {
    return (
        <section id="about" className="py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Centered Header */}
                <div className="text-center mb-16">
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
                            ABOUT US
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold text-primary mb-4 leading-[1.15]">
                        How We Work
                    </h2>

                    {/* Subheading */}
                    <p className="text-[1.0625rem] text-gray-600 leading-[1.75] max-w-[65ch] mx-auto">
                        We keep your refrigeration running. Fast response, reliable repairs, and long-term support for businesses across Sri Lanka.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center">
                    {/* Left Column - Content */}
                    <div className="lg:col-span-5 lg:pr-6 flex flex-col justify-center">
                        <p className="text-gray-700 leading-[1.85] text-[1.0625rem] lg:text-[1.125rem] font-medium max-w-[48ch] lg:max-w-[38ch]">
                            Our technicians service all makes and models of commercial refrigeration equipment. We respond quickly, fix problems right, and use genuine parts. Most repairs are completed on the first visit.
                        </p>
                    </div>

                    {/* Right Column - Vision, Mission, Values */}
                    <div className="lg:col-span-7 relative">
                        {/* Subtle background depth panel - desktop only */}
                        <div className="hidden lg:block absolute inset-0 -inset-x-4 -inset-y-6 bg-gradient-to-br from-gray-50/40 to-gray-50/20 rounded-2xl -z-10"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-6">
                            {/* Our Focus - desktop: slightly lowered */}
                            <div className="group text-center bg-white rounded-xl border border-gray-200/60 p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:mt-4 transition-all duration-300 ease-out hover:-translate-y-1">
                                <div className="w-13 sm:w-14 h-13 sm:h-14 mx-auto mb-3.5 sm:mb-4 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 flex items-center justify-center shadow-[0_4px_16px_rgba(14,22,48,0.08)] group-hover:shadow-[0_6px_20px_rgba(14,22,48,0.12)] transition-shadow duration-300">
                                    <Eye className="w-5.5 sm:w-6 h-5.5 sm:h-6 text-primary" strokeWidth={2.2} />
                                </div>
                                <h3 className="text-[0.9375rem] sm:text-[1rem] font-bold text-primary mb-2.5 sm:mb-3 leading-tight">Our Focus</h3>
                                <p className="text-gray-600 text-[0.875rem] leading-[1.7]">
                                    Keep your equipment running reliably so your business stays operational.
                                </p>
                            </div>

                            {/* Our Approach - desktop: raised (center emphasis) */}
                            <div className="group text-center bg-white rounded-xl border border-gray-200/60 p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:-mt-2 transition-all duration-300 ease-out hover:-translate-y-1">
                                <div className="w-13 sm:w-14 h-13 sm:h-14 mx-auto mb-3.5 sm:mb-4 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 flex items-center justify-center shadow-[0_4px_16px_rgba(14,22,48,0.08)] group-hover:shadow-[0_6px_20px_rgba(14,22,48,0.12)] transition-shadow duration-300">
                                    <Target className="w-5.5 sm:w-6 h-5.5 sm:h-6 text-primary" strokeWidth={2.2} />
                                </div>
                                <h3 className="text-[0.9375rem] sm:text-[1rem] font-bold text-primary mb-2.5 sm:mb-3 leading-tight">Our Approach</h3>
                                <p className="text-gray-600 text-[0.875rem] leading-[1.7]">
                                    Fast response, proper diagnosis, quality repairs, and honest communication.
                                </p>
                            </div>

                            {/* What We Deliver - desktop: slightly lowered */}
                            <div className="group text-center bg-white rounded-xl border border-gray-200/60 p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:mt-4 transition-all duration-300 ease-out hover:-translate-y-1">
                                <div className="w-13 sm:w-14 h-13 sm:h-14 mx-auto mb-3.5 sm:mb-4 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 flex items-center justify-center shadow-[0_4px_16px_rgba(14,22,48,0.08)] group-hover:shadow-[0_6px_20px_rgba(14,22,48,0.12)] transition-shadow duration-300">
                                    <Award className="w-5.5 sm:w-6 h-5.5 sm:h-6 text-primary" strokeWidth={2.2} />
                                </div>
                                <h3 className="text-[0.9375rem] sm:text-[1rem] font-bold text-primary mb-2.5 sm:mb-3 leading-tight">What We Deliver</h3>
                                <ul className="text-gray-600 text-[0.875rem] leading-[1.7] space-y-2 sm:space-y-2.5 sm:text-left inline-block sm:block">
                                    <li className="flex items-center sm:items-start justify-center sm:justify-start">
                                        <span className="text-accent mr-2 font-bold shrink-0">•</span>
                                        <span>Rapid Response</span>
                                    </li>
                                    <li className="flex items-center sm:items-start justify-center sm:justify-start">
                                        <span className="text-accent mr-2 font-bold shrink-0">•</span>
                                        <span>Reliable Repairs</span>
                                    </li>
                                    <li className="flex items-center sm:items-start justify-center sm:justify-start">
                                        <span className="text-accent mr-2 font-bold shrink-0">•</span>
                                        <span>Genuine Parts</span>
                                    </li>
                                    <li className="flex items-center sm:items-start justify-center sm:justify-start">
                                        <span className="text-accent mr-2 font-bold shrink-0">•</span>
                                        <span>Expert Technicians</span>
                                    </li>
                                    <li className="flex items-center sm:items-start justify-center sm:justify-start">
                                        <span className="text-accent mr-2 font-bold shrink-0">•</span>
                                        <span>Clear Communication</span>
                                    </li>
                                    <li className="flex items-center sm:items-start justify-center sm:justify-start">
                                        <span className="text-accent mr-2 font-bold shrink-0">•</span>
                                        <span>Long-Term Support</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}