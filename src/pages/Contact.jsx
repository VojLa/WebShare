import useTranslation from '../hooks/useTranslation';
import OfficeCard from '../components/contact/OfficeCard';
import TeamMember from '../components/contact/TeamMember';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { teamMembers } from '@/content/team';
import { companyInfo } from '@/content/company';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero header */}
      <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(ellipse 60% 60% at 50% 0%, hsl(43,70%,52%,0.08), transparent)`
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">Jsme tu pro vás</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mt-4 mb-6 text-foreground">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">Kde nás najdete</span>
            <h2 className="text-3xl font-heading font-bold mt-3 mb-10 text-foreground">Naše pobočky</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <OfficeCard
              title={t('contact.hq')}
              address={t('contact.hq_address')}
              hours={t('contact.hq_hours')}
              phone={t('contact.hq_phone')}
            />
            <OfficeCard
              title={t('contact.branch')}
              address={t('contact.branch_address')}
              hours={t('contact.branch_hours')}
              phone={t('contact.branch_phone')}
            />
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-lg font-heading font-semibold mb-5 text-primary">{companyInfo.legalTitle}</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                {companyInfo.legalInfo}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact row */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xl font-heading font-bold text-foreground">Napište nebo zavolejte</div>
              <div className="text-muted-foreground text-sm mt-1">Odpovíme co nejdříve</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/40 hover:bg-secondary transition-all text-sm font-medium">
                <Mail className="h-4 w-4 text-primary" /> {companyInfo.email}
              </a>
              <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-sm font-bold">
                <Phone className="h-4 w-4" /> {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">Lidé</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-3 mb-3 text-foreground">
              {t('contact.team_title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              {t('contact.team_subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
              >
                <TeamMember {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
