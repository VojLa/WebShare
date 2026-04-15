import { motion } from 'framer-motion';
import { Monitor, ArrowRight, Zap, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useTranslation from '../../hooks/useTranslation';

export default function EServisSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 overflow-hidden bg-secondary/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl bg-card border border-border p-10 shadow-2xl overflow-hidden">
              {/* Decorative gold glow */}
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-primary/8 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">e-servis.bestaccount.cz</span>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Daňové poradenství', status: 'Online' },
                    { label: 'Odeslání dokladů', status: 'Aktivní' },
                    { label: 'Konzultace na dálku', status: 'Online' },
                    { label: 'Daňová přiznání', status: 'Dostupné' },
                  ].map(({ label, status }) => (
                    <div key={label} className="flex items-center justify-between p-4 rounded-xl bg-secondary/60 border border-border/50">
                      <span className="text-sm text-foreground/80">{label}</span>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -inset-px rounded-3xl border border-primary/10 pointer-events-none" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">Digitální kancelář</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-4 text-foreground leading-tight">
              {t('services.eservis.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t('services.eservis.desc')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Máte tak možnost komunikovat vzdáleně s daňovou kanceláří, která je schopna vyřešit jakýkoliv váš problém včas a s maximální efektivitou.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Zap, text: 'Okamžitá odpověď na vaše dotazy' },
                { icon: Globe, text: 'Dostupnost odkudkoliv, kdykoliv' },
                { icon: Clock, text: 'Rychlé vyřízení bez osobní návštěvy' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            <a href="https://grafikavitkov.typeform.com/to/kFBps4" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 font-bold rounded-xl gap-2 shadow-lg shadow-primary/20 group">
                Spustit E-servis
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}