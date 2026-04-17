import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTranslation from '@/hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import logoBestAccount from '@/assets/logo-best-account.png';
import { hash } from 'node:crypto';

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/#home', label: t('nav.home'), hash: true },
    { to: '/#services', label: t('nav.services'), hash: true },
    { to: '/#why-us', label: t('nav.why_us'), hash: true },
    { to: '/contact#contact', label: t('nav.contact'), hash: true },
  ];

  const handleHashLink = (e, link) => {

    if (!link.hash) {
      setOpen(false);
      return;
    }

    e.preventDefault();

    const [targetPath, targetHash] = link.to.split('#');
    const hashSelector = targetHash ? `#${targetHash}` : null;

    if (location.pathname === targetPath) {
      if (hashSelector) {
        const el = document.querySelector(hashSelector);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(targetPath);

      setTimeout(() => {
        if (hashSelector) {
          const el = document.querySelector(hashSelector);
          el?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }

    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl shadow-black/40' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-xs text-muted-foreground border-b border-border/20">
          <a href="tel:+420721075783" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="h-3 w-3" /> +420 721 075 783
          </a>
          <a href="mailto:office@bestaccount.cz" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="h-3 w-3" /> office@bestaccount.cz
          </a>
          <LanguageSwitcher />
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoBestAccount}
              alt="Best Account"
              className="h-10 w-auto object-contain"
            />
            <div>
              <span className="font-heading text-xl font-bold tracking-tight text-foreground">Best Account</span>
              <span className="hidden sm:block text-[10px] text-muted-foreground tracking-widest uppercase">
                {t('hero.subtitle')}
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => handleHashLink(e, link)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} className="text-foreground">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border">
          <div className="px-4 py-3 space-y-1">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => handleHashLink(e, link)}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border flex items-center gap-4 text-xs text-muted-foreground px-4">
              <a href="tel:+420721075783" className="flex items-center gap-1">
                <Phone className="h-3 w-3" /> +420 721 075 783
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}