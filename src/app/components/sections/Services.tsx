'use client';

import Image from 'next/image';
import { Wrench, ShieldCheck, Snowflake, Warehouse, ThermometerSnowflake, MessageSquare } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Emergency Repairs",
      description: "24/7 emergency repair services designed to minimise downtime and restore business operations quickly.",
      image: "/images/services/service-emergency-repair.jpg"
    },
    {
      icon: ShieldCheck,
      title: "Service & Preventative Maintenance",
      description: "Planned maintenance programs designed to maximise equipment performance and reduce unexpected breakdowns.",
      image: "/images/services/service-maintenance.jpg"
    },
    {
      icon: ThermometerSnowflake,
      title: "Custom Design & Installation",
      description: "Tailored refrigeration solutions designed specifically for your business needs, from consultation to complete installation.",
      image: "/images/services/service-installation.jpg"
    },
    {
      icon: Warehouse,
      title: "Equipment Sales",
      description: "Premium commercial refrigeration equipment from leading brands, with expert guidance and competitive pricing.",
      image: "/images/services/service-equipment-sales.jpg"
    },
    {
      icon: Snowflake,
      title: "Cold Room & Freezer Room Solutions",
      description: "Large-scale cold storage solutions including walk-in coolers, freezers, and specialized cold room construction.",
      image: "/images/services/service-cold-room.jpg"
    },
    {
      icon: MessageSquare,
      title: "Expert Advice & Guidance",
      description: "Professional consultation services for system optimization, energy efficiency, and regulatory compliance.",
      image: "/images/services/service-consultation.jpg"
    }
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-[#071B3A] to-[#031225] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full 
bg-[#04142D]/98 
border border-[#ff7a45]/40 
shadow-[0_8px_30px_rgba(0,0,0,0.45)] 
backdrop-blur-xl 
mb-5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff7a45] shadow-[0_0_12px_rgba(255,122,69,0.9)]"></span>
            <span className="text-[#ff7a45] font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.2em]">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-[clamp(1.95rem,4vw,2.75rem)] font-extrabold text-white mb-5 leading-[1.15] max-w-[28ch] mx-auto">
            Comprehensive Commercial Refrigeration Services
          </h2>

          <p className="text-[1.0625rem] text-white/70 leading-[1.75] max-w-[65ch] mx-auto">
            From emergency repairs and scheduled maintenance to custom design and installation, we deliver solutions to keep your business running smoothly.
          </p>
        </div>

        {/* Services Grid */}
        // In Services.tsx - update card styling

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#111D3C] rounded-xl border border-white/[0.06] hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-[1.05rem] font-bold text-white mb-2 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[0.875rem] text-white/55 leading-[1.65]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}