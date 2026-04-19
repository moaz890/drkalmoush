"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAP_EMBED_NASR_CITY,
  PHONE_DISPLAY,
  PHONE_TEL,
  TIKTOK_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/constants";

type Branch = "nasr" | "zaitoon";

export function Contact() {
  const t = useTranslations("contact");
  const [branch, setBranch] = useState<Branch>("nasr");

  const channels = [
    {
      key: "call",
      href: `tel:${PHONE_TEL}`,
      label: t("call"),
      value: PHONE_DISPLAY,
      icon: FaPhone,
    },
    {
      key: "whatsapp",
      href: WHATSAPP_URL,
      label: t("whatsapp"),
      value: WHATSAPP_DISPLAY,
      icon: FaWhatsapp,
      external: true,
    },
    {
      key: "email",
      href: `mailto:${EMAIL}`,
      label: t("email"),
      value: EMAIL,
      icon: FaEnvelope,
    },
    {
      key: "instagram",
      href: INSTAGRAM_URL,
      label: t("instagram"),
      value: "@tarek_ghobashy",
      icon: FaInstagram,
      external: true,
    },
    {
      key: "facebook",
      href: FACEBOOK_URL,
      label: t("facebook"),
      value: t("facebookPage"),
      icon: FaFacebook,
      external: true,
    },
    {
      key: "tiktok",
      href: TIKTOK_URL,
      label: t("tiktok"),
      value: "@tarek3369",
      icon: FaTiktok,
      external: true,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-16 md:py-24">
      <ScrollReveal>
        <Container>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <ul className="flex flex-col gap-3">
                {channels.map(
                  ({ key, href, label, value, icon: Icon, external }) => (
                    <li key={key}>
                      <a
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex items-start gap-4 rounded-2xl border border-brand-dark/10 bg-slate-50/80 p-4 transition hover:border-brand-secondary/40 hover:bg-white hover:shadow-md"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/15 text-brand-secondary transition group-hover:scale-105">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-brand-dark">
                            {label}
                          </span>
                          <span className="break-all text-brand-muted">
                            {value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ),
                )}
              </ul>

              <div className="mt-8">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-brand-dark">
                  <FaLocationDot className="text-brand-primary" aria-hidden />
                  {t("branches")}
                </h3>
                <div
                  role="tablist"
                  aria-label={t("branches")}
                  className="mb-4 flex flex-wrap gap-2"
                >
                  {(
                    [
                      ["nasr", "branchNasr"],
                      ["zaitoon", "branchZaitoon"],
                    ] as const
                  ).map(([id, labelKey]) => (
                    <button
                      key={id}
                      type="button"
                      role="tab"
                      aria-selected={branch === id}
                      id={`tab-${id}`}
                      aria-controls={`panel-${id}`}
                      onClick={() => setBranch(id)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary ${
                        branch === id
                          ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-md"
                          : "bg-slate-100 text-brand-dark hover:bg-slate-200"
                      }`}
                    >
                      {t(labelKey)}
                    </button>
                  ))}
                </div>
                <div
                  role="tabpanel"
                  id={`panel-${branch}`}
                  aria-labelledby={`tab-${branch}`}
                  className="rounded-xl bg-slate-50 p-4 text-brand-dark/90"
                >
                  {branch === "nasr" ? t("addressNasr") : t("addressZaitoon")}
                </div>
              </div>
            </div>

            <div className="flex min-h-[280px] flex-col overflow-hidden rounded-2xl ring-1 ring-brand-dark/10 lg:min-h-[420px]">
              <p className="border-b border-brand-dark/10 bg-slate-50 px-4 py-2 text-sm font-medium text-brand-dark">
                {t("mapTitle")}
              </p>
              <iframe
                title={t("mapTitle")}
                src={MAP_EMBED_NASR_CITY}
                className="h-full min-h-[260px] w-full flex-1 border-0 lg:min-h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
}
