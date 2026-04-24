import { motion } from 'framer-motion';
import { ShieldCheck, Award, Scale } from 'lucide-react';
import useTranslation from '../../hooks/useTranslation';
import { homeContent } from '@/content/home';

const kdpIcons = {
  item1: ShieldCheck,
  item2: Award,
  item3: Scale,
}

export default function KDPSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
              {t('certification')}
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-6 text-foreground leading-tight">
              {t('services.kdp.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('services.kdp.desc')}
            </p>
          </motion.div>

          {/* Right — feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {homeContent.kdpItems.map((itemKey, i) => {
              const Icon = kdpIcons[itemKey]
              const title = t(`services.kdp.${itemKey}.title`)
              const desc = t(`services.kdp.${itemKey}.desc`)

              return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-5 p-6 rounded-2xl border border-border hover:border-primary/30 bg-card hover:bg-secondary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                  <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">{title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
