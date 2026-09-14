import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Image from "next/image";
import message from "../../public/images/mesage.png"
import careers from "../../public/images/careers.jpg"

export const metadata: Metadata = {
  title: "Careers | Cyntonisca",
};

export default function CareersPage() {
  return (
    <main>
      <section className="relative flex flex-col items-center justify-center min-h-[400px] w-full overflow-hidden">
        <Image
          src={careers}
          alt="Projects"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[rgba(28,20,14,0.55)]"></div>
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 text-center text-white">
          <p className="mb-3 text-base text-white/90">Careers</p>
          <h1 className="mb-5 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Get To Work With Us
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/85">
            We build tools that make legal work more efficient, accessible,
            and reliable. Join a team committed to doing meaningful work, the
            right way.
          </p>
        </div>
      </section>

      <section className="bg-[#F1F1F1] py-28">
        <div className="mx-auto flex max-w-md flex-col items-center px-6 text-center text-[#000000]">
          <div className="flex h-[208px] w-[291px] items-center justify-center rounded-full bg-peach">
            <Image alt="message" src={message} />
          </div>
          <h2 className="mt-8 font-serif text-2xl">
            No Vacancy for now
          </h2>
          <p className="mt-2 text-[16px]">
            We will update you with future openings.
          </p>
        </div>
      </section>
    </main>
  );
}
