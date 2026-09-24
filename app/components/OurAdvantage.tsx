'use client'

import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Scale,
  Globe2,
  Handshake,
  MonitorSmartphone,
  LucideIcon,
} from "lucide-react";
import advantage from "../../public/images/advantage.png";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface OurAdvantageProps {
  image?: StaticImageData;
}

const leftFeatures: Feature[] = [
  {
    icon: Scale,
    title: "Legal Industry Focus",
    description:
      "We specialize exclusively in legal tech, combining deep industry understanding with modern engineering to deliver practical, reliable solutions.",
  },
  {
    icon: Handshake,
    title: "Deep Legal Understanding",
    description:
      "We respect client confidentiality and ethics, treating sensitive legal data with the highest standards of security and responsibility.",
  },
];

const rightFeatures: Feature[] = [
  {
    icon: Globe2,
    title: "Local Meets Global",
    description:
      "We blend Nigerian legal requirements with global best practices to build secure, compliant, and future-ready legal solutions.",
  },
  {
    icon: MonitorSmartphone,
    title: "Tradition Powered Digitally",
    description:
      "Innovation that complements legal values, balancing technological progress with discretion, compliance, and reliability.",
  },
];

function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className="bg-[#FFEEE4] rounded-[16px] p-8 h-full">
      <div className="w-12 h-12 rounded-lg bg-[#F6D2BA] flex items-center justify-center mb-6">
        <Icon className="w-5 h-5 text-[#8A4A17]" />
      </div>
      <h3 className="text-[20px] lg:text-[28px] font-bold text-black mb-3">{title}</h3>
      <p className="text-black leading-relaxed text-[16px]">{description}</p>
    </div>
  );
}

export default function OurAdvantage({ image = advantage }: OurAdvantageProps) {
  return (
    <section className="bg-[#F2F1EF] px-6 py-24">
      <div className="max-w-[90%] mx-auto">
        <div className="text-center mb-16">
          <p className="text-black text-lg mb-3">What sets us apart</p>
          <h2
            className="text-black font-normal"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
            }}
          >
            Our Unique Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1fr] gap-8 items-stretch">
          <div className="flex flex-col gap-8">
            {leftFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          <div className="relative">
            <div className="absolute -bottom-3 -left-2 right-3 top-3 rounded-md" />
            <div className="relative w-full h-full min-h-[500px] rounded-md overflow-hidden">
              <Image
                src={image}
                alt="Our team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {rightFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}