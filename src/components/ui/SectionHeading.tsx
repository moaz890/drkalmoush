type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className = "" }: Props) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <div className="mb-3 h-1.5 w-12 rounded-full bg-brand-primary" />
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-brand-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}

