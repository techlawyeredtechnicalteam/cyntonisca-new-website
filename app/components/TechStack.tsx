import React from "react";
import {
    SiTailwindcss,
    SiFigma,
    SiGithub,
    SiNodedotjs,
    SiReact,
    SiMongodb,
} from "react-icons/si";

const tools = [
    { icon: SiTailwindcss, color: "#38BDF8" },
    { icon: SiFigma, color: "#000000" },
    { icon: SiGithub, color: "#181717" },
    { icon: SiNodedotjs, color: "#5FA04E" },
    { icon: SiReact, color: "#61DAFB" },
    { icon: SiMongodb, color: "#00684A" },
];

export default function TechStack() {
    return (
        <section className="bg-[#F2F1EF] px-6 py-10 border-t border-gray-200">
            <div className="max-w-[95%] mx-auto text-center">
                <p className="text-black text-[24px] mb-3">Our Technology Stack</p>

                <h2
                    className="text-black font-normal mb-16"
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    }}
                >
                    Carefully Selected Tools
                </h2>

                <div className="flex justify-between">
                    {tools.map(({ icon: Icon, color }, i) => (
                        <Icon key={i} size={40} style={{ color }} />
                    ))}
                </div>
            </div>
        </section>
    );
}