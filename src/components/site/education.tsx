import { SectionHeader } from "./section-header";

const entries = [
  { kind: "Education", title: "SMKN 54 Jakarta", detail: "Computer and Network Engineering (TKJ)" },
  { kind: "Certification", title: "MTCNA", detail: "MikroTik Certified Network Associate" },
];

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" >
      <div className="shell">
        <SectionHeader index="06" label="Education & Certification" />
        <h2 id="education-title" className="sr-only">
          Education and certification
        </h2>
        <div className="grid-editorial mt-12 gap-y-14 lg:mt-20">
          {entries.map((entry, i) => (
            <div
              key={entry.kind}
              className={i === 0 ? "reveal col-span-full md:col-span-4 lg:col-span-5" : "reveal col-span-full md:col-span-4 lg:col-span-5 lg:col-start-7"}
            >
              <p className="type-label text-muted-foreground">{entry.kind}</p>
              <p className="type-title mt-6">{entry.title}</p>
              <p className="type-body mt-3 text-muted-foreground">{entry.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
