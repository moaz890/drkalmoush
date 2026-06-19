"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getServiceMenuGroups } from "@/lib/seo/service-menu";
import { seoPagePath } from "@/lib/seo/paths";

type Props = {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function ServicesMegaMenu({ variant = "desktop", onNavigate }: Props) {
  const t = useTranslations("servicesPage");
  const locale = useLocale() as "ar" | "en";
  const groups = getServiceMenuGroups();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== "desktop") return;
    const onPointerDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [variant]);

  if (variant === "mobile") {
    return (
      <div className="space-y-3">
        {groups.map((group) => (
          <div key={group.id}>
            <p className="px-3 text-xs font-semibold uppercase tracking-wide text-brand-accent">
              {t(`groups.${group.id}`)}
            </p>
            <ul className="mt-1 space-y-1">
              {group.pages.map((page) => (
                <li key={page.id}>
                  <a
                    href={seoPagePath(page, locale)}
                    onClick={onNavigate}
                    className="block rounded-xl px-3 py-2 text-sm text-brand-primary hover:bg-brand-secondary/5"
                  >
                    {page.h1[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Link
          href="/services"
          onClick={onNavigate}
          className="mt-2 block rounded-xl px-3 py-2 text-sm font-semibold text-brand-accent hover:bg-brand-secondary/5"
        >
          {t("viewAll")}
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group relative cursor-pointer text-base font-semibold text-brand-primary transition-colors hover:text-brand-accent lg:text-sm xl:text-base"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="inline-flex items-center gap-1">
          <span className="text-brand-primary transition-colors group-hover:text-brand-accent">
            +
          </span>
          {t("navLabel")}
        </span>
        <span className="absolute -bottom-3 start-0 h-0.5 w-0 bg-brand-primary transition-all group-hover:w-full" />
      </button>

      {open ? (
        <div className="absolute start-0 top-[calc(100%+1rem)] z-50 w-[min(92vw,56rem)] rounded-2xl border border-brand-secondary/10 bg-white p-6 shadow-xl">
          <div className="grid gap-6 md:grid-cols-3">
            {groups.map((group) => (
              <div key={group.id}>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                  {t(`groups.${group.id}`)}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {group.pages.map((page) => (
                    <li key={page.id}>
                      <a
                        href={seoPagePath(page, locale)}
                        onClick={() => {
                          setOpen(false);
                          onNavigate?.();
                        }}
                        className="block rounded-lg px-2 py-1.5 text-sm text-brand-primary transition-colors hover:bg-surface-sand/60 hover:text-brand-accent"
                      >
                        {page.h1[locale]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-brand-secondary/10 pt-4">
            <Link
              href="/services"
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className="text-sm font-semibold text-brand-accent underline-offset-4 hover:underline"
            >
              {t("viewAll")}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
