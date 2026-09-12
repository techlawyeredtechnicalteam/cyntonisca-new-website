import type { Metadata } from "next";
import { Mail } from "lucide-react";
import message from "../../public/images/mesage.png"
import Image from "next/image";

export const metadata: Metadata = {
  title: "Careers | Cyntonisca",
};

export default function CareersPage() {
  return (
    <>
      <main>
        <section
          className="relative flex min-h-[400px] w-full items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(28,20,14,0.55), rgba(28,20,14,0.55)), url('https://images.unsplash.com/photo-1740208376134-67da8e85ccf3?auto=format&fit=crop&w=1800&q=80')",
          }}
        >
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
    </>
  );
}
