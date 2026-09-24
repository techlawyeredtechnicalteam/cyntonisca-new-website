"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import about from "../../public/images/about.jpg"
import ceo from "../../public/images/ceo.jpg"
import frontend from "../../public/images/frontend.jpeg"
import innovation from "../../public/images/innovation.png"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type TeamMember = {
  name: string;
  img: StaticImageData;
  bio: string;
};

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
};

const team: TeamMember[] = [
  {
    name: "Simbiat Lola, Founder & CEO",
    img: ceo,
    bio: "Simbiat A. Lola Founder & CEO, Cyntonisca Ltd | Lawyer | Legal Technologist | Systems Architect Simbiat A. Lola is a lawyer, legal technologist and systems architect, and the Founder & CEO of Cyntonisca Ltd, a legal technology company focused on bridging the gap between law and technology through innovative digital solutions.With a background spanning law, software engineering, legal technology and digital systems, Simbiat works at the intersection of legal practice and emerging technology. Her work focuses on developing technology-driven solutions that improve how legal professionals work, collaborate, manage information and deliver services. She is particularly passionate about the role of technology in transforming Africa’s legal ecosystem and building digital infrastructure that is accessible, secure and fit for the future.Through Cyntonisca, she has led initiatives supporting law firms, lawyers and legal organisations with digital tools, websites, legal technology solutions and professional development. Simbiat is also actively involved in research and conversations around artificial intelligence, AI governance, digital transformation, algorithmic justice and the future of the legal profession.She is committed to ensuring that Africa is not merely a consumer of emerging technologies but an active participant in shaping the systems, policies and infrastructure that will define the digital future. Beyond Cyntonisca, she contributes to professional and community initiatives within the legal sector and is passionate about empowering young lawyers with the knowledge and tools needed to thrive in an increasingly technology- driven world. Her work is driven by a simple vision: to bridge law, technology and innovation to create a smarter, more connected and future - ready legal ecosystem.",
  },
  {
    name: "Emmanuel Oyeyipo, Frontend Developer",
    img: frontend,
    bio: "Emmanuel is a Frontend Engineer dedicated to turning complex ideas into seamless, high-performance digital experiences. With over 3 years of experience, I specialize in building scalable web applications using React, Next.js, and TypeScript. His approach combines clean, maintainable code with a sharp eye for UI/UX. Whether it's an AI-integrated tool or a high-traffic e-commerce platform to architecting intricate admin dashboards, I focus on optimizing for speed, accessibility, and an intuitive user journey. He does not just build interfaces; he build solutions that challenge the status quo.",
  },
  {
    name: "Adams Muhammed, Backend Developer",
    img: frontend,
    bio: "I'm a passionate software engineer with experience specializing in backend development. I love working extensively with Node.js, Postgres, and building resilient APIs that scale.",
  },
  {
    name: "Chioma Eze, Product Designer",
    img: frontend,
    bio: "Chioma leads product design at Cyntonisca, shaping how legal professionals experience our tools. She believes good design should feel invisible and just work.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Sandra Ayomikun",
    role: "Lead Coach",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote:
      "We needed a secure virtual court solution, and Cyntonisca delivered beyond expectations. Smooth, intuitive, and reliable.",
  },
  {
    name: "Tunde Akinwale",
    role: "LegalTech Consultant",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 4,
    quote:
      "Thanks to Cyntonisca, our processes are now digitized and easier for the public to access.",
  },
  {
    name: "Ifeoma Okoro",
    role: "Managing Partner",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote:
      "Their team understood our workflow from day one. The final product felt tailor-made for a Nigerian law firm.",
  },
  {
    name: "Bayo Adekunle",
    role: "Compliance Officer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote:
      "Rollout was fast and support was responsive whenever we hit a snag. Exactly what we needed.",
  },
  {
    name: "Ngozi Umeh",
    role: "Operations Director",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    rating: 4,
    quote:
      "Cyntonisca made our transition to digital filing painless. Our clients notice the difference too.",
  },
  {
    name: "Emeka Chukwu",
    role: "Founder, Chukwu & Co",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote:
      "A genuinely reliable partner. They think like lawyers, not just developers, and it shows in the product.",
  },
  {
    name: "Amaka Nwosu",
    role: "Litigation Associate",
    avatar:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote:
      "Everything from onboarding to daily use has been smooth. It's rare to find legal tech this well thought out.",
  },
];

