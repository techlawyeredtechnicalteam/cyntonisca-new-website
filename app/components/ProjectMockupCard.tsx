import { Circle } from "lucide-react";
import type { ProjectMockup } from "../data/project";

export default function ProjectMockupCard({ mockup }: { mockup: ProjectMockup }) {
  const ctaClass =
    mockup.ctaTone === "crimson"
      ? "bg-[#8a2b2b] text-white"
      : "bg-[#6c3fd9] text-white";

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -left-4 -top-4 h-16 w-16 border-4 border-accent md:-left-6 md:-top-6" />
      <div className="absolute -bottom-4 -right-4 h-16 w-16 border-4 border-accent md:-bottom-6 md:-right-6" />

      <div className="relative overflow-hidden rounded-md border border-line bg-white shadow-xl">
        <div
          className={`flex items-center justify-between px-4 py-2.5 text-[11px] ${
            mockup.navTone === "dark"
              ? "bg-[#1c1712] text-white/90"
              : "bg-white text-black/80"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <Circle className="h-2 w-2 fill-current opacity-60" strokeWidth={0} />
            <span className="font-serif text-xs">{mockup.brand}</span>
          </div>
          <div className="hidden gap-3 sm:flex">
            {mockup.navItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="relative h-64">
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="font-serif text-sm tracking-wide text-white">{mockup.headline}</p>
            {mockup.tagline && (
              <p className="mt-1 line-clamp-3 text-[11px] leading-relaxed text-white/85">
                {mockup.tagline}
              </p>
            )}
            <span
              className={`mt-2 inline-block rounded px-3 py-1.5 text-[11px] font-medium ${ctaClass}`}
            >
              {mockup.cta}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
