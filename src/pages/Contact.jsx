import useTranslation from '../hooks/useTranslation';
import OfficeCard from '../components/contact/OfficeCard';
import TeamMember from '../components/contact/TeamMember';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  { name: 'Ing. Ivo Tirol', role: 'Výkonný ředitel, ekonom', email: 'office@bestaccount.cz' },
  { name: 'Ing. Tereza Tirolová', role: 'Jednatelka, daňová poradkyně, členka KDP ČR, poradce č. 5270', email: 'office@bestaccount.cz' },
  { name: 'Ing. Martin Coufal', role: 'Externí auditor, daňový poradce č. 1721', email: null },
  { name: 'Ing. Aleš Coufal', role: 'Externí daňový poradce č. 4561', email: null },
  { name: 'Jana Pichoňská', role: 'Senior účetní, správce účetních software', email: 'admin@bestaccount.cz' },
  { name: 'Šimon Tirol', role: 'Asistentka vedení společnosti', email: 'sekretariat@bestaccount.cz' },
  { name: 'Bc. Zuzana Schabjuková', role: 'Senior účetní', email: 'fakturace@bestaccount.cz' },
  { name: 'Petr Zbedina', role: 'Senior účetní', email: 'petr.zbedina@bestaccount.cz' },
  { name: 'Michal Bek', role: 'Účetní', email: 'opava@bestaccount.cz' },
  { name: 'Marek Hořín', role: 'Účetní', email: 'fakturace@bestaccount.cz' },
  { name: 'Ing. Martina Draisaitlová', role: 'Účetní', email: 'martina.draisaitlova@bestaccount.cz' },
  { name: 'Andrea Vojtěchová', role: 'Účetní', email: 'fakturace@bestaccount.cz' },
  { name: 'Josef Bajer', role: 'Účetní', email: 'fakturace@bestaccount.cz' },
  { name: 'Sandra Orlíková', role: 'Účetní', email: 'opava@bestaccount.cz' },
  { name: 'Ing. Lucie Neuwirthová', role: 'Účetní', email: 'lucie.neuwirthova@bestaccount.cz' },
  { name: 'Eva Slámová', role: 'Administrativa', email: 'fakturace@bestaccount.cz' },
  { name: 'Anna Dusková', role: 'Administrativní výpomoc', email: 'fakturace@bestaccount.cz' },
  { name: 'Ing. Radomír Wisnar', role: 'Účetní', email: 'radomir.wisnar@bestaccount.cz' },
  { name: 'Dáša Vandasová', role: 'BOZP a PO, OŽP, RTZZ — členka Komory České republiky pro BOZP a PO', email: 'dasa.vandasova@gmail.com' },
  { name: 'Barbora Nekorancová', role: 'Mzdová účetní', email: 'personalistika@bestaccount.cz' },
  { name: 'Ing. Vladimíra Šimečková', role: 'Mzdová účetní', email: 'mzdy@bestaccount.cz' },
  { name: 'Hana Mičanová', role: 'Mzdová účetní', email: null },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero header */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
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
              <h3 className="text-lg font-heading font-semibold mb-5 text-primary">{t('contact.legal_title')}</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                {t('contact.legal_info')}
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
              <a href="mailto:office@bestaccount.cz" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/40 hover:bg-secondary transition-all text-sm font-medium">
                <Mail className="h-4 w-4 text-primary" /> office@bestaccount.cz
              </a>
              <a href="tel:+420721075783" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-sm font-bold">
                <Phone className="h-4 w-4" /> +420 721 075 783
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