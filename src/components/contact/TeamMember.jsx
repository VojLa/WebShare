import { Mail } from 'lucide-react';

export default function TeamMember({ name, role, email }) {
  const initials = name.split(' ')
    .filter(w => w[0] === w[0]?.toUpperCase() && isNaN(w[0]))
    .slice(0, 2).map(w => w[0]).join('');

  return (
    <div className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
        <span className="text-lg font-heading font-bold text-primary group-hover:text-primary-foreground transition-colors">
          {initials}
        </span>
      </div>
      <h4 className="font-heading font-bold text-sm text-foreground leading-tight">{name}</h4>
      <p className="text-xs text-muted-foreground mt-1.5 mb-3 leading-relaxed">{role}</p>
      {email && (
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-1.5 text-xs text-primary/70 hover:text-primary transition-colors"
        >
          <Mail className="h-3 w-3" />
          {email}
        </a>
      )}
    </div>
  );
}