'use client';

import Image from 'next/image';
import {
  MessageSquare,
  ShieldCheck,
  Snowflake,
  ThermometerSnowflake,
  Warehouse,
  Wrench,
} from 'lucide-react';
import { SectionPill } from '../ui/SectionPill';

const services = [
  {
    icon: Wrench,
    title: 'Emergency Repairs',
    description:
      'Emergency repairs 24/7 to get you up and running as quickly as possible and minimise business interruption.',
    image: '/images/services/service-emergency-repair.jpg',
  },
  {
    icon: ShieldCheck,
    title: 'Service & Preventative Maintenance',
    description:
      'Scheduled maintenance programs to improve equipment reliability and reduce un-anticipated breakdowns.',
    image: '/images/services/service-maintenance.jpg',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Custom Design & Installation',
    description:
      'Customized refrigeration solutions, from consultation to full installation, created especially for your business requirements.',
    image: '/images/services/service-installation.jpg',
  },
  {
    icon: Warehouse,
    title: 'Equipment Sales',
    description:
      'High-end commercial refrigeration products from top manufacturers, with professional advice and affordable prices.',
    image: '/images/services/service-equipment-sales.jpg',
  },
  {
    icon: Snowflake,
    title: 'Cold Room & Freezer Room Solutions',
    description:
      'Large-scale cold storage options, such as freezers, walk-in coolers, and specially designed cold rooms.',
    image: '/images/services/service-cold-room.jpg',
  },
  {
    icon: MessageSquare,
    title: 'Expert Advice & Guidance',
    description:
      'Helpful advice on equipment recommendations, service planning, and system suitability tailored to your business requirements.',
    image: '/images/services/service-consultation.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">

          <SectionPill variant="light">OUR SERVICES</SectionPill>
          <h2 className="text-[clamp(1.95rem,4vw,2.75rem)] font-extrabold text-primary-dark mb-5 leading-[1.15] max-w-[29ch] mx-auto">
            Complete Commercial Refrigeration Services
          </h2>

          <p className="text-[1.0625rem] text-gray-600 leading-[1.75] max-w-[65ch] mx-auto">
            Whether it’s emergency repairs, scheduled maintenance, or custom design and installation, we have solutions to keep your business running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group bg-white rounded-2xl border border-primary/10 shadow-[0_6px_24px_rgba(39,58,115,0.08)] hover:shadow-[0_18px_44px_rgba(39,58,115,0.16)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden"
              >
                <div className="relative h-[220px] overflow-hidden bg-deep-navy">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Frosstec Lanka`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/50 via-transparent to-transparent" />
                </div>

                <div className="relative p-6 sm:p-7">
                  <div className="absolute -top-7 left-6 w-14 h-14 rounded-2xl bg-white border border-primary/10 shadow-[0_10px_26px_rgba(39,58,115,0.16)] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={2.3} />
                  </div>

                  <div className="pt-7">
                    <h3 className="text-[1.05rem] font-extrabold text-primary-dark mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-[0.95rem] text-gray-600 leading-[1.7]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}