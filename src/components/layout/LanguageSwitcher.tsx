"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

export function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale =
    locale === routing.locales[0] ? routing.locales[1] : routing.locales[0];

  const label =
    nextLocale === "en" ? "English 🇬🇧" : "عربي 🇪🇬";

  return (
    <Button
      variant="outline"
      size="sm"
      aria-label={label}
      onClick={() => router.replace(pathname, { locale: nextLocale })}
    >
      {label}
    </Button>
  );
}

