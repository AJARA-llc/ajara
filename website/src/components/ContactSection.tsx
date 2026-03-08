"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">
            Contact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow mb-4">
            次の戯れを、一緒に。
          </h2>
          <p className="text-slate-400 mb-16 max-w-lg">
            プロダクト開発のご相談、協業のお問い合わせ、
            または一緒に戯れてみたい方はお気軽にどうぞ。
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeInSection delay={0.1}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-slate-400 mb-2"
                  >
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-snow placeholder-slate-600 focus:outline-none focus:border-accent/40 transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-slate-400 mb-2"
                  >
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-snow placeholder-slate-600 focus:outline-none focus:border-accent/40 transition-colors"
                    placeholder="mail@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-slate-400 mb-2"
                  >
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-snow placeholder-slate-600 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                    placeholder="お気軽にお書きください"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-navy-dark font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                >
                  送信する
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-8 flex flex-col items-center justify-center h-full text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E8600A"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-snow mb-2">
                  ありがとうございます
                </h3>
                <p className="text-slate-400 text-sm">
                  お問い合わせを受け付けました。折り返しご連絡いたします。
                </p>
              </motion.div>
            )}
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="space-y-8">
              <div className="glass p-6 transition-all duration-300">
                <h3 className="text-sm text-accent tracking-wider uppercase mb-3">
                  Email
                </h3>
                <p className="text-snow">contact@ajara.co.jp</p>
              </div>
              <div className="glass p-6 transition-all duration-300">
                <h3 className="text-sm text-accent tracking-wider uppercase mb-3">
                  Location
                </h3>
                <p className="text-snow">Tokyo, Japan</p>
              </div>
              <div className="glass p-6 transition-all duration-300">
                <h3 className="text-sm text-accent tracking-wider uppercase mb-3">
                  Work Style
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  生成AIエージェント組織とともに小規模でプロダクト開発を行っています。
                  リモートファースト、非同期コミュニケーション。
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
