import { motion } from 'framer-motion';
import { Smartphone, Mail, Archive, ArrowRight } from 'lucide-react';
import useTranslation from '../../hooks/useTranslation';
import { homeContent } from '@/content/home';

const methodIcons = {
  mobile: Smartphone,
  email: Mail,
  paper: Archive,
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function FlexibilitySection() {
  const { t } = useTranslation();

  return (
    <section id="documents-flexibility" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -left-16 top-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
            {t('documents_flexibility.subtitle')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-5 text-foreground leading-tight">
            {t('documents_flexibility.title')}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('documents_flexibility.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {homeContent.flexibility.methods.map((key, i) => {
            const Icon = methodIcons[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-border bg-card p-7 shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {t(`documents_flexibility.method.${key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`documents_flexibility.method.${key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-secondary/30 p-7 mb-10"
        >
          <p className="text-sm font-semibold text-foreground/70 uppercase tracking-widest mb-4">
            {t('documents_flexibility.process.title')}
          </p>
          <ol className="space-y-3">
            {homeContent.flexibility.steps.map((key, i) => (
              <li key={key} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {t(`documents_flexibility.${key}`)}
              </li>
            ))}
          </ol>
        </motion.div>

        <div className="text-center">
          <button
            onClick={() => scrollTo('poptavka')}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 font-semibold rounded-xl transition-colors"
          >
            {t('documents_flexibility.cta')}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
