import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { navItems, profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";

function useJakartaTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: profile.timeZone,
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [enabled]);
  return active;
}

export function SiteHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const time = useJakartaTime();
  const active = useActiveSection(isHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <a
        href="#main"
        className="type-label sr-only z-[60] bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-700 ease-editorial",
          scrolled || open ? "border-border bg-background" : "border-transparent bg-transparent",
        )}
      >
        <div className="shell grid-editorial h-[var(--nav-height)] items-center">
          <Link
            to="/"
            hash="top"
            className="col-span-2 text-[0.95rem] font-semibold tracking-[-0.02em] md:col-span-3"
            aria-label="Adi Saputra — back to top"
          >
            ADI SAPUTRA
          </Link>

          <p className="type-label hidden items-center gap-2 text-muted-foreground lg:col-span-4 lg:col-start-5 lg:flex">
            <span aria-hidden="true" className="size-1.5 bg-signal" />
            <span>Jakarta, ID</span>
            <span aria-hidden="true" className="text-subtle">
              /
            </span>
            <span className="tabular-nums" suppressHydrationWarning>
              {time ? `${time} WIB` : "GMT+7"}
            </span>
          </p>

          <nav aria-label="Primary" className="col-span-2 hidden justify-end md:col-span-5 md:flex lg:col-span-4">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/"
                    hash={item.id}
                    className={cn(
                      "link-underline pb-0.5 text-sm tracking-tight transition-colors duration-500",
                      active === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                    aria-current={active === item.id ? "location" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="type-label col-span-2 justify-self-end py-3 pl-4 text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-background pt-[var(--nav-height)] transition-[opacity,visibility] duration-500 ease-editorial md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-between pb-10 pt-10">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li key={item.id} className="border-t border-border">
                <Link
                  to="/"
                  hash={item.id}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="type-title">{item.label}</span>
                  <span className="type-label text-muted-foreground">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="type-label flex items-center gap-2 text-muted-foreground">
            <span aria-hidden="true" className="size-1.5 bg-signal" />
            {profile.location}
          </p>
        </nav>
      </div>
    </>
  );
}
