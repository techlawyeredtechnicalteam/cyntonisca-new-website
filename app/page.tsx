import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Globe2,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { HomeHero } from "./components/HomeHero";
import ScrollReveal from "./components/ScrollReveal";
import SectionLabel from "./components/SectionLabel";
import TechStack from "./components/TechStack";
import { projects } from "./data/project";
import { services } from "./data/services";
import aboutImage from "../public/images/about.jpg";
import ceoImage from "../public/images/ceo.jpg";

const principles = [
  {
    icon: Scale,
    title: "Legal-first thinking",
    description: "Every solution begins with the realities, responsibilities, and trust required in legal work.",
  },
  {
    icon: Globe2,
    title: "Local context, global quality",
    description: "We understand Nigerian legal practice and build to standards that support ambitious organisations.",
  },
  {
    icon: ShieldCheck,
    title: "Built around trust",
    description: "Clarity, security, and responsible delivery shape every decision from strategy through launch.",
  },
];

const processSteps = [
  { number: "01", title: "Discover", description: "We listen, study the workflow, and define the real problem before proposing a solution." },
  { number: "02", title: "Shape", description: "We turn insight into a focused strategy, clear user journeys, and a practical delivery plan." },
  { number: "03", title: "Build", description: "Design and engineering move together to create a secure, accessible, and polished product." },
  { number: "04", title: "Evolve", description: "We launch carefully, learn from use, and improve the system as your organisation grows." },
];

const serviceSummaries: Record<string, string> = {
  "web-development": "High-performance websites and web platforms that make complex services easier to understand and use.",
  "mobile-development": "Focused mobile experiences designed around real workflows, reliability, and long-term product growth.",
  "legal-solutions": "Practical legal and compliance support that helps digital businesses move forward with confidence.",
  "domain-email-management": "Dependable domains, branded email, and digital infrastructure managed without the technical burden.",
};

