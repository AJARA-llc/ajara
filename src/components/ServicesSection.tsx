"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

// ── Illustrations ─────────────────────────────────────────────

function PrototypingIllustration() {
  const steps = ["Idea", "Build", "Test", "Learn"];
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full" aria-hidden="true">
      <motion.circle
        cx="60" cy="45" r="30"
        fill="none" stroke="#E8600A" strokeWidth="1.5" strokeOpacity="0.25"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ originX: "60px", originY: "45px" }}
      />
      <motion.path
        d="M 60 15 L 57 21 L 63 21 Z"
        fill="#E8600A"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ originX: "60px", originY: "45px" }}
      />
      {steps.map((label, i) => {
        const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
        const x = 60 + 30 * Math.cos(angle);
        const y = 45 + 30 * Math.sin(angle);
        return (
          <motion.text
            key={label}
            x={x} y={y + 4}
            textAnchor="middle" fontSize="7" fill="#94A3B8"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {label}
          </motion.text>
        );
      })}
      <text x="60" y="48" textAnchor="middle" fontSize="8" fill="#E8600A" fontWeight="bold">MVP</text>
    </svg>
  );
}

function ImplementationIllustration() {
  const layers = [
    { y: 62, label: "運用・保守", w: 80 },
    { y: 44, label: "システム構築", w: 65 },
    { y: 26, label: "要件定義", w: 50 },
  ];
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full" aria-hidden="true">
      {layers.map((layer, i) => (
        <g key={layer.label}>
          <motion.rect
            x={(120 - layer.w) / 2} y={layer.y}
            width={layer.w} height="12" rx="3"
            fill="#E8600A" fillOpacity="0.12"
            stroke="#E8600A" strokeWidth="1" strokeOpacity="0.4"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.3, repeat: Infinity, repeatDelay: 3, ease: "easeOut" }}
            style={{ originX: "60px", originY: `${layer.y + 6}px` }}
          />
          <motion.text
            x="60" y={layer.y + 8.5}
            textAnchor="middle" fontSize="6" fill="#94A3B8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.3 + 0.3, repeat: Infinity, repeatDelay: 3 }}
          >
            {layer.label}
          </motion.text>
        </g>
      ))}
      <motion.line
        x1="60" y1="20" x2="60" y2="62"
        stroke="#E8600A" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3"
        animate={{ strokeDashoffset: [0, -12] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

function ConsultingIllustration() {
  const bars = [
    { label: "AI戦略", target: 85, delay: 0 },
    { label: "実装力", target: 70, delay: 0.3 },
    { label: "活用力", target: 90, delay: 0.6 },
  ];
  const maxW = 72;
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full" aria-hidden="true">
      {bars.map((bar, i) => (
        <g key={bar.label}>
          <text x="14" y={26 + i * 22 + 4} fontSize="6.5" fill="#64748B">{bar.label}</text>
          <rect x="14" y={26 + i * 22 + 8} width={maxW} height="7" rx="3.5" fill="#1E293B" />
          <motion.rect
            x="14" y={26 + i * 22 + 8}
            width={0} height="7" rx="3.5"
            fill="#E8600A" fillOpacity="0.8"
            animate={{ width: [0, (bar.target / 100) * maxW, 0] }}
            transition={{ duration: 2.5, delay: bar.delay, repeat: Infinity, repeatDelay: 1.5, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.text
            x={14 + (bar.target / 100) * maxW + 3} y={26 + i * 22 + 14}
            fontSize="5.5" fill="#E8600A"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, delay: bar.delay + 1, repeat: Infinity, repeatDelay: 1.5 }}
          >
            {bar.target}%
          </motion.text>
        </g>
      ))}
    </svg>
  );
}

function FilmIllustration() {
  const frames = [0, 1, 2, 3, 4];
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full" aria-hidden="true">
      <rect x="20" y="25" width="80" height="40" rx="3"
        fill="none" stroke="#E8600A" strokeWidth="1" strokeOpacity="0.4" />
      {frames.map((i) => (
        <motion.rect
          key={`t${i}`}
          x={24 + i * 15} y="29" width="11" height="12" rx="1"
          fill="#E8600A" fillOpacity="0.12"
          stroke="#E8600A" strokeWidth="0.8" strokeOpacity="0.5"
          animate={{ fillOpacity: [0.08, 0.4, 0.08] }}
          transition={{ duration: 1.5, delay: i * 0.25, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {frames.map((i) => (
        <motion.rect
          key={`b${i}`}
          x={24 + i * 15} y="49" width="11" height="12" rx="1"
          fill="#E8600A" fillOpacity="0.12"
          stroke="#E8600A" strokeWidth="0.8" strokeOpacity="0.5"
          animate={{ fillOpacity: [0.4, 0.08, 0.4] }}
          transition={{ duration: 1.5, delay: i * 0.25, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <motion.polygon
        points="54,38 54,52 68,45"
        fill="#E8600A"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "61px", originY: "45px" }}
      />
    </svg>
  );
}

function ShortVideoIllustration() {
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full" aria-hidden="true">
      {/* Phone */}
      <rect x="42" y="10" width="36" height="70" rx="6"
        fill="none" stroke="#E8600A" strokeWidth="1.2" strokeOpacity="0.4" />
      <rect x="46" y="18" width="28" height="50" rx="2" fill="#E8600A" fillOpacity="0.06" />
      <rect x="54" y="12" width="12" height="3" rx="1.5" fill="#E8600A" fillOpacity="0.3" />
      {/* Video content bars */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x="50" y={23 + i * 15} width="20" height="11" rx="2"
          fill="#E8600A" fillOpacity="0.15"
          animate={{ fillOpacity: [0.08, 0.3, 0.08] }}
          transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {/* Side icons */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`ic${i}`}
          cx="93" cy={28 + i * 15} r="4"
          fill="none" stroke="#E8600A" strokeWidth="1" strokeOpacity="0.5"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "93px", originY: `${28 + i * 15}px` }}
        />
      ))}
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────

const techServices = [
  {
    illustration: <PrototypingIllustration />,
    title: "ラピッドプロトタイピング",
    subtitle: "Rapid Prototyping",
    description:
      "アイデアを最短で形にします。仮説検証型のアプローチで、小さく素早くプロトタイプを構築し、市場フィードバックをもとに改善を繰り返します。",
    features: ["MVP開発・仮説検証", "ユーザーフィードバック分析", "反復的な改善サイクル"],
  },
  {
    illustration: <ImplementationIllustration />,
    title: "サービス構築・導入支援",
    subtitle: "Service Implementation",
    description:
      "AIツール・システムの選定から設計・構築・運用定着まで一貫して支援します。既存業務に溶け込む形でデジタル変革を推進し、組織全体の生産性向上を実現します。",
    features: ["要件定義・システム設計", "スモールスタート導入", "運用・保守サポート"],
  },
  {
    illustration: <ConsultingIllustration />,
    title: "AIコンサルティング・リスキリング",
    subtitle: "AI Consulting & Reskilling",
    description:
      "AI活用戦略の立案から、社員がAIを使いこなせるようになるための研修・ワークショップまで提供します。組織の「AI活用力」を根本から底上げします。",
    features: ["AI活用戦略コンサルティング", "社内研修・ワークショップ", "個別スキルアッププログラム"],
  },
];

const creativeServices = [
  {
    illustration: <FilmIllustration />,
    title: "AI映像・ブランドCM制作",
    subtitle: "AI Brand Film & Commercial",
    description:
      "生成AI技術を活用し、ブランドCM・商品プロモーション動画を高品質かつ低コストで制作します。撮影不要で、アイデアから映像まで最短で届けます。",
    features: ["ブランドCM・30秒〜60秒", "商品プロモーション映像", "Kling AI / Runway Gen-3 活用"],
  },
  {
    illustration: <ShortVideoIllustration />,
    title: "ショート動画・SNS映像制作",
    subtitle: "Short Video & SNS Content",
    description:
      "Instagram Reels・TikTok・YouTube Shortsに最適化された縦型ショートコンテンツを生成AIで制作。SNS広告からオーガニックコンテンツまで対応します。",
    features: ["縦型ショート動画（15〜60秒）", "SNS広告クリエイティブ", "多形式・多プラットフォーム対応"],
  },
];

// ── Component ─────────────────────────────────────────────────

function ServiceCard({ service, delay }: { service: typeof techServices[0]; delay: number }) {
  return (
    <FadeInSection delay={delay}>
      <div className="glass h-full group transition-all duration-300 hover:translate-y-[-4px] overflow-hidden">
        <div className="relative h-28 bg-gradient-to-b from-accent/5 to-transparent border-b border-white/5 flex items-center justify-center p-4">
          <div className="w-full h-full">{service.illustration}</div>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-lg text-snow mb-1 group-hover:text-accent transition-colors duration-200">
            {service.title}
          </h3>
          <p className="text-accent/60 text-xs mb-4 tracking-wider">{service.subtitle}</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-slate-500 text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8600A" strokeWidth="2" className="shrink-0">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
            Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
            貴社の課題を、AIと共に解決する
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            実験的なアプローチと最新のAI技術を組み合わせ、
            従来の手法では実現できなかった課題解決を提供します。
          </p>
        </FadeInSection>

        {/* Tech Services */}
        <FadeInSection>
          <p className="text-slate-500 text-xs tracking-[0.15em] uppercase mb-6 font-sans">
            Technology
          </p>
        </FadeInSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techServices.map((service, i) => (
            <ServiceCard key={service.subtitle} service={service} delay={i * 0.1} />
          ))}
        </div>

        {/* Creative Services */}
        <FadeInSection>
          <p className="text-slate-500 text-xs tracking-[0.15em] uppercase mb-6 font-sans">
            Creative
          </p>
        </FadeInSection>
        <div className="grid md:grid-cols-2 gap-6">
          {creativeServices.map((service, i) => (
            <ServiceCard key={service.subtitle} service={service} delay={i * 0.1} />
          ))}
        </div>

        <FadeInSection delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-navy-dark font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
            >
              サービスについて相談する
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
