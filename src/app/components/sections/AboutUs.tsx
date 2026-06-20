'use client';

import {
    Award,
    BadgeCheck,
    Eye,
    Handshake,
    ShieldCheck,
    Sparkles,
    Target,
    Timer,
} from 'lucide-react';
import { SectionPill } from '../ui/SectionPill';

const CORE_VALUES = [
    {
        icon: ShieldCheck,
        title: 'Integrity',
        description:
            'Honesty and transparency are the cornerstones of our business. Every interaction is characterised by fairness.',
    },
    {
        icon: BadgeCheck,
        title: 'Reliability',
        description:
            'We provide dependable refrigeration support that businesses can count on when continuous cooling matters most.',
    },
    {
        icon: Sparkles,
        title: 'Tailored Solutions',
        description:
            'We reject the one-size-fits-all approach. We build what you need.',
    },
    {
        icon: Timer,
        title: 'Efficiency',
        description:
            'We focus on swift, effective outcomes to maximise your productivity.',
    },
    {
        icon: Award,
        title: 'Customer Satisfaction',
        description:
            'Your trust is our greatest asset. We strive to exceed expectations in every service call.',
    },
    {
        icon: Handshake,
        title: 'Respect',
        description:
            'We value diverse perspectives and treat every client and employee with inherent dignity.',
    },
];

export default function AboutUs() {
    return (
        <section
            id="company-profile"
            className="relative overflow-hidden bg-deep-navy pt-20 lg:pt-24 pb-10 lg:pb-12"
        >
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary-light/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-14 lg:mb-16">
                    <SectionPill variant="dark">ABOUT US</SectionPill>

                    <h2 className="text-[clamp(1.95rem,3.6vw,2.9rem)] font-extrabold text-white mb-4 leading-[1.15]">
                        Vision, Mission & Values
                    </h2>

                    <p className="text-[1.0625rem] text-white/68 leading-[1.75] max-w-[66ch] mx-auto">
                        The principles that guide our service, workmanship, and customer
                        relationships.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 lg:gap-7 mb-7">
                    <div className="group rounded-2xl bg-white/[0.07] border border-white/[0.12] p-6 sm:p-7 shadow-[0_16px_44px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">
                        <div className="w-13 h-13 rounded-full bg-white/[0.08] border border-white/[0.14] flex items-center justify-center mb-5">
                            <Eye className="w-6 h-6 text-accent" strokeWidth={2.2} />
                        </div>

                        <h3 className="text-[1rem] font-extrabold text-white mb-3">
                            Our Vision
                        </h3>

                        <p className="text-white/68 text-[0.98rem] leading-[1.75]">
                            To be the leading provider of refrigeration solutions, recognised
                            for reliability, innovation, and exceptional service.
                        </p>
                    </div>

                    <div className="group rounded-2xl bg-white/[0.07] border border-white/[0.12] p-6 sm:p-7 shadow-[0_16px_44px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">
                        <div className="w-13 h-13 rounded-full bg-white/[0.08] border border-white/[0.14] flex items-center justify-center mb-5">
                            <Target className="w-6 h-6 text-accent" strokeWidth={2.2} />
                        </div>

                        <h3 className="text-[1rem] font-extrabold text-white mb-3">
                            Our Mission
                        </h3>

                        <p className="text-white/68 text-[0.98rem] leading-[1.75]">
                            To provide responsive service, quality repairs, and practical
                            support that maximise equipment performance and minimise downtime.
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl bg-white/[0.06] border border-white/[0.12] p-6 sm:p-7 lg:p-8 shadow-[0_16px_44px_rgba(0,0,0,0.16)]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
                        <div>
                            <h3 className="text-[1.1rem] font-extrabold text-white mb-2">
                                Our Core Values
                            </h3>

                            <p className="text-white/60 text-[0.95rem] leading-[1.65] max-w-[62ch]">
                                These values shape how we work with clients, solve problems,
                                and deliver dependable refrigeration support.
                            </p>
                        </div>

                        <div className="w-13 h-13 rounded-full bg-accent/12 border border-accent/30 flex items-center justify-center shrink-0">
                            <Award className="w-6 h-6 text-accent" strokeWidth={2.2} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {CORE_VALUES.map((value) => {
                            const Icon = value.icon;

                            return (
                                <div
                                    key={value.title}
                                    className="rounded-xl bg-white/[0.055] border border-white/[0.10] p-4"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-accent/12 border border-accent/25 flex items-center justify-center mb-4">
                                        <Icon className="w-5 h-5 text-accent" strokeWidth={2.2} />
                                    </div>

                                    <h4 className="text-white text-[0.92rem] font-extrabold mb-2 leading-snug">
                                        {value.title}
                                    </h4>

                                    <p className="text-white/58 text-[0.82rem] leading-[1.6]">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}