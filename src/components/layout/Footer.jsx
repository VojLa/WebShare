import { Link } from 'react-router-dom';
import useTranslation from '@/hooks/useTranslation';
import { Mail, Phone } from 'lucide-react';
import logoBestAccount from '@/assets/BA HORIZONTAL - NO TEXT - WHITE.svg';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoBestAccount}
                alt="Best Account"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href="mailto:office@bestaccount.cz" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> office@bestaccount.cz
              </a>
              <a href="tel:+420721075783" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> +420 721 075 783
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-5 text-xs uppercase tracking-widest text-primary/70">
              {t('nav.services')}
            </h4>
            <div className="space-y-2.5">
              {['consulting', 'taxes', 'accounting', 'payroll', 'eservis'].map(key => (
                <Link key={key} to="/#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t(`services.${key}.title`)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-5 text-xs uppercase tracking-widest text-primary/70">
              {t('footer.offices')}
            </h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <div className="font-medium text-foreground/80 mb-1">{t('footer.headquarters')}</div>
                <div>Wolkerova 1009, 749 01</div>
              </div>
              <div>
                <div className="font-medium text-foreground/80 mb-1">{t('footer.branch_opava')}</div>
                <div>U Pošty 250/6, 746 01</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Best Account s.r.o. — {t('footer.rights')}</span>
          <span>IČ: 05067014 | DIČ: CZ05067014 | {t('footer.data_box')}: thrvd6r</span>
        </div>
      </div>
    </footer>
  );
}