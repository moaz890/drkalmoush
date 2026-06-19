"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getServiceMenuGroups } from "@/lib/seo/service-menu";
import { seoPagePath } from "@/lib/seo/paths";

type Props = {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
};

type MenuPosition = {
  top: number;
  left: number;
  width: number;
};

const MENU_MAX_WIDTH = 896; // 56rem

export function ServicesMegaMenu({ variant = "desktop", onNavigate }: Props) {
  const t = useTranslations("servicesPage");
  const locale = useLocale() as "ar" | "en";
  const groups = getServiceMenuGroups();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState<MenuPosition>({ top: 0, left: 0, width: MENU_MAX_WIDTH });
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const updatePosition = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const width = Math.min(window.innerWidth * 0.92, MENU_MAX_WIDTH);
    const padding = 12;
    const left =
      locale === "ar"
        ? Math.max(padding, rect.right - width)
        : Math.min(rect.left, window.innerWidth - width - padding);

    setPosition({
      top: rect.bottom + 10,
      left,
      width,
    });
  }, [locale]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (variant !== "desktop" || !open) return;

    updatePosition();

    const onScrollOrResize = () => updatePosition();
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("scroll", onScrollOrResize, true);

    return () => {
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("scroll", onScrollOrResize, true);
    };
  }, [variant, open, updatePosition]);

  useEffect(() => {
    if (variant !== "desktop" || !open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        containerRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClickOutside);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClickOutside);
    };
  }, [variant, open]);

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

  const dropdown =
    open && mounted ? (
      <div
        ref={containerRef}
        role="menu"
        className="fixed z-[200] rounded-2xl border border-brand-secondary/10 bg-white p-6 shadow-2xl"
        style={{
          top: position.top,
          left: position.left,
          width: position.width,
        }}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.id}>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                {t(`groups.${group.id}`)}
              </p>
              <ul className="mt-3 max-h-64 space-y-1.5 overflow-y-auto">
                {group.pages.map((page) => (
                  <li key={page.id}>
                    <a
                      href={seoPagePath(page, locale)}
                      role="menuitem"
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
    ) : null;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          if (!open) {
            requestAnimationFrame(updatePosition);
          }
        }}
        className="group relative shrink-0 cursor-pointer whitespace-nowrap text-base font-semibold text-brand-primary transition-colors hover:text-brand-accent lg:text-sm xl:text-base"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="inline-flex items-center gap-1">
          <span
            className={`text-brand-primary transition-transform ${open ? "rotate-45" : ""}`}
          >
            +
          </span>
          {t("navLabel")}
        </span>
        <span className="absolute -bottom-3 start-0 h-0.5 w-0 bg-brand-primary transition-all group-hover:w-full" />
      </button>

      {mounted && dropdown ? createPortal(dropdown, document.body) : null}
    </>
  );
}
