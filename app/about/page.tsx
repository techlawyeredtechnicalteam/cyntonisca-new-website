import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";
import SectionLabel from "../components/SectionLabel";

import aboutImage from "../../public/images/about.jpg";
import approachImage from "../../public/images/about-approach.jpg";
import ceoImage from "../../public/images/ceo.jpg";
import frontendImage from "../../public/images/frontend.jpeg";
import principlesImage from "../../public/images/touch.jpg";

export const metadata: Metadata = {
  title: "About Us | Cyntonisca",
  description:
    "Meet the people and principles behind Cyntonisca's thoughtful legal technology and digital services.",
};

const principles = [
  {
    number: "01",
    title: "Clarity",
    description:
      "We turn complex requirements into focused decisions, practical systems, and digital experiences that are easy to use.",
  },
  {
    number: "02",
    title: "Context",
    description:
      "Every organisation works differently. We listen first, then shape each solution around the people and processes it serves.",
  },
  {
    number: "03",
    title: "Responsibility",
    description:
      "We treat trust, privacy, reliability, and long-term maintainability as core parts of the work—not finishing touches.",
  },
  {
    number: "04",
    title: "Commitment",
    description:
      "We stay close from strategy through delivery, bringing care, consistency, and accountability to every engagement.",
  },
];

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  image?: StaticImageData;
};

