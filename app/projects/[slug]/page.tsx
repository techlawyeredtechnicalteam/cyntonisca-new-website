import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
} from "lucide-react";
import { notFound } from "next/navigation";
import ScrollReveal from "../../components/ScrollReveal";
import SectionLabel from "../../components/SectionLabel";
import { projects } from "../../data/project";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} | Cyntonisca`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="font-sans text-[#0c2133]">
      <section className="px-6 sm:px-10 lg:px-16 lg:pb-24 pt-16 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#405464]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            All work
          </Link>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-20">
            <div>
              <h1 className="mt-8 max-w-[13ch] text-5xl font-medium leading-[0.96] tracking-[-0.065em] sm:text-6xl lg:text-7xl xl:text-[88px]">
                {project.name}
              </h1>
            </div>
            <div className="lg:justify-self-end lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-[#405464] sm:text-lg">
                {project.summary}
              </p>
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="group mt-7 inline-flex items-center gap-3 border-b border-[#0c2133] pb-1.5 text-sm font-semibold"
              >
                Visit live website
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-8 sm:pb-8 lg:px-12 lg:pb-12 xl:px-16">
        <div className="relative mx-auto h-[58svh] min-h-[420px] max-w-[1504px] overflow-hidden rounded-[24px] sm:h-[64svh] sm:min-h-[500px] sm:rounded-[28px] lg:h-[70svh] lg:min-h-[560px] lg:max-h-[780px] lg:rounded-[32px]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(min-width: 1536px) 1504px, calc(100vw - 32px)"
            className="object-cover object-top"
          />
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36 xl:px-20">
        <div className="mx-auto grid max-w-[1376px] gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <ScrollReveal>
            <SectionLabel>Project overview</SectionLabel>
            <h2 className="mt-7 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              A complete digital foundation, not just a website.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={80} className="space-y-7 lg:pt-10">
            {project.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-3xl text-base leading-8 text-[#536675] sm:text-lg sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 pb-1.5 pt-3 text-sm font-semibold"
            >
              Experience the website
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#071521] px-4 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        <div className="mx-auto max-w-[1376px]">
          <ScrollReveal className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <SectionLabel light>What we delivered</SectionLabel>
              <h2 className="mt-7 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                One connected experience across every digital touchpoint.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-8 text-white/58 lg:justify-self-end">
              The visible experience and the infrastructure behind it were handled as one coordinated engagement.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid border-l border-t border-white/15 lg:grid-cols-3">
            {project.services.map((service, index) => (
              <ScrollReveal
                key={service}
                delay={index * 80}
                className="flex min-h-[280px] flex-col border-b border-r border-white/15 p-7 sm:p-9 lg:min-h-[330px]"
              >
                <span className="text-xs font-semibold text-[#a9c8dc]">
                  0{index + 1}
                </span>
                <h3 className="mt-auto max-w-[15ch] text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">
                  {service}
                </h3>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dce8ef] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36 xl:px-20">
        <div className="mx-auto grid max-w-[1376px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <ScrollReveal>
            <SectionLabel>Project outcomes</SectionLabel>
            <h2 className="mt-7 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Built to support the practice beyond launch.
            </h2>
          </ScrollReveal>

          <div className="border-t border-[#0c2133]/18">
            {project.outcomes.map((outcome, index) => (
              <ScrollReveal
                key={outcome}
                delay={index * 60}
                className="grid grid-cols-[auto_1fr] gap-5 border-b border-[#0c2133]/18 py-7 sm:items-center sm:py-8"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full text-[#315c7c]">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-base leading-7 sm:text-lg">{outcome}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        <ScrollReveal className="mx-auto max-w-[1376px]">
          <SectionLabel>Explore next</SectionLabel>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group mt-8 grid overflow-hidden rounded-[24px] bg-white shadow-[0_16px_45px_rgba(12,33,51,0.06)] sm:rounded-[28px] lg:grid-cols-[0.92fr_1.08fr]"
          >
            <div className="relative min-h-[330px] overflow-hidden sm:min-h-[430px]">
              <Image
                src={nextProject.image}
                alt={nextProject.imageAlt}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">
              <h2 className="mt-8 max-w-[12ch] text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                {nextProject.name}
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#536675] sm:text-base">
                {nextProject.summary}
              </p>
              <span className="mt-8 inline-flex w-fit items-center gap-3  pb-1.5 text-sm font-semibold">
                View project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
