"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "./FadeInSection";

interface Video {
  id: string;
  title: string;
  category: string;
  tags: string[];
  youtubeId?: string;
  localVideo?: string;
  thumbnail?: string;
  description: string;
  gradientFrom: string;
}

const videos: Video[] = [
  {
    id: "g1",
    title: "自動車ブランドCM — AI映像生成",
    category: "Brand CM",
    tags: ["Kling AI", "I2V生成", "18秒"],
    localVideo: "/videos/auto_cm_auto.mp4",
    thumbnail: "/videos/auto_cm_auto_thumb.jpg",
    description: "生成AIを活用したブランドコマーシャル。世界観をゼロから映像化します。",
    gradientFrom: "from-orange-900/30",
  },
];

const categoryColors: Record<string, string> = {
  "Brand CM": "bg-accent/20 text-accent",
  "ショート動画": "bg-blue-500/20 text-blue-400",
  "SNS動画": "bg-purple-500/20 text-purple-400",
  "Corporate": "bg-emerald-500/20 text-emerald-400",
  "Event": "bg-rose-500/20 text-rose-400",
  "Recruit": "bg-amber-500/20 text-amber-400",
};

export default function GallerySection() {
  const [selected, setSelected] = useState<Video | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
              Works
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
              AIが創る映像の世界
            </h2>
            <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
              生成AI技術を駆使したブランドCM・ショート動画の制作実績。
              <br className="hidden sm:block" />
              貴社のブランドストーリーを、AIの力で映像化します。
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <FadeInSection key={video.id} delay={i * 0.08}>
                <motion.div
                  className="glass overflow-hidden cursor-pointer group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelected(video)}
                >
                  {/* Thumbnail */}
                  <div
                    className={`relative aspect-video bg-gradient-to-br ${video.gradientFrom} to-navy-dark flex items-center justify-center`}
                  >
                    {video.thumbnail ? (
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : video.youtubeId ? (
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-slate-600">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        <span className="text-xs tracking-widest uppercase">近日公開</span>
                      </div>
                    )}

                    {/* Play overlay on hover */}
                    <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center shadow-lg shadow-accent/30">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>

                    {/* Category badge */}
                    <span
                      className={`absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full font-medium ${
                        categoryColors[video.category] ?? "bg-white/10 text-slate-300"
                      }`}
                    >
                      {video.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-serif text-snow text-lg mb-2 group-hover:text-accent transition-colors duration-200">
                      {video.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {video.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {video.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded bg-white/5 text-slate-500 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.3}>
            <div className="text-center mt-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-navy-dark font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
              >
                映像制作を相談する
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(2, 6, 23, 0.92)", backdropFilter: "blur(12px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22 }}
              className="glass w-full max-w-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video area */}
              <div className="relative aspect-video bg-navy">
                {selected.localVideo ? (
                  <video
                    src={selected.localVideo}
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    playsInline
                  />
                ) : selected.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selected.youtubeId}?autoplay=1&rel=0`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${selected.gradientFrom} to-navy-dark flex flex-col items-center justify-center gap-4`}
                  >
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#E8600A"
                      strokeWidth="1"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <p className="text-slate-400 text-sm tracking-widest uppercase">Coming Soon</p>
                    <p className="text-slate-500 text-xs">この動画は近日公開予定です</p>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium mb-3 ${
                      categoryColors[selected.category] ?? "bg-white/10 text-slate-300"
                    }`}
                  >
                    {selected.category}
                  </span>
                  <h3 className="font-serif text-snow text-xl mb-2">{selected.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{selected.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-white/5 text-slate-500 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="閉じる"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
