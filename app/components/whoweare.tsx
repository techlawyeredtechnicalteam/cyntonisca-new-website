import React from 'react'
import innovation from "../../public/images/innovation.png"
import Image from 'next/image'

export default function Whoweare() {
    return (
        <section className="bg-[#F2F1EF] px-6 py-24">
            <div className="max-w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <Image src={innovation} alt='who we are' />
                </div>
                <div>
                    <p className="text-black text-lg mb-4">Who we are</p>

                    <h2
                        className="text-black font-normal leading-tight mb-8"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                        }}
                    >
                        Cyntonisca fuels innovation
                    </h2>

                    <p className="text-black text-lg leading-relaxed mb-10 max-w-xl">
                        We are your strategic partner for software development,
                        delivering cutting-edge solutions that drive business growth.
                        Our expert DevOps services optimize your technology stack for
                        peak performance.
                    </p>

                    <button className="inline-flex items-center bg-[#9B511F] border border-[#E65100] hover:bg-[#9C5217] text-white text-[16px] font-medium px-8 py-2 rounded transition-colors duration-200">
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    )
}

