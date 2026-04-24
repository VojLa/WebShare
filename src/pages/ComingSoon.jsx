import { useLocation } from 'react-router-dom';

export default function ComingSoon() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70 mb-4">
        {pathname}
      </p>
      <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
        Tato stránka se připravuje
      </h1>
      <p className="text-muted-foreground max-w-md">
        Obsah bude brzy k dispozici. Mezitím nás neváhejte kontaktovat.
      </p>
    </div>
  );
}
