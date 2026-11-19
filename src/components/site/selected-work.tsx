import { Link } from "@tanstack/react-router";

import { projects, type Project } from "@/content/portfolio";
import { cn } from "@/lib/utils";

import { SectionHeader } from "./section-header";
import { StatusMark } from "./status-mark";

type Layout = {
  media: string;
  meta: string;
  aspect: string;
};

// Each project gets its own composition so the gallery reads like a spread, not a card grid.
const layouts: Layout[] = [
  {
    media: "col-span-full lg:col-span-8",
    meta: "col-span-full md:col-span-6 lg:col-span-4 lg:col-start-9 lg:self-end",
    aspect: "aspect-[16/10]",
  },
  {
    media: "col-span-full md:col-span-5 md:col-start-4 lg:col-span-5 lg:col-start-7 lg:row-start-1",
    meta: "col-span-full md:col-span-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-center",
    aspect: "aspect-[4/5]",
  },
  {
    media: "col-span-full md:col-span-7 lg:col-span-6 lg:col-start-2",
    meta: "col-span-full md:col-span-6 lg:col-span-4 lg:col-start-9 lg:self-start lg:pt-24",
    aspect: "aspect-[4/3]",
  },
];

function ProjectFeature({ project, layout }: { project: Project; layout: Layout }) {
  return (
    <article className="grid-editorial gap-y-8" aria-labelledby={`project-${project.slug}`}>
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className={cn("reveal group media-frame media-hover block", layout.aspect, layout.media)}
        aria-label={`View project: ${project.title}`}
      >
        <img
          src={project.image.src}
          width={project.image.width}
          height={project.image.height}
          alt={project.image.alt}
          loading="lazy"
          decoding="async"
        />
        <span className="type-label absolute bottom-4 left-4 flex translate-y-2 items-center gap-3 bg-primary px-3 py-2 text-primary-foreground opacity-0 transition-[opacity,transform] duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          View project <span aria-hidden="true">→</span>
        </span>
      </Link>

      <div className={cn("reveal", layout.meta)} style={{ ["--reveal-delay" as string]: "120ms" }}>
        <div className="type-label flex items-center justify-between border-t border-border pt-4 text-muted-foreground">
          <span>Project {project.index}</span>
          <StatusMark status={project.status} />
        </div>
        <h3 id={`project-${project.slug}`} className="type-title mt-8">
          <Link to="/work/$slug" params={{ slug: project.slug }} className="link-underline">
            {project.title}
          </Link>
        </h3>
        <p className="type-label mt-4 text-muted-foreground">{project.category}</p>
        <p className="type-body mt-6 max-w-[46ch] text-muted-foreground">{project.description}</p>
        <p className="type-label mt-8 text-foreground">{project.stack.join("  /  ")}</p>
        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          className="group mt-10 inline-flex items-center gap-3 text-sm font-medium tracking-tight"
        >
          <span className="link-underline-static pb-0.5">Read project notes</span>
          <span aria-hidden="true" className="transition-transform duration-500 ease-editorial group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="section-space">
      <div className="shell">
        <SectionHeader index="02" label="Selected Work" aside={`${String(projects.length).padStart(2, "0")} projects — ongoing`} />

        <div className="grid-editorial mt-12 gap-y-8 lg:mt-20">
          <h2 id="work-title" className="type-headline reveal col-span-full lg:col-span-7">
            Selected work
          </h2>
          <p className="type-body reveal col-span-full max-w-[44ch] text-muted-foreground md:col-span-5 lg:col-span-4 lg:col-start-9 lg:self-end">
            Three ongoing projects across routing research, monitoring, and hands-on labs. Imagery is illustrative —
            real screenshots will be added as each project matures.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-28 md:gap-36 lg:mt-32 lg:gap-48">
          {projects.map((project, i) => (
            <ProjectFeature key={project.slug} project={project} layout={layouts[i % layouts.length]!} />
          ))}
        </div>
      </div>
    </section>
  );
}
