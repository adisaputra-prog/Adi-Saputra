import routeImage from "@/assets/work-route-intelligence.jpg";
import bgpImage from "@/assets/work-bgp-monitoring.jpg";
import labImage from "@/assets/work-network-lab.jpg";

export const profile = {
  name: "Adi Saputra",
  role: "Network Operations & QoSE Engineer",
  location: "Jakarta, Indonesia",
  coordinates: "6.2088° S — 106.8456° E",
  timeZone: "Asia/Jakarta",
};

/**
 * Contact details. Leave a value empty ("") until it is known —
 * empty entries render as "To be added" and are never linked.
 */
export const contact = {
  email: "adisaputralol40@gmail.com",
  linkedin: "www.linkedin.com/in/adi-saputra-network",
  github: "https://github.com/adisaputra-prog",
};

export type ContactLink = {
  label: string;
  display: string;
  href: string | null;
};

export function toExternalUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function displayUrl(value: string): string {
  return value.trim().replace(/^https?:\/\//i, "").replace(/^www\./i, "").replace(/\/$/, "");
}

export function getContactLinks(details: typeof contact = contact): ContactLink[] {
  const email = details.email.trim();
  return [
    {
      label: "Email",
      display: email || "To be added",
      href: email ? `mailto:${email}` : null,
    },
    {
      label: "LinkedIn",
      display: details.linkedin.trim() ? displayUrl(details.linkedin) : "To be added",
      href: toExternalUrl(details.linkedin),
    },
    {
      label: "GitHub",
      display: details.github.trim() ? displayUrl(details.github) : "To be added",
      href: toExternalUrl(details.github),
    },
  ];
}

export type ProjectStatus = "In Development" | "Ongoing Learning";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  stack: string[];
  statusNote: string;
  image: { src: string; width: number; height: number; alt: string; caption: string };
};

export const projects: Project[] = [
  {
    slug: "route-intelligence",
    index: "01",
    title: "Route Intelligence",
    category: "Network Engineering / Research & Development",
    status: "In Development",
    description:
      "An experimental network route intelligence platform designed to analyze historical network measurements, BGP routing information, and destination experience to support more informed routing decisions.",
    stack: ["Python", "FastAPI", "PostgreSQL", "RIPEstat", "RIPE RIS"],
    statusNote:
      "Actively being built. Real screenshots and technical write-ups will be published here once the work reaches a shareable stage.",
    image: {
      src: routeImage,
      width: 1600,
      height: 1008,
      alt: "Aerial black-and-white photograph of a highway interchange at night, its curving roads crossing like routing paths.",
      caption: "Illustrative image — paths, junctions, decisions.",
    },
  },
  {
    slug: "bgp-monitoring",
    index: "02",
    title: "BGP Monitoring & Visualization",
    category: "Network Infrastructure / Monitoring",
    status: "In Development",
    description:
      "An independent monitoring project exploring BGP routing changes and AS-PATH information using RIPE RIS Live, BGPalerter, Promtail, Loki, and Grafana.",
    stack: ["RIPE RIS Live", "BGPalerter", "Promtail", "Loki", "Grafana"],
    statusNote:
      "Actively being built. Dashboards and findings will be shared here once they are ready to be shown.",
    image: {
      src: bgpImage,
      width: 1008,
      height: 1312,
      alt: "Black-and-white photograph of transmission towers and long cables receding across an overcast sky.",
      caption: "Illustrative image — long-haul paths.",
    },
  },
  {
    slug: "network-troubleshooting-lab",
    index: "03",
    title: "Network Troubleshooting Lab",
    category: "Networking / Practical Labs",
    status: "Ongoing Learning",
    description:
      "Hands-on network experiments involving MikroTik, GNS3, routing, multi-ISP failover, connectivity diagnostics, and destination reachability analysis.",
    stack: ["MikroTik RouterOS", "GNS3", "Linux", "BGP fundamentals"],
    statusNote: "An ongoing practice log. Lab notes will be added here over time.",
    image: {
      src: labImage,
      width: 1408,
      height: 1056,
      alt: "Close-up black-and-white photograph of patch cables plugged into a network switch.",
      caption: "Illustrative image — hands on the hardware.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const interests = [
  "Network Engineering",
  "ISP Infrastructure",
  "BGP Routing",
  "Network Troubleshooting",
  "Network Performance Analysis",
  "Destination Experience Monitoring",
  "Network Automation",
  "Linux Infrastructure",
];

export const experience = [
  {
    organization: "BPKP",
    legalName: "Badan Pengawasan Keuangan dan Pembangunan",
    role: "IT Support Intern",
    period: "June 2025 — December 2025",
    current: false,
    description: "Practical experience in IT support and technical troubleshooting.",
  },
  {
    organization: "Velo Network",
    legalName: "PT Nettocyber Indonesia",
    role: "QoSE / Network Operations",
    period: "April 2026 — Present",
    current: true,
    description:
      "Working in ISP network operations with a focus on customer escalations, network performance investigation, traceroute analysis, and application connectivity evaluation.",
  },
];

export const expertise = [
  {
    category: "Networking",
    items: [
      "MikroTik RouterOS",
      "Routing & Switching",
      "BGP Fundamentals",
      "Network Troubleshooting",
      "Traceroute Analysis",
    ],
  },
  {
    category: "Network Experience",
    items: ["QoSE", "Latency Analysis", "Packet Loss Investigation", "Destination Monitoring"],
  },
  {
    category: "Infrastructure",
    items: ["Linux", "Debian", "PostgreSQL", "Grafana", "Loki"],
  },
  {
    category: "Development",
    items: ["Python Fundamentals", "FastAPI", "REST APIs"],
  },
];

export const education = [
  { kind: "Education", title: "SMKN 54 Jakarta", detail: "Computer and Network Engineering (TKJ)" },
  { kind: "Certification", title: "MTCNA", detail: "MikroTik Certified Network Associate" },
];

/** Public path of the downloadable certification PDF. */
export const certificationPdf = {
  href: "/certifications/adi-saputra-mtcna.pdf",
  fileName: "Adi-Saputra-MTCNA.pdf",
  label: "Download certificate (PDF)",
};

export const navItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
