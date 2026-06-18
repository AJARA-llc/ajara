"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const BRAND = "linear-gradient(135deg, #0066ff, #00c4b4)";

const navLinks = [
  { href: "#features", label: "特徴" },
  { href: "#genres", label: "ジャンル" },
  { href: "#how", label: "使い方" },
  { href: "/hintl/blog", label: "インサイト" },
  { href: "#faq", label: "FAQ" },
];

export default function HintlNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.96)" : "#ffffff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid rgba(0,102,255,0.1)",
        boxShadow: scrolled ? "0 1px 20px rgba(0,102,255,0.06)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <a href="/hintl" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/images/hintl-logo.webp"
            alt="hintl"
            width={631}
            height={797}
            style={{ height: "32px", width: "auto", objectFit: "contain" }}
            priority
          />
          <span style={{ fontSize: "18px", fontWeight: 800, letterSpacing: "-0.3px", background: BRAND, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            hintl
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="/" style={{ fontSize: "13px", color: "#8A97C0", textDecoration: "none" }}>← AJARA</a>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={{ fontSize: "13px", color: "#4A5568", textDecoration: "none", whiteSpace: "nowrap" }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://hintl.jp"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block"
          style={{
            flexShrink: 0,
            fontSize: "13px",
            fontWeight: 600,
            color: "#ffffff",
            background: BRAND,
            padding: "8px 20px",
            borderRadius: "999px",
            textDecoration: "none",
            boxShadow: "0 2px 12px rgba(0,102,255,0.3)",
            whiteSpace: "nowrap",
          }}
        >
          hintl を試す
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          style={{ color: "#1B2340", background: "none", border: "none", cursor: "pointer" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            style={{ background: "#ffffff", borderTop: "1px solid rgba(0,102,255,0.08)" }}
          >
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="/" style={{ fontSize: "14px", color: "#8A97C0", textDecoration: "none" }}>← AJARA</a>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{ fontSize: "14px", color: "#4A5568", textDecoration: "none" }}>
                  {link.label}
                </a>
              ))}
              <a
                href="https://hintl.jp"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                  background: BRAND,
                  padding: "10px 18px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,102,255,0.3)",
                }}
              >
                hintl を試す
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
