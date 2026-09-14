import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/project";
import ProjectMockupCard from "../components/ProjectMockupCard";
import project from "../../public/images/project.jpg"
import Image from "next/image";

export const metadata: Metadata = {
    title: "Projects | Cyntonisca",
};

export default function ProjectsPage() {
    return (
        <div>
            <section className="relative flex flex-col items-center justify-center min-h-[400px] w-full overflow-hidden">
                <Image
                    src={project}
                    alt="Projects"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[rgba(28,20,14,0.55)]"></div>

                <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 text-center text-white">
                    <p className="mb-3 text-[24px] text-white/90">
                        Projects
                    </p>

                    <h1 className="mb-5 font-serif text-4xl leading-tight sm:text-5xl md:text-[44px]">
                        What We Have Done
                    </h1>

                    <p className="mx-auto max-w-xl text-[16px] leading-relaxed text-[#FAFAFA]">
                        Our work spans product design, legal technology, and the systems
                        that support modern businesses.
                    </p>
                </div>
            </section>
            <section className=" py-20 md:px-10 bg-[#F1F1F1]">
                <div className="flex flex-col gap-24">
                    {projects.map((project, i) => (
                        <article
                            key={project.slug}
                            className={`grid items-center gap-14 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                                }`}
                        >
                            <div>
                                <p className="text-sm font-medium tracking-wide text-black">By Cyntonisca</p>
                                <h2 className="mt-3 font-serif text-3xl text-black md:text-4xl">
                                    {project.name}
                                </h2>
                                <p className="mt-4 text-[15px] leading-relaxed text-black">
                                    {project.summary}
                                </p>
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#9B511F] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-accent-dark"
                                >
                                    See Project <ArrowRight size={16} />
                                </Link>
                            </div>

                            {/* <Link href={`/projects/${project.slug}`} className="block">
                  <ProjectMockupCard mockup={project.mockup} />
                </Link> */}
                        </article>
                    ))}
                </div>
            </section>
        </div>

    );
}
