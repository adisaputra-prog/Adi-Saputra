import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonLinkVariants = cva(
  "group inline-flex h-12 items-center justify-between gap-6 px-5 text-sm font-medium tracking-tight transition-[background-color,color,border-color] duration-500 ease-editorial focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground hover:bg-signal hover:text-signal-foreground",
        line: "border border-border text-foreground hover:border-foreground",
      },
    },
    defaultVariants: { variant: "solid" },
  },
);

export type ButtonLinkVariant = VariantProps<typeof buttonLinkVariants>["variant"];

export function ButtonArrow({ direction = "down-right" }: { direction?: "down-right" | "right" }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block transition-transform duration-500 ease-editorial",
        direction === "right" ? "group-hover:translate-x-1" : "group-hover:translate-x-0.5 group-hover:translate-y-0.5",
      )}
    >
      {direction === "right" ? "→" : "↘"}
    </span>
  );
}
