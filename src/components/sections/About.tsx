"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { FaCheckCircle, FaHeartbeat, FaPlay, FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/constants";

export function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const [play, setPlay] = useState(false);

  const isRtl = locale === "ar";
  const imagesFromX = isRtl ? 40 : -40;
  const videoFromX = isRtl ? -40 : 40;

  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Column 1 — Surgery images */}
          <motion.div
            initial={{ opacity: 0, x: imagesFromX }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
            className="order-2 relative lg:order-1 lg:col-span-4"
          >
            <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-4">
              <Image
                src="/surgery-1.png"
                alt={t("surgeryAlt1")}
                width={400}
                height={280}
                className="h-auto w-full rounded-2xl object-cover shadow-md"
              />
              <Image
                src="/surgery-2.png"
                alt={t("surgeryAlt2")}
                width={400}
                height={280}
                className="h-auto w-full rounded-2xl object-cover shadow-md"
              />
            </div>

            {/* Circular logo centered between images */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <Image
                src="/logo.jpeg"
                alt={t("sealAlt")}
                width={96}
                height={96}
                className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg sm:h-24 sm:w-24"
              />
            </div>
          </motion.div>

          {/* Column 2 — Content */}
          <div className="order-1 lg:order-2 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <div className="mb-3 flex items-center justify-end gap-2 text-sm font-semibold text-brand-accent">
                <span>{t("topLabel")}</span>
                <FaHeartbeat className="text-lg text-red-500" />
              </div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-brand-dark sm:text-2xl lg:text-3xl text-end">
                {t("headline")}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {/* Sub-column A — Bio & credentials */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <p className="text-sm leading-relaxed text-brand-muted sm:text-base">
                  {t("bioNew")}
                </p>

                <div className="mt-6 space-y-4">
                  {(["c1", "c2", "c3", "c4"] as const).map((k) => (
                    <div key={k} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-lg text-brand-accent" />
                      <div>
                        <div className="text-sm font-bold text-brand-dark sm:text-base">
                          {t(`credentials.${k}.title` as never)}
                        </div>
                        <div className="text-xs text-brand-muted sm:text-sm">
                          {t(`credentials.${k}.description` as never)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <a href="#about-detail">
                    <Button variant="outline">{t("more")}</Button>
                  </a>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                    <FaWhatsapp className="text-2xl text-green-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-brand-muted">
                      {t("bookingLabel")}
                    </div>
                    <div className="text-base font-bold text-brand-dark" dir="ltr">
                      {WHATSAPP_DISPLAY}
                    </div>
                  </div>
                </a>
              </motion.div>

              {/* Sub-column B — Video */}
              <motion.div
                initial={{ opacity: 0, x: videoFromX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <div className="overflow-hidden rounded-2xl bg-brand-secondary shadow-xl">
                  <div className="relative aspect-[3/4]">
                    {!play ? (
                      <button
                        type="button"
                        onClick={() => setPlay(true)}
                        className="group relative h-full w-full"
                        aria-label={t("playVideo")}
                      >
                        <Image
                          src="https://i.ytimg.com/vi/j-g27rM3G4w/hqdefault.jpg"
                          alt={t("videoAlt")}
                          fill
                          className="object-cover opacity-90"
                          sizes="(max-width: 1024px) 100vw, 520px"
                        />
                        <div className="absolute inset-0 bg-brand-secondary/35" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 transition-transform group-hover:scale-105">
                            <FaPlay className="text-xl text-brand-secondary" />
                          </div>
                        </div>
                      </button>
                    ) : (
                      <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/j-g27rM3G4w?autoplay=1"
                        title="YouTube video"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

