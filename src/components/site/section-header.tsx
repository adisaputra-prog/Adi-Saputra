import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  index: string;
  label: string;
  aside?: string;
  className?: string;
};

export function SectionHeader({ index, label, aside, className }: SectionHeaderProps) {
  return (
    <div className={cn("grid-editorial border-t border-border pt-4 text-muted-foreground", className)}>
      <span className="type-label col-span-1 lg:col-span-1">({index})</span>
      <span className="type-label col-span-3 text-foreground md:col-span-4 lg:col-span-5">{label}</span>
      {aside ? (
        <span className="type-label col-span-full mt-2 md:col-span-3 md:mt-0 md:text-right lg:col-span-6">
          {aside}
        </span>
      ) : null}
    </div>
  );
}
