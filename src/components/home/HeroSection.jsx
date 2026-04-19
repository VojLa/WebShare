import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import useTranslation from '@/hooks/useTranslation';
import HERO_IMAGE from '@/assets/Hero_background.webp';
import { useState } from 'react';


export default function HeroSection() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
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
  
  const { lang, t } = useTranslation();

  const titleFirstLine = t('hero.title.line1');
  const titleSecondLine = t('hero.title.line2');

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt={t('hero.image_alt')} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/8 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/50 text-primary text-xs font-semibold uppercase tracking-widest mb-8"
            >
              <Star className="h-3 w-3 fill-primary" />
              {t('hero.badge')}
              <Star className="h-3 w-3 fill-primary" />
            </motion.div>

            <h1 className="text-5xl min-[480px]:text-6xl sm:text-7xl lg:text-8xl font-heading font-bold text-foreground tracking-tight leading-[1.0] mb-4">
              <span className="block text-foreground">{titleFirstLine}</span>
              <span
                lang={lang}
                style={{ hyphens: 'auto', overflowWrap: 'normal', wordBreak: 'normal' }}
                className="block whitespace-normal bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent pb-4"
              >
                {titleSecondLine}
              </span>
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-primary/60 via-primary to-transparent w-80 mb-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-xl font-light"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >


              <Button
                onClick={() => {
                  const el = document.querySelector('#contact_form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-base font-bold rounded-xl gap-2 shadow-2xl shadow-primary/25 group"
              >
                {t('hero.button.contact')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => {
                  const el = document.querySelector('#services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                variant="outline"
                className="border-border/60 text-foreground hover:bg-secondary hover:border-primary/40 h-14 px-10 text-base font-semibold rounded-xl"
              >
                {t('hero.button.services')}
              </Button>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
