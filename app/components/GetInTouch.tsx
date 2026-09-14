import React from "react";
import { ArrowRight } from "lucide-react";
import touch from "../../public/images/touch.jpg"
import Image from "next/image";
import Link from "next/link";

export default function GetInTouch() {
    return (
        <section className="relative flex min-h-[515px] items-center justify-center overflow-hidden px-6 py-24 text-center">
            <Image
                src={touch}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[rgba(46,30,20,0.72)]" />

            <div className="relative z-10 max-w-2xl">
                <p className="mb-4 text-lg font-medium text-[#E8DDD0]">
                    Get In Touch
                </p>

                <h2
                    className="mb-7 font-bold leading-tight text-[#FDFBF8]"
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                    }}
                >
                    Let's Talk Projects
                </h2>

                <p className="mb-10 text-[24px] leading-relaxed text-[#EDE4D9]">
                    Thinking about a new project or need some guidance?
                </p>

                <Link href={"/contact"}
                    className="group inline-flex items-center gap-2.5 rounded bg-[#9B511F] px-8 py-2 text-base font-medium text-white transition-colors duration-200 hover:bg-[#9C5217]"
                >
                    Get In Touch
                    <ArrowRight
                        size={18}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                </Link>
            </div>
        </section>
    );
}