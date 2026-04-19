"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useId, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PATIENT_IMAGES } from "@/lib/constants";

export function PatientGallery() {
  const t = useTranslations("gallery");
  const [open, setOpen] = useState<number | null>(null);
  const titleId = useId();

  const close = useCallback(() => setOpen(null), []);
  const showNext = useCallback(() => {
    setOpen((i) => {
      if (i === null) return null;
      return (i + 1) % PATIENT_IMAGES.length;
    });
  }, []);
  const showPrev = useCallback(() => {
    setOpen((i) => {
      if (i === null) return null;
      return (i - 1 + PATIENT_IMAGES.length) % PATIENT_IMAGES.length;
    });
  }, []);

  useEffect(() => {
    if (open === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, showNext, showPrev]);

  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-slate-50/90 py-16 md:py-24"
    >
      <ScrollReveal>
        <Container>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
          <ul className="grid gap-4 sm:grid-cols-3">
            {PATIENT_IMAGES.map((src, index) => (
              <li key={src}>
                <button
                  type="button"
                  onClick={() => setOpen(index)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-brand-dark/10 transition hover:ring-2 hover:ring-brand-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
                  aria-label={t("open")}
                >
                  <Image
                    src={src}
                    alt={t("patientAlt", { n: index + 1 })}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    loading="lazy"
                  />
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </ScrollReveal>

      <AnimatePresence>
        {open !== null ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative max-h-[90vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <p id={titleId} className="sr-only">
                {t("patientAlt", { n: open + 1 })}
              </p>
              <div className="relative aspect-[4/3] w-full min-w-[min(100vw-2rem,896px)] overflow-hidden rounded-2xl bg-black">
                <Image
                  src={PATIENT_IMAGES[open]}
                  alt={t("patientAlt", { n: open + 1 })}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <button
                type="button"
                onClick={close}
                className="absolute end-3 top-3 rounded-full bg-white/95 p-2 text-brand-dark shadow-md transition hover:bg-white"
                aria-label={t("close")}
              >
                <FaXmark className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showPrev}
                className="absolute start-2 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-3 text-brand-dark shadow-md transition hover:bg-white md:start-4"
                aria-label={t("prev")}
              >
                <FaChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute end-2 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-3 text-brand-dark shadow-md transition hover:bg-white md:end-4"
                aria-label={t("next")}
              >
                <FaChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
