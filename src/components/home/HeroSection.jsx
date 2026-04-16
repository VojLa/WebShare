import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import useTranslation from '@/hooks/useTranslation';

const HERO_IMAGE = 'https://media.base44.com/images/public/69d9229445b235d25dd03bb7/8bee05119_generated_d2089682.png';

export default function HeroSection() {
  const { t } = useTranslation();

  const titleFirstLine = t('hero.title.line1');
  const titleSecondLine = t('hero.title.line2');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-8"
            >
              <Star className="h-3 w-3 fill-primary" />
              <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
                {t('hero.badge')}
              </span>
              <Star className="h-3 w-3 fill-primary" />
            </motion.div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold text-foreground tracking-tight leading-[1.0] mb-4">
              <span className="block text-foreground">{titleFirstLine}</span>
              <span className="inline-block bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent pb-4">
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
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-base font-bold rounded-xl gap-2 shadow-2xl shadow-primary/25 group"
                >
                  {t('hero.button.contact')}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border/60 text-foreground hover:bg-secondary hover:border-primary/40 h-14 px-10 text-base font-semibold rounded-xl"
                >
                  {t('hero.button.services')}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
          {t('hero.scroll')}
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="h-5 w-5 text-primary/60" />
        </motion.div>
      </div>
    </section>
  );
}
