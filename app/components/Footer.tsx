import Link from "next/link";
import logo2 from "../../public/images/logo2.png"
import Image from "next/image";

const quickLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#9B511F] text-white">
      <div className="mx-auto max-w-[90%] px-6 py-16 text-center">
         <div className="flex justify-center">
          <Link href={"/"} className="shrink-0" aria-label="Cyntonisca home">
            <Image src={logo2} alt="logo" className="w-[56px] h-[56px]" />
          </Link>
         </div>

        <p className="mt-8 text-[20px] font-medium text-[#FAFAFA]">
          QUICK LINKS
        </p>

        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[15px] text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-8 h-px w-full bg-white/20" />

        <p className="mt-6 text-sm text-[#BDBDBD]">
          © Cyntonisca, {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}