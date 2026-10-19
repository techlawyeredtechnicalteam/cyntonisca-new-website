import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionLabel from "../components/SectionLabel";
import { services } from "../data/services";

export const metadata: Metadata = {
  title: "Services | Cyntonisca",
  description:
    "Explore Cyntonisca's web, mobile, legal, domain, and email services for modern organisations.",
};

export default function ServicesPage() {
  return (
    <div className="font-sans text-[#0c2133]">
      <section className="px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1440px] pt-16">
          <div className="mt-9 grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-20">
            <h1 className="w-full md:max-w-[11ch] text-3xl font-medium leading-[0.96] tracking-[-0.065em] sm:text-4xl lg:text-5xl xl:text-[68px]">
              Expertise built around how you move.
            </h1>

            <div className="lg:justify-self-end lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-[#405464] sm:text-lg">
                Cyntonisca brings product thinking, technology, legal insight, and dependable infrastructure together—giving your organisation the expertise it needs without the gaps between disciplines.
              </p>
              <a
                href="#services"
                className="group mt-8 inline-flex items-center gap-4 text-sm font-semibold"
              >
                Explore our services
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0c2133]/25 transition-colors duration-300 group-hover:bg-[#0c2133] group-hover:text-white">
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 px-4 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-28 xl:px-16"
      >
        <div className="mx-auto grid max-w-[1376px] gap-5 md:grid-cols-2 lg:gap-7">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.slug}
              delay={(index % 2) * 80}
              className="h-full"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0c2133]/10 bg-white shadow-[0_16px_45px_rgba(12,33,51,0.06)] sm:rounded-[28px]">
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`Read more about ${service.title}`}
                  className="relative block aspect-[4/3] overflow-hidden bg-[#cbd8df]"
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    style={{ objectPosition: service.imagePosition }}
                  />
                </Link>

                <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
                  <h2 className="mt-1 text-3xl font-medium leading-[1.03] tracking-[-0.05em] sm:text-4xl lg:text-[44px]">
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#536675] sm:text-base">
                    {service.summary}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="group/link mt-9 inline-flex w-fit items-center gap-1 text-sm font-semibold"
                  >
                    Read more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 pt-8 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36 xl:px-20">
        <ScrollReveal className="mx-auto grid max-w-[1376px] gap-10 border-t border-[#0c2133]/15 pt-12 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>Not sure where to begin?</SectionLabel>
            <h2 className="mt-7 max-w-[12ch] text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Start with the challenge. We&apos;ll shape the right route.
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-lg text-base leading-8 text-[#536675]">
              Tell us what you are trying to build, protect, or improve. We will help you identify the service—or combination of services—that fits.
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
