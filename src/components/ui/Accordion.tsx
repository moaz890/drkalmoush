"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
};

type Props = {
  items: AccordionItem[];
};

export function Accordion({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((it) => {
        const open = it.id === openId;
        return (
          <div
            key={it.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
              onClick={() => setOpenId(open ? null : it.id)}
            >
              <span className="text-sm font-bold text-brand-dark sm:text-base">
                {it.title}
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-brand-primary">
                {open ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-5 pb-5 text-sm leading-relaxed text-brand-muted">
                    {it.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

