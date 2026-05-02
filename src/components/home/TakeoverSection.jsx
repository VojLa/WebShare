import { useState, useEffect, useRef } from 'react';
import TakeoverVisual from '@/components/ui/UI_animations/TakeoverVisual';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import useTranslation from '@/hooks/useTranslation';
import { homeContent } from '@/content/home';
import { scrollTo } from '@/utils/scrollTo';

const STEP_DURATIONS = [5500, 5500, 6000, 5500];

function useSyncedStep(inView, stepCount) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!inView) {
      setActiveStep(0);
      return undefined;
    }

    let timeoutId;
    let currentStep = 0;
    let cancelled = false;

    setActiveStep(0);

    function scheduleNextStep() {
      if (cancelled) return;

      const duration = STEP_DURATIONS[currentStep % STEP_DURATIONS.length] ?? 5000;

      timeoutId = window.setTimeout(() => {
        currentStep = (currentStep + 1) % stepCount;
        setActiveStep(currentStep);
        scheduleNextStep();
      }, duration);
    }

    scheduleNextStep();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [inView, stepCount]);

  return activeStep;
}

export default function TakeoverSection() {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: '-10% 0px' });
  const stepCount = homeContent.takeover.steps.length;
  const activeStep = useSyncedStep(inView, stepCount);

  return (
    <section id="prevzeti" ref={sectionRef} className="py-28 sm:py-36 relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -right-32 top-1/3 w-80 h-80 bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: nadpis + steps */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
                {t('takeover.badge')}
              </span>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-3 text-foreground leading-tight">
                {t('takeover.title')}
              </h2>
            </div>

            {/* Desktop: všechny kroky najednou */}
            <div className="hidden lg:flex flex-col space-y-3">
              {homeContent.takeover.steps.map((stepKey, i) => {
                const isActive = activeStep === i;

                return (
                  <div
                    key={stepKey}
                    className={`relative rounded-2xl border p-5 transition-all duration-500 ${
                      isActive
                        ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/10'
                        : 'border-border bg-card'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute left-0 top-4 bottom-4 w-0.5 bg-primary rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="flex items-start gap-4">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                          isActive ? 'bg-primary' : 'bg-primary/10 border border-primary/20'
                        }`}
                      >
                        <span
                          className={`text-sm font-bold transition-colors duration-500 ${
                            isActive ? 'text-primary-foreground' : 'text-primary'
                          }`}
                        >
                          {i + 1}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3
                          className={`font-heading font-bold mb-1 transition-colors duration-500 ${
                            isActive ? 'text-foreground' : 'text-foreground/60'
                          }`}
                        >
                          {t(`takeover.${stepKey}.title`)}
                        </h3>

                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              key="desc"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                            >
                              {t(`takeover.${stepKey}.desc`)}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobil: jen aktivní krok, střídá se animací */}
            <div className="lg:hidden relative">
              <AnimatePresence mode="wait">
                {homeContent.takeover.steps.map((stepKey, i) =>
                  activeStep === i ? (
                    <motion.div
                      key={stepKey}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="relative rounded-2xl border border-primary/50 bg-primary/5 shadow-lg shadow-primary/10 p-5"
                    >
                      <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-primary rounded-full" />
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-primary">
                          <span className="text-sm font-bold text-primary-foreground">{i + 1}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading font-bold mb-1 text-foreground">
                            {t(`takeover.${stepKey}.title`)}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {t(`takeover.${stepKey}.desc`)}
                          </p>
                        </div>
                      </div>

                      {/* Indikátor kroku */}
                      <div className="flex gap-1.5 mt-4 justify-end">
                        {homeContent.takeover.steps.map((_, j) => (
                          <div
                            key={j}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              j === i ? 'w-4 bg-primary' : 'w-1.5 bg-primary/30'
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: synced SVG animation */}
          <div className="flex flex-col items-center justify-center gap-6">
            <TakeoverVisual activeStep={activeStep} />

            <button
              onClick={() => scrollTo('poptavka')}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6 py-3 text-sm font-semibold transition-colors shadow-lg shadow-primary/25"
            >
              {t('takeover.cta')}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}