import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Education } from "@/components/site/education";
import { Experience } from "@/components/site/experience";
import { Expertise } from "@/components/site/expertise";
import { Hero } from "@/components/site/hero";
import { SelectedWork } from "@/components/site/selected-work";
import { useReveal } from "@/hooks/use-reveal";

const title = "Adi Saputra — Network Operations & QoSE Engineer, Jakarta";
const description =
  "Portfolio of Adi Saputra, an early-career network operations and QoSE professional in Jakarta exploring BGP routing, network performance and ISP infrastructure.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal("home");
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Experience />
      <Expertise />
      <Education />
      <Contact />
    </>
  );
}
