import Image from "next/image";
import { Code2, Smartphone, Scale, Mail, ArrowRight } from "lucide-react";

export default function Whatwedo() {
  return (
    <div>
      <section className="bg-[#F2F1EF] px-6 py-24">
        <div className="max-w-[95%] mx-auto">
          <div className="text-center mb-10">
            <p className="text-black text-[24px] mb-3">What we do</p>
            <h2
              className="text-black font-normal text-[44px]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
              }}
            >
              Product-led Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-[16px] border-b-4 border-[#B5651D] shadow-sm p-8 flex flex-col"
              >
                <div className="w-14 h-14 rounded-lg bg-[#F3D8BE] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#8A4A17]" />
                </div>

                <h3 className="text-[32px] font-bold text-black mb-3">
                  {title}
                </h3>

                <p className="text-black text-[20px] leading-relaxed mb-8">
                  {description}
                </p>

                <button className="mt-auto inline-flex items-center justify-center gap-2 bg-[#9B511F] hover:bg-[#9C5217] text-white font-medium px-6 py-3 rounded transition-colors duration-200 group">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: Scale,
    title: "Web Development",
    description:
      "We create websites that are not just visually appealing but also fast, user-friendly, and built to grow with your business.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Whether it's an iOS or Android app, we build smooth, easy-to-use mobile experiences that connect you with your audience.",
  },
  {
    icon: Scale,
    title: "Legal Solutions",
    description:
      "We help businesses navigate the legal side of things, contracts, and digital regulations, so you can focus on what you do best.",
  },
  {
    icon: Mail,
    title: "Domain & Email Management",
    description:
      "We help businesses navigate the legal side of things, contracts, and digital regulations, so you can focus on what you do best.",
  },
];