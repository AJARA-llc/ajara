import Link from "next/link";
import FadeInSection from "./FadeInSection";

const legalLinks = [
  { href: "/legal/tokushoho", label: "特定商取引法に基づく表記" },
  { href: "/legal/privacy", label: "プライバシーポリシー" },
  { href: "/legal/terms", label: "利用規約" },
  { href: "/legal/subsidy", label: "助成金に関する表示" },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="font-serif text-lg text-snow mb-1">
                合同会社 AJARA
              </p>
              <p className="text-slate-600 text-xs">
                戯が誠になるわいな — Where Play Becomes Product
              </p>
              <p className="text-slate-600 text-xs mt-1">
                CEO / 代表社員 &nbsp;平田拓也
              </p>
              <p className="text-slate-700 text-xs mt-0.5">
                設立: 2026年4月1日
              </p>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-slate-600 text-xs leading-relaxed">
                This site was conceived in play and built with AI.
              </p>
              <p className="text-slate-600 text-xs mt-1">
                &copy; {new Date().getFullYear()} AJARA LLC. All rights
                reserved.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-600 hover:text-slate-400 text-xs transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </FadeInSection>
      </div>
    </footer>
  );
}
