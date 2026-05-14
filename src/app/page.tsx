import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import WhoWeAre from './components/sections/WhoWeAre';
import Services from './components/sections/Services';
import Industries from './components/sections/Industries';
import EquipmentSection from './components/sections/Equipment';
import WhyChooseUs from './components/sections/WhyChooseUs';
import AboutUs from './components/sections/AboutUs';
import Footer from './components/sections/Footer';

const CTA = () => (
  <section className="py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="relative bg-gradient-to-r from-primary to-[#071B3A] rounded-[32px] shadow-2xl overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/50 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative py-16 lg:py-20 px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Ensure Your<br />Business Stays Cool?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a consultation or emergency service. Our team is standing by
            to provide the reliable refrigeration solutions your business depends on.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0777399999"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent/90 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Call 077 739 9999
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <WhoWeAre />
      <Services />
      <Industries />
      <EquipmentSection />
      <WhyChooseUs />
      <AboutUs />
      <CTA />
      <Footer />
    </main>
  );
}