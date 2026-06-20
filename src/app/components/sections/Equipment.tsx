'use client';

import Image from 'next/image';
import { SectionPill } from '../ui/SectionPill';

export default function Equipment() {
  const equipmentItems = [
    {
      title: "Commercial Freezers",
      image: "/images/equipment/equipment-commercial-freezer.png"
    },
    {
      title: "Commercial Fridges",
      image: "/images/equipment/equipment-commercial-fridge.png"
    },
    {
      title: "Ice Machines",
      image: "/images/equipment/equipment-ice-machine.png"
    },
    {
      title: "Under-Bench Units",
      image: "/images/equipment/equipment-underbench-unit.png"
    },
    {
      title: "Display Fridges",
      image: "/images/equipment/equipment-display-fridge.png"
    },
    {
      title: "Walk-In Cold Rooms",
      image: "/images/equipment/equipment-cold-room.png"
    },
    {
      title: "Walk-In Freezer Rooms",
      image: "/images/equipment/equipment-freezer-room.png"
    },
    {
      title: "Ice Cream Machines",
      image: "/images/equipment/equipment-ice-cream-machine.png"
    }
  ];

  return (

    <section id="equipment" className="pt-24 lg:pt-28 pb-20 lg:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <SectionPill variant="light">EQUIPMENT WE HANDLE</SectionPill>
          {/* Heading */}
          <h2 className="text-[clamp(1.95rem,4vw,2.75rem)] font-extrabold text-primary mb-5 leading-[1.15] max-w-[28ch] mx-auto">
            We Service All Types of<br />
            Commercial Refrigeration Equipment
          </h2>

          {/* Subheading */}
          <p className="text-[1.0625rem] text-gray-600 leading-[1.75] max-w-[65ch] mx-auto">
            Our expertise covers a wide range of commercial refrigeration equipment used across restaurants,
            supermarkets, hotels, retail outlets, distribution centers, and processing facilities.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-14">
          {equipmentItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-primary/12 hover:border-accent/55 shadow-[0_8px_24px_rgba(39,58,115,0.08)] hover:shadow-[0_16px_42px_rgba(39,58,115,0.16)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden flex flex-col h-full"
            >
              {/* Image Container - Increased Height & Refined Padding */}
              <div className="h-[175px] bg-gradient-to-b from-[#F3F6FB] to-white p-6 flex items-center justify-center border-b border-primary/8">
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-[1.06] transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>

              {/* Title - Improved Spacing */}
              <div className="p-5 pt-4 text-center flex-1 flex items-center justify-center">
                <h3 className="text-primary font-bold text-[0.9rem] leading-[1.35] group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}