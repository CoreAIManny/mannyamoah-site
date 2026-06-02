"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Free Guides" },
  { href: "/contact", label: "Contact" },
];

const workWithMeLinks = [
  { href: "/contact", label: "AI Automation Starter Kit — £37" },
  { href: "https://cal.com/manny-amoah-iys902/assessment-60", label: "AI & Automation Assessment — £497", external: true },
  { href: "https://cal.com/manny-amoah-iys902/ai-assessment", label: "Book a Call", external: true },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-nav-bg px-6 md:px-12 h-16">
      <Link href="/" className="font-headline text-xl font-bold uppercase tracking-[2px] text-white">
        Manny <span className="text-accent">Amoah</span>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`font-headline text-[13px] uppercase tracking-[2px] transition-colors ${
                isActive(link.href) ? "text-accent" : "text-[#ccc] hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        {/* Work With Me dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className={`font-headline text-[13px] uppercase tracking-[2px] transition-colors cursor-pointer ${
              pathname.startsWith("/work-with-me") ? "text-accent" : "text-[#ccc] hover:text-accent"
            }`}
          >
            Work With Me ▾
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 bg-nav-bg min-w-[260px] py-3 rounded-b-lg">
              {workWithMeLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-2 font-headline text-[12px] uppercase tracking-[2px] text-[#ccc] hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-5 py-2 font-headline text-[12px] uppercase tracking-[2px] text-[#ccc] hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          )}
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-nav-bg z-50 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 font-headline text-[14px] uppercase tracking-[2px] ${
                isActive(link.href) ? "text-accent" : "text-[#ccc]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-2">
            <span className="font-headline text-[11px] uppercase tracking-[2px] text-text-muted">
              Work With Me
            </span>
          </div>
          {workWithMeLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-2 font-headline text-[12px] uppercase tracking-[2px] text-[#ccc] hover:text-accent"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-2 font-headline text-[12px] uppercase tracking-[2px] text-[#ccc] hover:text-accent"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
