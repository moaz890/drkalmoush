"use client";

import { useEffect } from "react";
import { youtubeEmbedUrl } from "@/lib/youtube";

type Props = {
  open: boolean;
  videoId: string | null;
  title: string;
  closeLabel: string;
  onClose: () => void;
};

export function VideoModal({ open, videoId, title, closeLabel, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open || !videoId) return null;

  const src = youtubeEmbedUrl(videoId);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/55 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-brand-primary shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="min-w-0 text-sm font-semibold text-[#faf9f5] sm:text-base">{title}</div>
          <button
            type="button"
            className="shrink-0 rounded-xl px-3 py-2 text-[#b0aea5] transition-colors hover:bg-white/10 hover:text-[#faf9f5]"
            onClick={onClose}
            aria-label={closeLabel}
          >
            ×
          </button>
        </div>
        <div className="p-3 sm:p-4">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
            <iframe
              title={title}
              src={src}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
