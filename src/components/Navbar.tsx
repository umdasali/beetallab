/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const navLinks = [
  { label: "Services",    href: "#services" },
  { label: "Tech Stack",  href: "#technologies" },
  { label: "About",       href: "#about" },
  { label: "How It Works",href: "#how-it-works" },
  { label: "Pricing",     href: "#pricing" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src="/beetallab.png" alt="Beetallab Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl tracking-tight">
              <span className="text-fg">
                Beetal
              </span>
              <span className="text-accent">lab</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-fg-muted hover:text-accent transition-colors
                           after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px
                           after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop right slot: CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-dark text-on-accent px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-accent/20"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-fg-muted hover:text-accent hover:bg-accent-bg transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-fg-muted hover:text-accent hover:bg-accent-bg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-1">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-accent hover:bg-accent-dark text-on-accent px-4 py-2.5 rounded-lg text-sm font-semibold text-center transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
