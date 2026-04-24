"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { SOCIALS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const SLIDE_IMAGES = [
  "/hero-1-removebg-preview.png",
  "/hero-2-removebg-preview.png",
  "/hero-3-removebg-preview.png",
] as const;

const SLIDE_NS = ["slide1", "slide2", "slide3"] as const;

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  const isRtl = locale === "ar";
  const textFromX = isRtl ? 24 : -24;

  const [active, setActive] = useState(0);

  const slides = useMemo(() => {
    return SLIDE_NS.map((ns, idx) => ({
      key: ns,
      image: SLIDE_IMAGES[idx]!,
      tagline: t(`${ns}.tagline` as never),
      title: t(`${ns}.title` as never),
      subtitle: t(`${ns}.subtitle` as never),
    }));
  }, [t]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [reduceMotion, slides.length]);

  return (
    <section id="home" className="relative h-[100svh] min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_27%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-secondary/80" />
      </div>

      <div className="relative z-20 flex h-full w-full">
        <Container
          as="div"
          className="!max-w-none w-full"
        >
          <div className="flex h-full w-full flex-col pt-28 pb-0 sm:pt-32">
            <div className="flex min-h-0 flex-1 items-stretch gap-0">
              <div className="min-w-0 flex-1 px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
                <div className="relative flex h-full min-h-0 flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slides[active].key}
                      className="flex min-h-0 w-full flex-1 flex-col justify-end gap-6 lg:min-h-[65vh] lg:flex-row lg:items-end lg:justify-between"
                    >
                      <motion.div
                        className="w-full max-w-2xl lg:mt-0"
                        initial={{ opacity: 0, x: textFromX }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -textFromX }}
                        transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
                      >
                        <p className="text-sm font-semibold text-brand-accent sm:text-base">
                          {slides[active].tagline}
                        </p>
                        <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                          {slides[active].title}
                        </h1>
                        <p className="mt-4 text-base leading-relaxed text-brand-accent/90 sm:text-lg">
                          {slides[active].subtitle}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                          <a href="#clinics">
                            <Button variant="gold" size="lg">
                              {t("ctaBook")}
                            </Button>
                          </a>
                          <a href="#contact">
                            <Button variant="onDark" size="lg">
                              {t("ctaBookOnline")}
                            </Button>
                          </a>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative hidden w-full self-end lg:block lg:w-[44%] lg:max-w-[520px]"
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "10%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <div className="relative mx-auto flex h-[40vh] w-full max-w-md items-end justify-center sm:h-[45vh] lg:h-[60vh] lg:max-w-none">
                          <Image
                            src={slides[active].image}
                            alt={t("doctorAlt")}
                            fill
                            className="object-contain object-center"
                            priority={active === 0}
                            sizes="(max-width: 1024px) 92vw, 520px"
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <aside
                className="hidden w-16 flex-col items-center justify-center gap-4 ps-1 lg:flex"
                aria-label={t("socialsAria")}
              >
                <a
                  href={SOCIALS.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/90 transition-transform hover:scale-110"
                >
                  <FaFacebook />
                </a>
                <a
                  href={SOCIALS.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/90 transition-transform hover:scale-110"
                >
                  <FaTiktok />
                </a>
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/90 transition-transform hover:scale-110"
                >
                  <FaInstagram />
                </a>
                <a
                  href={SOCIALS.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/90 transition-transform hover:scale-110"
                >
                  <FaYoutube />
                </a>
              </aside>
            </div>
          </div>
        </Container>
      </div>

      <div
        className="pointer-events-none absolute bottom-4 start-0 end-0 z-30 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Hero carousel"
      >
        {slides.map((s, idx) => (
          <button
            key={s.key}
            type="button"
            className="pointer-events-auto rounded-full p-0 transition-transform hover:scale-110"
            style={{
              width: active === idx ? 16 : 10,
              height: active === idx ? 10 : 8,
            }}
            aria-label={`Slide ${idx + 1}`}
            aria-pressed={active === idx}
            onClick={() => setActive(idx)}
          >
            <span
              className={`block h-full w-full rounded-full ${
                active === idx ? "bg-brand-accent" : "bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

