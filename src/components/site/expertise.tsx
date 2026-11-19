import { expertise } from "@/content/portfolio";

import { SectionHeader } from "./section-header";

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="section-space">
      <div className="shell">
        <SectionHeader index="05" label="Technical Expertise" aside="Tools & practice" />

        <div className="grid-editorial mt-12 lg:mt-20">
          <h2 id="expertise-title" className="type-headline reveal col-span-full lg:col-span-8">
            What I work with
          </h2>
        </div>

        <div className="grid-editorial mt-16 gap-y-16 lg:mt-24">
          {expertise.map((group, i) => (
            <div
              key={group.category}
              className="reveal col-span-full md:col-span-4 lg:col-span-3"
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <h3 className="type-label flex justify-between text-muted-foreground">
                <span className="text-foreground">{group.category}</span>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </h3>
              <ul className="mt-6">
                {group.items.map((item) => (
                  <li key={item} className="border-t border-border py-3.5 text-lg tracking-tight">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
