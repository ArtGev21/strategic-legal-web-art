import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PracticeAreasSection from '@/components/PracticeAreasSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}