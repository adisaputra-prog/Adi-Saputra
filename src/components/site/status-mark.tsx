import type { ProjectStatus } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function StatusMark({ status, className }: { status: ProjectStatus; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className={cn("size-1.5", status === "In Development" ? "animate-pulse-dot bg-signal" : "bg-muted-foreground")}
      />
      {status}
    </span>
  );
}
