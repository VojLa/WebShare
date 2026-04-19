import useTranslation from '../hooks/useTranslation';
import OfficeCard from '../components/contact/OfficeCard';
import TeamMember from '../components/contact/TeamMember';
import { motion } from 'framer-motion';
import { teamMembers } from '@/content/team';
import { companyInfo } from '@/content/company';

export default function Contact() {
  const { t } = useTranslation();
  const registration = companyInfo.registration;
  const headquarters = companyInfo.offices.headquarters;
  const branch = companyInfo.offices.branch;

  return (
    <div className="min-h-screen">
      <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 60% 60% at 50% 0%, hsl(43,70%,52%,0.08), transparent)`,
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
              {t('contact.hero_badge')}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mt-4 mb-6 text-foreground">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
              {t('contact.offices_badge')}
            </span>
            <h2 className="text-3xl font-heading font-bold mt-3 mb-10 text-foreground">
              {t('contact.offices_title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 min-[950px]:grid-cols-2 gap-12">
            <OfficeCard
              title={t('contact.hq')}
              address={headquarters.addressFull}
              hours={t('contact.hq_hours')}
              phone={headquarters.phone}
              mapEmbedUrl={headquarters.mapEmbedUrl}
            />

            <OfficeCard
              title={t('contact.branch')}
              address={branch.addressFull}
              hours={t('contact.branch_hours')}
              phone={branch.phone}
              mapEmbedUrl={branch.mapEmbedUrl}
            />

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 min-[950px]:col-span-2">
              <h3 className="text-lg font-heading font-semibold mb-5 text-primary">
                {companyInfo.name}
              </h3>

              <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed space-y-1">
                <p>{t('company.legal_heading')}</p>
                <p>{registration.registeredOffice}</p>
                <p>{t('company.bank_account')}: {registration.bankAccount}</p>
                <p>{t('company.data_box')}: {registration.dataBox}</p>
                <p>{t('company.ico')}: {registration.ico}</p>
                <p>{t('company.dic')}: {registration.dic}</p>
                <p>
                  {t('company.registered')} {registration.court}, {t('company.section')} {registration.section}, {t('company.insert')} {registration.insert}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
              {t('contact.team_badge')}
            </span>
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
                <TeamMember
                  {...member}
                  role={t(member.roleKey)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}