const positioning = ["Legal insight", "Product strategy", "Design & engineering", "Digital transformation"];

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#f4f3ef] font-sans text-[#0c2133]">
      <HomeHero />

      <section className="border-b border-[#0c2133]/12 bg-[#dce8ef]">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-2 lg:grid-cols-4">
          {positioning.map((item, index) => (
            <div key={item} className={`flex items-center justify-center gap-3 py-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#173a55] sm:text-sm lg:py-7 ${index % 2 === 0 ? "border-r border-[#0c2133]/10" : "pl-5 lg:border-r lg:border-[#0c2133]/10 lg:pl-7"}`}>
              <Check className="h-4 w-4 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
            <div>
              <SectionLabel>About Cyntonisca</SectionLabel>
              <h2 className="mt-7 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Legal understanding, built into every digital experience.
              </h2>
            </div>
            <div className="lg:pt-12">
              <p className="max-w-2xl text-lg leading-8 text-[#405464] sm:text-xl sm:leading-9">
                We help legal and professional organisations modernise how they work, serve clients, and deliver trusted services. Our approach brings legal insight, product thinking, and engineering into one clear process.
              </p>
              <Link href="/about" className="group mt-8 inline-flex items-center gap-3 border-b border-[#0c2133] pb-1 text-sm font-semibold">
                Learn more about us
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative mt-16 lg:mt-20">
            <div className="relative min-h-[460px] overflow-hidden sm:min-h-[560px] lg:min-h-[680px]">
              <Image src={aboutImage} alt="A legal professional working with digital tools" fill placeholder="blur" sizes="(max-width: 1024px) 100vw, 90vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-[#0b3355]/20" />
              <div className="absolute bottom-0 left-0 max-w-md bg-[#f4f3ef] p-7 sm:p-10">
                <SectionLabel>Our focus</SectionLabel>
                <p className="mt-4 text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">Smarter legal systems, shaped around the people who use them.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-0 grid border-x border-b border-[#0c2133]/15 sm:grid-cols-2 lg:grid-cols-4">
            {["Legal-first", "Nigeria-rooted", "End-to-end delivery", "Built to evolve"].map((item, index) => (
              <ScrollReveal key={item} delay={index * 70} className="border-b border-[#0c2133]/15 p-6 last:border-b-0 sm:p-8 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
                <span className="text-[10px] font-semibold text-[#315c7c]">0{index + 1}</span>
                <p className="mt-8 text-lg font-medium tracking-[-0.03em]">{item}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0c2133] px-6 py-24 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal className="flex flex-col gap-8 border-b border-white/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel light>What we do</SectionLabel>
              <h2 className="mt-7 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Digital solutions for modern legal work.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/60">From public-facing experiences to the infrastructure behind them, we help organisations move with clarity and confidence.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.offerings[0].icon;
              return (
                <ScrollReveal key={service.slug} delay={(index % 2) * 90} className={`group border-b border-white/15 py-10 transition-colors duration-300 hover:bg-white/[0.035] md:p-10 ${index % 2 === 0 ? "md:border-r" : "md:pl-12"}`}>
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-xs text-white/40">0{index + 1}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#a9c8dc] transition-transform duration-300 group-hover:rotate-6">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="mt-12 text-3xl font-medium tracking-[-0.045em] sm:text-4xl">{service.title}</h3>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/58 sm:text-base">{serviceSummaries[service.slug]}</p>
                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/45">
                    {service.offerings.slice(0, 3).map((offering) => <span key={offering.title}>{offering.title}</span>)}
                  </div>
                  <Link href="/services" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-white">
                    Explore service <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#dce8ef] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <SectionLabel>Our process</SectionLabel>
              <h2 className="mt-7 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">From first conversation to lasting progress.</h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-[#405464] lg:justify-self-end">A thoughtful delivery process designed to make complex work understandable, collaborative, and accountable.</p>
          </ScrollReveal>

          <div className="mt-16 grid border-l border-t border-[#0c2133]/18 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 80} className="group min-h-[310px] border-b border-r border-[#0c2133]/18 p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#315c7c]">{step.number}</span>
                  <Compass className="h-5 w-5 text-[#315c7c] transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.5} />
                </div>
                <h3 className="mt-20 text-2xl font-medium tracking-[-0.04em]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#536675]">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal className="flex flex-col gap-7 border-b border-[#0c2133]/15 pb-11 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2 className="mt-7 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">Digital experiences that make trusted practices easier to discover.</h2>
            </div>
            <Link href="/projects" className="group inline-flex items-center gap-1 text-xs font-semibold">View all projects <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {projects.slice(0, 2).map((project, index) => (
              <ScrollReveal
                key={project.slug}
                as="article"
                delay={index * 100}
                className={`group ${index === 1 ? "lg:mt-24" : ""}`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block aspect-[4/3] overflow-hidden rounded-[24px] bg-[#dce8ef] sm:rounded-[28px]"
                  aria-label={`View ${project.name} project`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </Link>
                <div className="flex items-start justify-between gap-6 border-b border-[#0c2133]/16 py-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#536675]">
                      Website &amp; digital infrastructure
                    </p>
                    <h3 className="mt-2 text-3xl font-medium tracking-[-0.04em]">
                      {project.name}
                    </h3>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    aria-label={`View ${project.name} project`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#0c2133]/20 transition-colors hover:bg-[#0c2133] hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0c2133]/12 bg-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.82fr_1.18fr]">
          <ScrollReveal className="relative min-h-[520px] lg:min-h-[720px]">
            <Image src={ceoImage} alt="Simbiat Lola, Founder and CEO of Cyntonisca" fill placeholder="blur" sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-top" />
          </ScrollReveal>
          <ScrollReveal delay={100} className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
            <SectionLabel>Founder-led perspective</SectionLabel>
            <blockquote className="mt-8 max-w-3xl text-3xl font-medium leading-[1.15] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              “Africa should not merely consume emerging technology. We should help shape the systems, policies, and infrastructure defining our digital future.”
            </blockquote>
            <div className="mt-10 border-t border-[#0c2133]/15 pt-6">
              <p className="font-semibold">Simbiat A. Lola</p>
              <p className="mt-1 text-sm text-[#536675]">Founder & CEO · Lawyer · Legal Technologist · Systems Architect</p>
            </div>
            <Link href="/about" className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-[#0c2133] pb-1 text-sm font-semibold">Meet the team <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36 xl:px-20">
        <div className="max-w-[1440px]">
          <ScrollReveal className="">
            <SectionLabel>Why Cyntonisca</SectionLabel>
            <h2 className="mt-7 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">A partner for work where clarity and trust matter.</h2>
          </ScrollReveal>
          <div className="mt-16 grid border-l border-t border-[#0c2133]/15 lg:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <ScrollReveal key={title} delay={index * 90} className="border-b border-r border-[#0c2133]/15 p-8 sm:p-10 lg:min-h-[360px]">
                <Icon className="h-7 w-7 text-[#315c7c]" strokeWidth={1.4} />
                <h3 className="mt-20 text-2xl font-medium tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#536675]">{description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <TechStack />
    </div>
  );
}
