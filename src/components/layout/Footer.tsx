"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  BRANCHES,
  PHONE_PRIMARY_DISPLAY,
  PHONE_PRIMARY_TEL,
  SOCIALS,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/constants";
import { getPrimaryServicePages } from "@/lib/seo/navigation";
import { seoPagePath } from "@/lib/seo/paths";
import { Link } from "@/i18n/navigation";

type LinkItem = { key: string; href: string; label: string };

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tHeader = useTranslations("header");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  const usefulLinks: LinkItem[] = [
    { key: "home", href: "#home", label: tNav("home") },
    { key: "about", href: "#about", label: tNav("about") },
    { key: "services", href: "/services", label: tNav("services") },
    { key: "testimonials", href: "#testimonials", label: tNav("testimonials") },
    { key: "videos", href: "#videos", label: tNav("videos") },
    { key: "conferences", href: "#conferences", label: tNav("conferences") },
    { key: "blog", href: "/blog", label: tNav("blog") },
    { key: "workshop", href: "#workshop", label: tNav("workshop") },
  ];

  const loc = locale as "ar" | "en";
  const services = getPrimaryServicePages().map((page) => ({
    key: page.id,
    href: seoPagePath(page, loc),
    label: page.h1[loc],
  }));

  const socials = [
    { key: "facebook", href: SOCIALS.facebook, label: t("socialFacebook"), Icon: FaFacebookF },
    { key: "instagram", href: SOCIALS.instagram, label: t("socialInstagram"), Icon: FaInstagram },
    { key: "tiktok", href: SOCIALS.tiktok, label: t("socialTiktok"), Icon: FaTiktok },
    { key: "youtube", href: SOCIALS.youtube, label: t("socialYoutube"), Icon: FaYoutube },
  ] as const;

  return (
    <footer className="mt-20 border-t border-[#30302e] bg-brand-primary text-[#b0aea5]">
      <div className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* About */}
            <div className="lg:col-span-4">
              <a href={locale === "ar" ? "/ar" : "/en"} className="inline-flex items-center gap-3">
                <Image
                  src="/logo.jpeg"
                  alt=""
                  width={96}
                  height={96}
                  className="h-16 w-16 rounded-2xl object-cover shadow-[rgba(0,0,0,0.2)_0px_4px_24px]"
                />
                <div className="text-lg font-medium text-[#faf9f5]">{tCommon("brandName")}</div>
              </a>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#b0aea5]">
                {t("aboutText")}
              </p>
            </div>

            {/* Useful links */}
            <nav className="lg:col-span-2" aria-labelledby="footer-useful-links-title">
              <p id="footer-useful-links-title" className="text-sm font-medium text-[#faf9f5]">
                {t("usefulLinks")}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {usefulLinks.map((it) => (
                  <li key={it.key}>
                    {it.href.startsWith("/") ? (
                      <Link className="hover:text-[#faf9f5]" href={it.href}>
                        {it.label}
                      </Link>
                    ) : (
                      <a className="hover:text-[#faf9f5]" href={it.href}>
                        {it.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav className="lg:col-span-3" aria-labelledby="footer-services-title">
              <Link
                id="footer-services-title"
                href="/services"
                className="text-sm font-medium text-[#faf9f5] hover:underline"
              >
                {t("services")}
              </Link>
              <ul className="mt-4 space-y-2 text-sm">
                {services.map((it) => (
                  <li key={it.key}>
                    <a className="hover:text-[#faf9f5]" href={it.href}>
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Clinics */}
            <section className="lg:col-span-3" aria-labelledby="footer-clinics-title">
              <p id="footer-clinics-title" className="text-sm font-medium text-[#faf9f5]">
                {t("clinics")}
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {BRANCHES.map((b) => (
                  <li key={b.key} className="leading-relaxed">
                    <div className="font-medium text-[#faf9f5]">
                      {locale === "ar" ? b.nameAr : b.nameEn}
                    </div>
                    <div className="text-[#b0aea5]">
                      {locale === "ar" ? b.addressAr : b.addressEn}
                    </div>
                    <a
                      className="mt-1 inline-flex text-[#b0aea5] hover:text-[#faf9f5]"
                      href={`tel:${b.phoneTel}`}
                      dir="ltr"
                    >
                      {b.phoneDisplay}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Contact + CTAs */}
          <div className="mt-14 grid gap-6 border-t border-[#30302e] pt-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-[#25D366]" />
                  <a className="hover:text-[#faf9f5]" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    <span dir="ltr">{WHATSAPP_DISPLAY}</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#30302e] text-[10px] text-[#faf9f5]">
                    TEL
                  </span>
                  <a className="hover:text-[#faf9f5]" href={`tel:${PHONE_PRIMARY_TEL}`} dir="ltr">
                    {PHONE_PRIMARY_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a href="#clinics">
                  <Button variant="secondary">
                    {tHeader("bookAppointment")}
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="primary">{tHeader("bookOnline")}</Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#30302e] py-5">
        <Container>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-xs text-[#87867f]">
              {t("copyright", { year: new Date().getFullYear() })}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="text-[#87867f]">{t("socials")}</span>
              {socials.map(({ key, href, label, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#30302e] text-[#faf9f5] shadow-[0px_0px_0px_1px_#30302e] transition-colors hover:bg-brand-accent"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

