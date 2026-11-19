import { getContactLinks } from "@/content/portfolio";

import { SectionHeader } from "./section-header";

export function Contact() {
  const links = getContactLinks();
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-space pb-24 lg:pb-32">
      <div className="shell">
        <SectionHeader index="07" label="Contact" aside="Based in Jakarta — GMT+7" />

        <div className="grid-editorial mt-12 lg:mt-20">
          <h2 id="contact-title" className="type-display reveal col-span-full lg:col-span-11">
            Let's connect and build something meaningful<span className="text-signal">.</span>
          </h2>
        </div>

        <ul className="reveal mt-20 lg:mt-32">
          {links.map((link) => {
            const inner = (
              <>
                <span className="type-label col-span-1 pt-1 text-muted-foreground md:col-span-2 lg:col-span-3 lg:pt-2">
                  {link.label}
                </span>
                <span
                  className={
                    link.href
                      ? "col-span-3 break-all text-xl tracking-[-0.03em] transition-transform duration-700 ease-editorial group-hover:translate-x-3 md:col-span-5 md:text-3xl lg:col-span-8 lg:text-4xl"
                      : "col-span-3 text-xl tracking-[-0.03em] text-subtle md:col-span-5 md:text-3xl lg:col-span-8 lg:text-4xl"
                  }
                >
                  {link.display}
                </span>
                <span aria-hidden="true" className="hidden justify-self-end text-2xl transition-transform duration-500 ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1 md:col-span-1 md:block">
                  {link.href ? "↗" : ""}
                </span>
              </>
            );
            return (
              <li key={link.label} className="border-t border-border last:border-b">
                {link.href ? (
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group grid-editorial items-baseline py-7 md:py-9"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="grid-editorial items-baseline py-7 md:py-9">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
