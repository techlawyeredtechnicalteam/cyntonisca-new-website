import { ArrowRight } from "lucide-react";
// import ProjectMockupCard from "./ProjectMockupCard";
import type { Project } from "../data/project";
import Link from "next/link";

export default function ProjectIntro({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-[95%] px-6 py-10 md:px-10">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <p className="text-[16px] font-medium text-black">By Cyntonisca</p>
          <h1 className="mt-3 font-serif text-[36px] text-black md:text-5xl">{project.name}</h1>
          <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-black">
            {project.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link
            href="#"
            className="mt-8 inline-flex items-center gap-2 border border-[#E65100] bg-[#9B511F] rounded-md bg-accent px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-accent-dark"
          >
            See Project <ArrowRight size={16} />
          </Link>
        </div>

        {/* <ProjectMockupCard mockup={project.mockup} /> */}
      </div>
    </section>
  );
}
