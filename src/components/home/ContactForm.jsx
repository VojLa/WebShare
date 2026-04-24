import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import useTranslation from '@/hooks/useTranslation';
import { homeContent } from '@/content/home';

const inputCls =
  'w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-foreground text-sm outline-none focus:border-primary transition-colors placeholder:text-muted-foreground';

export default function ContactForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    typeOther: '',
    vat: '',
    employees: '',
    services: [],
    note: '',
    gdpr: false,
  });

  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleService = (value) =>
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value],
    }));

  const isValid =
    form.name.trim() &&
    (form.email.trim() || form.phone.trim()) &&
    form.services.length > 0 &&
    form.gdpr;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setSubmitted(true);
  };

  const services = homeContent.contactForm.services.map((s) => ({
    ...s,
    label: t(s.labelKey),
  }));

  return (
    <section id="poptavka" className="relative py-24 overflow-hidden bg-secondary/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
            {t('contact_form.subtitle')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-4 text-foreground leading-tight">
            {t('contact_form.title')}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t('contact_form.desc')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-card border border-border p-6 sm:p-10 shadow-2xl"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                {t('contact_form.step4.heading')}
              </h3>
              <p className="text-muted-foreground">{t('contact_form.step4.desc')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Jméno */}
              <div>
                <label className="block text-xs font-semibold text-foreground/70 mb-1.5 uppercase tracking-wider">
                  {t('contact_form.field.name')}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder={t('contact_form.placeholder.name')}
                  className={inputCls}
                />
              </div>

              {/* E-mail + telefon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground/70 mb-1.5 uppercase tracking-wider">
                    {t('contact_form.field.email')}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder={t('contact_form.placeholder.email')}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/70 mb-1.5 uppercase tracking-wider">
                    {t('contact_form.field.phone')}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder={t('contact_form.placeholder.phone')}
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Typ podnikání */}
              <div>
                <label className="block text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wider">
                  {t('contact_form.field.type')}
                </label>
                <div className="flex gap-3">
                  {['osvc', 'sro', 'other'].map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => update('type', key)}
                      className={`flex-1 rounded-xl border py-3 text-sm font-medium transition-all ${
                        form.type === key
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border bg-secondary/30 text-muted-foreground hover:border-primary/40'
                      }`}
                    >
                      {t(`contact_form.type.${key}`)}
                    </button>
                  ))}
                </div>
                {form.type === 'other' && (
                  <input
                    type="text"
                    value={form.typeOther}
                    onChange={(e) => update('typeOther', e.target.value)}
                    placeholder={t('contact_form.type.other_placeholder')}
                    className={`${inputCls} mt-3`}
                  />
                )}
              </div>

              {/* DPH + zaměstnanci */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wider">
                    {t('contact_form.field.vat')}
                  </label>
                  <div className="flex gap-3">
                    {['yes', 'no'].map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => update('vat', key)}
                        className={`flex-1 rounded-xl border py-3 text-sm font-medium transition-all ${
                          form.vat === key
                            ? 'border-primary bg-primary/10 text-foreground'
                            : 'border-border bg-secondary/30 text-muted-foreground hover:border-primary/40'
                        }`}
                      >
                        {t(`contact_form.vat.${key}`)}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wider">
                    {t('contact_form.field.employees')}
                  </label>
                  <div className="flex gap-3">
                    {['none', 'small', 'medium'].map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => update('employees', key)}
                        className={`flex-1 rounded-xl border py-3 text-sm font-medium transition-all ${
                          form.employees === key
                            ? 'border-primary bg-primary/10 text-foreground'
                            : 'border-border bg-secondary/30 text-muted-foreground hover:border-primary/40'
                        }`}
                      >
                        {t(`contact_form.employees.${key}`)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Služby */}
              <div>
                <label className="block text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wider">
                  {t('contact_form.field.services')}
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => toggleService(s.value)}
                      className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
                        form.services.includes(s.value)
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border bg-secondary/30 text-muted-foreground hover:border-primary/40'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Zpráva */}
              <div>
                <label className="block text-xs font-semibold text-foreground/70 mb-1.5 uppercase tracking-wider">
                  {t('contact_form.field.note')}
                </label>
                <textarea
                  value={form.note}
                  onChange={(e) => update('note', e.target.value)}
                  rows={3}
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* GDPR */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.gdpr}
                  onChange={(e) => update('gdpr', e.target.checked)}
                  className="mt-0.5 accent-primary"
                  required
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  {t('contact_form.gdpr')}{' '}
                  <a href="#/gdpr" className="text-primary underline">
                    {t('contact_form.gdpr_link')}
                  </a>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isValid}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed h-14 px-8 text-base font-bold rounded-xl transition-colors shadow-xl shadow-primary/20"
              >
                {t('contact_form.btn.submit')}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
