import { MapPin, Clock, Phone } from 'lucide-react';

export default function OfficeCard({ title, address, hours, phone }) {
  return (
    <div className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
        <MapPin className="h-5 w-5 text-primary" />
      </div>
      <h3 className="text-lg font-heading font-bold mb-5 text-foreground">{title}</h3>
      <div className="space-y-4 text-sm">
        <div className="flex items-start gap-3 text-muted-foreground">
          <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary/60" />
          <span>{address}</span>
        </div>
        <div className="flex items-start gap-3 text-muted-foreground">
          <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary/60" />
          <span>{hours}</span>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary/60" />
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-primary hover:text-primary/80 font-semibold transition-colors">
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
}