'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      title: "Hospitality",
      subtitle: "Commercial Refrigeration Solutions",
      description: "Reliable refrigeration solutions for hotels, restaurants, catering operations, and hospitality businesses that require consistent cooling performance.",
      image: "/images/industries/industry-hospitality.jpg"
    },
    {
      title: "Supermarkets",
      subtitle: "Commercial Refrigeration Solutions",
      description: "Energy-efficient display cases, walk-in coolers and freezers designed for high-traffic retail environments with 24/7 reliability.",
      image: "/images/industries/industry-supermarket.jpg"
    },
    {
      title: "Retail",
      subtitle: "Commercial Refrigeration Solutions",
      description: "Modern display refrigeration, beverage coolers, and backup systems for retail stores, convenience stores, and specialty shops.",
      image: "/images/industries/industry-retail.jpg"
    },
    {
      title: "Distribution",
      subtitle: "Commercial Refrigeration Solutions",
      description: "Large-scale cold storage, warehouse refrigeration, and logistics cooling solutions for distribution centers and supply chain operations.",
      image: "/images/industries/industry-distribution.jpg"
    },
    {
      title: "Seafood",
      subtitle: "Commercial Refrigeration Solutions",
      description: "Specialized seafood processing refrigeration, blast freezers, and ice machines meeting stringent food safety and quality standards.",
      image: "/images/industries/industry-seafood.jpg"
    },
    {
      title: "Food Processing",
      subtitle: "Commercial Refrigeration Solutions",
      description: "Industrial-grade refrigeration systems for food processing plants, slaughterhouses, and large-scale food production facilities.",
      image: "/images/industries/industry-food-processing.jpg"
    },
    {
      title: "Commercial Kitchens",
      subtitle: "Commercial Refrigeration Solutions",
      description: "Professional kitchen refrigeration, prep station cooling, and walk-in freezer solutions for restaurants, hotels, and food service establishments.",
      image: "/images/industries/industry-commercial-kitchen.jpg"
    },
    {
      title: "Cold Storage",
      subtitle: "Commercial Refrigeration Solutions",
      description: "Comprehensive cold room construction, large-scale freezer facilities, and temperature-controlled warehouse solutions.",
      image: "/images/industries/industry-cold-storage.jpg"
    }
  ];

  return (
    <section id="industries" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full 
bg-primary/5 
border border-primary/15 
shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
backdrop-blur-xl 
mb-5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
            <span className="text-primary font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.2em]">
              INDUSTRIES WE SERVE
            </span>
          </div>

          <h2 className="text-[clamp(1.95rem,4vw,2.75rem)] font-extrabold text-primary mb-5 leading-[1.15] max-w-[28ch] mx-auto">
            Trusted Across Multiple Industries
          </h2>

          <p className="text-[1.0625rem] text-gray-600 leading-[1.75] max-w-[65ch] mx-auto">
            We provide commercial refrigeration solutions for a wide range of industries that depend on reliable cooling, storage, and temperature-controlled environments.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: '3/2' }}
            >
              <Image
                src={industry.image}
                alt={`${industry.title} - Frosstec commercial refrigeration solutions`}
                fill
                className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1630]/82 via-[#0E1630]/30 to-transparent/15 group-hover:from-[#0E1630]/90 transition-all duration-[220ms]"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-4 pb-3.5">
                <h3 className="text-[0.95rem] font-bold text-white leading-tight">
                  {industry.title}
                </h3>
                <p className="text-[0.72rem] text-white/60 mt-0.5">
                  {industry.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-18 lg:mt-20">
          <a
            href="#contact"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/20 group"
          >
            <span>Discuss Your Industry Requirements</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}