"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FORMSPREE_ID) return;

    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">
            Contact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow mb-4">
            まずは、お気軽にご相談ください
          </h2>
          <p className="text-slate-400 mb-16 max-w-lg">
            AI活用の検討段階でも構いません。
            貴社の課題をお聞かせいただければ、最適なアプローチをご提案します。
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeInSection delay={0.1}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm text-slate-400 mb-2"
                  >
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-snow placeholder-slate-600 focus:outline-none focus:border-accent/40 transition-colors"
                    placeholder="株式会社○○"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-slate-400 mb-2"
                  >
                    お名前 <span className="text-accent/60">*</span>
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
                    メールアドレス <span className="text-accent/60">*</span>
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
                    htmlFor="inquiry-type"
                    className="block text-sm text-slate-400 mb-2"
                  >
                    ご相談内容 <span className="text-accent/60">*</span>
                  </label>
                  <select
                    id="inquiry-type"
                    name="inquiry-type"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-snow focus:outline-none focus:border-accent/40 transition-colors appearance-none"
                  >
                    <option value="" className="bg-navy-dark text-slate-400">
                      選択してください
                    </option>
                    <option value="agent-dev" className="bg-navy-dark">
                      AIエージェントシステム開発
                    </option>
                    <option value="prototype" className="bg-navy-dark">
                      ラピッドプロトタイピング
                    </option>
                    <option value="other" className="bg-navy-dark">
                      その他のご相談
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-slate-400 mb-2"
                  >
                    メッセージ <span className="text-accent/60">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-snow placeholder-slate-600 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                    placeholder="現在の課題や検討されている内容をお聞かせください"
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-sm">
                    送信に失敗しました。時間をおいて再度お試しいただくか、直接メールにてご連絡ください。
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading || !FORMSPREE_ID}
                  className="w-full bg-accent hover:bg-accent-light text-navy-dark font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "送信中..." : "無料相談を申し込む"}
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
                  お問い合わせを受け付けました。2営業日以内にご連絡いたします。
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
                <p className="text-snow">渋谷オフィス</p>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  〒150-0043
                  <br />
                  東京都渋谷区道玄坂1丁目10番8号
                  <br />
                  渋谷道玄坂東急ビル2F−C
                </p>
              </div>
              <div className="glass p-6 transition-all duration-300">
                <h3 className="text-sm text-accent tracking-wider uppercase mb-3">
                  対応体制
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  AIエージェント組織を活用した少数精鋭チームで開発を行っています。
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
