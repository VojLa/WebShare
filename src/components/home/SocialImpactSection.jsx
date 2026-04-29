import { motion } from 'framer-motion';
import { HeartHandshake, Scale } from 'lucide-react';
import useTranslation from '../../hooks/useTranslation';
import { homeContent } from '@/content/home';
import charitaLogo from '@/assets/Charita_Ceska-republiky.png';
import dobryAndelLogo from '@/assets/DobryAndel.png';

const cardIcons = {
  item1: HeartHandshake,
  item2: Scale,
};

export default function SocialImpactSection() {
  const { t } = useTranslation();

  return (
    <section id="social-impact" className="relative py-24 overflow-hidden bg-gradient-to-b lg:bg-gradient-to-r from-background via-primary/25 to-primary/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
              {t('social_impact.subtitle')}
            </span>

            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-5 text-foreground leading-tight">
              {t('social_impact.title')}
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              {t('social_impact.desc')}
            </p>

            <div className="flex flex-wrap gap-8">
              {homeContent.socialImpact.cards.map((key, index) => {
                const Icon = cardIcons[key];
                return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="flex-1 min-w-[16rem] rounded-3xl border border-border bg-card/80 backdrop-blur-sm p-8 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground">
                    {t(`social_impact.${key}.title`)}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`social_impact.${key}.desc`)}
                </p>
              </motion.article>
                );
              })}
            </div>
          </motion.div>

          {/* Right — 2 karty */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-16 lg:self-end lg:justify-items-end">
            <img
                src={charitaLogo}
                alt="Charita České republiky"
                className="h-32 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
              <img
                src={dobryAndelLogo}
                alt="Dobrý anděl"
                className="h-32 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
          </div>

        </div>
      </div>
    </section>
  );
}
