"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "サービス" },
  { href: "#process", label: "制作の流れ" },
  { href: "#pricing", label: "料金" },
];

export default function CreativeNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-dark/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="text-xs text-slate-500 hover:text-slate-400 transition-colors flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            AJARA
          </Link>
          <span className="w-px h-3 bg-white/10" />
          <span className="text-snow font-semibold text-sm tracking-wide">
            Creative
          </span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-5 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 hover:text-snow transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block shrink-0 bg-accent hover:bg-accent-light text-navy-dark font-medium px-5 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
        >
          制作を相談する
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-snow p-2"
          aria-label="メニュー"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-dark/95 backdrop-blur-xl border-t border-white/5"
          >
            <ul className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-slate-400 hover:text-snow transition-colors py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center bg-accent text-navy-dark font-medium px-5 py-2.5 rounded-full text-sm"
                >
                  制作を相談する
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
