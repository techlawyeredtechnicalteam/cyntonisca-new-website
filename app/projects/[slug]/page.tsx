import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../data/project";
import ProjectIntro from "@/app/components/ProjectIntro";
import ProcessSteps from "@/app/components/ProcessSteps";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    return { title: project ? `${project.name} | Cyntonisca` : "Project | Cyntonisca" };
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    return (
        <>
            <main className="bg-white">
                <section
                    className="relative flex min-h-[400px] w-full items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(28,20,14,0.55), rgba(28,20,14,0.55)), url('https://images.unsplash.com/photo-1740208376134-67da8e85ccf3?auto=format&fit=crop&w=1800&q=80')",
                    }}
                >
                    <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 text-center text-white">
                        <p className="mb-3 text-base text-white/90">Projects</p>
                        <h1 className="mb-5 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                            What We Have Done
                        </h1>
                        <p className="mx-auto max-w-xl text-base leading-relaxed text-white/85">
                            Our work spans product design, legal technology, and the systems that support modern businesses.
                        </p>
                    </div>
                </section>
                <ProjectIntro project={project} />
                <ProcessSteps steps={project.process} />
            </main>
        </>
    );
}
