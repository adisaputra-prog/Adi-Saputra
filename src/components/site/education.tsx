import { ArrowDownToLine } from "lucide-react";

import { certificationPdf, education } from "@/content/portfolio";

import { SectionHeader } from "./section-header";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title">
      <div className="shell">
        <SectionHeader index="06" label="Education & Certification" />
        <h2 id="education-title" className="sr-only">
          Education and certification
        </h2>
        <div className="grid-editorial mt-12 gap-y-14 lg:mt-20">
          {education.map((entry, i) => (
            <div
              key={entry.kind}
              className={i === 0 ? "reveal col-span-full md:col-span-4 lg:col-span-5" : "reveal col-span-full md:col-span-4 lg:col-span-5 lg:col-start-7"}
            >
              <p className="type-label text-muted-foreground">{entry.kind}</p>
              <p className="type-title mt-6">{entry.title}</p>
              <p className="type-body mt-3 text-muted-foreground">{entry.detail}</p>
              {entry.kind === "Certification" ? (
                <a
                  href={certificationPdf.href}
                  download={certificationPdf.fileName}
                  className="type-label mt-6 inline-flex items-center gap-2 border border-border px-4 py-3 text-foreground transition-colors hover:border-signal hover:text-signal"
                >
                  <ArrowDownToLine className="size-4" aria-hidden="true" />
                  {certificationPdf.label}
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
