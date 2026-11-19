import { Fragment } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { SectionHeader } from "@/components/site/section-header";
import { StatusMark } from "@/components/site/status-mark";
import { getProject, projects } from "@/content/portfolio";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ loaderData }) => {
    const project = loaderData ? getProject(loaderData.slug) : undefined;
    if (!project) {
      return {
        meta: [
          { title: "Project not found — Adi Saputra" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${project.title} — Adi Saputra`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectPage() {
  const { slug } = Route.useLoaderData();
  const project = getProject(slug)!;
  const position = projects.findIndex((p) => p.slug === slug);
  const next = projects[(position + 1) % projects.length]!;
  useReveal(slug);

  return (
    <article className="pt-[calc(var(--nav-height)+2.5rem)] lg:pt-[calc(var(--nav-height)+4rem)]">
      <div className="shell">
        <Link
          to="/"
          hash="work"
          className="type-label group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-500 ease-editorial group-hover:-translate-x-1"
          >
            ←
          </span>
          All work
        </Link>

        <SectionHeader
          className="mt-10"
          index={project.index}
          label="Project"
          aside={project.category}
        />

        <h1 className="type-display animate-rise mt-12 max-w-[14ch] lg:mt-20">{project.title}</h1>

        <dl className="grid-editorial mt-16 gap-y-8 lg:mt-24">
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <dt className="type-label text-muted-foreground">Status</dt>
            <dd className="type-label mt-3 text-foreground">
              <StatusMark status={project.status} />
            </dd>
          </div>
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <dt className="type-label text-muted-foreground">Category</dt>
            <dd className="mt-3 text-base tracking-tight">{project.category}</dd>
          </div>
          <div className="col-span-full md:col-span-3 lg:col-span-5">
            <dt className="type-label text-muted-foreground">Technology</dt>
            <dd className="mt-3 text-base tracking-tight">{project.stack.join(", ")}</dd>
          </div>
        </dl>
      </div>

      <figure className="shell mt-16 lg:mt-24">
        <div className="media-frame animate-unveil aspect-[4/3] md:aspect-[21/10]">
          <img
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.alt}
          />
        </div>
        <figcaption className="type-label mt-4 text-muted-foreground">
          {project.image.caption}
        </figcaption>
      </figure>

      {project.gallery && project.gallery.length > 0 && (
        <section className="shell mt-16 lg:mt-24" aria-labelledby="project-gallery-title">
          <h2 id="project-gallery-title" className="type-label mb-6 text-muted-foreground">
            Project visuals
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {project.gallery.map((item) => (
              <figure key={item.src} className="min-w-0">
                <div className="overflow-hidden bg-background">
                  <img
                    className="block h-auto w-full"
                    src={item.src}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="type-label mt-4 text-muted-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <div className="shell section-space pt-24 lg:pt-36">
        <div className="grid-editorial gap-y-10">
          <h2 className="type-label reveal col-span-full text-muted-foreground lg:col-span-3 lg:pt-2">
            Overview
          </h2>
          <p className="type-lead reveal col-span-full lg:col-span-7 lg:col-start-4">
            {project.description}
          </p>

          {project.purpose && (
            <>
              <h2 className="type-label reveal col-span-full mt-12 text-muted-foreground lg:col-span-3 lg:mt-20 lg:pt-1">
                Why it is useful
              </h2>
              <p className="type-body reveal col-span-full max-w-[56ch] text-muted-foreground lg:col-span-6 lg:col-start-4 lg:mt-20">
                {project.purpose}
              </p>
            </>
          )}

          {project.details?.map((detail) => (
            <Fragment key={detail.heading}>
              <h2 className="type-label reveal col-span-full mt-12 text-muted-foreground lg:col-span-3 lg:mt-20 lg:pt-1">
                {detail.heading}
              </h2>
              <p className="type-body reveal col-span-full max-w-[56ch] text-muted-foreground lg:col-span-6 lg:col-start-4 lg:mt-20">
                {detail.body}
              </p>
            </Fragment>
          ))}

          <h2 className="type-label reveal col-span-full mt-12 text-muted-foreground lg:col-span-3 lg:mt-20 lg:pt-1">
            Built with
          </h2>
          <ul className="reveal col-span-full flex flex-wrap gap-x-8 gap-y-3 text-xl tracking-tight lg:col-span-7 lg:col-start-4 lg:mt-20">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <h2 className="type-label reveal col-span-full mt-12 text-muted-foreground lg:col-span-3 lg:mt-20 lg:pt-1">
            Where it stands
          </h2>
          <p className="type-body reveal col-span-full max-w-[56ch] text-muted-foreground lg:col-span-6 lg:col-start-4 lg:mt-20">
            {project.statusNote}
          </p>
        </div>
      </div>

      <div className="shell pb-24 lg:pb-32">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group grid-editorial items-end gap-y-4 border-t border-border pt-6"
        >
          <span className="type-label col-span-full text-muted-foreground lg:col-span-3">
            Next project — {next.index}
          </span>
          <span className="type-headline col-span-full transition-transform duration-700 ease-editorial group-hover:translate-x-3 lg:col-span-8">
            {next.title}
          </span>
          <span
            aria-hidden="true"
            className="type-title hidden justify-self-end lg:col-span-1 lg:block"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

function ProjectNotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center pt-[var(--nav-height)]">
      <p className="type-label text-muted-foreground">(404)</p>
      <h1 className="type-headline mt-6">This project doesn't exist.</h1>
      <Link
        to="/"
        hash="work"
        className="link-underline-static mt-10 self-start pb-0.5 text-sm font-medium"
      >
        Back to selected work →
      </Link>
    </section>
  );
}
