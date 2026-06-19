"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ServicesMegaMenu } from "@/components/layout/ServicesMegaMenu";
import { BRANCHES, MAPS, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/constants";

type NavItem = { key: string; href: string; label: string };

export function Header() {
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");
  const tHeader = useTranslations("header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const items: NavItem[] = useMemo(
    () => [
      { key: "home", href: "#home", label: tNav("home") },
      { key: "about", href: "#about", label: tNav("about") },
      { key: "testimonials", href: "#testimonials", label: tNav("testimonials") },
      { key: "videos", href: "#videos", label: tNav("videos") },
      { key: "conferences", href: "#conferences", label: tNav("conferences") },
      { key: "blog", href: "/blog", label: tNav("blog") },
      { key: "workshop", href: "#workshop", label: tNav("workshop") },
    ],
    [tNav]
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const goToHash = (href: string) => {
    if (pathname !== "/") {
      router.push("/", { locale });
      setTimeout(() => {
        window.location.hash = href;
      }, 0);
      return;
    }
    window.location.hash = href;
  };

  const navigateNav = (href: string) => {
    if (href.startsWith("/")) {
      router.push(href);
      return;
    }
    goToHash(href);
  };

  const closeMobile = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const showCompact = isScrolled;

  const renderLabel = (it: NavItem) => {
    const withPlus = it.key === "blog";
    return (
      <span className="inline-flex items-center gap-1">
        {withPlus ? (
          <span className="text-brand-primary transition-colors group-hover:text-brand-accent">
            +
          </span>
        ) : null}
        {it.label}
      </span>
    );
  };

  const renderNavItem = (it: NavItem, compact = false) => (
    <button
      key={it.key}
      onClick={() => navigateNav(it.href)}
      className={
        compact
          ? "group shrink-0 cursor-pointer whitespace-nowrap text-sm font-semibold text-brand-primary transition-colors hover:text-brand-accent sm:text-base"
          : "group relative cursor-pointer text-base font-semibold text-brand-primary transition-colors hover:text-brand-accent"
      }
    >
      {renderLabel(it)}
      {!compact ? (
        <span className="absolute -bottom-3 start-0 h-0.5 w-0 bg-brand-primary transition-all group-hover:w-full" />
      ) : null}
    </button>
  );

  const renderDesktopNav = (compact = false) => (
    <>
      {items.slice(0, 2).map((it) => renderNavItem(it, compact))}
      <ServicesMegaMenu onNavigate={closeMobile} />
      {items.slice(2).map((it) => renderNavItem(it, compact))}
    </>
  );

  return (
    <>
      {!showCompact ? (
        <header className="absolute top-0 z-40 w-full pt-4">
          <div className="mx-4 overflow-hidden rounded-2xl border border-brand-secondary/10 bg-white shadow-sm sm:mx-6 lg:mx-8">
            <div className="border-b border-brand-secondary/10">
              <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo.jpeg"
                    alt={tCommon("brandName")}
                    width={110}
                    height={110}
                    className="h-24 w-40 rounded-2xl object-cover shadow-sm"
                    priority
                  />
                </div>

                <div className="hidden flex-1 items-center justify-center gap-3 lg:flex">
                  <div className="text-xs font-semibold text-brand-secondary/70">
                    {tHeader("locations")}
                  </div>
                  <div className="flex items-stretch rounded-2xl bg-white">
                    {BRANCHES.map((b, idx) => (
                      <a
                        key={b.key}
                        href={MAPS[b.key as keyof typeof MAPS] ?? "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="relative px-4 py-2 transition-colors hover:bg-surface-sand/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-blue)]"
                      >
                        {idx !== 0 ? (
                          <span className="absolute inset-y-0 start-0 flex items-center">
                            <span className="h-6 w-px bg-brand-primary/25" />
                          </span>
                        ) : null}
                        <div className="group flex items-start gap-2">
                          <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-primary/20 transition-colors group-hover:border-brand-accent/35">
                            <FaMapMarkerAlt className="text-brand-primary transition-colors group-hover:text-brand-accent" />
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-brand-primary">
                              {locale === "ar" ? b.nameAr : b.nameEn}
                            </div>
                            <div className="max-w-[18rem] truncate text-xs text-brand-muted">
                              {locale === "ar" ? b.addressAr : b.addressEn}
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-brand-secondary hover:bg-brand-secondary/5 md:flex"
                  >
                    <FaWhatsapp className="text-[#25D366]" />
                    <span className="whitespace-nowrap">{WHATSAPP_DISPLAY}</span>
                  </a>
                  <LanguageSwitcher />
                  <Button
                    variant="outline"
                    size="sm"
                    className="md:hidden"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((v) => !v)}
                  >
                    {menuOpen ? "×" : "☰"}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              <nav className="hidden items-center gap-5 lg:flex">{renderDesktopNav()}</nav>

              <div className="hidden items-center gap-2 lg:flex">
                <a href="#clinics">
                  <Button variant="primary" size="sm" className="text-white">
                    {tHeader("bookAppointment")}
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary" size="sm">
                    {tHeader("bookOnline")}
                  </Button>
                </a>
              </div>

              <div className="flex w-full items-center justify-between lg:hidden">
                <div className="text-base font-semibold text-brand-primary">
                  {tCommon("brandName")}
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-base font-medium text-brand-primary hover:bg-brand-secondary/5"
                  >
                    <FaWhatsapp className="text-[#25D366]" />
                    <span className="whitespace-nowrap">{WHATSAPP_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : null}

      <AnimatePresence>
        {showCompact ? (
          <motion.header
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-0 z-50 w-full pt-3"
          >
            <div className="mx-4 overflow-hidden rounded-2xl border border-brand-secondary/10 bg-white/95 shadow-sm backdrop-blur sm:mx-6 lg:mx-8">
              <div className="flex h-16 w-full items-center gap-2 px-4 sm:px-6 lg:px-8">
                <div className="flex shrink-0 items-center gap-3">
                  <Image
                    src="/logo.jpeg"
                    alt={tCommon("brandName")}
                    width={60}
                    height={60}
                    className="h-14 w-14 rounded-xl object-cover shadow-sm sm:h-16 sm:w-16"
                  />
                </div>

                <nav
                  className="hidden min-h-0 min-w-0 flex-1 items-center justify-center overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] lg:flex [&::-webkit-scrollbar]:hidden"
                  aria-label={tNav("mainNav")}
                >
                  <div className="flex items-center gap-2 px-1 sm:gap-3">
                    {renderDesktopNav(true)}
                  </div>
                </nav>

                <div className="ml-auto flex shrink-0 items-center gap-2">
                  <div className="hidden items-center gap-2 md:flex">
                    <a href="#clinics">
                      <Button variant="primary" size="sm">
                        {tHeader("bookAppointment")}
                      </Button>
                    </a>
                    <a href="#contact">
                      <Button variant="secondary" size="sm">
                        {tHeader("bookOnline")}
                      </Button>
                    </a>
                    <LanguageSwitcher />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="md:hidden"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((v) => !v)}
                  >
                    {menuOpen ? "×" : "☰"}
                  </Button>
                </div>
              </div>
            </div>
          </motion.header>
        ) : null}
      </AnimatePresence>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-black/35 md:hidden">
          <div className="absolute inset-y-0 end-0 w-[85%] max-w-sm overflow-y-auto bg-white shadow-2xl">
            <div className="flex h-16 items-center justify-between px-4">
              <div className="text-sm font-semibold">{tCommon("brandName")}</div>
              <Button
                variant="outline"
                size="sm"
                aria-label="Close"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </Button>
            </div>
            <div className="px-4 pb-6">
              <div className="mb-4 flex items-center justify-between">
                <LanguageSwitcher />
              </div>
              <div className="flex flex-col gap-2">
                {items.slice(0, 2).map((it) => (
                  <button
                    key={it.key}
                    onClick={() => {
                      closeMobile();
                      navigateNav(it.href);
                    }}
                    className="w-full rounded-xl px-3 py-2 text-start text-sm hover:bg-brand-secondary/5"
                  >
                    {renderLabel(it)}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-start text-sm hover:bg-brand-secondary/5"
                  aria-expanded={mobileServicesOpen}
                >
                  <span className="inline-flex items-center gap-1 font-semibold text-brand-primary">
                    <span className="text-brand-accent">+</span>
                    {tNav("services")}
                  </span>
                  <span aria-hidden>{mobileServicesOpen ? "−" : "+"}</span>
                </button>
                {mobileServicesOpen ? (
                  <div className="rounded-xl bg-surface-sand/30 px-2 py-3">
                    <ServicesMegaMenu variant="mobile" onNavigate={closeMobile} />
                  </div>
                ) : null}

                {items.slice(2).map((it) => (
                  <button
                    key={it.key}
                    onClick={() => {
                      closeMobile();
                      navigateNav(it.href);
                    }}
                    className="w-full rounded-xl px-3 py-2 text-start text-sm hover:bg-brand-secondary/5"
                  >
                    {renderLabel(it)}
                  </button>
                ))}
              </div>
              <div className="mt-6 grid gap-2">
                <a href="#clinics">
                  <Button variant="primary" className="w-full">
                    {tHeader("bookAppointment")}
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary" className="w-full">
                    {tHeader("bookOnline")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
