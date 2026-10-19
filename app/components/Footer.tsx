import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.webp";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/web-development", label: "Web development" },
  { href: "/services/mobile-development", label: "Mobile development" },
  { href: "/services/legal-solutions", label: "Legal solutions" },
  { href: "/services/domain-email-management", label: "Digital infrastructure" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071521] px-6 py-14 font-sans text-white sm:px-10 lg:px-16 lg:py-20 xl:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" aria-label="Cyntonisca home" className="inline-block">
              <Image src={logo} alt="Cyntonisca" className="h-[72px] w-[175px] object-cover object-center brightness-0 invert" sizes="175px" />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/48">
              Bridging law, technology, and innovation to create a smarter, more connected, and future-ready legal ecosystem.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">Company</p>
            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-white/68 transition-colors hover:text-white">{link.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">Services</p>
            <ul className="mt-6 space-y-4">
              {serviceLinks.map((service) => <li key={service.href}><Link href={service.href} className="text-sm text-white/68 transition-colors hover:text-white">{service.label}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; Cyntonisca, {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="mailto:info@cyntonisca.com" className="transition-colors hover:text-white">info@cyntonisca.com</a>
            <a href="https://wa.me/2349161506866" className="transition-colors hover:text-white">WhatsApp</a>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
