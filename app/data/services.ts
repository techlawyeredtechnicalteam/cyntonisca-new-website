import {
  GlobeLock,
  Briefcase,
  MailCheck,
  FileSignature,
  Lock,
  Landmark,
  Layers,
  MonitorSmartphone,
  MonitorCog,
  LayoutDashboard,
  TrendingUp,
  Handshake,
  LucideIcon,
} from "lucide-react";

export type Offering = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  tone: "warm" | "dark" | "slate";
  offerings: Offering[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    eyebrow: "Build",
    title: "Web Development",
    tone: "dark",
    description:
      "At Cyntonisca, we craft high-performance websites that are visually stunning and functionally robust. Whether you're a startup, a growing business, or an enterprise, our team delivers custom web solutions tailored to your needs. From engaging front-end designs to scalable back-end architectures, we ensure your website not only meets industry standards but exceeds user expectations.",
    offerings: [
      {
        icon: LayoutDashboard,
        title: "Custom Web Development",
        description:
          "We design and build custom websites tailored to your brand and business needs. Our approach ensures intuitive navigation, seamless user experience, and performance optimization.",
      },
      {
        icon: TrendingUp,
        title: "E-Commerce Solutions",
        description:
          "From small online stores to large marketplaces, we create secure and scalable e-commerce platforms with seamless checkout experiences and powerful integrations.",
      },
      {
        icon: Handshake,
        title: "Web App Development",
        description:
          "We develop high-performing, feature-rich web applications with cutting-edge technologies, ensuring efficiency, scalability, and a smooth user experience.",
      },
    ],
  },
  {
    slug: "mobile-development",
    eyebrow: "Build",
    title: "Mobile Development",
    tone: "slate",
    description:
      "Mobile-first experiences are essential in today's digital landscape. At Cyntonisca, we build intuitive, high-performing mobile applications that keep users engaged. Whether it's native development for iOS and Android or a cross-platform solution, our team delivers apps that combine beautiful design with seamless functionality.",
    offerings: [
      {
        icon: Layers,
        title: "iOS & Android Development",
        description:
          "We create native mobile applications that leverage the full potential of iOS and Android platforms, ensuring smooth performance and a seamless user experience.",
      },
      {
        icon: MonitorSmartphone,
        title: "Cross-Platform Development",
        description:
          "Our expertise in React Native allows us to build cost-effective, high-performance apps that run seamlessly on both iOS and Android devices.",
      },
      {
        icon: MonitorCog,
        title: "App Maintenance & Optimization",
        description:
          "Beyond development, we offer ongoing support, updates, and performance optimizations to keep your mobile app running smoothly and efficiently.",
      },
    ],
  },
  {
    slug: "legal-solutions",
    eyebrow: "Seek",
    title: "Legal Solutions",
    tone: "warm",
    description:
      "Navigating the legal landscape can be complex, but at Cyntonisca, we simplify it for businesses. From contract drafting to digital compliance, we offer expert legal services that protect your business and ensure regulatory adherence. Whether you're a startup or an established company, we provide tailored legal solutions that support your growth and operations.",
    offerings: [
      {
        icon: FileSignature,
        title: "Business Contracts & Agreements",
        description:
          "We draft and review contracts to protect your business interests, ensuring clarity and legal compliance in every agreement.",
      },
      {
        icon: Lock,
        title: "Data Privacy",
        description:
          "Stay compliant with data protection laws like GDPR, CCPA, and other regulations. We help businesses establish policies that safeguard customer data and reduce legal risks.",
      },
      {
        icon: Landmark,
        title: "Intellectual Property Protection",
        description:
          "From trademarks to software licenses, we assist in protecting your intellectual property, ensuring your brand and digital assets remain secure.",
      },
    ],
  },
  {
    slug: "domain-email-management",
    eyebrow: "Build",
    title: "Domain & Email Management",
    tone: "dark",
    description:
      "We handle the complete setup, configuration, and ongoing management of your domain names and professional email accounts, ensuring your business operates with credibility, security, and zero technical stress.",
    offerings: [
      {
        icon: GlobeLock,
        title: "Domain & DNS Management",
        description:
          "We secure and manage your domain names from registration to renewal, including DNS configuration to ensure your website and digital services remain accessible, stable, and properly connected at all times.",
      },
      {
        icon: Briefcase,
        title: "Branded Email Setup",
        description:
          "We create branded email addresses using your domain, giving your business a polished, credible communication system that works seamlessly across devices.",
      },
      {
        icon: MailCheck,
        title: "Secure Email Hosting",
        description:
          "We manage email hosting with built-in security, backups, and user access controls, protecting sensitive communications while ensuring reliable delivery and easy administration.",
      },
    ],
  },
];
