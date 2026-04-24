"use client";

import { useEffect, type ReactNode } from "react";

type Props = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ open, title, onClose, children }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-brand-secondary/10 px-5 py-4">
          <div className="text-base font-bold text-brand-dark">{title}</div>
          <button
            type="button"
            className="rounded-xl px-3 py-2 text-brand-muted hover:bg-brand-secondary/5"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="max-h-[75vh] overflow-auto px-5 py-5">{children}</div>
      </div>
    </div>
  );
}

