import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "header" | "footer" | "main";
};

export function Container({ as, className = "", ...props }: Props) {
  const Comp = as ?? "div";
  return (
    <Comp
      className={`mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    />
  );
}