export default function AboutSections() {
  const teamRef = useRef<HTMLDivElement>(null);
  const testimonialTrackRef = useRef<HTMLDivElement>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(3);

  const scrollTeam = (dir: 1 | -1) => {
    const el = teamRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("[data-card]");
    const gap = 24;
    const width = card ? card.offsetWidth + gap : 320;
    el.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  const scrollToTestimonial = (index: number, behavior: ScrollBehavior) => {
    const el = testimonialTrackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLDivElement>("[data-testimonial]");
    cards[index]?.scrollIntoView({ behavior, inline: "center", block: "nearest" });
  };

  const setActiveTestimonial = (index: number) => {
    setTestimonialIndex(index);
    scrollToTestimonial(index, "smooth");
  };

  const goTestimonial = (dir: 1 | -1) => {
    setActiveTestimonial(
      (testimonialIndex + dir + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    scrollToTestimonial(testimonialIndex, "auto");
  }, []);

  return (
    <div className="bg-[#F1F1F1] text-black">
      <section className="relative flex flex-col items-center justify-center min-h-[400px] w-full overflow-hidden">
        <Image
          src={about}
          alt="about"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[rgba(28,20,14,0.55)]"></div>
        <div className="relative z-10 mx-auto max-w-[50%] px-6 py-12 text-center text-white">
          <p className="mb-3 text-base text-white/90">About us</p>
          <h1 className="mb-5 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Bridging Law and Tech
          </h1>
          <p className="text-base leading-relaxed text-white/85">
            Founded by legal technology enthusiasts, we understand the unique challenges law firms face in today's digital age. Our mission is to revolutionize the legal industry in Nigeria with tailored tech solutions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[95%] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Image src={innovation} alt="innovation" />
          </div>

          <div>
            <p className="text-[20px] font-medium text-black">Who we are</p>
            <h2 className="mt-3 font-serif text-3xl leading-snug text-black md:text-[44px]">
              Cyntonisca fuels innovation
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-black">
              At Cyntonisca, we are not building for ourselves, we are
              building for you. That&apos;s why we are building one firm at a
              time. Our intention is to build according to what suits you and
              not the other way round.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-black">
              At Cyntonisca, we are well aware of our root as Africans,
              specifically, Nigerians. We understand that what works in the
              North does not always apply in the South. Our focus is on
              building custom-made applications tailored to the Nigerian
              Legal System.
            </p>
            <Link href={"/contact"}>
              <button className="mt-6 rounded-md bg-[#9B511F] cursor-pointer px-6 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-[#7A3F17]">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Our Vision */}
        <div className="mx-auto mt-16 max-w-3xl rounded-[10px] bg-white px-10 py-14 text-center shadow-md">
          <p className="text-md font-medium text-black">Our Vision</p>
          <h3 className="mt-3 font-serif text-3xl text-black md:text-4xl">
            Advancing Legal Practice
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#616161]">
            To be Nigeria&apos;s leading legal technology solutions provider,
            empowering law firms to thrive in the digital era while
            maintaining professional excellence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[95%] px-6 pb-20 md:px-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-black">Meet the Team</p>
            <h2 className="mt-3 font-serif text-3xl text-black md:text-4xl">
              Our Powerhouse
            </h2>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={() => scrollTeam(-1)}
              aria-label="Previous team member"
              className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-black shadow-sm transition-colors hover:bg-gray-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollTeam(1)}
              aria-label="Next team member"
              className="flex h-11 w-11 items-center justify-center rounded-md bg-[#9B511F] text-white transition-colors hover:bg-[#7A3F17]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={teamRef}
          className="mt-10 flex snap-x snap-mandatory gap-9 overflow-x-auto scroll-smooth pb-3 pl-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {team.map((member) => (
            <div
              key={member.name}
              data-card
              className="relative w-[calc(33.333%-24px)] min-w-[340px] shrink-0 snap-start"
            >
              <div className="absolute -bottom-2.5 -left-2.5 h-full w-full bg-[#9B511F]" />
              <div className="relative overflow-hidden bg-black">
                <Image
                  src={member.img}
                  alt={member.name}
                  className="h-[560px] w-full object-cover opacity-90"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                  <p className="line-clamp-8 text-sm text-white/90">
                    {member.bio}
                    <span className="cursor-pointer text-white"> ...see more</span>
                  </p>
                  <p className="mt-3 text-[15px] font-medium text-white">
                    {member.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-20 sm:px-6 md:px-10 md:pb-24">
        <div className="text-center">
          <p className="text-sm font-medium text-black">What our Clients say</p>

          <h2 className="mt-3 font-serif text-2xl text-black sm:text-3xl md:text-4xl">
            Don&apos;t Take Our Words for it
          </h2>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 overflow-hidden px-2 sm:mt-10 sm:gap-4">
          {testimonials.map((t, i) => {
            const isActive = i === testimonialIndex;

            return (
              <button
                key={t.name}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ${isActive
                    ? "h-20 w-20 border-[#9B511F] sm:h-28 sm:w-28 md:h-40 md:w-40"
                    : "h-14 w-14 border-transparent sm:h-20 sm:w-20 md:h-24 md:w-24"
                  }`}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>

        <div
          ref={testimonialTrackRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-4 sm:mt-10 sm:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              data-testimonial
              className="flex w-full min-w-0 shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white md:flex-row"
            >
              <div className="flex w-full shrink-0 flex-row items-center gap-4 p-5 sm:p-6 md:w-[220px] md:flex-col md:items-start md:justify-center md:gap-1">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14 md:h-12 md:w-12"
                />

                <div>
                  <p className="font-serif text-base text-black sm:text-lg">
                    {t.name}
                  </p>

                  <p className="text-sm text-[#616161]">
                    {t.role}
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center gap-4 bg-[#F1F0F5] p-5 sm:p-6 md:p-8">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={18}
                      className={
                        s < t.rating
                          ? "fill-[#F2B237] text-[#F2B237]"
                          : "fill-gray-200 text-black"
                      }
                    />
                  ))}
                </div>

                <p className="text-sm leading-7 text-black sm:text-[15px]">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-3 sm:mt-8">
          <button
            onClick={() => goTestimonial(-1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-black shadow-sm transition-colors hover:bg-gray-50 sm:h-11 sm:w-11"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => goTestimonial(1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-[#9B511F] text-white transition-colors hover:bg-[#7A3F17] sm:h-11 sm:w-11"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}