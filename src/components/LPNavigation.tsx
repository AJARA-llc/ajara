"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  ctaLabel?: string;
  ctaHref?: string;
}

const subPages = [
  { href: "/hintl", label: "hintl" },
  { href: "/aioru", label: "aioru" },
  { href: "/creative", label: "映像制作" },
];

export default function LPNavigation({
  ctaLabel = "無料相談する",
  ctaHref = "#contact",
}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-wider">
            <span className="text-snow">AJ</span>
            <span className="text-accent">A</span>
            <span className="text-snow">RA</span>
          </span>
        </Link>

        {/* Sub-page links (desktop) */}
        <ul className="hidden sm:flex items-center gap-1">
          {subPages.map((page) => {
            const active = pathname === page.href;
            return (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 ${
                    active
                      ? "bg-accent/15 text-accent border border-accent/30"
                      : "text-slate-400 hover:text-snow border border-transparent hover:border-white/10"
                  }`}
                >
                  {page.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href={ctaHref}
          target={ctaHref.startsWith("http") ? "_blank" : undefined}
          rel={ctaHref.startsWith("http") ? "noreferrer" : undefined}
          className="bg-accent hover:bg-accent-light text-navy-dark font-medium px-6 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
        >
          {ctaLabel}
        </a>
      </div>
    </motion.nav>
  );
}
