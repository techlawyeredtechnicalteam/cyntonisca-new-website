"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import touch from "../../public/images/touch.jpg";

export default function GetInTouch() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <section className="grid bg-[#0c2133] font-sans text-white lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col justify-between px-6 py-20 sm:px-10 sm:py-24 lg:min-h-[620px] lg:px-16 lg:py-20 xl:px-20">

        <div className="my-16">
          <h2 className="max-w-[11ch] text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Better legal work starts with a conversation.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/58">
            Tell us what you are trying to improve, build, or simplify. We will help you identify a practical next step.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <a href="mailto:info@cyntonisca.com" className="text-sm text-white/60 transition-colors hover:text-white">info@cyntonisca.com</a>
          <Link href="/contact" className="group inline-flex items-center justify-between gap-8 bg-white px-6 py-4 text-sm font-semibold text-[#0c2133] transition-colors hover:bg-[#dce8ef]">
            Book a consultation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      <div className="relative min-h-[430px] lg:min-h-[620px]">
        <Image src={touch} alt="A professional handshake" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover grayscale" />
        <div className="absolute inset-0 bg-[#17466b]/25" />
      </div>
    </section>
  );
}
