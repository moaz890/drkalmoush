import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "whatsapp";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-md hover:shadow-lg hover:brightness-105",
  secondary:
    "border-2 border-brand-secondary bg-white text-brand-dark hover:bg-brand-secondary/10",
  whatsapp:
    "bg-[#25D366] text-white shadow-md hover:bg-[#20bd5a] hover:shadow-lg",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary disabled:opacity-50";

export function buttonClassName(variant: Variant = "primary") {
  return `${baseClasses} ${variantClasses[variant]}`;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
  asChild?: boolean;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${buttonClassName(variant)} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
