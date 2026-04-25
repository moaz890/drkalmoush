"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaCalendarAlt, FaHeartbeat } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { WHATSAPP_URL } from "@/lib/constants";

export function ClinicHoursFaq() {
  const t = useTranslations("phase5");

  const faqItems = [
    { id: "q1", q: t("faq.q1.q"), a: t("faq.q1.a") },
    { id: "q2", q: t("faq.q2.q"), a: t("faq.q2.a") },
    { id: "q3", q: t("faq.q3.q"), a: t("faq.q3.a") },
    { id: "q4", q: t("faq.q4.q"), a: t("faq.q4.a") },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl shadow-[var(--shadow-whisper)] lg:grid-cols-12">
          {/* Hours */}
          <motion.aside
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-brand-secondary p-8 text-white sm:p-12 lg:col-span-5"
          >
            <h3 className="mb-6 text-2xl font-medium">{t("hours.title")}</h3>

            <div className="space-y-4">
              {(["h1", "h2", "h3"] as const).map((k) => (
                <div key={k}>
                  <div className="mb-2 text-center text-lg font-bold text-brand-accent sm:text-xl">
                    {t(`hours.${k}.clinic` as never)}
                  </div>
                  <div className="rounded-xl border border-white/20 p-4 text-sm sm:text-base">
                    <div className="flex items-center justify-between gap-4">
                      <div className="font-semibold">
                        {t(`hours.${k}.days` as never)}
                      </div>
                      <div className="text-white/90">
                        {t(`hours.${k}.time` as never)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Button variant="primary">
                  <FaCalendarAlt />
                  {t("hours.cta")}
                </Button>
              </a>
            </div>
          </motion.aside>

          {/* FAQ */}
          <div className="bg-surface-ivory p-8 sm:p-12 lg:col-span-7">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent">
              <span>{t("faq.kicker")}</span>
              <FaHeartbeat className="text-sm text-red-500" />
            </div>

            <h3 className="mb-8 text-3xl font-medium text-brand-primary sm:text-4xl">
              {t("faq.title")}
            </h3>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
            >
              <Accordion
                items={faqItems.map((f) => ({
                  id: f.id,
                  title: f.q,
                  content: f.a,
                }))}
              />
            </motion.div>

            <div className="mt-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Button variant="primary">{t("faq.bookNow")}</Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

