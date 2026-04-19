"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = locale === "ar" ? "en" : "ar";
  const label = locale === "ar" ? "English" : "العربية";

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      type="button"
      onClick={switchLocale}
      className="rounded-full border border-brand-dark/15 bg-white/90 px-3 py-1.5 text-sm font-medium text-brand-dark shadow-sm transition hover:border-brand-secondary/40 hover:bg-white"
      aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
    >
      {label}
    </button>
  );
}
