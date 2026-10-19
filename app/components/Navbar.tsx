"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../../public/images/logo.webp";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const updateNavbar = () => setScrolled(window.scrollY > 24);
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, [isHome]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    const desktopViewport = window.matchMedia("(min-width: 1024px)");
    const closeMenuOnDesktop = () => {
      if (desktopViewport.matches) setOpen(false);
    };

    desktopViewport.addEventListener("change", closeMenuOnDesktop);
    return () => desktopViewport.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} inset-x-0 top-0 z-50 font-sans text-white transition-[background-color,border-color,box-shadow] duration-300 ${
        isHome && !scrolled && !open
          ? "border-b border-transparent bg-transparent"
          : "border-b border-white/10 bg-[#0c2133]/92 shadow-[0_12px_35px_rgba(4,18,30,0.16)] backdrop-blur-xl"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[96px] w-full items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-20"
      >
        <Link
          href="/"
          aria-label="Cyntonisca home"
          className="relative z-10 flex shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Image
            src={logo}
            alt="Cyntonisca"
            loading="eager"
            className="h-[62px] w-[150px] object-cover object-center brightness-0 invert drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:h-[68px] sm:w-[170px]"
            sizes="(max-width: 640px) 150px, 170px"
          />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex xl:gap-11">
          {links.map((link) => {
            const active = isActivePath(pathname, link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-[15px] font-medium transition-colors duration-200 [text-shadow:0_1px_12px_rgba(0,0,0,0.38)] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-white after:transition-transform after:duration-300 xl:text-base ${active ? "text-white after:scale-x-100" : "text-white/72 after:scale-x-0 hover:text-white hover:after:scale-x-100"}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-[#dce8ef] sm:inline-flex"
          >
            Contact us
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="relative z-10 flex h-11 w-11 items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          data-lenis-prevent
          className="mobile-menu-enter absolute inset-x-0 top-full z-40 overflow-y-auto overscroll-contain bg-[#101a28] px-6 pb-[max(2rem,env(safe-area-inset-bottom))] text-white sm:px-10 lg:hidden"
        >
          <div className="mx-auto flex max-w-2xl flex-col">
            <ul className="divide-y divide-white/12 border-y border-white/12">
              {links.map((link, index) => {
                const active = isActivePath(pathname, link.href);

                return (
                  <li key={link.href} className="mobile-menu-item" style={{ animationDelay: `${index * 45}ms` }}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-5 text-2xl font-medium tracking-[-0.03em]"
                    >
                      <span className={active ? "text-[#a9c8dc]" : "text-white"}>{link.label}</span>
                      <ArrowUpRight className={`h-5 w-5 ${active ? "text-[#a9c8dc]" : "text-white/35"}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-8">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-white px-6 py-4 text-sm font-semibold text-slate-950 sm:hidden"
              >
                Book a consultation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
