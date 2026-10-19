"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import architecture from "../../public/images/hero-architecture.jpg";
import SectionLabel from "./SectionLabel";

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageLayerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(
        {
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const { desktop, reduceMotion } = conditions as {
            desktop: boolean;
            mobile: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) return;

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.9,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .fromTo(
              imageLayerRef.current,
              { yPercent: -3 },
              { yPercent: desktop ? 7 : 4, ease: "none" },
              0,
            )
            .to(
              contentRef.current,
              {
                yPercent: desktop ? -18 : -9,
                opacity: desktop ? 0.45 : 0.65,
                ease: "none",
              },
              0,
            );
        },
      );
    }, sectionRef);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate min-h-screen overflow-hidden bg-[#0e1a28] font-sans lg:min-h-[760px]">
      <div ref={imageLayerRef} className="absolute -inset-y-[8%] inset-x-0 will-change-transform">
        <Image
          src={architecture}
          alt=""
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="hero-image-enter object-cover object-center"
        />

        <div aria-hidden="true" className="absolute inset-0 bg-[#0a3763]/40" />
      </div>

        <div ref={contentRef} className="relative mx-auto flex min-h-screen w-full flex-col justify-end px-6 pb-8 pt-32 will-change-transform sm:px-10 sm:pb-10 sm:pt-20 lg:min-h-[660px] lg:px-16 lg:pb-12 xl:px-20">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
            <div className="max-w-3xl">
              <SectionLabel light className="hero-reveal hero-delay-1 mb-6">Law, technology & innovation</SectionLabel>

              <h1 className="hero-reveal hero-delay-2 text-[clamp(3rem,7.8vw,6.75rem)] font-medium leading-[0.92] tracking-[-0.065em] text-white [text-shadow:0_3px_28px_rgba(0,0,0,0.62)]">
                Legal expertise for a digital world.
              </h1>

              <div className="hero-reveal hero-delay-3 mt-7 flex max-w-2xl flex-col gap-6 border-t border-white/24 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xl text-sm leading-6 text-white sm:text-base sm:leading-7 [text-shadow:0_2px_18px_rgba(0,0,0,0.8)]">
                  Cyntonisca combines legal understanding with product strategy and engineering to build clearer, smarter systems for modern legal work.
                </p>

                <Link
                  href="/projects"
                  aria-label="Explore our work"
                  className="group flex h-11 w-11 shrink-0 items-center justify-center border border-white/35 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-slate-950"
                >
                  <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </Link>
              </div>
            </div>

            <div className="hero-reveal hero-delay-4 lg:pb-1">
              <Link
                href="/contact"
                className="group mt-6 flex w-full items-center justify-between bg-white px-5 py-4 text-sm font-semibold text-slate-950 transition-colors duration-300 hover:bg-[#dce8ef]"
              >
                Book a consultation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

        </div>
    </section>
  );
}
