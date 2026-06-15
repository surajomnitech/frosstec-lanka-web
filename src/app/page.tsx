import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import WhoWeAre from './components/sections/WhoWeAre';
import Services from './components/sections/Services';
import Industries from './components/sections/Industries';
import EquipmentSection from './components/sections/Equipment';
import WhyChooseUs from './components/sections/WhyChooseUs';
import AboutUs from './components/sections/AboutUs';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import MobileFloatingCTA from './components/MobileFloatingCTA';


export default function Home() {
  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <Header />
      <Hero />
      <TrustBar />
      <WhoWeAre />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <Industries />
      <EquipmentSection />
      <ContactSection />
      <Footer />
      <MobileFloatingCTA />
    </main>
  );
}