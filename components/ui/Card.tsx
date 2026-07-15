import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/70 backdrop-blur-sm transition-colors duration-300 hover:border-[var(--color-accent)]/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
