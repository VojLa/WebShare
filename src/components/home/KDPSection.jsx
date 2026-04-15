import { motion } from 'framer-motion';
import { ShieldCheck, Award, Scale } from 'lucide-react';
import useTranslation from '../../hooks/useTranslation';

export default function KDPSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(ellipse 70% 50% at 80% 50%, hsl(43,70%,52%,0.06), transparent)`
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">Certifikace</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-6 text-foreground leading-tight">
              {t('services.kdp.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t('services.kdp.desc')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ing. Tereza Tirolová je členkou odborného kolegia při sekci daně z příjmu právnických osob u KDP ČR — poradce č. 5270. Ing. Aleš Coufal je externím daňovým poradcem č. 4561 a Ing. Martin Coufal externím auditorem a daňovým poradcem č. 1721.
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
            {[
              { icon: ShieldCheck, title: 'Daňové poradenství', desc: 'Komplexní služby v oblasti daňového poradenství a mezinárodního zdanění.' },
              { icon: Award, title: 'Daňová optimalizace', desc: 'Plánování a optimalizace daňové zátěže pro fyzické i právnické osoby.' },
              { icon: Scale, title: 'Zastoupení', desc: 'Zastupujeme vás při daňových kontrolách, sporech a opravných prostředcích.' },
            ].map(({ icon: Icon, title, desc }, i) => (
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
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}