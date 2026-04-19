import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesSection from '../components/home/ServicesSection';
import KDPSection from '../components/home/KDPSection';
import WhyUsSection from '../components/home/WhyUsSection';
import ContactForm from '@/components/home/ContactForm';
import CTASection from '../components/home/CTASection';
import { homeContent } from '../content/home';
import useTranslation from '../hooks/useTranslation';
import ReferencesSection from '@/components/home/ReferencesSection';
import FlexibilitySection from '@/components/home/FlexibilitySection';
import SocialImpactSection from '@/components/home/SocialImpactSection';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div >
      <HeroSection/>
      <StatsSection stats={[
                            { value: homeContent.stats[0], label: t('stats.label1') },
                            { value: homeContent.stats[1], label: t('stats.label2') },
                            { value: homeContent.stats[2], label: t('stats.label3') },
                            { value: homeContent.stats[3], label: t('stats.label4') },
                          ]} />
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
