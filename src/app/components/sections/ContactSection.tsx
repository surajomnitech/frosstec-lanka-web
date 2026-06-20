'use client';

import { useState } from 'react';
import {
    Award,
    Clock,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Users,
} from 'lucide-react';
import { SectionPill } from '../ui/SectionPill';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        service: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({
                name: '',
                company: '',
                phone: '',
                service: '',
                message: '',
            });

            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
        }, 1500);
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-gradient-to-b from-deep-navy via-[#071B3A] to-footer-navy py-20 lg:py-24 border-t border-white/[0.06]"
        >
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary-light/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="space-y-8">

                        <SectionPill variant="dark">CONTACT US</SectionPill>
                        <div>
                            <h2 className="text-[clamp(1.95rem,3.8vw,2.9rem)] font-extrabold text-white mb-4 leading-[1.15] max-w-[12ch]">
                                Need Reliable Refrigeration Support?
                            </h2>

                            <p className="text-[1.0625rem] text-white/68 leading-[1.75] max-w-[52ch]">
                                Whether it is an emergency breakdown, preventative maintenance,
                                or a new installation, our team is ready to help keep your
                                business running.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="relative rounded-2xl bg-white/[0.08] border border-white/[0.14] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-[0_8px_22px_rgba(191,66,21,0.35)]">
                                        <Phone className="w-6 h-6 text-white" strokeWidth={2.5} />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <h3 className="text-sm font-bold text-white/90 uppercase tracking-wide">
                                                24/7 Hotline
                                            </h3>

                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#04142D] border border-accent/40">
                                                <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(191,66,21,0.9)]" />
                                                <span className="text-[0.65rem] font-extrabold text-accent uppercase tracking-[0.18em]">
                                                    Emergency Support
                                                </span>
                                            </span>
                                        </div>

                                        <a
                                            href="tel:0777399999"
                                            className="text-2xl font-extrabold text-white hover:text-accent transition-colors duration-300"
                                        >
                                            077 739 9999
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <a
                                    href="https://wa.me/94777399999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group rounded-2xl bg-white/[0.07] border border-white/[0.12] p-5 hover:bg-white/[0.10] transition-all duration-300"
                                >
                                    <div className="w-11 h-11 rounded-full bg-green-500/12 border border-green-400/25 flex items-center justify-center mb-4">
                                        <MessageCircle className="w-5 h-5 text-green-400" strokeWidth={2.2} />
                                    </div>

                                    <p className="text-xs font-extrabold text-white/55 uppercase tracking-[0.16em] mb-1">
                                        WhatsApp
                                    </p>

                                    <p className="text-[0.95rem] font-bold text-white group-hover:text-green-300 transition-colors duration-300">
                                        Direct WhatsApp Support
                                    </p>
                                </a>

                                <a
                                    href="mailto:info@frossteclanka.lk"
                                    className="group rounded-2xl bg-white/[0.07] border border-white/[0.12] p-5 hover:bg-white/[0.10] transition-all duration-300"
                                >
                                    <div className="w-11 h-11 rounded-full bg-accent/12 border border-accent/25 flex items-center justify-center mb-4">
                                        <Mail className="w-5 h-5 text-accent" strokeWidth={2.2} />
                                    </div>

                                    <p className="text-xs font-extrabold text-white/55 uppercase tracking-[0.16em] mb-1">
                                        Email
                                    </p>

                                    <p className="text-[0.95rem] font-bold text-white group-hover:text-accent transition-colors duration-300 break-all">
                                        info@frossteclanka.lk
                                    </p>
                                </a>
                            </div>

                            <a
                                href="https://maps.google.com/?q=219+Station+Road+Udahamulla+Nugegoda+Sri+Lanka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-4 rounded-2xl bg-white/[0.07] border border-white/[0.12] p-5 hover:bg-white/[0.10] transition-all duration-300"
                            >
                                <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/[0.14] flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-accent" strokeWidth={2.2} />
                                </div>

                                <div>
                                    <p className="text-xs font-extrabold text-white/55 uppercase tracking-[0.16em] mb-1">
                                        Location
                                    </p>

                                    <p className="text-[0.95rem] font-bold text-white group-hover:text-accent transition-colors duration-300">
                                        219, Station Road, Udahamulla, Nugegoda
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="flex items-center gap-3 rounded-xl bg-white/[0.07] border border-white/[0.12] px-4 py-3">
                                <Clock className="w-5 h-5 text-accent" strokeWidth={2.2} />
                                <span className="text-[0.82rem] font-bold text-white leading-tight">
                                    Fast Response
                                </span>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-white/[0.07] border border-white/[0.12] px-4 py-3">
                                <Users className="w-5 h-5 text-accent" strokeWidth={2.2} />
                                <span className="text-[0.82rem] font-bold text-white leading-tight">
                                    Experienced Technicians
                                </span>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-white/[0.07] border border-white/[0.12] px-4 py-3">
                                <Award className="w-5 h-5 text-accent" strokeWidth={2.2} />
                                <span className="text-[0.82rem] font-bold text-white leading-tight">
                                    Commercial Specialists
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:sticky lg:top-24">
                        <div className="bg-white rounded-2xl border border-white/10 p-6 sm:p-8 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
                            <h3 className="text-xl font-extrabold text-primary-dark mb-2">
                                Request a Call Back
                            </h3>

                            <p className="text-sm text-gray-600 leading-[1.6] mb-6">
                                Share your requirement and our team will get back to you shortly.
                            </p>

                            {showSuccess && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-sm font-semibold text-green-800">
                                        Thank you! We&apos;ll contact you shortly.
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-900"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-900"
                                        placeholder="Your Business Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-900"
                                        placeholder="077 123 4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
                                        Service Requirement
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-900 bg-white"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="emergency-repairs">Emergency Repairs</option>
                                        <option value="preventative-maintenance">
                                            Service & Preventative Maintenance
                                        </option>
                                        <option value="design-installation">Custom Design & Installation</option>
                                        <option value="equipment-sales">Equipment Sales</option>
                                        <option value="cold-room-solutions">
                                            Cold Room & Freezer Room Solutions
                                        </option>
                                        <option value="consultation">Expert Advice & Guidance</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-900 resize-none"
                                        placeholder="Tell us about your refrigeration needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent text-white py-3.5 rounded-lg font-extrabold shadow-[0_10px_26px_rgba(191,66,21,0.25)] hover:bg-[#A93610] hover:shadow-[0_14px_34px_rgba(191,66,21,0.32)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Request a Call Back'}
                                </button>
                            </form>

                            <p className="text-center text-sm text-gray-500 mt-5">
                                Prefer WhatsApp?{' '}
                                <a
                                    href="https://wa.me/94777399999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-extrabold text-green-600 hover:text-green-700"
                                >
                                    Chat with us directly
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}