import type { ButtonHTMLAttributes } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "whatsapp"
  | "gold"
  | "onDark";
type Size = "sm" | "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-brand-primary text-white hover:bg-brand-accent",
  secondary: "bg-brand-secondary text-white hover:bg-brand-primary",
  outline:
    "border border-brand-secondary/25 text-brand-dark hover:border-brand-accent/40 hover:bg-brand-accent/10",
  whatsapp: "bg-[#25D366] text-white hover:brightness-95",
  gold: "bg-brand-accent text-brand-primary hover:brightness-95",
  onDark:
    "border border-white/25 bg-white/0 text-white hover:bg-white/10 hover:border-white/30",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}

