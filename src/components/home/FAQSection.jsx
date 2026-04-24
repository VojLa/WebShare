import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/useTranslation';
import { homeContent } from '@/content/home';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-primary shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 text-sm text-muted-foreground leading-relaxed pr-8">
          {answer}
        </div>
      )}
    </div>
  );
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-28 sm:py-36 relative overflow-hidden bg-secondary/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -left-32 top-1/4 w-80 h-80 bg-primary/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
            {t('faq.badge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-4 text-foreground leading-tight">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-muted-foreground">{t('faq.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xl mb-10"
        >
          {homeContent.faq.map((key, i) => (
            <FAQItem
              key={key}
              question={t(`faq.${key}.q`)}
              answer={t(`faq.${key}.a`)}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

        <div className="text-center">
          <Button
            onClick={() => scrollTo('poptavka')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-base font-bold rounded-xl gap-2 shadow-xl shadow-primary/20"
          >
            {t('faq.cta')}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
