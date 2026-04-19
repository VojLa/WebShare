import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesSection from '../components/home/ServicesSection';
import KDPSection from '../components/home/KDPSection';
import WhyUsSection from '../components/home/WhyUsSection';
import ContactForm from '@/components/home/ContactForm';
import { homeContent } from '../content/home';
import useTranslation from '../hooks/useTranslation';
import ReferencesSection from '@/components/home/ReferencesSection';
import FlexibilitySection from '@/components/home/FlexibilitySection';
import SocialImpactSection from '@/components/home/SocialImpactSection';

export default function Home() {
  const { t } = useTranslation();
  const stats = homeContent.stats.map((item) => ({
    value: item.value,
    label: t(item.labelKey),
  }));

  return (
    <div>
      <HeroSection/>
      <StatsSection stats={stats} />
      <ServicesSection />
      <KDPSection />
      <WhyUsSection />
      <ContactForm/>
      <ReferencesSection />
      <FlexibilitySection />
      <SocialImpactSection />
    </div>
  );
}
