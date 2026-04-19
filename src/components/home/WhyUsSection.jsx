import useTranslation from '../../hooks/useTranslation';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SERVICES_IMAGE from '@/assets/Portret.jpg';
import SERVICES_IMAGE_MOBILE from '@/assets/Portret_mobile.jpg';
import KDP_Image from '@/assets/KDPČR - BLUE.svg';
import KA_Image from '@/assets/KAČR - BLUE.svg';


export default function WhyUsSection() {
  const { t } = useTranslation();
  const items = Array.from({ length: 5 }, (_, i) => t(`why_us.item${i + 1}`));

  return (
    <section id="why-us" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -right-40 top-1/2 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute -left-20 bottom-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 min-[850px]:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 min-[850px]:order-1 max-w-10xl min-[850px]:max-w-auto mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <picture>
                <source media="(min-width: 850px)" srcSet={SERVICES_IMAGE} />
                <source media="(max-width: 850px)" srcSet={SERVICES_IMAGE_MOBILE} />
                <img src={SERVICES_IMAGE} alt="Ing. Tereza Tirolová" className="w-full h-auto object-cover" />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -inset-px rounded-3xl border border-primary/20 pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 left-[-1rem] -translate-x-1/2 min-[850px]:left-auto min-[850px]:right-[-1rem] min-[850px]:translate-x-0 bg-card border border-border rounded-2xl p-3 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <img src={KDP_Image} alt="KDP Logo" className="w-16 h-16" />
                  <img src={KA_Image} alt="KA Logo" className="w-16 h-16 mt-2" />
                </div>
              </motion.div>
          </motion.div>

          <div className="order-1 min-[850px]:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
                {t('about_us.title')}
              </span>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-4 text-foreground leading-tight">
                {t('why_us.title')}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                {t('why_us.subtitle')}
              </p>
            </motion.div>

            <div className="space-y-3">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/60 transition-colors group"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-foreground/80 leading-relaxed">{t(item)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
