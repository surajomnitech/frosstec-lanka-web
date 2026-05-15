'use client';

import { Zap, ShieldCheck, Cog, Users, TrendingUp, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Zap,
      title: "Rapid Response",
      description: "We act fast to reduce downtime and keep your business running."
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Transparency",
      description: "Honest service, fair practices and clear communication."
    },
    {
      icon: Cog,
      title: "Tailored Solutions",
      description: "We design solutions that fit your business and your space."
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority, always."
    },
    {
      icon: TrendingUp,
      title: "Efficiency",
      description: "We work smart to deliver effective results with minimal disruption."
    },
    {
      icon: Handshake,
      title: "Long-Term Partnerships",
      description: "Committed to your success. Together, we grow."
    }
  ];

  return (
    <section id="why-choose" className="py-20 lg:py-24 bg-gradient-to-b from-[#071B3A] to-[#031225]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full 
bg-[#04142D]/98 
border border-[#ff7a45]/40 
shadow-[0_8px_30px_rgba(0,0,0,0.45)] 
backdrop-blur-xl 
mb-4"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff7a45] shadow-[0_0_12px_rgba(255,122,69,0.9)]"></span>
            <span className="text-[#ff7a45] font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.2em]">
              WHY CHOOSE FROSSTEC
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8 lg:gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center px-4 sm:px-5 py-6 sm:py-7 relative"
            >
              {/* Vertical Divider - Hidden on mobile, shown on lg+ */}
              {index < features.length - 1 && (
                <div className="hidden xl:block absolute right-0 top-[15%] bottom-[15%] w-px bg-white/10"></div>
              )}

              {/* Icon */}
              <div className="w-11 h-11 mx-auto mb-3.5 rounded-[10px] bg-white/10 flex items-center justify-center transition-colors duration-[220ms]">
                <feature.icon className="w-[22px] h-[22px] text-white" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-[0.875rem] font-bold text-white mb-2 leading-[1.3]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-[0.75rem] leading-[1.55]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}