const team: TeamMember[] = [
  {
    name: "Simbiat A. Lola",
    role: "Founder & CEO",
    initials: "SL",
    image: ceoImage,
    bio: "Simbiat A. Lola, Founder & CEO, Cyntonisca Ltd | Lawyer | Legal Technologist | Systems Architect. Simbiat A. Lola is a lawyer, legal technologist and systems architect, and the Founder & CEO of Cyntonisca Ltd, a legal technology company focused on bridging the gap between law and technology through innovative digital solutions.",
  },
  {
    name: "Adams Muhammed",
    role: "Chief Technical Officer",
    initials: "AM",
    bio: "Adams is a passionate software engineer specialising in backend development. He works extensively with Node.js and PostgreSQL, building resilient APIs and dependable systems that scale.",
  },
  {
    name: "Emmanuel Oyeyipo",
    role: "Software Engineer",
    initials: "EO",
    image: frontendImage,
    bio: "Emmanuel is a software engineer dedicated to turning complex ideas into seamless, high-performance digital experiences. With over three years of experience, he specialises in building scalable web applications using React, Next.js and TypeScript. He does not just build interfaces; he builds solutions that challenge the status quo.",
  },
  {
    name: "Chioma Eze",
    role: "Product Designer",
    initials: "CE",
    bio: "Chioma leads product design at Cyntonisca, shaping how legal professionals experience our tools. She believes good design should feel invisible and simply work.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden text-[#0b2133]">
      <section className=" px-5 sm:px-8 lg:px-12 ">
        <div className="mx-auto max-w-[1480px] pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <ScrollReveal>
              <h1 className="text-3xl font-medium leading-[0.96] tracking-[-0.065em] sm:text-4xl lg:text-5xl xl:text-[68px]">
                A thoughtful approach to legal technology.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120} className="lg:pb-3">
              <p className="max-w-xl text-lg leading-8 text-[#45596a] sm:text-xl sm:leading-9">
                We combine legal understanding, product thinking, and dependable
                technology to help modern organisations work with greater clarity
                and confidence.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal
            delay={80}
            className="relative mt-12 h-[52svh] min-h-[400px] overflow-hidden rounded-[1.5rem] bg-[#cad6dd] sm:mt-16 sm:h-[60svh] sm:min-h-[520px] sm:rounded-[2rem] lg:mt-20 lg:h-[66svh] lg:max-h-[760px]"
          >
            <Image
              src={aboutImage}
              alt="A Cyntonisca professional working with a tablet"
              fill
              preload
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 94vw"
              className="object-cover object-center"
            />
          </ScrollReveal>
        </div>
      </section>

      <section
        id="our-approach"
        className="bg-[#dce8ef] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch lg:gap-20">
          <ScrollReveal className="relative min-h-[440px] overflow-hidden rounded-[1.5rem] bg-[#c6d6df] sm:min-h-[620px] sm:rounded-[2rem] lg:min-h-[720px]">
            <Image
              src={approachImage}
              alt="A Cyntonisca professional working on a laptop"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-center"
            />
          </ScrollReveal>

          <ScrollReveal
            delay={100}
            className="flex flex-col justify-center lg:py-8"
          >
            <SectionLabel>Our approach</SectionLabel>
            <h2 className="mt-6 max-w-4xl text-[clamp(2.65rem,5.2vw,6rem)] font-medium leading-[0.98] tracking-[-0.05em]">
              A disciplined process, shaped around every organisation.
            </h2>

            <div className="mt-8 grid max-w-4xl gap-5 text-base leading-7 text-[#45596a] sm:text-lg sm:leading-8 xl:grid-cols-2 xl:gap-10">
              <p>
                We start by understanding the real operational challenge: who is
                involved, what creates friction, and what a better outcome needs
                to feel like.
              </p>
              <p>
                From there, strategy, design, engineering, and ongoing support
                move as one connected process. The result is useful technology
                built for the way your team actually works.
              </p>
            </div>

            <Link
              href="/services"
              className="group mt-10 inline-flex w-fit items-center gap-2 border-b border-[#0b2133] pb-1 text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:text-[#245e85]"
            >
              Explore our services
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative min-h-[900px] overflow-hidden bg-[#071521] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <Image
          src={principlesImage}
          alt="Two professionals shaking hands"
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#071d31]/85" />

        <div className="relative mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <ScrollReveal>
            <SectionLabel light>Our principles</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-[clamp(2.8rem,5.5vw,6.3rem)] font-medium leading-[0.98] tracking-[-0.05em]">
              The principles that guide our work.
            </h2>
          </ScrollReveal>

          <div className="space-y-4 lg:pt-20">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.title} delay={index * 60}>
                <article className="grid gap-6 rounded-[1.4rem] border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.13] sm:grid-cols-[70px_1fr] sm:p-8 lg:p-10">
                  <p className="text-sm font-semibold tracking-[0.14em] text-[#9bc6e2]">
                    {principle.number}
                  </p>
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-7 text-white/70">
                      {principle.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f3ef] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 border-b border-[#0b2133]/20 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20 lg:pb-16">
            <ScrollReveal>
              <SectionLabel>Our team</SectionLabel>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.8rem,5.5vw,6.2rem)] font-medium leading-[0.98] tracking-[-0.05em]">
                The people behind the work.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100} className="lg:pb-2">
              <p className="max-w-xl text-lg leading-8 text-[#45596a]">
                A collaborative team of strategists, designers, developers, and
                legal-minded problem solvers committed to useful, lasting work.
              </p>
              <Link
                href="/careers"
                className="group mt-7 inline-flex items-center gap-2 border-b border-[#0b2133] pb-1 text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:text-[#245e85]"
              >
                Work with us
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </ScrollReveal>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 60}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#dce8ef]">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center grayscale-[20%] transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-end bg-[linear-gradient(145deg,#d9e7ee_0%,#afc5d2_100%)] p-7">
                        <span className="text-[clamp(4rem,8vw,7rem)] font-medium leading-none tracking-[-0.07em] text-[#0b2133]/16">
                          {member.initials}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="mt-5 text-xl font-medium tracking-[-0.025em]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#536675]">{member.role}</p>
                  <details className="group/bio mt-5 border-t border-[#0b2133]/15 pt-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.1em] text-[#234e70] [&::-webkit-details-marker]:hidden">
                      <span className="group-open/bio:hidden">Read bio</span>
                      <span className="hidden group-open/bio:inline">Close bio</span>
                      <span
                        aria-hidden="true"
                        className="relative h-4 w-4 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-4 before:-translate-y-1/2 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-4 after:w-px after:-translate-x-1/2 after:bg-current after:transition-transform group-open/bio:after:rotate-90"
                      />
                    </summary>
                    <p className="mt-4 text-[0.95rem] leading-7 text-[#45596a]">
                      {member.bio}
                    </p>
                  </details>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
