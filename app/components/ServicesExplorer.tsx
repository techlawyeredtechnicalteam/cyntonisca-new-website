"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "../data/services";

export default function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section className="py-20 text-black">
      <div className="mx-auto max-w-[90%] px-6 md:px-10">
        <div className="mb-14 flex justify-center">
          <label className="w-full max-w-sm md:hidden">
            <span className="sr-only">Choose a service</span>
            <select
              value={active}
              onChange={(e) => setActive(Number(e.target.value))}
              className="w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] text-black shadow-sm focus:border-accent focus:outline-none"
            >
              {services.map((s, i) => (
                <option key={s.slug} value={i}>
                  {s.title}
                </option>
              ))}
            </select>
          </label>

          <div className="hidden flex-wrap justify-center gap-2 rounded-full border border-line bg-white p-1.5 md:flex">
            {services.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  active === i
                    ? "bg-accent text-[#9B511F]"
                    : "text-black-soft hover:text-accent"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-[#9B511F] bg-soft p-8 pb-10 md:p-14 md:pr-[360px]">
            <p className="text-sm font-medium tracking-wide text-black-soft">{service.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl text-black md:text-4xl">{service.title}</h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-black-soft">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-md border border-[#E65100] px-6 py-2.5 text-[15px] font-medium text-[#9B511F] transition-colors hover:bg-accent hover:text-black"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-md px-6 py-2.5 text-[15px] font-medium bg-[#9B511F] border border-[#E65100] text-white transition-colors hover:bg-accent-dark"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Offerings */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium tracking-wide text-black-soft">What&apos;s in it for you</p>
          <h3 className="mt-3 font-serif text-3xl text-black md:text-4xl">
            {service.title} Offerings
          </h3>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {service.offerings.map((offering) => (
            <div key={offering.title} className="rounded-lg bg-white p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F9D9C8] text-[#9B511F]">
                <offering.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              </div>
              <h4 className="mt-5 font-serif text-[28px] text-black">{offering.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-black-soft">{offering.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-accent hover:text-accent-dark"
          >
            See related projects <ArrowRight size={15} />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
