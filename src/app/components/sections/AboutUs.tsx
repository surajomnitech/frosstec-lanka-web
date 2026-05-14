'use client';

import { Eye, Target, Award, ArrowRight } from 'lucide-react';

export default function AboutUs() {
    return (
        <section id="about" className="py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Centered Header */}
                <div className="text-center mb-16">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full 
bg-primary/5 
border border-primary/15 
shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
mb-5"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span className="text-primary font-bold text-[0.7rem] uppercase tracking-[0.12em]">
                            ABOUT US
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold text-primary mb-4 leading-[1.15]">
                        Our Commitment<br />To Excellence
                    </h2>

                    {/* Subheading */}
                    <p className="text-[1.0625rem] text-gray-600 leading-[1.75] max-w-[65ch] mx-auto">
                        At Frosstec, we are passionate about delivering exceptional service with integrity. Our mission is to protect your business from unexpected breakdowns and long-term inefficiencies through reliable, responsive, and results-driven solutions.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left Column - Content */}
                    <div className="lg:col-span-5 lg:pr-4">
                        <p className="text-gray-600 leading-[1.8] text-[1rem] mb-7">
                            With decades of combined experience, our team brings technical expertise and innovative solutions to every project. We understand that reliable refrigeration is critical to your operations.
                        </p>

                        <p className="text-gray-600 leading-[1.8] text-[1rem] mb-8">
                            From initial consultation through ongoing support, we're committed to exceeding expectations through quality workmanship, genuine parts, and responsive service that you can depend on.
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full text-[0.9rem] font-bold tracking-[0.02em] hover:bg-primary/90 hover:shadow-[0_4px_18px_rgba(14,22,48,0.35)] active:scale-[0.97] transition-all duration-[220ms]"
                        >
                            Learn More About Us
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Right Column - Vision, Mission, Values */}
                    <div className="lg:col-span-7">
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
                            {/* Our Vision */}
                            <div className="group text-center bg-white rounded-xl border border-gray-200/60 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 ease-out">
                                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 flex items-center justify-center shadow-[0_4px_16px_rgba(14,22,48,0.08)] group-hover:shadow-[0_6px_20px_rgba(14,22,48,0.12)] transition-shadow duration-300">
                                    <Eye className="w-7 h-7 text-primary" strokeWidth={2.2} />
                                </div>
                                <h3 className="text-[1.0625rem] font-bold text-primary mb-3.5 leading-tight">Our Vision</h3>
                                <p className="text-gray-600 text-[0.875rem] leading-[1.7]">
                                    To be Sri Lanka's most trusted refrigeration service provider, recognised for reliability, innovation and exceptional customer care.
                                </p>
                            </div>

                            {/* Our Mission */}
                            <div className="group text-center bg-white rounded-xl border border-gray-200/60 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 ease-out">
                                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 flex items-center justify-center shadow-[0_4px_16px_rgba(14,22,48,0.08)] group-hover:shadow-[0_6px_20px_rgba(14,22,48,0.12)] transition-shadow duration-300">
                                    <Target className="w-7 h-7 text-primary" strokeWidth={2.2} />
                                </div>
                                <h3 className="text-[1.0625rem] font-bold text-primary mb-3.5 leading-tight">Our Mission</h3>
                                <p className="text-gray-600 text-[0.875rem] leading-[1.7]">
                                    To deliver high-quality refrigeration solutions that enhance efficiency, reduce downtime and build lasting relationships.
                                </p>
                            </div>

                            {/* Core Values */}
                            <div className="group text-center bg-white rounded-xl border border-gray-200/60 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 ease-out">
                                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 flex items-center justify-center shadow-[0_4px_16px_rgba(14,22,48,0.08)] group-hover:shadow-[0_6px_20px_rgba(14,22,48,0.12)] transition-shadow duration-300">
                                    <Award className="w-7 h-7 text-primary" strokeWidth={2.2} />
                                </div>
                                <h3 className="text-[1.0625rem] font-bold text-primary mb-3.5 leading-tight">Core Values</h3>
                                <ul className="text-gray-600 text-[0.875rem] leading-[1.7] space-y-2 text-left">
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 font-bold">•</span>
                                        <span>Integrity</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 font-bold">•</span>
                                        <span>Tailored Solutions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 font-bold">•</span>
                                        <span>Customer Satisfaction</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 font-bold">•</span>
                                        <span>Efficiency</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 font-bold">•</span>
                                        <span>Respect</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2 font-bold">•</span>
                                        <span>Mutual Success</span>
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