import useTranslation from '../../hooks/useTranslation';
import { FileText, Calculator, Users, Briefcase, MessageSquare, ArrowRight, BarChart2} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { homeContent } from '@/content/home';
import { scrollTo } from '@/utils/scrollTo';
import { useState } from 'react';
import { scrollTo as smoothScrollTo } from '@/utils/scrollTo';

const serviceIcons = {
  accounting: Calculator,
  taxes: FileText,
  payroll: Users,
  personalistika: Briefcase,
  consulting: MessageSquare,
}

export default function ServicesSection() {
  const { t } = useTranslation();
  const LinkIcon = BarChart2;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  


  const handleHashLink = (e, link) => {
    if (!link.hash) {
      setOpen(false);
      return;
    }

    e.preventDefault();

    const [targetPath, targetHash] = link.to.split('#');

    if (location.pathname === targetPath) {
      if (targetHash) smoothScrollTo(targetHash);
    } else {
      navigate(targetPath);

      setTimeout(() => {
        if (targetHash) smoothScrollTo(targetHash);
      }, 150);
    }

    setOpen(false);
  };

  return (
    <section id="services" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -left-40 top-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
              {t('services.section.name')}
            </span>
            <div className="block sm:flex items-center gap-24 mt-4 mb-5">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-6 text-foreground leading-tight">
                {t('services.title')}
              </h2>
              <Link
                to="/sluzby"
                className="inline-flex items-center justify-center border border-border/60 text-foreground hover:bg-secondary hover:border-primary/40 h-14 px-10 text-base font-semibold rounded-xl transition-colors"
              >
                {t('services.button.all_services')}
              </Link>
            </div>
            <p className="text-muted-foreground text-xl leading-relaxed">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeContent.services.map((service, i) => {
            const Icon = serviceIcons[service.key];
            return (
              <Link key={service.key} to={service.url} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 shadow-lg flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 shrink-0">
                    <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground">
                    {t(`services.${service.key}.title`)}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {t(`services.${service.key}.desc`)}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.bullets.map((bulletKey) => (
                    <li key={bulletKey} className="flex items-start gap-2 text-xs text-foreground/70">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {t(`services.${bulletKey}`)}
                    </li>
                  ))}
                </ul>

              </motion.div>
              </Link>
            );
          })}
          <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 6 * 0.08 }}
                onClick={() => scrollTo('poptavka')}
                className="group bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 shadow-lg flex flex-col cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 shrink-0">
                    <LinkIcon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground">
                    {t('services.inquiry.title')}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {t('services.inquiry.desc')}
                </p>

                <div className='h-full flex items-end justify-center'>
                  <Link
                    to="/#poptavka"
                    onClick={(e) => handleHashLink(e, { to: '/#poptavka', hash: true })}
                    className="px-4 py-2 text-md font-heading font-bold rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    {t('nav.cta')}
                  </Link>
                </div>
              </motion.div>
        </div>
      </div>
    </section>
  );
}
