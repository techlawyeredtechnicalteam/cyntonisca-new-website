import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SectionLabel from "./components/SectionLabel";

export default function NotFound() {
  return (
    <section className="flex min-h-[72vh] items-center bg-[#dce8ef] px-6 py-24 font-sans text-[#0c2133] sm:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionLabel>Error · 404</SectionLabel>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h1 className="max-w-[10ch] text-6xl font-medium leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-8xl">This page has moved out of view.</h1>
          <div>
            <p className="max-w-md text-base leading-8 text-[#536675]">The address may be incorrect or the page may no longer exist. Return home or explore our work.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/" className="group inline-flex items-center gap-3 bg-[#0c2133] px-6 py-4 text-sm font-semibold text-white"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />Back home</Link>
              <Link href="/projects" className="group inline-flex items-center gap-3 border border-[#0c2133]/25 px-6 py-4 text-sm font-semibold">View our work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
