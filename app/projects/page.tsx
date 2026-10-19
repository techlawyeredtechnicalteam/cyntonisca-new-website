import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ExternalLink } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionLabel from "../components/SectionLabel";
import { projects } from "../data/project";

export const metadata: Metadata = {
  title: "Work | Cyntonisca",
  description:
    "Explore websites and digital infrastructure delivered by Cyntonisca for modern legal practices.",
};

export default function ProjectsPage() {
  return (
    <div className="font-sans text-[#0c2133]">
      <section className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1440px]  pt-16">
          <div className="mt-9 grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-20">
            <h1 className="text-3xl font-medium leading-[0.96] tracking-[-0.065em] sm:text-4xl lg:text-5xl xl:text-[68px]">
              Digital work shaped around clarity and trust.
            </h1>

            <div className="lg:justify-self-end lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-[#405464] sm:text-lg">
                We create considered digital experiences and the dependable infrastructure behind them—helping legal practices show up clearly, communicate professionally, and grow with confidence.
              </p>
              <a
                href="#projects"
                className="group mt-8 inline-flex items-center gap-4 text-sm font-semibold"
              >
                Explore selected work
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0c2133]/25 transition-colors duration-300 group-hover:bg-[#0c2133] group-hover:text-white">
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-24 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-16"
      >
        <div className="mx-auto grid max-w-[1376px] gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              delay={(index % 3) * 70}
              className="h-full"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0c2133]/10 bg-white shadow-[0_16px_45px_rgba(12,33,51,0.06)] sm:rounded-[28px]">
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View the ${project.name} project`}
                  className="relative block aspect-[4/3] overflow-hidden bg-[#cbd8df]"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-9">
                  <h2 className="mt-8 text-3xl font-medium leading-[1.03] tracking-[-0.05em] sm:text-4xl">
                    {project.name}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-[#536675]">
                    {project.summary}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-[#0c2133]/14 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#536675]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-9">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/link inline-flex items-center gap-3 border-b border-[#0c2133] pb-1.5 text-sm font-semibold"
                    >
                      View project
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </Link>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#536675] transition-colors hover:text-[#0c2133]"
                    >
                      Live website
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 pt-8 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36 xl:px-20">
        <ScrollReveal className="mx-auto grid max-w-[1376px] gap-10 border-t border-[#0c2133]/15 pt-12 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>Have a project in mind?</SectionLabel>
            <h2 className="mt-7 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Let&apos;s create a digital presence that earns attention.
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-lg text-base leading-8 text-[#536675]">
              Whether you need a new website or the domain and email systems behind it, we can bring every part into one clear, dependable experience.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#0c2133] pb-1.5 text-sm font-semibold"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
