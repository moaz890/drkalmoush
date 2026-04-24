"use client";

import { useEffect, useMemo, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

function useCountUp(target: number, start: boolean, durationMs = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTs = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTs) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, durationMs]);

  return value;
}

export function StatsBar() {
  const t = useTranslations("stats");
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  const items = useMemo(
    () => [
      { value: 15, label: t("years") },
      { value: 5000, label: t("surgeries") },
      { value: 1, label: t("unitHead") },
      { value: 3, label: t("memberships") }
    ],
    [t]
  );

  const v0 = useCountUp(items[0].value, inView);
  const v1 = useCountUp(items[1].value, inView);
  const v2 = useCountUp(items[2].value, inView);
  const v3 = useCountUp(items[3].value, inView);
  const values = [v0, v1, v2, v3];

  return (
    <section aria-label={t("aria")} className="py-10 sm:py-12">
      <Container>
        <div
          ref={ref}
          className="grid gap-4 rounded-3xl border border-brand-secondary/10 bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((it, idx) => (
            <div key={it.label} className="rounded-2xl bg-brand-secondary/3 p-5">
              <div className="text-3xl font-semibold tracking-tight text-brand-secondary">
                {values[idx].toLocaleString()}
                {idx === 0 ? "+" : ""}
              </div>
              <div className="mt-1 text-sm text-brand-muted">{it.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

