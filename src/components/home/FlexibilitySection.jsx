import { motion } from 'framer-motion';
import { Smartphone, ShoppingCart, Truck, FileText } from 'lucide-react';
import useTranslation from '../../hooks/useTranslation';

const itemConfigs = [
  { key: 'item1', icon: ShoppingCart },
  { key: 'item2', icon: Smartphone },
  { key: 'item3', icon: Truck },
  { key: 'item4', icon: FileText },
];

export default function DocumentsFlexibilitySection() {
  const { t } = useTranslation();

  return (
    <section id="documents-flexibility" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -left-16 top-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
              {t('documents_flexibility.subtitle')}
            </span>

            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-5 text-foreground leading-tight">
              {t('documents_flexibility.title')}
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {t('documents_flexibility.desc')}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t('documents_flexibility.additional')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {itemConfigs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-3xl border border-border bg-card p-6 shadow-xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                    {t(`documents_flexibility.${item.key}.title`)}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`documents_flexibility.${item.key}.desc`)}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}