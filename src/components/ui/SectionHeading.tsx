type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className = "" }: Props) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <div className="mb-3 h-1.5 w-12 rounded-full bg-brand-accent" />
      <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-brand-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

