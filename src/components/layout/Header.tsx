"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Container } from "@/components/ui/Container";

const navKeys = [
  "home",
  "about",
  "services",
  "doctors",
  "offers",
  "gallery",
  "contact",
] as const;

const hashByKey: Record<(typeof navKeys)[number], string> = {
  home: "#hero",
  about: "#about",
  services: "#services",
  doctors: "#doctors",
  offers: "#offers",
  gallery: "#gallery",
  contact: "#contact",
};

export function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-dark/5 bg-white/80 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-3 md:py-4">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={tc("brandName")}
            width={48}
            height={48}
            className="h-11 w-auto object-contain md:h-12"
            priority
          />
          <span className="hidden font-bold text-brand-dark sm:inline">
            {tc("brandName")}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navKeys.map((key) => (
            <a
              key={key}
              href={hashByKey[key]}
              className="rounded-lg px-3 py-2 text-sm font-medium text-brand-dark/85 transition hover:bg-brand-secondary/10 hover:text-brand-secondary"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-brand-dark lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("closeMenu") : t("openMenu")}
          >
            {open ? (
              <FaXmark className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-brand-dark/10 bg-white px-4 pb-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1 pt-2" aria-label="Mobile">
            {navKeys.map((key) => (
              <a
                key={key}
                href={hashByKey[key]}
                className="rounded-lg px-3 py-3 text-base font-medium text-brand-dark hover:bg-brand-secondary/10"
                onClick={() => setOpen(false)}
              >
                {t(key)}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
