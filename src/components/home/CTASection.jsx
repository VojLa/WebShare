import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function CTASection({ content = {} }) {

  return (
    <section className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, hsl(43,70%,52%,0.08), transparent)`
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">{content.eyebrow ?? ''}</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mt-4 mb-6 leading-tight">
            {content.title ?? ''}
          </h2>
          <p className="text-xl text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed">
            {content.subtitle ?? ''}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-base font-bold rounded-xl gap-2 shadow-2xl shadow-primary/20 group">
                {content.button ?? ''}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+420721075783">
              <Button size="lg" variant="outline" className="border-border/60 text-foreground hover:bg-secondary h-14 px-10 text-base font-semibold rounded-xl gap-2">
                <Phone className="h-4 w-4" /> +420 721 075 783
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Phone, label: 'Centrála Vítkov', value: '+420 721 075 783', href: 'tel:+420721075783' },
              { icon: Mail, label: 'E-mail', value: 'office@bestaccount.cz', href: 'mailto:office@bestaccount.cz' },
              { icon: MapPin, label: 'Adresa', value: 'Wolkerova 1009, Vítkov', href: '/contact' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="group flex flex-col items-center gap-2 p-6 rounded-2xl border border-border/50 hover:border-primary/40 hover:bg-secondary/60 transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
                <span className="text-sm font-medium text-foreground">{value}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
