import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesSection from '../components/home/ServicesSection';
import KDPSection from '../components/home/KDPSection';
import WhyUsSection from '../components/home/WhyUsSection';
import EServisSection from '../components/home/EServisSection';
import CTASection from '../components/home/CTASection';
import { homeContent } from '../content/home';
import useTranslation from '../hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <HeroSection content={homeContent.hero} />
      <StatsSection stats={[
                            { value: homeContent.stats[0], label: t('stats.label1') },
                            { value: homeContent.stats[1], label: t('stats.label2') },
                            { value: homeContent.stats[2], label: t('stats.label3') },
                            { value: homeContent.stats[3], label: t('stats.label4') },
                          ]} />
      <ServicesSection />
      <KDPSection />
      <WhyUsSection />
      <EServisSection />
      <CTASection content={homeContent.cta} />
    </div>
  );
}
