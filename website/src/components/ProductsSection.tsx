"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const products = [
  {
    status: "In Development",
    title: "AEGIS",
    description:
      "AIエージェント組織フレームワーク。CEO、CTO、CFOなど24のAIエージェントが連携し、プロダクト開発を支援する多層型意思決定システム。",
    tags: ["AI Agents", "Multi-Agent", "Decision Making"],
    gradient: "from-accent/20 to-transparent",
  },
  {
    status: "Coming Soon",
    title: "Next Project",
    description:
      "次の戯れは、まだ誠になっていません。小さなアイデアが実験を経て、やがてここに現れます。",
    tags: ["AI", "Experiment", "Play"],
    gradient: "from-slate-500/10 to-transparent",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">
            Products
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow mb-4">
            戯れから生まれたもの
          </h2>
          <p className="text-slate-400 mb-16 max-w-lg">
            遊び心から始まった実験が、社会に価値を届けるプロダクトへ。
          </p>
        </FadeInSection>

        <div className="space-y-8">
          {products.map((product, i) => (
            <FadeInSection key={product.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="glass p-8 sm:p-10 relative overflow-hidden group"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.gradient}`}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block text-xs text-accent/80 border border-accent/20 rounded-full px-3 py-1 mb-4">
                      {product.status}
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-snow">
                      {product.title}
                    </h3>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-slate-600 group-hover:text-accent transition-colors shrink-0 mt-2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-500 bg-white/[0.03] rounded-md px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* CTA at emotional peak */}
        <FadeInSection delay={0.3}>
          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors group"
            >
              <span>一緒にプロダクトを作りませんか</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
