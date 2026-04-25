"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { GiScalpel, GiWeightScale } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import { Container } from "@/components/ui/Container";

type CardKey = "c1" | "c2" | "c3";

const CARDS: Array<{
  key: CardKey;
  bg: string;
  iconClass: string;
  Icon: ComponentType<{ className?: string }>;
  delay: number;
}> = [
  {
    key: "c1",
    bg: "bg-[#fce4ec]",
    iconClass: "text-rose-600",
    Icon: GiWeightScale,
    delay: 0,
  },
  {
    key: "c2",
    bg: "bg-[#f0f4c3]",
    iconClass: "text-lime-700",
    Icon: GiScalpel,
    delay: 0.15,
  },
  {
    key: "c3",
    bg: "bg-[#e0f2f1]",
    iconClass: "text-teal-700",
    Icon: FaAward,
    delay: 0.3,
  },
];

export function HighlightsStrip() {
  const t = useTranslations("highlights");

  return (
    <section className="bg-white py-12 sm:py-16" aria-label={t("aria")}>
      <Container>
        <h2 className="sr-only">{t("aria")}</h2>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {CARDS.map((c) => {
            const Icon = c.Icon;
            return (
              <motion.article
                key={c.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: c.delay }}
                className={`${c.bg} flex h-full min-h-[200px] flex-col rounded-2xl px-6 py-8 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]`}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
                  <Icon className={`h-12 w-12 ${c.iconClass}`} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-brand-dark">
                  {t(`${c.key}.title` as never)}
                </h3>
                <p className="text-sm leading-relaxed text-brand-muted line-clamp-3">
                  {t(`${c.key}.description` as never)}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
