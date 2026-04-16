import useTranslation from '../../hooks/useTranslation';
import { MessageSquare, Monitor, Shield, FileText, Calculator, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { key: 'consulting', icon: MessageSquare, num: '01' },
  { key: 'eservis', icon: Monitor, num: '02' },
  { key: 'kdp', icon: Shield, num: '03' },
  { key: 'taxes', icon: FileText, num: '04' },
  { key: 'accounting', icon: Calculator, num: '05' },
  { key: 'payroll', icon: Users, num: '06' },
];

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -left-40 top-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
              {t('services.section.name')}
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-6 text-foreground leading-tight">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card p-10 hover:bg-secondary transition-all duration-500 cursor-default relative overflow-hidden"
              >
                <span className="absolute top-6 right-8 text-5xl font-heading font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {service.num}
                </span>

                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
z
                <h3 className="text-lg font-heading font-bold mb-3 text-foreground">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`services.${service.key}.desc`)}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
