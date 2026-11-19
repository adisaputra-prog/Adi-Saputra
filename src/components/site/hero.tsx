import { Link } from "@tanstack/react-router";

import heroImage from "@/assets/Untitled-1.jpg";
import { profile } from "@/content/portfolio";

import { ButtonArrow, buttonLinkVariants } from "./button-link";

const headline = ["Building a deeper", "understanding", "of networks."];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="shell pt-[calc(var(--nav-height)+2.5rem)] lg:pt-[calc(var(--nav-height)+4rem)]"
    >
      <div className="grid-editorial type-label gap-y-2 border-t border-border pt-4 text-muted-foreground">
        <span className="col-span-1">(01)</span>
        <span className="col-span-3 text-foreground md:col-span-4 lg:col-span-6">Introduction</span>
        <span className="col-span-full md:col-span-3 md:text-right lg:col-span-5">
          Portfolio — Network Operations
        </span>
      </div>

      <div className="grid-editorial mt-12 gap-y-14 lg:mt-14">
        <div className="col-span-full flex flex-col md:col-span-8 lg:col-span-7">
          <h1 id="hero-title" className="type-display">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <span
                  className="animate-rise block"
                  style={{ animationDelay: `${120 + i * 110}ms` }}
                >
                  {i === headline.length - 1 ? (
                    <>
                      of networks<span className="text-signal">.</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <div
            className="animate-rise mt-12 flex flex-col gap-10 lg:mt-14"
            style={{ animationDelay: "520ms" }}
          >
            <p className="type-lead max-w-[38ch] text-muted-foreground">
              I'm Adi, a network operations and QoSE professional interested in routing behavior,
              infrastructure reliability, and real-world application performance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/" hash="work" className={buttonLinkVariants({ variant: "solid" })}>
                Explore Selected Work
                <ButtonArrow />
              </Link>
              <Link to="/" hash="contact" className={buttonLinkVariants({ variant: "line" })}>
                Get in Touch
                <ButtonArrow direction="right" />
              </Link>
            </div>
          </div>
        </div>

        <figure className="col-span-full md:col-span-6 md:col-start-3 lg:col-span-5 lg:col-start-8">
          <div
            className="media-frame animate-unveil aspect-[4/5]"
            style={{ animationDelay: "200ms" }}
          >
            <img
              src={heroImage}
              width={864}
              height={1536}
              alt="Adi Saputra taking a mirror selfie in an elevator, wearing glasses and a light gray pullover."
              fetchPriority="high"
            />
            <span className="type-label absolute left-4 top-4 bg-background px-2 py-1 text-foreground">
              {profile.role}
            </span>
          </div>
          <figcaption className="type-label mt-4 flex justify-between gap-4 text-muted-foreground">
            <span>{profile.location}</span>
            <span className="tabular-nums">{profile.coordinates}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
