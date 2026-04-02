import FadeInSection from "./FadeInSection";

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
              <p className="text-slate-700 text-xs mt-1">
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
        </FadeInSection>
      </div>
    </footer>
  );
}
