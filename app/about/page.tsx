"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type TeamMember = {
  name: string;
  img: string;
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
    img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=600&q=80",
    bio: "Simbiat Lola is the founder and CEO of Cyntonisca Nig Ltd, established in 2023. As both a lawyer and legal technologist, she is focused on using technology to improve how legal services work in Nigeria and to expand access to justice.",
  },
  {
    name: "Jonah Emmanuel, Snr Frontend Developer",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    bio: "As a Frontend Developer, I've had the opportunity to build and scale user-facing applications with a strong focus on performance, accessibility, and seamless user experiences. I specialize in technologies like React, TypeScript, Tailwind CSS.",
  },
  {
    name: "Adams Muhammed, Backend Developer",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    bio: "I'm a passionate software engineer with experience specializing in backend development. I love working extensively with Node.js, Postgres, and building resilient APIs that scale.",
  },
  {
    name: "Chioma Eze, Product Designer",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Chioma leads product design at Cyntonisca, shaping how legal professionals experience our tools. She believes good design should feel invisible and just work.",
  },
  {
    name: "Tunde Bakare, Legal Ops Lead",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "Tunde bridges the gap between legal practice and product, ensuring every feature we ship actually solves a real problem lawyers face day to day.",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[#F1F1F1] text-black">
      {/* Who We Are */}
      <section className="mx-auto max-w-[90%] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative h-[420px] w-full max-w-[420px]">
            <div className="absolute left-0 top-6 h-[240px] w-[190px] border-l-4 border-[#9B511F] bg-white p-1">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
                alt="Team members"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute left-[140px] top-0 h-[280px] w-[190px] bg-white p-1 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
                alt="Team member"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute left-[280px] top-16 h-[240px] w-[190px] border-l-4 border-[#9B511F] bg-white p-1">
              <img
                src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=400&q=80"
                alt="Team members"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-black">Who we are</p>
            <h2 className="mt-3 font-serif text-3xl leading-snug text-black md:text-4xl">
              Cyntonisca fuels innovation
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-black">
              At Cyntonisca, we are not building for ourselves, we are
              building for you. That&apos;s why we are building one firm at a
              time. Our intention is to build according to what suits you and
              not the other way round.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-black">
              At Cyntonisca, we are well aware of our root as Africans,
              specifically, Nigerians. We understand that what works in the
              North does not always apply in the South. Our focus is on
              building custom-made applications tailored to the Nigerian
              Legal System.
            </p>
            <button className="mt-6 rounded-md bg-[#9B511F] px-6 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-[#7A3F17]">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Our Vision */}
        <div className="mx-auto mt-16 max-w-3xl rounded-[16px] bg-white px-10 py-14 text-center shadow-sm">
          <p className="text-sm font-medium text-black">Our Vision</p>
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

      {/* Meet the Team */}
      <section className="mx-auto max-w-[90%] px-6 pb-20 md:px-10">
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
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-[560px] w-full object-cover opacity-90"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                  <p className="line-clamp-3 text-sm text-white/90">
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

      {/* Testimonials */}
      <section className="mx-auto max-w-[90%] px-6 pb-24 md:px-10">
        <div className="text-center">
          <p className="text-sm font-medium text-black">What our Clients say</p>
          <h2 className="mt-3 font-serif text-3xl text-black md:text-4xl">
            Don&apos;t Take Our Words for it
          </h2>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          {testimonials.map((t, i) => {
            const isActive = i === testimonialIndex;
            return (
              <button
                key={t.name}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                  isActive
                    ? "h-40 w-40 border-[#9B511F]"
                    : "h-24 w-24 border-transparent"
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
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 sm:px-20 md:px-32 lg:px-48 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              data-testimonial
              className="flex w-full shrink-0 snap-center overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="flex w-[220px] shrink-0 flex-col justify-center gap-1 p-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <p className="mt-2 font-serif text-lg text-black">{t.name}</p>
                <p className="text-sm text-[#616161]">{t.role}</p>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-4 bg-[#F1F0F5] p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={18}
                      className={
                        s < t.rating
                          ? "fill-[#F2B237] text-[#F2B237]"
                          : "fill-gray-200 text-gray-200"
                      }
                    />
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-black">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => goTestimonial(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-black shadow-sm transition-colors hover:bg-gray-50"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => goTestimonial(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-md bg-[#9B511F] text-white transition-colors hover:bg-[#7A3F17]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}