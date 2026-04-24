import { ArrowRight, Star  } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import useTranslation from '@/hooks/useTranslation';
import HERO_IMAGE from '@/assets/Hero_background.webp';
import PORTRET from '@/assets/Portret.jpg';
import PORTRET_MOBILE from '@/assets/Portret_mobile.jpg';
import { scrollTo } from '@/utils/scrollTo';

export default function HeroSection() {
  const { lang, t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 md:pt-28 min-[900px]:pt-20">
        <div className="flex flex-col min-[900px]:flex-row items-center gap-8 sm:gap-12">

          {/* Text */}
          <div className="max-w-2xl">
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

              <h1 className="text-4xl min-[480px]:text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground tracking-tight leading-[1.05] mb-6">
                <span
                  lang={lang}
                  style={{ hyphens: 'auto' }}
                  className="block bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent pb-2"
                >
                  {t('hero.title.line1')}
                </span>
                <span className="block text-foreground">{t('hero.title.line2')}</span>
              </h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-px bg-gradient-to-r from-primary/60 via-primary to-transparent w-80 mb-6 origin-left"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={() => scrollTo('poptavka')}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-base font-bold rounded-xl gap-2 shadow-2xl shadow-primary/25 group"
                >
                  {t('hero.button.contact')}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  onClick={() => scrollTo('prevzeti')}
                  size="lg"
                  variant="outline"
                  className="border-border/60 text-foreground hover:bg-secondary hover:border-primary/40 h-14 px-10 text-base font-semibold rounded-xl"
                >
                  {t('hero.button.takeover')}
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Portrét — pod tlačítky na mobilu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block min-[900px]:hidden w-full flex-shrink-0"
          >
            <img
              src={PORTRET_MOBILE}
              alt="Portrét"
              className="w-full h-auto rounded-2xl object-cover shadow-2xl"
            />
          </motion.div>

          {/* Portrét — napravo na větší obrazovce */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden min-[900px]:block flex-shrink-0 w-72 lg:w-96 ml-auto"
          >
            <img
              src={PORTRET}
              alt="Portrét"
              className="w-full h-auto rounded-2xl object-cover shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
