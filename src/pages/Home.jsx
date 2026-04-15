import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesSection from '../components/home/ServicesSection';
import KDPSection from '../components/home/KDPSection';
import WhyUsSection from '../components/home/WhyUsSection';
import EServisSection from '../components/home/EServisSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <KDPSection />
      <WhyUsSection />
      <EServisSection />
      <CTASection />
    </div>
  );
}