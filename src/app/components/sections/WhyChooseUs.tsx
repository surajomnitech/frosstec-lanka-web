'use client';

import {
  Clock3,
  Cog,
  MessageSquare,
  ShieldCheck,
  Snowflake,
  Wrench,
} from 'lucide-react';
import { SectionPill } from '../ui/SectionPill';

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: Clock3,
      title: 'Prompt Breakdown Response',
      description:
        'Prompt assistance when company continuity is impacted by refrigeration problems.',
    },
    {
      icon: Wrench,
      title: 'Every Major Brand and Model',
      description:
        'Experience providing service for a variety of commercial refrigeration equipment.',
    },
    {
      icon: ShieldCheck,
      title: 'Preventative Maintenance Planning',
      description:
        'Planned maintenance assistance to cut down on unplanned malfunctions and downtime.',
    },
    {
      icon: Snowflake,
      title: 'Cold Room & Freezer Room Expertise',
      description:
        'Useful assistance for temperature-controlled areas, freezer rooms, and cold rooms.',
    },
    {
      icon: Cog,
      title: 'Practical Service Recommendations',
      description:
        'Rather than using a one-size-fits-all strategy, provide clear instructions based on what your system requires.',
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description:
        'Quick updates, service descriptions, and assistance for every task.',
    },
  ];

  return (
    <section
      id="why-choose"
      className="pt-8 lg:pt-10 pb-14 lg:pb-16 bg-deep-navy"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <SectionPill variant="dark">WHY CHOOSE FROSSTEC</SectionPill>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8 lg:gap-0">
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="text-center px-4 sm:px-5 py-6 sm:py-7 relative"
              >
                {index < differentiators.length - 1 && (
                  <div className="hidden xl:block absolute right-0 top-[15%] bottom-[15%] w-px bg-white/10" />
                )}

                <div className="w-11 h-11 mx-auto mb-3.5 rounded-[10px] bg-white/10 flex items-center justify-center">
                  <Icon
                    className="w-[22px] h-[22px] text-white"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-[0.875rem] font-bold text-white mb-2 leading-[1.3]">
                  {item.title}
                </h3>

                <p className="text-white/50 text-[0.75rem] leading-[1.55]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}