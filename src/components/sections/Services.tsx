'use client';

interface ServicesProps {}

const SERVICES = [
  {
    title: "Industrial Refrigeration Systems",
    description: "Design, installation, and maintenance of large-scale commercial and industrial refrigeration plants for food processing, pharmaceutical, and cold storage facilities.",
    trustIndicator: "Industrial-grade equipment",
    iconClass: "bg-gradient-to-br from-primary to-accent"
  },
  {
    title: "HVAC Installation & Commissioning",
    description: "Complete heating, ventilation, and air conditioning solutions for commercial buildings, factories, and industrial facilities with precision engineering.",
    trustIndicator: "15+ years expertise",
    iconClass: "bg-gradient-to-br from-primary to-primary-light"
  },
  {
    title: "Cold Room & Blast Freezer Solutions",
    description: "Custom cold storage rooms, blast freezers, and temperature-controlled environments with advanced monitoring and control systems.",
    trustIndicator: "Energy-efficient design",
    iconClass: "bg-gradient-to-br from-accent to-primary-dark"
  },
  {
    title: "Preventive Maintenance & Servicing",
    description: "Comprehensive maintenance programs, emergency repairs, and 24/7 technical support to ensure optimal system performance and reliability.",
    trustIndicator: "24/7 support available",
    iconClass: "bg-gradient-to-br from-primary-dark to-primary"
  },
  {
    title: "Energy Efficiency Consulting",
    description: "Professional energy audits, system optimization, and retrofit solutions to reduce operational costs and improve environmental compliance.",
    trustIndicator: "Certified auditors",
    iconClass: "bg-gradient-to-br from-primary-light to-accent"
  },
  {
    title: "Control System Integration",
    description: "Advanced automation and control system integration for seamless operation of refrigeration and HVAC equipment with real-time monitoring.",
    trustIndicator: "Industry-leading technology",
    iconClass: "bg-gradient-to-br from-accent to-primary-light"
  }
];

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Technical Support" }
];

export default function Services({}: ServicesProps) {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/5 border border-primary/15 transition-all duration-700 opacity-0 translate-y-3 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <span className="w-2 h-2 bg-accent rounded-full mr-2.5"></span>
            <span className="text-sm font-semibold text-primary-dark tracking-wide">
              Our Services
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark leading-tight mt-6 mb-6 transition-all duration-700 opacity-0 translate-y-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Engineering Excellence in 
            <span className="block text-primary">Industrial Refrigeration</span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-dark/70 leading-relaxed max-w-3xl mx-auto transition-all duration-700 opacity-0 translate-y-3 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            Specialized solutions designed for Sri Lanka's industrial and commercial sectors. 
            We deliver reliable, energy-efficient systems with precision engineering and proven expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white border border-neutral rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 opacity-0 translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white/90 rounded-sm"></div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-primary-dark mb-3">
                {service.title}
              </h3>
              
              <p className="text-primary-dark/70 leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Trust Indicator */}
              <div className="flex items-center text-sm text-primary/80 font-medium">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                {service.trustIndicator}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-neutral/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-dark mb-4">
              Trusted by Sri Lanka's Leading Industries
            </h3>
            <p className="text-primary-dark/70 max-w-2xl mx-auto">
              Our commitment to quality engineering and reliable service has made us the preferred partner 
              for industrial refrigeration solutions across the country.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center transition-all duration-700 opacity-0 translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-primary-dark/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(0.75rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </section>
  );
}
