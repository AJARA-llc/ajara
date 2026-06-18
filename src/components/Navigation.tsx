"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { href: "/hintl", label: "hintl" },
  { href: "/aioru", label: "aioru" },
  { href: "/creative", label: "映像制作" },
];

export default function Navigation() {
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
          ? "bg-navy-dark/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="shrink-0 flex items-center gap-2.5">
          <span className="text-xl font-bold tracking-wider">
            <span className="text-snow">AJ</span>
            <span className="text-accent">A</span>
            <span className="text-snow">RA</span>
          </span>
        </a>

        {/* Desktop — 3サービスを右メインに */}
        <div className="hidden md:flex items-center gap-3">
          {serviceLinks.map((svc) => (
            <a
              key={svc.href}
              href={svc.href}
              className="text-sm px-4 py-2 rounded-full border border-white/10 text-slate-300 hover:border-white/30 hover:text-snow hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
            >
              {svc.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-snow p-2"
          aria-label="メニュー"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
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
            <div className="px-6 py-5 flex flex-col gap-2">
              {serviceLinks.map((svc) => (
                <a
                  key={svc.href}
                  href={svc.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm px-4 py-2.5 rounded-full border border-white/10 text-slate-300 text-center"
                >
                  {svc.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
