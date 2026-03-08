"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroCanvas from "./HeroCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background fallback */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Interactive particle canvas */}
      <HeroCanvas />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/images/logo-full.png"
            alt="株式会社 AJARA"
            width={240}
            height={240}
            className="mx-auto w-40 sm:w-48 md:w-56 h-auto rounded-2xl"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-semibold text-snow leading-tight mb-6"
        >
          戯が誠になるわいな
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-slate-400 text-lg sm:text-xl font-sans mb-4"
        >
          Where Play Becomes Product
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-slate-500 text-sm max-w-xl mx-auto mb-12 leading-relaxed"
        >
          遊び心や発想から生まれたアイデアを AI とテクノロジーによって実験し、
          <br className="hidden sm:inline" />
          社会に価値あるプロダクトへと育てていく。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#philosophy"
            className="bg-accent hover:bg-accent-light text-navy-dark font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
          >
            私たちについて
          </a>
          <a
            href="#contact"
            className="border border-white/10 hover:border-accent/40 text-snow font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-white/5"
          >
            お問い合わせ
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
