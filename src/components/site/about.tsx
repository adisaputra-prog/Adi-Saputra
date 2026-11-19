import { interests } from "@/content/portfolio";

import { SectionHeader } from "./section-header";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-space">
      <div className="shell">
        <SectionHeader index="03" label="About" aside="Jakarta, Indonesia" />

        <div className="grid-editorial mt-12 gap-y-12 lg:mt-20">
          <h2 id="about-title" className="type-headline reveal col-span-full lg:col-span-6">
            Curiosity drives better infrastructure.
          </h2>

          <div className="reveal col-span-full flex flex-col gap-8 md:col-span-6 md:col-start-3 lg:col-span-5 lg:col-start-8 lg:pt-3">
            <p className="type-lead">
              I'm an early-career network professional based in Jakarta, Indonesia. My work focuses on understanding
              network performance, investigating connectivity issues, and analyzing how routing decisions influence
              real-world application experiences.
            </p>
            <p className="type-lead text-muted-foreground">
              I enjoy going beyond basic connectivity checks — exploring routing paths, latency, packet loss, BGP
              behavior, and the infrastructure behind critical applications.
            </p>
          </div>
        </div>

        <div className="grid-editorial mt-24 lg:mt-36">
          <p className="type-label reveal col-span-full mb-6 text-muted-foreground lg:col-span-3 lg:mb-0 lg:pt-5">
            Areas of interest
          </p>
          <ol className="reveal col-span-full grid sm:grid-cols-2 sm:gap-x-[var(--gutter)] lg:col-span-9">
            {interests.map((interest, i) => (
              <li
                key={interest}
                className="flex items-baseline gap-6 border-t border-border py-4 text-lg tracking-tight md:text-xl"
              >
                <span className="type-label w-6 shrink-0 text-subtle">{String(i + 1).padStart(2, "0")}</span>
                {interest}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
