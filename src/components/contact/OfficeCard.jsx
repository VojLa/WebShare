import { MapPin, Clock, Phone } from 'lucide-react';

export default function OfficeCard({
  title,
  address,
  hours,
  phone,
  mapEmbedUrl,
}) {
  return (
    <div className="group bg-card rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-visible">
      <div className="grid grid-cols-1 min-[650px]:grid-cols-[max-content_minmax(0,1fr)] min-[950px]:grid-cols-[minmax(0,1fr)_220px] xl:grid-cols-[minmax(0,1fr)_280px] gap-4 min-[650px]:gap-5 min-[950px]:gap-6 items-start">
        <div className="order-2 min-[650px]:order-1 min-[950px]:-mr-12">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
            <MapPin className="h-5 w-5 text-primary" />
          </div>

          <h3 className="text-lg font-heading font-bold mb-5 text-foreground">
            {title}
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary/60" />
              <span className="leading-relaxed break-words">{address}</span>
            </div>

            <div className="flex items-start gap-3 text-muted-foreground">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary/60" />
              <span className="leading-relaxed break-words">{hours}</span>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary/60" />
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="text-primary hover:text-primary/80 font-semibold transition-colors break-words"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 min-[650px]:order-2 min-[950px]:translate-x-12 min-[950px]:-translate-y-12">
          <div className="w-full h-40 min-[650px]:w-full min-[650px]:h-52 min-[950px]:h-44 xl:h-52 rounded-xl overflow-hidden border border-border shadow-lg bg-secondary">
            <iframe
              title={`Mapa - ${title}`}
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}