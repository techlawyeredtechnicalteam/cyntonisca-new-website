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
  summary: string;
  paragraphs: string[];
  mockup: ProjectMockup;
  process: ProcessStep[];
};

export const projects: Project[] = [
  {
    slug: "tele-court",
    name: "Tele Court",
    summary:
      "A virtual courtroom platform that removes the barriers of time, distance and cost from access to justice.",
    paragraphs: [
      "Tele Court is a pioneering technological platform designed to bridge the gap between traditional justice systems and the evolving needs of modern society.",
      "We believe that everyone deserves equal access to legal services, regardless of their geographic location or financial means. By leveraging cutting-edge technology, we are able to create a virtual courtroom that eliminates the barriers of time, distance, and cost.",
    ],
    mockup: {
      brand: "Tele Court",
      navTone: "dark",
      navItems: ["Home", "About Us", "Mission", "Public Hearing", "Register/Login"],
      headline: "TELE COURT",
      tagline:
        "Tele Court is a pioneering technological platform designed to bridge the gap between traditional justice systems and the evolving needs of modern society. Our mission is to democratize access to justice by providing a secure, efficient, and affordable remote court experience.",
      cta: "Get started",
      ctaTone: "crimson",
      bodyTone: "dark",
    },
    process: [
      {
        title: "Research",
        description:
          "We studied legal workflows, user needs, and compliance requirements to ensure the platform solves real courtroom and administrative challenges.",
      },
      {
        title: "Wireframes & Prototyping",
        description:
          "We mapped user journeys and built interactive wireframes to validate structure, usability, and core features before development began.",
      },
      {
        title: "Development",
        description:
          "The platform was engineered for performance, security, and scalability, translating approved designs into a robust, production-ready system.",
      },
      {
        title: "Testing",
        description:
          "We conducted functional, usability, and security testing to ensure reliability, accuracy, and seamless user experiences across devices.",
      },
      {
        title: "Launch",
        description:
          "After final validations, the platform was deployed with optimized performance, stability, and readiness for real-world legal use.",
      },
    ],
  },
  {
    slug: "legal-flow",
    name: "Legal Flow",
    summary:
      "A modern legal practice management platform that centralizes case management, communication and collaboration in one workspace.",
    paragraphs: [
      "Legal Flow is a modern legal practice management platform designed to simplify how law firms, counsels, and legal teams work. It centralizes case management, communication, document handling, and collaboration into a single, secure workspace, enabling legal professionals to deliver efficient, organized, and responsive legal support anytime, anywhere.",
    ],
    mockup: {
      brand: "Legal Flow",
      navTone: "light",
      navItems: ["About", "Features", "Why choose us", "Pricing", "Contact us"],
      headline: "Deliver Legal Support",
      tagline: "Anytime, anywhere",
      cta: "Get Started",
      ctaTone: "violet",
      bodyTone: "slate",
    },
    process: [
      {
        title: "Research",
        description:
          "We studied real legal workflows, user roles, and compliance needs to understand how legal professionals manage cases, communication, and daily operations.",
      },
      {
        title: "Wireframes & Prototyping",
        description:
          "We mapped user journeys and built wireframes to validate structure, permissions, and feature flow before committing to visual design and development.",
      },
      {
        title: "Development",
        description:
          "The platform was developed with scalability, security, and performance in mind, translating approved designs into a robust, production-ready web application.",
      },
      {
        title: "Testing",
        description:
          "We tested across user roles, devices, and key workflows to ensure accuracy, usability, and reliable system behavior.",
      },
      {
        title: "Launch",
        description:
          "After final validation, Legal Flow was deployed with optimized performance and readiness for real-world legal practice.",
      },
    ],
  },
];
