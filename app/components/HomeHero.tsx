import React from 'react'
import hero from "../../public/images/hero.jpg"
import Image from 'next/image'

export const HomeHero = () => {
    return (
        <section className="relative flex min-h-[800px] w-full items-center overflow-hidden px-20">
            <Image
                src={hero}
                alt="Law and technology"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[rgba(28,20,14,0.55)]"></div>

            <div className="relative z-10 max-w-[55%] py-12 text-white">
                <p className="mb-3 text-[64px] font-serif leading-tight text-white/90">
                    Bridging the Gap Between Law & Technology
                </p>

                <h1 className="mb-5 text-[16px] leading-relaxed sm:text-lg">
                    Building innovative software solutions for the modern legal industry
                    by rethinking how legal work is managed, understood, and delivered in
                    a digital-first world.
                </h1>

                <button className="mt-5 rounded bg-[#9B511F] border border-[#E65100] px-12 py-2 text-[16px] text-white transition hover:bg-[#9C5217]">
                    Get In Touch
                </button>
            </div>
        </section>
    )
}
