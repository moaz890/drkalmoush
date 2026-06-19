"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { FaUserMd } from "react-icons/fa";
import { GiScalpel, GiStethoscope, GiWeightScale } from "react-icons/gi";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { WHATSAPP_URL } from "@/lib/constants";

type ServiceKey = "tummyTuck" | "gastricBypass" | "hiatalHernia";

type Service = {
  key: ServiceKey;
  image: string;
  Icon: React.ComponentType<{ className?: string }>;
};

function toBullets(text: string): string[] {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => l.replace(/^[-•]+/g, "").trim());
}

export function Services() {
  const t = useTranslations("servicesSection");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const services = useMemo<Service[]>(
    () => [
      { key: "tummyTuck", image: "/tummy-tuck.png", Icon: GiScalpel },
      { key: "gastricBypass", image: "/gasteric-bypass.png", Icon: GiWeightScale },
      { key: "hiatalHernia", image: "/laparoscopic.png", Icon: GiStethoscope },
    ],
    []
  );

  const [openKey, setOpenKey] = useState<ServiceKey | null>(null);
  const active = openKey ? services.find((s) => s.key === openKey) : undefined;
  const activeTitle = openKey ? t(`items.${openKey}.title` as never) : "";
  const activeDetails = openKey ? t(`items.${openKey}.details` as never) : "";

  return (
    <section id="services" className="py-16 sm:py-24">
      <Container>
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-start">
            <h2 className="text-3xl font-medium text-brand-primary sm:text-4xl">
              {t("title")}
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl border border-brand-secondary/20 px-5 text-sm font-semibold text-brand-accent transition-colors hover:bg-surface-sand/40"
          >
            {locale === "ar" ? "عرض جميع الخدمات ←" : "View all services →"}
          </Link>
        </div>

        <div className="space-y-6">
          {services.map((s, idx) => {
            const Icon = s.Icon;
            return (
              <motion.article
                key={s.key}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                className="group rounded-3xl bg-surface-ivory p-6 shadow-[var(--shadow-whisper)]"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  {/* Icon */}
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-surface-sand shadow-[0px_0px_0px_1px_var(--color-ring-warm)]">
                      <Icon className="h-9 w-9 text-brand-primary transition-transform duration-700 ease-out group-hover:rotate-[360deg]" />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="min-w-0 md:w-[200px]">
                    <h3 className="text-xl font-bold text-brand-dark">
                      {t(`items.${s.key}.title` as never)}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-relaxed text-brand-muted">
                      {t(`items.${s.key}.excerpt` as never)}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-[260px]">
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={s.image}
                        alt={t(`items.${s.key}.title` as never)}
                        width={260}
                        height={160}
                        className="h-[160px] w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-image-flash bg-white/20" />
                    </div>
                  </div>

                  {/* More button */}
                  <div className="flex justify-end md:justify-start">
                    <Button
                      variant="outline"
                      className="w-44 px-8 py-2"
                      onClick={() => setOpenKey(s.key)}
                    >
                      {t("more")}
                    </Button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>

      <Modal
        open={openKey !== null}
        title={activeTitle}
        onClose={() => setOpenKey(null)}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-primary">
            <FaUserMd />
            <span>{t("detailsTitle")}</span>
          </div>

          <div className="space-y-2">
            {toBullets(activeDetails).map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent" />
                <p className={`text-sm leading-relaxed text-brand-muted ${isRtl ? "text-end" : "text-start"}`}>
                  {line}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <Button variant="primary">{t("bookNow")}</Button>
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
}

