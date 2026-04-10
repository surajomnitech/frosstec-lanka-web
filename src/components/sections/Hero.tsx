'use client';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background decorative elements - balanced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-36 -right-36 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-36 -left-36 w-72 h-72 bg-accent/2.5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-r from-primary/2.5 to-accent/2.5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-7 lg:space-y-9">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2.5 rounded-full bg-primary/5 border border-primary/10 transition-all duration-700 opacity-0 translate-y-3 animate-fade-in-up delay-100">
              <span className="w-2 h-2 bg-accent rounded-full mr-2.5"></span>
              <span className="text-sm font-semibold text-primary-dark tracking-wide">
                Industrial Refrigeration Excellence
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-dark leading-tight lg:leading-tight xl:leading-tight transition-all duration-700 opacity-0 translate-y-3 animate-fade-in-up delay-200 max-w-4xl">
              Advanced HVAC & 
              <span className="block text-primary mt-1">Refrigeration Solutions</span>
              <span className="block text-primary-dark/90 text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 font-normal">for Sri Lanka's Industries</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-primary-dark/70 leading-relaxed lg:leading-relaxed max-w-2xl transition-all duration-700 opacity-0 translate-y-3 animate-fade-in-up delay-300">
              Trusted provider of commercial and industrial refrigeration systems. 
              Energy-efficient solutions that power your business with reliability 
              and precision engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-700 opacity-0 translate-y-3 animate-fade-in-up delay-400 pt-2">
              <button 
                className="btn-primary group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 min-w-[140px]"
                aria-label="Get a project quote for industrial refrigeration services"
              >
                <span className="relative z-10 font-medium">Get a Quote</span>
              </button>
              
              <button 
                className="btn-secondary group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 min-w-[140px]"
                aria-label="View portfolio projects and case studies"
              >
                <span className="relative z-10 font-medium">View Projects</span>
              </button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto transition-all duration-1000 opacity-0 scale-95 animate-fade-in-scale delay-500">
              {/* Main visual card */}
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm border border-neutral/30 rounded-2xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl">
                {/* Content placeholder */}
                <div className="relative space-y-9">
                  {/* Header icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 bg-white/95 rounded-lg"></div>
                  </div>
                  
                  {/* Stats placeholders - structured for easy extraction */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="stat-card bg-white/50 backdrop-blur-sm rounded-xl p-5 text-center">
                      <div className="text-3xl font-bold text-primary-dark">500+</div>
                      <div className="text-sm font-medium text-primary-dark/70">Projects</div>
                    </div>
                    <div className="stat-card bg-white/50 backdrop-blur-sm rounded-xl p-5 text-center">
                      <div className="text-3xl font-bold text-primary-dark">15+</div>
                      <div className="text-sm font-medium text-primary-dark/70">Years</div>
                    </div>
                  </div>
                  
                  {/* Feature list */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2.5 h-2.5 bg-accent rounded-full"></div>
                      <div className="h-2.5 bg-white/70 rounded-full flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                      <div className="h-2.5 bg-white/70 rounded-full flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2.5 h-2.5 bg-primary-light rounded-full"></div>
                      <div className="h-2.5 bg-white/70 rounded-full flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements - optimized performance */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"></div>
            </div>
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

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
    </section>
  );
}
