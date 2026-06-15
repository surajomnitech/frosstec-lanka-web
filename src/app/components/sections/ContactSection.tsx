'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Users, Award } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Placeholder for future backend integration
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({
                name: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            });

            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 lg:py-24 bg-[#F0F4FA]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN - Contact Info */}
                    <div className="space-y-8">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full 
bg-primary/5 
border border-primary/15 
shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
backdrop-blur-xl"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                            <span className="text-primary font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.2em]">
                                CONTACT US
                            </span>
                        </div>

                        {/* Heading */}
                        <div>
                            <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold text-primary mb-4 leading-[1.15]">
                                Need Reliable Refrigeration Support?
                            </h2>
                            <p className="text-[1.0625rem] text-gray-600 leading-[1.75] max-w-[50ch]">
                                Whether it's an emergency breakdown, preventative maintenance, or a new installation, our team is ready to help.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {/* Hotline with Emergency Badge - DOMINANT CARD */}
                            <div className="relative bg-[#0F2548] rounded-xl border border-[#0F2548] p-6 shadow-[0_4px_24px_rgba(15,37,72,0.25)] hover:shadow-[0_6px_32px_rgba(15,37,72,0.35)] transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(224,92,26,0.3)]">
                                        <Phone className="w-6 h-6 text-white" strokeWidth={2.5} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <h3 className="text-sm font-bold text-white/90 uppercase tracking-wide">24/7 Hotline</h3>
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#04142D] border border-[#ff7a45]/40 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                                                <span className="w-2 h-2 rounded-full bg-[#ff7a45] shadow-[0_0_12px_rgba(255,122,69,0.9)] flex-shrink-0"></span>
                                                <span className="text-[0.65rem] font-extrabold text-[#ff7a45] uppercase tracking-[0.2em]">Emergency Support</span>
                                            </span>
                                        </div>
                                        <a href="tel:0777399999" className="text-2xl font-extrabold text-white hover:text-accent transition-colors duration-300 block">
                                            077 739 9999
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="bg-white rounded-xl border border-gray-200/60 p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-5 h-5 text-green-600" strokeWidth={2.2} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xs font-bold text-primary uppercase tracking-wide mb-1">WhatsApp</h3>
                                        <a
                                            href="https://wa.me/94777399999"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[0.9375rem] font-semibold text-gray-900 hover:text-green-600 transition-colors duration-300"
                                        >
                                            Direct WhatsApp Support
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-white rounded-xl border border-gray-200/60 p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-primary" strokeWidth={2.2} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Email</h3>
                                        <a
                                            href="mailto:info@frossteclanka.lk"
                                            className="text-[0.9375rem] font-semibold text-gray-900 hover:text-primary transition-colors duration-300 break-all"
                                        >
                                            info@frossteclanka.lk
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="bg-white rounded-xl border border-gray-200/60 p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" strokeWidth={2.2} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Location</h3>
                                        <a
                                            href="https://maps.google.com/?q=219+Station+Road+Udahamulla+Nugegoda+Sri+Lanka"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[0.9375rem] font-semibold text-gray-900 hover:text-primary transition-colors duration-300"
                                        >
                                            219, Station Road, Udahamulla, Nugegoda
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Indicators - Premium Card Wrapper */}
                        <div className="bg-white rounded-xl border border-gray-200/60 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-4.5 h-4.5 text-primary" strokeWidth={2.2} />
                                    </div>
                                    <span className="text-[0.8125rem] font-semibold text-gray-700 leading-tight">Fast Response</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-4.5 h-4.5 text-primary" strokeWidth={2.2} />
                                    </div>
                                    <span className="text-[0.8125rem] font-semibold text-gray-700 leading-tight">Experienced<br className="sm:hidden" /> Technicians</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Award className="w-4.5 h-4.5 text-primary" strokeWidth={2.2} />
                                    </div>
                                    <span className="text-[0.8125rem] font-semibold text-gray-700 leading-tight">Commercial<br className="sm:hidden" /> Specialists</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Contact Form */}
                    <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
                        <div className="bg-white rounded-2xl border border-gray-200/60 p-6 sm:p-8 shadow-[0_6px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-primary mb-6">Request a Call Back</h3>

                            {showSuccess && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-sm font-semibold text-green-800">Thank you! We'll contact you shortly.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
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

                                {/* Company Name */}
                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
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

                                {/* Phone Number */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
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

                                {/* Service Requirement */}
                                <div>
                                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Service Requirement
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-900"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="emergency">Emergency Repair</option>
                                        <option value="maintenance">Preventative Maintenance</option>
                                        <option value="installation">New Installation</option>
                                        <option value="consultation">Consultation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-900 resize-none"
                                        placeholder="Tell us about your refrigeration needs..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent text-white px-8 py-3.5 rounded-lg text-base font-bold tracking-wide
                                    shadow-[0_3px_16px_rgba(224,92,26,0.35)] 
                                    hover:shadow-[0_5px_24px_rgba(224,92,26,0.45)] 
                                    hover:bg-[#D35419] 
                                    active:scale-[0.98] 
                                    transition-all duration-300 ease-out
                                    focus:outline-none focus:ring-2 focus:ring-accent/30
                                    disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Request a Call Back'}
                                </button>

                                {/* WhatsApp Helper */}
                                <div className="text-center pt-2">
                                    <p className="text-sm text-gray-600">
                                        Prefer WhatsApp?{' '}
                                        <a
                                            href="https://wa.me/94777399999"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-semibold text-green-600 hover:text-green-700 transition-colors duration-300"
                                        >
                                            Chat with us directly
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
