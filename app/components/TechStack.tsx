import { SiFigma, SiGithub, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { Code2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const tools = [
  { icon: SiFigma, label: "Figma" },
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiGithub, label: "GitHub" },
];

export default function TechStack() {
  return (
    <section className="border-t border-[#0c2133]/12 bg-[#dce8ef] px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1440px]">
        <ScrollReveal className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <SectionLabel>Technology</SectionLabel>
            <h2 className="mt-6 max-w-[11ch] text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Modern tools, selected for the work.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#536675]">Our technology choices support performance, accessibility, maintainability, and long-term growth.</p>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-[#0c2133]/15 sm:grid-cols-3">
            {tools.map(({ icon: Icon, label }) => (
              <div key={label} className="group flex min-h-32 flex-col justify-between border-b border-r border-[#0c2133]/15 p-5 transition-colors hover:bg-white/35">
                <Icon className="h-6 w-6 text-[#6D3514] transition-transform duration-300 group-hover:-translate-y-1" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#405464]">{label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <div className="mt-10 flex items-center gap-3 text-xs text-[#536675]"><Code2 className="h-4 w-4" /> Strategy and technology remain guided by the problem—not the trend.</div>
      </div>
    </section>
  );
}
