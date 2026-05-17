"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { FaPlay } from "react-icons/fa";
import { VideoModal } from "@/components/ui/VideoModal";
import { YOUTUBE_CLINIC_VIDEOS } from "@/lib/constants";
import { youtubeThumbnailUrl } from "@/lib/youtube";

type Props = {
  /** Indices into `YOUTUBE_CLINIC_VIDEOS` / translation `items` */
  indices?: readonly number[];
};

export function ClinicalVideos({ indices }: Props) {
  const t = useTranslations("videosSection");
  const rawTitles = t.raw("items") as { title: string }[];
  const titles = useMemo(
    () => (Array.isArray(rawTitles) ? rawTitles.map((x) => x.title) : []),
    [rawTitles]
  );

  const resolvedIndices = useMemo(() => {
    if (indices?.length) return [...indices];
    return YOUTUBE_CLINIC_VIDEOS.map((_, i) => i);
  }, [indices]);

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const playingVideo =
    playingIndex !== null &&
    playingIndex >= 0 &&
    playingIndex < YOUTUBE_CLINIC_VIDEOS.length
      ? YOUTUBE_CLINIC_VIDEOS[playingIndex]
      : null;

  const playingTitle =
    playingIndex !== null && titles[playingIndex] ? titles[playingIndex]! : "";

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {resolvedIndices.map((globalIdx) => {
          const video = YOUTUBE_CLINIC_VIDEOS[globalIdx];
          if (!video) return null;
          const title = titles[globalIdx] ?? t("fallbackTitle", { number: globalIdx + 1 });
          const thumb = youtubeThumbnailUrl(video.id);

          return (
            <div key={video.id} className="flex flex-col">
              <button
                type="button"
                onClick={() => setPlayingIndex(globalIdx)}
                className="group relative aspect-video w-full overflow-hidden rounded-2xl shadow-[var(--shadow-whisper)] ring-1 ring-brand-secondary/15 transition-shadow hover:shadow-lg hover:ring-brand-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-blue)]"
                aria-label={`${t("playVideo")}: ${title}`}
              >
                <Image
                  src={thumb}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-brand-primary/55 via-brand-primary/15 to-transparent transition-opacity group-hover:from-brand-primary/65" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-brand-accent shadow-lg ring-2 ring-white/80 transition-transform group-hover:scale-105">
                    <FaPlay className="ms-0.5 h-6 w-6" aria-hidden />
                  </span>
                </span>
              </button>
              <p className="mt-3 text-center text-sm font-semibold leading-snug text-brand-primary sm:text-base">
                {title}
              </p>
              <a
                href={video.watchUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 text-center text-xs text-brand-muted underline-offset-4 hover:text-brand-accent hover:underline"
              >
                {t("openOnYoutube")}
              </a>
            </div>
          );
        })}
      </div>

      <VideoModal
        open={playingVideo !== null}
        videoId={playingVideo?.id ?? null}
        title={playingTitle}
        closeLabel={t("closePlayer")}
        onClose={() => setPlayingIndex(null)}
      />
    </>
  );
}
