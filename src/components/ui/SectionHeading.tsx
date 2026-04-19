import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  className?: string;
  eyebrow?: ReactNode;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
  eyebrow,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-10 md:mb-14 ${alignClass} max-w-3xl ${className}`}>
      {eyebrow}
      <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
        {title}
      </h2>
      <span
        className="mt-3 block h-1 w-16 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary md:mt-4"
        aria-hidden
        style={{
          marginInline: align === "center" ? "auto" : undefined,
        }}
      />
      {subtitle ? (
        <p className="mt-4 text-lg text-brand-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
