import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Briefcase,
  Building2,
  Phone,
  Mail,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/useTranslation';
import { homeContent } from '@/content/home';

const STEPS = {
  NEED: 1,
  BUSINESS: 2,
  CONTACT: 3,
  DONE: 4,
};

const STEP_PROGRESS = {
  [STEPS.NEED]: '0%',
  [STEPS.BUSINESS]: '33.33%',
  [STEPS.CONTACT]: '66.66%',
  [STEPS.DONE]: '100%',
};

const businessIcons = {
  osvc: Briefcase,
  sro: Building2,
  jine: CheckCircle2,
}

const contactIcons = {
  telefon: Phone,
  email: Mail,
  'telefon-email': MessageSquare,
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [step, setStep] = useState(STEPS.NEED);
  const [form, setForm] = useState({
    need: '',
    businessType: '',
    businessTypeOther: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    preferredContact: '',
    note: '',
  });

  const needOptions = homeContent.contactForm.needOptions.map((item) => ({
    value: item.value,
    label: t(item.labelKey),
  }));

  const businessOptions = homeContent.contactForm.businessOptions.map((item) => ({
    value: item.value,
    label: t(item.labelKey),
    icon: businessIcons[item.value],
  }));

  const contactOptions = homeContent.contactForm.contactOptions.map((item) => ({
    value: item.value,
    label: t(item.labelKey),
    icon: contactIcons[item.value],
  }));

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleNeedSelect = (value) => {
    setForm((prev) => ({ ...prev, need: value }));
    setStep(STEPS.BUSINESS);
  };

  const handleBusinessTypeSelect = (value) => {
    if (value === 'jine') {
      setForm((prev) => ({
        ...prev,
        businessType: 'jine',
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      businessType: value,
      businessTypeOther: '',
    }));
    setStep(STEPS.CONTACT);
  };

  const handleOtherBusinessContinue = () => {
    if (!form.businessTypeOther.trim()) return;
    setStep(STEPS.CONTACT);
  };

  const prevStep = () => {
    if (step === STEPS.BUSINESS) {
      setStep(STEPS.NEED);
      return;
    }

    if (step === STEPS.CONTACT) {
      setStep(STEPS.BUSINESS);
      return;
    }

    if (step === STEPS.DONE) {
      setStep(STEPS.CONTACT);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) return;
    if (!form.preferredContact) return;

    if (form.preferredContact === 'telefon' && !form.phone.trim()) return;
    if (form.preferredContact === 'email' && !form.email.trim()) return;
    if (
      form.preferredContact === 'telefon-email' &&
      (!form.email.trim() || !form.phone.trim())
    ) {
      return;
    }

    setStep(STEPS.DONE);
  };

  const progressWidth = STEP_PROGRESS[step];

  return (
    <section id="contact_form" className="relative py-24 overflow-hidden bg-secondary/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
              {t('contact_form.subtitle')}
            </span>

            <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-5 text-foreground leading-tight">
              {t('contact_form.title')}
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('contact_form.desc')}
            </p>

            <div className="space-y-4">
              {homeContent.contactForm.previewSteps.map((stepKey) => (
                <div key={stepKey} className="rounded-2xl border border-border bg-card p-5">
                  <div className="text-sm font-semibold text-foreground mb-1">{t(`contact_form.${stepKey}.label`)}</div>
                  <div className="text-sm text-muted-foreground">
                    {t(`contact_form.${stepKey}.preview`)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-primary/8 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-[0.25em] text-primary/70 font-bold">
                      {t('contact_form.badge')}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {step === STEPS.DONE ? t('contact_form.done') : `${t('contact_form.step_label')} ${step} / 3`}
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: progressWidth }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === STEPS.NEED && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                          {t('contact_form.step1.heading')}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                          {t('contact_form.step1.subtitle')}
                        </p>

                        <div className="space-y-3">
                          {needOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleNeedSelect(option.value)}
                              className={`w-full text-left rounded-2xl border p-4 transition-all ${
                                form.need === option.value
                                  ? 'border-primary bg-primary/10'
                                  : 'border-border bg-secondary/30 hover:border-primary/40'
                              }`}
                            >
                              <div className="font-medium text-foreground">{option.label}</div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === STEPS.BUSINESS && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                          {t('contact_form.step2.heading')}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                          {t('contact_form.step2.subtitle')}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                          {businessOptions.map((option) => {
                            const Icon = option.icon;
                            return (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => handleBusinessTypeSelect(option.value)}
                                className={`rounded-2xl border p-4 text-left transition-all ${
                                  form.businessType === option.value
                                    ? 'border-primary bg-primary/10'
                                    : 'border-border bg-secondary/30 hover:border-primary/40'
                                }`}
                              >
                                <Icon className="h-5 w-5 text-primary mb-3" />
                                <div className="font-medium text-foreground">{option.label}</div>
                              </button>
                            );
                          })}
                        </div>

                        {form.businessType === 'jine' && (
                          <div className="space-y-4">
                            <input
                              type="text"
                              placeholder={t('contact_form.business.other_placeholder')}
                              value={form.businessTypeOther}
                              onChange={(e) => updateField('businessTypeOther', e.target.value)}
                              className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-foreground outline-none focus:border-primary"
                            />

                            <div className="flex justify-end">
                              <Button
                                type="button"
                                onClick={handleOtherBusinessContinue}
                                disabled={!form.businessTypeOther.trim()}
                                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                              >
                                {t('contact_form.btn.continue')}
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {step === STEPS.CONTACT && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                          {t('contact_form.step3.heading')}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                          {t('contact_form.step3.subtitle')}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                          {contactOptions.map((option) => {
                            const Icon = option.icon;
                            return (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => updateField('preferredContact', option.value)}
                                className={`rounded-2xl border p-4 text-left transition-all ${
                                  form.preferredContact === option.value
                                    ? 'border-primary bg-primary/10'
                                    : 'border-border bg-secondary/30 hover:border-primary/40'
                                }`}
                              >
                                <Icon className="h-5 w-5 text-primary mb-3" />
                                <div className="font-medium text-foreground">{option.label}</div>
                              </button>
                            );
                          })}
                        </div>
                        
                        {(form.preferredContact === 'email' || form.preferredContact === 'telefon-email' || form.preferredContact === 'telefon') && (
                          <div className="space-y-4">
                            <input
                              type="text"
                              placeholder={t('contact_form.field.name')}
                              value={form.name}
                              onChange={(e) => updateField('name', e.target.value)}
                              className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-foreground outline-none focus:border-primary"
                            />

                            <input
                              type="text"
                              placeholder={t('contact_form.field.company')}
                              value={form.company}
                              onChange={(e) => updateField('company', e.target.value)}
                              className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-foreground outline-none focus:border-primary"
                            />

                            {(form.preferredContact === 'email' || form.preferredContact === 'telefon-email') && (
                              <input
                                type="email"
                                placeholder={t('contact_form.field.email')}
                                value={form.email}
                                onChange={(e) => updateField('email', e.target.value)}
                                className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-foreground outline-none focus:border-primary"
                              />
                            )}

                            {(form.preferredContact === 'telefon' || form.preferredContact === 'telefon-email') && (
                              <input
                                type="tel"
                                placeholder={t('contact_form.field.phone')}
                                value={form.phone}
                                onChange={(e) => updateField('phone', e.target.value)}
                                className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-foreground outline-none focus:border-primary"
                              />
                            )}

                            <textarea
                              placeholder={t('contact_form.field.note')}
                              value={form.note}
                              onChange={(e) => updateField('note', e.target.value)}
                              rows={4}
                              className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-foreground outline-none focus:border-primary resize-none"
                            />
                          </div>
                        )}
                      </motion.div>
                    )}

                    {step === STEPS.DONE && (
                      <motion.div
                        key="step-4"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-center py-8"
                      >
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                          <CheckCircle2 className="h-8 w-8 text-primary" />
                        </div>

                        <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                          {t('contact_form.step4.heading')}
                        </h3>
                        <p className="text-muted-foreground max-w-md mx-auto">
                          {t('contact_form.step4.desc')}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {step === STEPS.CONTACT && (
                    <div className="flex items-center justify-between gap-4 mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="rounded-xl"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        {t('contact_form.btn.back')}
                      </Button>

                      <Button
                        type="submit"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                      >
                        {t('contact_form.btn.submit')}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  )}

                  {step === STEPS.BUSINESS && form.businessType !== 'jine' && (
                    <div className="flex items-center justify-start gap-4 mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="rounded-xl"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        {t('contact_form.btn.back')}
                      </Button>
                    </div>
                  )}

                  {step === STEPS.NEED && (
                    <div className="flex items-center justify-start gap-4 mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        disabled
                        className="rounded-xl opacity-50"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        {t('contact_form.btn.back')}
                      </Button>
                    </div>
                  )}
                </form>
              </div>
            </div>

            <div className="absolute -inset-px rounded-3xl border border-primary/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}