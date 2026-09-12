"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
// import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About Us" },
];

export default function Navbar({
  ctaVariant = "outline",
}: {
  ctaVariant?: "outline" | "solid";
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isContactActive = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        {/* <Link href="/" className="shrink-0" aria-label="Cyntonisca home">
          <Logo />
        </Link> */}

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative pb-1 text-[15px] transition-colors ${
                    active
                      ? "rounded-[3px] border-b-2 border-[#9B511F] text-[#9B511F]"
                      : "text-black"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className={`hidden shrink-0 rounded-md px-6 py-2.5 text-[15px] font-medium transition-colors md:inline-block ${
            isContactActive
              ? "bg-[#9B511F] text-white"
              : "border border-[#9B511F] text-[#9B511F]"
          }`}
        >
          Contact
        </Link>

        <button
          className="text-black md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-200 bg-white px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-[15px] ${
                      active ? "text-[#9B511F]" : "text-black/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-md bg-[#9B511F] px-6 py-2.5 text-[15px] font-medium text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
