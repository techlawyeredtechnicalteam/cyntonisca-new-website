import Link from "next/link";
// import Logo from "./Logo";

const quickLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#9B511F] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        {/* <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
          <Logo />
        </div> */}

        <p className="mt-8 text-xs font-medium tracking-[0.2em] text-white/70">
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

        <p className="mt-6 text-sm text-white/70">
          © Cyntonisca, {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}