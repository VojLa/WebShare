# WebShare

Webová prezentace účetní a daňové kanceláře postavená jako SPA na Reactu.

## Technologie
- Vite
- React 18
- React Router 6 (HashRouter)
- Tailwind CSS
- Framer Motion
- Lucide React

## Požadavky
- Node.js 18+
- npm 9+

## Lokální spuštění

```bash
npm install
npm run dev
```

Aplikace běží standardně na adrese z Vite výstupu (typicky http://localhost:5173).

## Skripty

```bash
npm run dev      # vývojový server
npm run build    # produkční build
npm run preview  # lokální náhled buildu
npm run lint     # ESLint kontrola
npm run lint:fix # automatické opravy lintu
```

## Architektura projektu
- [src/pages](src/pages) stránky aplikace
- [src/components](src/components) layout a sekce webu
- [src/content](src/content) centralizovaná data (obsah, čísla, konfigurace sekcí)
- [src/i18n](src/i18n) překlady a jazyková vrstva
- [src/hooks](src/hooks) vlastní hooky
- [src/lib](src/lib) pomocné utility

## i18n a obsah
Projekt používá oddělení textů a dat:

- Překladové řetězce jsou v [src/i18n/translations.js](src/i18n/translations.js)
- Strukturovaná data sekcí jsou v [src/content/home.js](src/content/home.js) a [src/content/company.js](src/content/company.js)

Doporučení:
- Lokalizovat pouze texty do translations
- Číselné hodnoty, adresy, URL map, pořadí položek a metadata držet v content souborech

## Konvence
- Preferovat alias importy přes @/...
- Nové texty vždy přidávat pro cs, en, de
- Při refaktoru odstraňovat nepoužívané klíče, importy a komponenty

## Stav projektu
Projekt je veden jako čistá React aplikace bez závislosti na původním Base44 exportním runtime.
