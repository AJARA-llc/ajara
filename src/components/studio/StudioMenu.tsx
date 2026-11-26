"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Item = { href: string; label: string };

export default function StudioMenu({ nav, pages }: { nav: Item[]; pages: Item[] }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={toggle}
        type="button"
        aria-expanded={open}
        aria-controls="studio-menu"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        onClick={() => setOpen((v) => !v)}
        className="relative grid h-11 w-11 place-items-center rounded-full text-studio-ink hover:bg-studio-lime transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-studio-ink"
      >
        <span className="relative block h-[18px] w-7" aria-hidden>
          <span className={`absolute left-0 h-[2.5px] w-7 bg-current transition-transform duration-200 ${open ? "top-[8px] rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 top-[8px] h-[2.5px] w-7 bg-current transition-opacity duration-150 ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-[2.5px] bg-current transition-transform duration-200 ${open ? "left-0 w-7 top-[8px] -rotate-45" : "right-0 w-5 top-[16px]"}`} />
        </span>
      </button>
      <div
        id="studio-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-68px)] sm:max-h-[calc(100dvh-84px)] overflow-y-auto border-b border-studio-ink/10 bg-studio-bg shadow-[0_24px_40px_-24px_rgba(0,0,0,0.35)]"
      >
        <div className="max-w-6xl mx-auto grid gap-8 px-4 py-8 sm:grid-cols-2 sm:px-6">
          <ul className="space-y-1">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={close} className="block py-2 font-studio font-black [font-stretch:125%] text-2xl tracking-tight text-studio-ink hover:text-studio-purple">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-1 sm:border-l sm:border-studio-ink/10 sm:pl-8">
            {pages.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={close} className="block py-2.5 font-studio font-black text-lg text-studio-ink hover:text-studio-purple">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
