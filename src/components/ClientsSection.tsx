"use client";

import FadeInSection from "./FadeInSection";

// TODO: 実際の取引企業名・ロゴ画像パスに差し替えてください
// logo: "/images/clients/company-a.svg" のように public/images/clients/ に置いてください
const clients = [
  { name: "株式会社◯◯◯", industry: "製造業",   logo: undefined },
  { name: "◯◯◯株式会社", industry: "IT・SaaS", logo: undefined },
  { name: "株式会社◯◯◯", industry: "小売・EC", logo: undefined },
  { name: "◯◯◯株式会社", industry: "ヘルスケア", logo: undefined },
  { name: "株式会社◯◯◯", industry: "教育・研修", logo: undefined },
  { name: "◯◯◯株式会社", industry: "金融・保険", logo: undefined },
  { name: "株式会社◯◯◯", industry: "不動産",   logo: undefined },
  { name: "◯◯◯株式会社", industry: "広告・PR", logo: undefined },
];

interface Client {
  name: string;
  industry: string;
  logo?: string;
}

// Duplicate for seamless infinite loop
const ticker = [...clients, ...clients];

export default function ClientsSection() {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4 font-sans text-center">
            Clients
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-snow text-center mb-3">
            導入・制作実績
          </h2>
          <p className="text-slate-400 text-center text-sm max-w-xl mx-auto">
            さまざまな業種の企業様よりご依頼いただいています
          </p>
        </FadeInSection>
      </div>

      {/* Ticker */}
      <div className="relative group">
        {/* Edge fade — left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #020617 0%, transparent 100%)",
          }}
        />
        {/* Edge fade — right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #020617 0%, transparent 100%)",
          }}
        />

        <div className="overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
            {ticker.map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-4 glass px-8 py-5 shrink-0 min-w-[220px]"
              >
                {/* Logo: 実ロゴがあれば <img> 表示、なければ頭文字プレースホルダー */}
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain p-1.5"
                    />
                  ) : (
                    <span className="text-accent font-serif font-semibold text-lg leading-none">
                      {client.name.replace(/[株式会社◯]/g, "").charAt(0) || "A"}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-snow text-sm font-medium whitespace-nowrap">
                    {client.name}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">{client.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
