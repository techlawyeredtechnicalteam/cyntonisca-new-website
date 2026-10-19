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
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  overview: string[];
  outcomes: string[];
  tone: "warm" | "dark" | "slate";
  offerings: Offering[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    eyebrow: "Build",
    title: "Web Development",
    summary:
      "Distinctive, high-performing websites and web applications built to turn attention into meaningful action.",
    tone: "dark",
    image: "/images/services/web-development.jpg",
    imageAlt: "Translucent code symbols on a dark topographic surface",
    imagePosition: "center",
    description:
      "At Cyntonisca, we craft high-performance websites that are visually stunning and functionally robust. Whether you're a startup, a growing business, or an enterprise, our team delivers custom web solutions tailored to your needs. From engaging front-end designs to scalable back-end architectures, we ensure your website not only meets industry standards but exceeds user expectations.",
    overview: [
      "Your website should make the value of your business immediately clear while giving every visitor a fast, intuitive path forward. We combine strategy, interface design, and dependable engineering to create digital experiences that feel considered from the first interaction.",
      "Every build is shaped around your goals, content, and future plans. That means a flexible technical foundation, a responsive experience across devices, and a product your team can confidently evolve after launch.",
    ],
    outcomes: [
      "A clear digital experience aligned with your brand and business goals",
      "Fast, responsive performance across modern browsers and devices",
      "A scalable foundation that supports future content, features, and integrations",
      "A deliberate user journey designed to improve trust and conversion",
    ],
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
    summary:
      "Thoughtful mobile products that feel natural to use, perform reliably, and grow with your audience.",
    tone: "slate",
    image: "/images/services/mobile-development.jpg",
    imageAlt: "A person holding a smartphone with a blank screen above a desk",
    imagePosition: "center",
    description:
      "Mobile-first experiences are essential in today's digital landscape. At Cyntonisca, we build intuitive, high-performing mobile applications that keep users engaged. Whether it's native development for iOS and Android or a cross-platform solution, our team delivers apps that combine beautiful design with seamless functionality.",
    overview: [
      "A successful mobile product is more than a smaller version of a website. It needs focused journeys, familiar interaction patterns, and dependable performance in the real conditions where people use it.",
      "We translate product ideas into clear, maintainable applications for iOS and Android. From the first prototype to release and ongoing improvement, design and engineering stay closely connected so the experience remains coherent.",
    ],
    outcomes: [
      "Focused user journeys designed specifically for mobile behaviour",
      "Consistent experiences across iOS and Android",
      "Maintainable architecture for faster future releases",
      "Ongoing optimisation based on product needs and user feedback",
    ],
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
    summary:
      "Practical legal guidance that helps digital businesses protect their work, manage risk, and move decisively.",
    tone: "warm",
    image: "/images/services/legal-solutions.webp",
    imageAlt: "A legal office desk with books, a gavel, files, and scales of justice",
    imagePosition: "center",
    description:
      "Navigating the legal landscape can be complex, but at Cyntonisca, we simplify it for businesses. From contract drafting to digital compliance, we offer expert legal services that protect your business and ensure regulatory adherence. Whether you're a startup or an established company, we provide tailored legal solutions that support your growth and operations.",
    overview: [
      "Legal decisions should create clarity, not slow the business down. We help founders and organisations understand their options, document important relationships, and build stronger safeguards around their operations and digital assets.",
      "Our advice is practical and connected to the way modern organisations work. We translate legal complexity into direct recommendations, clear documents, and actions your team can use with confidence.",
    ],
    outcomes: [
      "Clear commercial agreements that reflect how the business actually operates",
      "Stronger privacy and compliance foundations for digital products",
      "Better protection for intellectual property and brand assets",
      "Reduced uncertainty around key business and technology decisions",
    ],
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
    summary:
      "Secure, professional domain and email infrastructure managed without the usual operational friction.",
    tone: "dark",
    image: "/images/services/domain-email-management.jpg",
    imageAlt: "A person viewing an email inbox on a tablet beside a laptop",
    imagePosition: "center",
    description:
      "We handle the complete setup, configuration, and ongoing management of your domain names and professional email accounts, ensuring your business operates with credibility, security, and zero technical stress.",
    overview: [
      "Domains and business email sit quietly behind every trusted digital presence. When they are configured poorly, the result is missed messages, security risk, renewal problems, and avoidable disruption.",
      "We take responsibility for setup and ongoing administration, keeping ownership, DNS records, authentication, access, and renewals organised. Your team gets a professional system that works reliably without needing to become infrastructure specialists.",
    ],
    outcomes: [
      "A professional branded presence across web and email",
      "Reliable DNS and account configuration with fewer points of failure",
      "Improved email authentication, deliverability, and access security",
      "Clear ownership, renewal, and administration processes",
    ],
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
