import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import useTranslation from '../../hooks/useTranslation';

const referenceKeys = ['item1', 'item2', 'item3'];

export default function ReferencesSection() {
  const { t } = useTranslation();

  return (
    <section id="references" className="relative py-24 bg-secondary/20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
            {t('references.subtitle')}
          </span>

          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-5 text-foreground leading-tight">
            {t('references.title')}
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('references.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {referenceKeys.map((key, index) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative rounded-3xl border border-border bg-card p-8 shadow-xl"
            >
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="h-10 w-10 text-primary" />
              </div>

              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                „{t(`references.${key}.text`)}“
              </p>

              <div className="pt-6 border-t border-border">
                <div className="font-semibold text-foreground">
                  {t(`references.${key}.name`)}
                </div>
                <div className="text-sm text-primary mt-1">
                  {t(`references.${key}.role`)}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t(`references.${key}.company`)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}