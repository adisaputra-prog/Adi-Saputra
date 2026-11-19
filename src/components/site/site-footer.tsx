import { Link } from "@tanstack/react-router";

import { profile } from "@/content/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="shell">
      <div className="grid-editorial type-label gap-y-3 border-t border-border py-8 text-muted-foreground">
        <span className="col-span-2 text-foreground md:col-span-2 lg:col-span-3">{profile.name}</span>
        <span className="col-span-2 md:col-span-2 lg:col-span-3">{profile.location}</span>
        <span className="col-span-2 md:col-span-2 lg:col-span-3" suppressHydrationWarning>
          © {year}
        </span>
        <Link
          to="/"
          hash="top"
          className="link-underline col-span-2 justify-self-start text-foreground md:justify-self-end lg:col-span-3"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
