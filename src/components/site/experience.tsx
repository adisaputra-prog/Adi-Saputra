import { experience } from "@/content/portfolio";
import { cn } from "@/lib/utils";

import { SectionHeader } from "./section-header";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-space">
      <div className="shell">
        <SectionHeader index="04" label="Experience" aside="Timeline" />

        <div className="grid-editorial mt-12 lg:mt-20">
          <h2 id="experience-title" className="type-headline reveal col-span-full lg:col-span-8">
            Where I've worked
          </h2>
        </div>

        <ol className="relative mt-16 lg:mt-24">
          {/* Vertical rule of the timeline */}
          <span aria-hidden="true" className="absolute bottom-0 left-[3px] top-0 w-px bg-border lg:left-[calc((100%-11*var(--gutter))/12*3+3*var(--gutter)-var(--gutter)/2)]" />
          {experience.map((item) => (
            <li key={item.organization} className="reveal relative">
              <div className="grid-editorial gap-y-5 py-10 pl-8 lg:py-14 lg:pl-0">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-0 top-[2.75rem] size-[7px] lg:left-[calc((100%-11*var(--gutter))/12*3+3*var(--gutter)-var(--gutter)/2-3px)] lg:top-[4.6rem]",
                    item.current ? "bg-signal" : "border border-muted-foreground bg-background",
                  )}
                />
                <p className="type-label col-span-full self-start text-muted-foreground lg:col-span-3 lg:pt-[1.1rem]">
                  {item.period}
                </p>
                <div className="col-span-full md:col-span-4 lg:col-span-4 lg:col-start-4">
                  <h3 className="type-title">{item.organization}</h3>
                  {item.legalName ? <p className="type-label mt-3 text-muted-foreground">{item.legalName}</p> : null}
                  <p className="mt-5 text-base font-medium tracking-tight">{item.role}</p>
                </div>
                <p className="type-body col-span-full max-w-[52ch] text-muted-foreground md:col-span-4 lg:col-span-4 lg:col-start-9 lg:pt-2">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
