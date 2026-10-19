export type ProcessStep = {
  title: string;
  description: string;
};

export type ProjectMockup = {
  brand: string;
  navTone: "dark" | "light";
  navItems: string[];
  headline: string;
  tagline?: string;
  cta: string;
  ctaTone: "crimson" | "violet";
  bodyTone: "warm" | "dark" | "slate";
};

export type Project = {
  slug: string;
  name: string;
  website: string;
  image: string;
  imageAlt: string;
  summary: string;
  paragraphs: string[];
  services: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    slug: "rock-and-paper-lp",
    name: "Rock & Paper LP",
    website: "https://www.rockandpaperlp.com/",
    image: "/images/projects/rock-and-paper-lp.png",
    imageAlt: "Rock and Paper LP website homepage",
    summary:
      "A refined digital presence for a commercial law practice built around clarity, credibility, and considered counsel.",
    paragraphs: [
      "Cyntonisca developed a focused website for Rock & Paper LP that presents the firm, its expertise, and its approach through a calm and confident digital experience.",
      "The engagement also covered the supporting infrastructure behind that presence, including professional email and domain management, so the firm's public-facing systems remain consistent and dependable.",
    ],
    services: [
      "Website development",
      "Email management",
      "Domain management",
    ],
    outcomes: [
      "A responsive website aligned with the firm's professional positioning",
      "A clear path for prospective clients to understand and contact the practice",
      "Managed email and domain infrastructure supporting daily operations",
    ],
  },
  {
    slug: "justus-law",
    name: "Justus Law",
    website: "https://www.justus-law.com/",
    image: "/images/projects/justus-law.png",
    imageAlt: "Justus Law website homepage",
    summary:
      "A confident, editorial website for an internationally minded Nigerian law firm handling complex matters.",
    paragraphs: [
      "Cyntonisca built a modern website for Justus Law that communicates the firm's cross-border outlook and makes its expertise, experience, and counsel easier to explore.",
      "Alongside the website, we manage the firm's email and domain setup to provide a cohesive, professional foundation across its digital communications.",
    ],
    services: [
      "Website development",
      "Email management",
      "Domain management",
    ],
    outcomes: [
      "A strong digital expression of the firm's expertise and international outlook",
      "Responsive access to the firm's practice information across devices",
      "Professionally managed email and domain systems",
    ],
  },
  {
    slug: "the-royal-partners",
    name: "The Royal Partners",
    website: "https://the-royal-partners.vercel.app/",
    image: "/images/projects/the-royal-partners.png",
    imageAlt: "The Royal Partners website homepage",
    summary:
      "A polished and accessible website that gives a Lagos legal practice a distinctive, modern digital home.",
    paragraphs: [
      "Cyntonisca developed The Royal Partners' website to present the practice with greater clarity, balancing a premium visual identity with straightforward access to its people and practice areas.",
      "We also support the email and domain systems behind the website, bringing the firm's core digital touchpoints into one coordinated setup.",
    ],
    services: [
      "Website development",
      "Email management",
      "Domain management",
    ],
    outcomes: [
      "A distinctive website that reflects the firm's positioning",
      "Clearer presentation of services, people, and client pathways",
      "Coordinated email and domain management",
    ],
  },
];
