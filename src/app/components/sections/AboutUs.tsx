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
                        Built on Reliability
                    </h2>

                    {/* Subheading */}
                    <p className="text-[1.0625rem] text-gray-600 leading-[1.75] max-w-[65ch] mx-auto">
                        Reliable refrigeration support, practical solutions, and responsive service for businesses that depend on continuous cooling.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center">
                    {/* Left Column - Content */}
                    <div className="lg:col-span-5 lg:pr-6 flex flex-col justify-center">
                        <div className="relative">
                            {/* Subtle accent line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent rounded-full hidden lg:block"></div>
                            <p className="text-gray-700 leading-[1.9] text-[1.0625rem] lg:text-[1.15rem] font-medium max-w-[48ch] lg:max-w-[42ch] lg:pl-6">
                                At Frosstec, we are committed to keeping refrigeration systems dependable and businesses operating efficiently. Our technicians service all major makes and models with practical expertise, clear communication, and a dedication to delivering reliable results.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Vision, Mission, Values */}
                    <div className="lg:col-span-7 relative">
                        {/* Subtle background depth panel - desktop only */}
                        <div className="hidden lg:block absolute inset-0 -inset-x-4 -inset-y-6 bg-gradient-to-br from-gray-50/40 to-gray-50/20 rounded-2xl -z-10"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7 lg:gap-7">
                            {/* Our Vision - desktop: slightly lowered */}
                            <div className="group text-center bg-white rounded-xl border border-gray-200/60 p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:mt-4 transition-all duration-300 ease-out hover:-translate-y-1">
                                <div className="w-13 sm:w-14 h-13 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 flex items-center justify-center shadow-[0_4px_16px_rgba(14,22,48,0.08)] group-hover:shadow-[0_6px_20px_rgba(14,22,48,0.12)] transition-shadow duration-300">
                                    <Eye className="w-5.5 sm:w-6 h-5.5 sm:h-6 text-primary" strokeWidth={2.2} />
                                </div>
                                <h3 className="text-[0.9375rem] sm:text-[1rem] font-bold text-primary mb-3 sm:mb-3.5 leading-tight">Our Vision</h3>
                                <p className="text-gray-600 text-[0.875rem] sm:text-[0.9375rem] leading-[1.65]">
                                    To be the leading provider of refrigeration solutions, recognised for reliability, innovation, and exceptional service.
                                </p>
                            </div>

                            {/* Our Mission - desktop: raised (center emphasis) */}
                            <div className="group text-center bg-white rounded-xl border border-gray-200/60 p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:-mt-2 transition-all duration-300 ease-out hover:-translate-y-1">
                                <div className="w-13 sm:w-14 h-13 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 flex items-center justify-center shadow-[0_4px_16px_rgba(14,22,48,0.08)] group-hover:shadow-[0_6px_20px_rgba(14,22,48,0.12)] transition-shadow duration-300">
                                    <Target className="w-5.5 sm:w-6 h-5.5 sm:h-6 text-primary" strokeWidth={2.2} />
                                </div>
                                <h3 className="text-[0.9375rem] sm:text-[1rem] font-bold text-primary mb-3 sm:mb-3.5 leading-tight">Our Mission</h3>
                                <p className="text-gray-600 text-[0.875rem] sm:text-[0.9375rem] leading-[1.65]">
                                    To provide responsive service, quality repairs, and practical support that maximise equipment performance and minimise downtime.
                                </p>
                            </div>

                            {/* What We Value - desktop: slightly lowered */}
                            <div className="group text-center bg-white rounded-xl border border-gray-200/60 p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:mt-4 transition-all duration-300 ease-out hover:-translate-y-1">
                                <div className="w-13 sm:w-14 h-13 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 flex items-center justify-center shadow-[0_4px_16px_rgba(14,22,48,0.08)] group-hover:shadow-[0_6px_20px_rgba(14,22,48,0.12)] transition-shadow duration-300">
                                    <Award className="w-5.5 sm:w-6 h-5.5 sm:h-6 text-primary" strokeWidth={2.2} />
                                </div>
                                <h3 className="text-[0.9375rem] sm:text-[1rem] font-bold text-primary mb-3 sm:mb-3.5 leading-tight">What We Value</h3>
                                <ul className="text-gray-600 text-[0.875rem] sm:text-[0.9375rem] leading-[1.65] space-y-1.5 sm:space-y-2 sm:text-left inline-block sm:block">
                                    <li className="flex items-center sm:items-start justify-center sm:justify-start">
                                        <span className="text-accent mr-2 font-bold shrink-0">•</span>
                                        <span>Integrity</span>
                                    </li>
                                    <li className="flex items-center sm:items-start justify-center sm:justify-start">
                                        <span className="text-accent mr-2 font-bold shrink-0">•</span>
                                        <span>Reliability</span>
                                    </li>
                                    <li className="flex items-center sm:items-start justify-center sm:justify-start">
                                        <span className="text-accent mr-2 font-bold shrink-0">•</span>
                                        <span>Technical Excellence</span>
                                    </li>
                                    <li className="flex items-center sm:items-start justify-center sm:justify-start">
                                        <span className="text-accent mr-2 font-bold shrink-0">•</span>
                                        <span>Tailored Solutions</span>
                                    </li>
                                    <li className="flex items-center sm:items-start justify-center sm:justify-start">
                                        <span className="text-accent mr-2 font-bold shrink-0">•</span>
                                        <span>Efficiency</span>
                                    </li>
                                    <li className="flex items-center sm:items-start justify-center sm:justify-start">
                                        <span className="text-accent mr-2 font-bold shrink-0">•</span>
                                        <span>Customer Satisfaction</span>
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