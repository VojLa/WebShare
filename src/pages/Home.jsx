import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesSection from '../components/home/ServicesSection';
import KDPSection from '../components/home/KDPSection';
import WhyUsSection from '../components/home/WhyUsSection';
import EServisSection from '../components/home/EServisSection';
import CTASection from '../components/home/CTASection';
import { homeContent } from '../content/home';

export default function Home() {
  return (
    <div>
      <HeroSection content={homeContent.hero} />
      <StatsSection stats={homeContent.stats} />
      <ServicesSection />
      <KDPSection />
      <WhyUsSection />
      <EServisSection />
      <CTASection content={homeContent.cta} />
    </div>
  );
}
