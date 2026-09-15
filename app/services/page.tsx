import type { Metadata } from "next";
import ServicesExplorer from "../components/ServicesExplorer";
import Image from "next/image";
import project from "../../public/images/project.jpg";

export const metadata: Metadata = {
  title: "Services | Cyntonisca",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <section className="relative flex flex-col items-center justify-center min-h-[400px] w-full overflow-hidden">
          <Image
            src={project}
            alt="Projects"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[rgba(28,20,14,0.55)]"></div>

          <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 text-center text-white">
            <p className="mb-3 text-[24px] text-white/90">Services</p>

            <h1 className="mb-5 font-serif text-4xl leading-tight sm:text-5xl md:text-[44px]">
              What We Do Best
            </h1>

            <p className="text-[16px] leading-relaxed text-[#FAFAFA]">
              Designing and developing web and mobile products, managing domains
              and email, and delivering legal solutions that keep businesses
              running smoothly.
            </p>
          </div>
        </section>
        <div className="bg-[#F1F1F1]">
          <ServicesExplorer />
        </div>
      </main>
    </>
  );
}
