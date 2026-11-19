import mikrotikCodeImage from "@/assets/work-fotage-code.png";
import mikrotikRouterImage from "@/assets/work-fotage-userinmikrotik.png";
import mikrotikDashboardImage from "@/assets/work-dashboard-mikrotiksaas.png";
import bgpImage from "@/assets/work-bgp-monitoring.jpg";
import bgpRouteChangeImage from "@/assets/work-footage-perubahan-route.png";
import bgpTopologyImage from "@/assets/work-fotage-topology-bgppath.png";
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
  return value
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .replace(/\/$/, "");
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

export type ProjectStatus =
  "In Development" | "Ongoing Learning" | "Completed" | "Paused / Prototype Development";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  purpose?: string;
  details?: { heading: string; body: string }[];
  stack: string[];
  statusNote: string;
  image: { src: string; width: number; height: number; alt: string; caption: string };
  gallery?: { src: string; width: number; height: number; alt: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "mikrotik-saas-monitoring",
    index: "01",
    title: "MikroTik SaaS Monitoring Platform",
    category: "Network Monitoring / SaaS Platform",
    status: "Paused / Prototype Development",
    description:
      "A development-stage platform exploring centralized monitoring and visibility for MikroTik RouterOS devices. The prototype combines a Laravel/PHP web application with a RouterOS API integration and a dashboard concept for reviewing router and hotspot information.",
    purpose:
      "The project aimed to make key MikroTik device information easier to review from a central web interface, rather than relying only on separate, manual checks in router management tools. Development is currently paused, so this is presented as an engineering prototype—not a production-ready or commercially deployed SaaS product.",
    details: [
      {
        heading: "Problem & objective",
        body: "Network operators need a clear view of device health and activity when managing MikroTik infrastructure. This prototype explored bringing router resource information, traffic visibility, and hotspot-user status into a single monitoring interface.",
      },
      {
        heading: "Architecture evidenced in the prototype",
        body: "The available code screenshot shows a Laravel/PHP setup controller using a RouterOS API service. The setup flow accepts router connection details and tests API connectivity; the visible route definitions include setup and dashboard endpoints. The supplied materials do not confirm additional services or a larger deployment architecture.",
      },
      {
        heading: "Prototype interface",
        body: "The dashboard screenshot presents CPU and memory usage, uptime, active hotspot-user count, an RX/TX traffic chart, and RouterOS board and version information. These are capabilities visible in the prototype interface; the screenshots do not establish production reliability, live multi-customer operation, or service-level results.",
      },
      {
        heading: "Development status",
        body: "Development is paused at the prototype stage. The project is not represented as fully completed, production-ready, or commercially deployed.",
      },
    ],
    stack: ["Laravel", "PHP", "MikroTik RouterOS", "RouterOS API"],
    statusNote:
      "Development paused. The available materials document a Laravel/PHP and RouterOS API prototype with dashboard and router-management interface screenshots.",
    image: {
      src: mikrotikDashboardImage,
      width: 1280,
      height: 694,
      alt: "Prototype MikroTik SaaS dashboard with router resource summaries, traffic chart, system information, and hotspot users.",
      caption: "Monitoring dashboard prototype.",
    },
    gallery: [
      {
        src: mikrotikCodeImage,
        width: 1280,
        height: 697,
        alt: "Laravel/PHP controller and route definitions for the MikroTik monitoring prototype, including RouterOS API setup.",
        caption: "Code evidence: Laravel setup controller and RouterOS API integration.",
      },
      {
        src: mikrotikRouterImage,
        width: 1280,
        height: 676,
        alt: "MikroTik RouterOS WinBox Hotspot Users interface.",
        caption: "MikroTik RouterOS hotspot-user interface.",
      },
    ],
  },
  {
    slug: "bgp-monitoring",
    index: "02",
    title: "BGP Monitoring & Visualization",
    category: "Network Infrastructure / Monitoring",
    status: "Completed",
    description:
      "A monitoring and visualization project that follows observed BGP updates for selected network prefixes. It brings route announcements, peer and AS-PATH changes, and upstream comparisons into a Grafana dashboard so a network operator can review what changed and when.",
    purpose:
      "When a service becomes unreachable or performs differently, operators need clues about where to investigate. A route change around the same time can point to an upstream or path change worth checking. This dashboard makes those clues easier to find and compare, helping guide troubleshooting; it does not by itself identify the cause or prove customer impact.",
    details: [
      {
        heading: "How the monitoring flow works",
        body: "RIPE RIS Live provides observed BGP updates. BGPalerter watches for notable routing changes, Promtail forwards the collected log data to Loki, and Grafana presents the events and route views. Together, these tools turn a stream of routing updates into information that is easier to search and review.",
      },
      {
        heading: "How to use it during an investigation",
        body: "Start with the affected IP prefix and the time when the issue was reported. Review announcements and peer ASNs around that time, then compare the old and current AS-PATH or upstream inventory to see what changed. Finally, compare the routing timeline with independent checks such as traceroutes, reachability tests, and service or latency monitoring before deciding on a cause.",
      },
      {
        heading: "What the screenshots show",
        body: "The route-change view summarizes a selected prefix, recent BGP events, and upstreams that were added, removed, or unchanged between two observed states. The topology view visualizes active AS-PATHs from a collector toward the selected prefix, making it easier to inspect the sequence of autonomous systems visible from that observation point.",
      },
      {
        heading: "What it cannot tell you on its own",
        body: "BGP data describes routing announcements, not end-to-end service quality. A route change does not automatically mean an outage, route leak, or hijack, and a collector only sees the routes available from its own vantage point. Treat alerts as investigation leads and verify them with other network measurements and operational context.",
      },
    ],
    stack: ["RIPE RIS Live", "BGPalerter", "Promtail", "Loki", "Grafana"],
    statusNote:
      "Completed. The monitoring dashboard brings together observed BGP updates, route and AS-PATH changes, and upstream comparisons to support network investigation.",
    image: {
      src: bgpImage,
      width: 1008,
      height: 1312,
      alt: "Black-and-white photograph of transmission towers and long cables receding across an overcast sky.",
      caption: "Illustrative image — long-haul paths.",
    },
    gallery: [
      {
        src: bgpRouteChangeImage,
        width: 1919,
        height: 915,
        alt: "Grafana dashboard showing a selected BGP prefix, recent announcements, and an upstream route comparison.",
        caption: "Route changes and upstream comparison in Grafana.",
      },
      {
        src: bgpTopologyImage,
        width: 1919,
        height: 849,
        alt: "Grafana visualization of active BGP AS-PATHs from a collector to the selected network prefix.",
        caption: "Active AS-PATH topology visualization.",
      },
    ],
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
    period: "6 months · June 2025 — December 2025",
    current: false,
    description:
      "Supported day-to-day IT operations by assisting with hardware and software troubleshooting, diagnosing technical issues, and helping maintain reliable IT infrastructure. Gained hands-on experience in IT support, system maintenance, and end-user assistance.",
    responsibilities: [
      "Hardware & software troubleshooting",
      "System and infrastructure maintenance",
      "End-user assistance",
    ],
  },
  {
    organization: "Velo Network",
    legalName: "PT NetToCyber Indonesia",
    role: "Network Operations & QoSE Engineer",
    period: "April 2026 — Present",
    current: true,
    description:
      "Monitor and analyze network performance to assess end-user experience and service quality. Investigate connectivity issues affecting critical applications, perform traceroute and latency analysis, evaluate network paths, and coordinate technical findings with internal teams to support troubleshooting and service improvement.",
    responsibilities: [
      "Network performance & QoSE monitoring",
      "Latency, packet loss & traceroute analysis",
      "Connectivity troubleshooting for Microsoft Teams, SharePoint, OneDrive, VPN & other critical applications",
      "Network path & ASN investigation",
      "Technical evidence collection & escalation",
      "Service quality analysis & improvement",
    ],
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
