"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const GAP_PX = 16;
const AUTO_MS = 5000;

type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
};

export function Testimonials() {
  const t = useTranslations("testimonialsSection");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const reduceMotion = useReducedMotion();

  const rawItems = t.raw("items") as TestimonialItem[];
  const items = useMemo(() => (Array.isArray(rawItems) ? rawItems : []), [rawItems]);
  const count = items.length;

  const [isWide, setIsWide] = useState(false);
  const [cardStride, setCardStride] = useState(0);
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const visible = isWide ? 3 : 1;
  const maxIndex = Math.max(0, count - visible);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    setIndex(0);
  }, [isWide]);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      if (w <= 0) return;
      const cw = (w - (visible - 1) * GAP_PX) / visible;
      setCardStride(cw + GAP_PX);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [visible]);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (reduceMotion || pause || cardStride === 0 || count === 0) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, pause, cardStride, maxIndex, count]);

  const offset = index * cardStride;
  const translate = isRtl ? offset : -offset;

  const dotCount = maxIndex + 1;

  return (
    <section
      id="testimonials"
      className="border-y border-brand-secondary/10 bg-surface-ivory py-16 sm:py-24"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <Container>
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mx-auto mb-10 sm:mb-14"
        />

        <div className="relative">
          <div
            ref={viewportRef}
            className="overflow-hidden"
            aria-roledescription="carousel"
            aria-label={t("carouselAria")}
          >
            <div
              className={`flex gap-4 ${reduceMotion ? "" : "transition-transform duration-500 ease-out"}`}
              style={{ transform: `translate3d(${translate}px, 0, 0)` }}
            >
              {items.map((it, idx) => (
                <article
                  key={idx}
                  className="flex h-full flex-shrink-0 flex-col rounded-3xl bg-white p-6 shadow-[var(--shadow-whisper)] ring-1 ring-brand-secondary/10 sm:p-7"
                  style={
                    cardStride > 0
                      ? {
                          width: cardStride - GAP_PX,
                          minWidth: cardStride - GAP_PX,
                        }
                      : { minWidth: "100%" }
                  }
                >
                  <FaQuoteLeft className="text-2xl text-brand-accent/80" aria-hidden />
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-brand-secondary">
                    <p dir={isRtl ? "rtl" : "ltr"}>{it.quote}</p>
                  </blockquote>
                  <footer className="mt-6 border-t border-brand-secondary/10 pt-5">
                    <div className="text-sm font-semibold text-brand-primary">{it.name}</div>
                    <div className="mt-1 text-xs text-brand-muted">{it.role}</div>
                  </footer>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => prev()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/15 bg-white text-brand-primary shadow-sm transition-colors hover:border-brand-accent/40 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-blue)]"
                aria-label={t("prev")}
              >
                {isRtl ? <FaChevronRight aria-hidden /> : <FaChevronLeft aria-hidden />}
              </button>
              <button
                type="button"
                onClick={() => next()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/15 bg-white text-brand-primary shadow-sm transition-colors hover:border-brand-accent/40 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-blue)]"
                aria-label={t("next")}
              >
                {isRtl ? <FaChevronLeft aria-hidden /> : <FaChevronRight aria-hidden />}
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2" role="group" aria-label={t("dotsAria")}>
              {Array.from({ length: dotCount }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-current={index === i ? "true" : undefined}
                  aria-label={t("goToPage", { number: i + 1 })}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === i ? "w-8 bg-brand-accent" : "w-2.5 bg-brand-secondary/25 hover:bg-brand-secondary/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
