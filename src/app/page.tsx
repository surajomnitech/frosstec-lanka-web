import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Projects from '@/components/sections/Projects';
import Stats from '@/components/sections/Stats';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}
