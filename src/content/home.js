export const homeContent = {
  stats: [
    { value: '10+', labelKey: 'stats.label1' },
    { value: '700+', labelKey: 'stats.label2' },
    { value: '2', labelKey: 'stats.label3' },
    { value: '22', labelKey: 'stats.label4' },
  ],
  services: [
    { key: 'consulting', number: '01' },
    { key: 'eservis', number: '02' },
    { key: 'kdp', number: '03' },
    { key: 'taxes', number: '04' },
    { key: 'accounting', number: '05' },
    { key: 'payroll', number: '06' },
  ],
  references: [
    { key: 'item1', name: 'Jan Novak', company: 'NOVAK STAV s.r.o.' },
    { key: 'item2', name: 'Petra Dvorakova', company: 'Petra Design' },
    { key: 'item3', name: 'Martin Svoboda', company: 'MS Tech Solutions' },
  ],
  documentsFlexibilityItems: ['item1', 'item2', 'item3', 'item4'],
  socialImpactItems: ['item1', 'item2', 'item3', 'item4'],
  kdpItems: ['item1', 'item2', 'item3'],
  contactForm: {
    needOptions: [
      { value: 'prechod-od-jine-ucetni', labelKey: 'contact_form.need.transition' },
      { value: 'novy-projekt', labelKey: 'contact_form.need.new_project' },
      { value: 'dane', labelKey: 'contact_form.need.taxes' },
    ],
    businessOptions: [
      { value: 'osvc', labelKey: 'contact_form.business.osvc' },
      { value: 'sro', labelKey: 'contact_form.business.sro' },
      { value: 'jine', labelKey: 'contact_form.business.other' },
    ],
    contactOptions: [
      { value: 'telefon', labelKey: 'contact_form.contact.phone' },
      { value: 'email', labelKey: 'contact_form.contact.email' },
      { value: 'telefon-email', labelKey: 'contact_form.contact.both' },
    ],
    previewSteps: ['step1', 'step2', 'step3'],
  },
}
