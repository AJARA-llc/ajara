"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AioruNavigation() {
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
        borderBottom: "1px solid rgba(91,164,245,0.12)",
        boxShadow: scrolled ? "0 1px 20px rgba(91,164,245,0.08)" : "none",
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
        }}
      >
        {/* Logo */}
        <a href="/aioru" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image
            src="/images/aioru-logo-horizontal.webp"
            alt="aioru"
            width={1470}
            height={312}
            style={{ height: "32px", width: "auto", objectFit: "contain" }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" style={{ fontSize: "13px", color: "#8A97C0", textDecoration: "none" }}>
            ← AJARA
          </a>
          <a href="#article" style={{ fontSize: "13px", color: "#4A5568", textDecoration: "none" }}>
            AIO とは
          </a>
          <a href="/aioru/blog" style={{ fontSize: "13px", color: "#4A5568", textDecoration: "none" }}>
            ブログ
          </a>
          <a href="#faq" style={{ fontSize: "13px", color: "#4A5568", textDecoration: "none" }}>
            FAQ
          </a>
          <a
            href="https://aioru.net"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#ffffff",
              background: "linear-gradient(135deg, #5BA4F5, #6C5CE7)",
              padding: "8px 20px",
              borderRadius: "999px",
              textDecoration: "none",
              boxShadow: "0 2px 12px rgba(91,164,245,0.35)",
            }}
          >
            無料診断する
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          style={{ color: "#1B2340", background: "none", border: "none", cursor: "pointer" }}
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "#ffffff", borderTop: "1px solid rgba(91,164,245,0.1)" }}
          >
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="/" style={{ fontSize: "14px", color: "#8A97C0", textDecoration: "none" }}>← AJARA</a>
              <a href="#article" style={{ fontSize: "14px", color: "#4A5568", textDecoration: "none" }}>AIO とは</a>
              <a href="/aioru/blog" style={{ fontSize: "14px", color: "#4A5568", textDecoration: "none" }}>ブログ</a>
              <a href="#faq" style={{ fontSize: "14px", color: "#4A5568", textDecoration: "none" }}>FAQ</a>
              <a
                href="https://aioru.net"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                  background: "linear-gradient(135deg, #5BA4F5, #6C5CE7)",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(91,164,245,0.35)",
                }}
              >
                無料診断する
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
