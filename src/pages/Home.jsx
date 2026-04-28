import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ServicesSection from '../components/home/ServicesSection';
import TakeoverSection from '../components/home/TakeoverSection';
import WhyUsSection from '../components/home/WhyUsSection';
import ReferencesSection from '@/components/home/ReferencesSection';
import FlexibilitySection from '@/components/home/FlexibilitySection';
import FAQSection from '@/components/home/FAQSection';
import ContactForm from '@/components/home/ContactForm';
import SocialImpactSection from '@/components/home/SocialImpactSection';
import KDPSection from '@/components/home/KDPSection';
import VideoSection from '@/components/home/Video';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <VideoSection />
      <ServicesSection />
      <TakeoverSection />
      <WhyUsSection />
      <ReferencesSection />
      <FlexibilitySection />
      <FAQSection />
      <ContactForm />
      <KDPSection />
      <SocialImpactSection />
    </div>
  );
}
