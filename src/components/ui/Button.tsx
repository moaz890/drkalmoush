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
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none";

const variants: Record<Variant, string> = {
  // Primary CTA: Terracotta
  primary:
    "bg-brand-accent text-surface-ivory shadow-[0px_0px_0px_1px_var(--color-brand-accent)] hover:brightness-95",
  // Workhorse button: Warm sand
  secondary:
    "bg-surface-sand text-[#4d4c48] shadow-[0px_0px_0px_1px_var(--color-ring-warm)] hover:bg-[#f0eee6]",
  outline:
    "bg-surface-ivory text-brand-primary shadow-[0px_0px_0px_1px_var(--color-ring-warm)] hover:bg-[#ffffff]",
  whatsapp: "bg-[#25D366] text-white hover:brightness-95",
  // Legacy alias; keep for existing usage
  gold:
    "bg-brand-accent text-surface-ivory shadow-[0px_0px_0px_1px_var(--color-brand-accent)] hover:brightness-95",
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

