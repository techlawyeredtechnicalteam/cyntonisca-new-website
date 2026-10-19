import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";
import SectionLabel from "../components/SectionLabel";

import careersImage from "../../public/images/careers.jpg";

export const metadata: Metadata = {
  title: "Careers | Cyntonisca",
  description:
    "Explore opportunities to work with Cyntonisca at the intersection of law, technology, design, and innovation.",
};

const values = [
  {
    number: "01",
    title: "Stay curious",
    description:
      "Ask better questions, challenge assumptions, and keep learning across law, design, and technology.",
  },
  {
    number: "02",
    title: "Build together",
    description:
      "Share context early, listen closely, and make room for different disciplines and perspectives.",
  },
  {
    number: "03",
    title: "Work responsibly",
    description:
      "Treat quality, privacy, accessibility, and professional trust as essential parts of every solution.",
  },
  {
    number: "04",
    title: "Make it useful",
    description:
      "Focus energy on work that genuinely improves how people and organisations operate every day.",
  },
];

const disciplines = [
  {
    number: "01",
    title: "Legal insight",
    description: "Understanding the professional context behind every problem.",
  },
  {
    number: "02",
    title: "Product thinking",
    description: "Shaping clear experiences around real people and workflows.",
  },
  {
    number: "03",
    title: "Engineering craft",
    description: "Building secure, dependable systems designed to keep evolving.",
  },
];

export default function CareersPage() {
  return (
    <main className="overflow-hidden text-[#0b2133]">
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px] pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <ScrollReveal>
              <h1 className="text-3xl font-medium leading-[0.96] tracking-[-0.065em] sm:text-4xl lg:text-5xl xl:text-[68px]">
                Do meaningful work with a multidisciplinary team.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120} className="lg:pb-3">
              <p className="max-w-xl text-lg leading-8 text-[#45596a] sm:text-xl sm:leading-9">
                Join people using law, design, and technology to make complex
                systems clearer, more accessible, and more useful.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal
            delay={80}
            className="relative mt-12 h-[52svh] min-h-[400px] overflow-hidden rounded-[1.5rem] bg-[#cad6dd] sm:mt-16 sm:h-[60svh] sm:min-h-[520px] sm:rounded-[2rem] lg:mt-20 lg:h-[66svh] lg:max-h-[760px]"
          >
            <Image
              src={careersImage}
              alt="A team joining hands together"
              fill
              preload
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 94vw"
              className="object-cover object-center"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e7eff4] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="pointer-events-none absolute -right-28 top-0 h-[420px] w-[420px] rounded-full border border-[#234e70]/10" />
        <div className="pointer-events-none absolute -right-12 top-16 h-[290px] w-[290px] rounded-full border border-[#234e70]/10" />

        <div className="relative mx-auto max-w-[1480px]">
          <div className="grid gap-10 border-b border-[#0b2133]/18 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24 lg:pb-16">
            <ScrollReveal>
              <SectionLabel>Working at Cyntonisca</SectionLabel>
              <h2 className="mt-6 max-w-4xl text-[clamp(2.7rem,5.4vw,6.2rem)] font-medium leading-[0.96] tracking-[-0.055em]">
                One team, built from different ways of thinking.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100} className="lg:pb-2">
              <p className="max-w-xl text-lg leading-8 text-[#45596a]">
                Our strongest work happens when legal context, human-centred
                design, and technical craft are present from the beginning—not
                passed between teams at the end.
              </p>
              <a
                href="#opportunities"
                className="group mt-8 inline-flex w-fit items-center gap-2 border-b border-[#0b2133] pb-1 text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:text-[#245e85]"
              >
                View opportunities
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </ScrollReveal>
          </div>

          <div className="relative mt-12 grid overflow-hidden rounded-[1.75rem] border border-[#0b2133]/15 bg-[#f7fafb]/70 lg:grid-cols-3">
            <div className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[4.25rem] hidden h-px bg-[#0b2133]/20 lg:block" />
            {disciplines.map((discipline, index) => (
              <ScrollReveal
                key={discipline.title}
                delay={index * 80}
                className="relative border-b border-[#0b2133]/15 p-7 last:border-b-0 sm:p-9 lg:min-h-[390px] lg:border-b-0 lg:border-r lg:p-10 lg:last:border-r-0"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#0b2133]/20 bg-[#e7eff4] text-xs font-semibold tracking-[0.12em]">
                  {discipline.number}
                </div>
                <h3 className="mt-16 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:mt-24">
                  {discipline.title}
                </h3>
                <p className="mt-5 max-w-sm leading-7 text-[#536675]">
                  {discipline.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071b2b] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(72,137,178,0.28),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(43,91,123,0.25),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto grid max-w-[1480px] gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <ScrollReveal className="lg:sticky lg:top-32 lg:h-fit">
            <SectionLabel light>How we work</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-[clamp(2.8rem,5.5vw,6.3rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              Principles you can feel in the day-to-day.
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-8 text-white/62">
              Our culture is shaped by how we make decisions, share ownership,
              and support one another while the work is still taking form.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:pb-24">
            {values.map((value, index) => (
              <ScrollReveal
                key={value.title}
                delay={index * 70}
                className={index % 2 === 1 ? "sm:translate-y-16" : ""}
              >
                <article className="group relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-white/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.045))] p-7 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[#9bc6e2]/45 hover:bg-white/[0.14] sm:p-9">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#9bc6e2]">
                    {value.number}
                  </p>
                  <div className="absolute -right-3 -top-8 text-[9rem] font-medium leading-none tracking-[-0.08em] text-white/[0.035] transition-colors group-hover:text-white/[0.065]">
                    {value.number}
                  </div>
                  <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">
                    <h3 className="text-3xl font-medium leading-tight tracking-[-0.04em]">
                      {value.title}
                    </h3>
                    <p className="mt-4 leading-7 text-white/62">
                      {value.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="opportunities"
        className="scroll-mt-24 bg-[#f4f3ef] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 border-b border-[#0b2133]/20 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20 lg:pb-16">
            <ScrollReveal>
              <SectionLabel>Open roles</SectionLabel>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.8rem,5.5vw,6.2rem)] font-medium leading-[0.98] tracking-[-0.05em]">
                Find your place in the work.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100} className="lg:pb-2">
              <p className="max-w-xl text-lg leading-8 text-[#45596a]">
                We look for thoughtful people who are comfortable learning,
                collaborating, and solving meaningful problems across disciplines.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-10 lg:mt-14">
            <article className="grid gap-10 rounded-[1.5rem] border border-[#0b2133]/15 bg-white/55 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-14">
              <div>
                <SectionLabel>Current status</SectionLabel>
                <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                  No vacancies right now.
                </h3>
              </div>

              <div className="lg:border-l lg:border-[#0b2133]/15 lg:pl-12">
                <p className="max-w-2xl text-base leading-8 text-[#45596a] sm:text-lg">
                  We do not have an active opening at the moment, but we are
                  always interested in thoughtful people working across legal
                  innovation, product design, and software engineering.
                </p>
                <p className="mt-4 max-w-2xl leading-7 text-[#536675]">
                  If our work resonates with you, introduce yourself and tell us
                  what you care about. We will keep your details in mind when a
                  relevant opportunity opens.
                </p>
                <a
                  href="mailto:info@cyntonisca.com?subject=Career%20interest%20at%20Cyntonisca"
                  className="group mt-8 inline-flex items-center gap-2 bg-[#0b2133] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#183c58]"
                >
                  Introduce yourself
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
