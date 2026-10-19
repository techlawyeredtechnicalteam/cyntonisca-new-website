import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionLabel from "../components/SectionLabel";
import hero from "../../public/images/contact-hero.jpg";

export const metadata: Metadata = {
  title: "Contact | Cyntonisca",
  description: "Contact Cyntonisca to discuss a legal technology, digital product, legal support, or infrastructure project.",
};

const contactMethods = [
  { icon: Mail, label: "Email", title: "Start with an email", detail: "info@cyntonisca.com", href: "mailto:info@cyntonisca.com" },
  { icon: Phone, label: "Phone", title: "Speak with our team", detail: "+234 916 150 6866", href: "tel:+2349161506866" },
  { icon: MessageCircle, label: "WhatsApp", title: "Send us a message", detail: "+234 916 150 6866", href: "https://wa.me/2349161506866" },
];

const conversationTopics = ["A new website or digital platform", "A mobile product", "Legal and compliance support", "Domain or business email management"];

export default function ContactPage() {
  return (
    <div className="overflow-hidden bg-[#f4f3ef] font-sans text-[#0c2133]">
      <section className="grid min-h-[680px] bg-[#dce8ef] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col justify-between px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-20">
          <SectionLabel>Contact</SectionLabel>
          <div className="my-20">
            <h1 className="max-w-[10ch] text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl xl:text-[84px]">Let’s turn your next challenge into progress.</h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#405464] sm:text-lg">Tell us what you are building, improving, or trying to understand. We will listen carefully and help define a practical next step.</p>
          </div>
          <a href="mailto:info@cyntonisca.com" className="group inline-flex w-fit items-center gap-3 border-b border-[#0c2133] pb-1 text-sm font-semibold">info@cyntonisca.com <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
        </div>
        <div className="relative min-h-[500px] lg:min-h-full">
          <Image src={hero} alt="A professional working at a computer" fill priority placeholder="blur" sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#0b426c]/25" />
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 bg-[#0c2133]/85 text-white backdrop-blur-sm">
            <div className="border-r border-white/15 p-6"><Clock3 className="h-5 w-5 text-[#a9c8dc]" /><p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-white/40">Availability</p><p className="mt-2 text-sm">Monday–Friday, 8am–5pm</p></div>
            <div className="p-6"><MapPin className="h-5 w-5 text-[#a9c8dc]" /><p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-white/40">Based in</p><p className="mt-2 text-sm">Nigeria · Working globally</p></div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div><SectionLabel>Get in touch</SectionLabel><h2 className="mt-7 max-w-[10ch] text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">Choose the channel that works for you.</h2></div>
            <p className="max-w-lg text-base leading-8 text-[#536675] lg:justify-self-end">For the fastest start, share a short description of the challenge, your preferred timeline, and any useful background.</p>
          </ScrollReveal>
          <div className="mt-16 grid border-l border-t border-[#0c2133]/15 lg:grid-cols-3">
            {contactMethods.map(({ icon: Icon, label, title, detail, href }, index) => (
              <ScrollReveal key={label} delay={index * 80} className="group min-h-[330px] border-b border-r border-[#0c2133]/15 p-8 sm:p-10">
                <div className="flex items-center justify-between"><Icon className="h-7 w-7 text-[#315c7c]" strokeWidth={1.4} /><span className="text-[10px] text-[#536675]">0{index + 1}</span></div>
                <p className="mt-20 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#536675]">{label}</p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em]">{title}</h3>
                <a href={href} className="mt-7 inline-flex items-center gap-3 border-b border-[#0c2133]/30 pb-1 text-sm font-semibold transition-colors hover:border-[#0c2133]">{detail}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0c2133] px-6 py-24 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36 xl:px-20">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <ScrollReveal><SectionLabel light>Before we talk</SectionLabel><h2 className="mt-7 max-w-[11ch] text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">A useful first conversation starts with context.</h2></ScrollReveal>
          <ScrollReveal delay={100} className="lg:pt-12">
            <p className="text-base leading-8 text-white/58">You do not need a complete brief. A clear view of the problem is enough for us to begin.</p>
            <div className="mt-9 divide-y divide-white/15 border-y border-white/15">
              {conversationTopics.map((topic, index) => <div key={topic} className="flex items-center gap-5 py-5"><span className="text-[10px] text-white/35">0{index + 1}</span><p className="text-sm font-medium">{topic}</p></div>)}
            </div>
            <a href="mailto:info@cyntonisca.com?subject=Project%20enquiry" className="group mt-9 inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-[#0c2133]">Start the conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
