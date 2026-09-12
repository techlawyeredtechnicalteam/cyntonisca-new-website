import type { Metadata } from "next";
import { Mail, Phone, MessageCircle } from "lucide-react";
import hero from "../../public/images/contact-hero.jpg";
import Image from "next/image";
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us | Cyntonisca",
};

const cards = [
  {
    icon: Mail,
    title: "Email us",
    subtitle: "We are here to help",
    content: (
      <p className="mt-5 text-[15px] text-black">info@cyntonisca.com</p>
    ),
  },
  {
    icon: Phone,
    title: "Call",
    subtitle: "Mon - Fri from 8am - 5pm",
    content: (
      <div className="mt-5 flex flex-wrap items-center gap-3 text-[15px] text-black">
        <span>+234 916 150 6866</span>
        <span className="hidden h-4 w-px bg-gray-300 md:inline-block" />
        <span>+234 704 307 2166</span>
      </div>
    ),
  },
  {
    icon: MessageCircle,
    title: "Chat on Whatsapp",
    subtitle: "We are here to help",
    content: (
      <Link
        href="https://wa.me/2349161506866"
        className="mt-5 inline-block w-full text-center bg-[#9B511F] px-6 py-2.5 text-[16px] font-medium text-white transition-colors hover:bg-[#7A3F17]"
      >
        Start Chat
      </Link>
    ),
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="relative min-h-[400px] w-full overflow-hidden">
        <Image
          src={hero}
          alt="Contact"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[rgba(28,20,14,0.55)]" />

        <div className="relative z-10 flex min-h-[400px] items-center justify-center">
          <div className="mx-auto max-w-2xl px-6 py-12 text-center text-white">
            <p className="mb-3 text-base text-white/90">Contact Us</p>

            <h1 className="mb-5 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Let&apos;s Build Together
            </h1>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-white/85">
              Speak with experts who understand your needs and deliver
              results.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F1F1] py-20">
        <div className="mx-auto max-w-[90%] px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium tracking-wide text-black">
                Get In Touch
              </p>
              <h2 className="mt-3 font-serif text-3xl text-black md:text-4xl">
                Reach Us
              </h2>
            </div>
            <p className="self-center md:text-[20px] leading-relaxed text-black">
              Have a question or a project in mind? Reach out to our team for
              expert software development and reliable legal solutions.
              We&apos;re here to guide you every step of the way.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cards.map(({ icon: Icon, title, subtitle, content }) => (
              <div
                key={title}
                className="rounded-[16px] bg-white p-8 text-black shadow-sm"
              >
                <Icon
                  className="h-[31px] w-[36px] text-[#9B511F]"
                  strokeWidth={1.75}
                />
                <h3 className="mt-4 font-serif text-[28px] text-black">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-[#616161]">{subtitle}</p>
                {content}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}