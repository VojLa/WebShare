import useTranslation from '@/hooks/useTranslation';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from 'lucide-react';

const UiButton = /** @type {any} */ (Button);
const UiDropdownMenuContent = /** @type {any} */ (DropdownMenuContent);
const UiDropdownMenuItem = /** @type {any} */ (DropdownMenuItem);

export default function LanguageSwitcher() {
  const { language, setLanguage, languages } = useTranslation();

  const current = languages.find(l => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UiButton variant="ghost" size="sm" className="gap-2 text-sm font-medium">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{current?.flag} {current?.label}</span>
          <span className="sm:hidden">{current?.flag}</span>
        </UiButton>
      </DropdownMenuTrigger>
      <UiDropdownMenuContent align="end">
        {languages.map(lang => (
          <UiDropdownMenuItem
            key={lang.code}
            onSelect={() => setLanguage(lang.code)}
            className={language === lang.code ? 'bg-accent' : ''}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.label}
          </UiDropdownMenuItem>
        ))}
      </UiDropdownMenuContent>
    </DropdownMenu>
  );
}