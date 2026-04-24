import { useState } from 'react';
import useTranslation from '../../hooks/useTranslation';
import { Bell, BarChart2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { homeContent } from '@/content/home';

const pillarIcons = {
  proactivity: Bell,
  overview: BarChart2,
  flexibility: Layers,
};

function Pillar({ pillarKey, index, t }) {
  const [active, setActive] = useState(false);
  const Icon = pillarIcons[pillarKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative cursor-pointer select-none"
      onPointerEnter={(e) => { if (e.pointerType !== 'touch') setActive(true); }}
      onPointerLeave={(e) => { if (e.pointerType !== 'touch') setActive(false); }}
      onClick={() => setActive(v => !v)}
    >
      {/* Neviditelný spacer — rezervuje plnou výšku */}
      <div className="invisible p-8 flex flex-col items-center text-center" aria-hidden="true">
        <div className="w-12 h-12 mb-6" />
        <h3 className="text-xl font-heading font-bold mb-4">{t(`why_us.${pillarKey}.title`)}</h3>
        <div className="w-full">
          <p className="text-sm leading-relaxed mb-4">{t(`why_us.${pillarKey}.desc`)}</p>
          <p className="text-xs leading-relaxed border-t pt-4">{t(`why_us.${pillarKey}.example`)}</p>
        </div>
      </div>

      {/* Karta — zakotvená dole, roste nahoru; ikona+titulek se zvedají s horním okrajem */}
      <div
        className={`absolute inset-x-0 bottom-0 rounded-3xl border overflow-hidden flex flex-col items-center text-center p-8 transition-colors duration-300 ${
          active ? 'border-primary/50 bg-primary/5' : 'border-border bg-card'
        }`}
      >
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
          active ? 'bg-primary' : 'bg-primary/10 border border-primary/20'
        }`}>
          <Icon className={`h-5 w-5 transition-colors duration-300 ${
            active ? 'text-primary-foreground' : 'text-primary'
          }`} />
        </div>

        <h3 className="text-xl font-heading font-bold text-foreground">
          {t(`why_us.${pillarKey}.title`)}
        </h3>

        <motion.div
          initial={false}
          animate={{ height: active ? 'auto' : 0, opacity: active ? 1 : 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full overflow-hidden"
        >
          <div className="mt-4">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {t(`why_us.${pillarKey}.desc`)}
            </p>
            <p className="text-xs text-primary/80 italic leading-relaxed border-t border-border pt-4">
              {t(`why_us.${pillarKey}.example`)}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function WhyUsSection() {
  const { t } = useTranslation();

  return (
    <section id="why-us" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -right-40 top-1/2 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute -left-20 bottom-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
            {t('why_us.badge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-5 text-foreground leading-tight">
            {t('why_us.title')}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('why_us.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeContent.whyUs.pillars.map((key, i) => (
            <Pillar key={key} pillarKey={key} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
