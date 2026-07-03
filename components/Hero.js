"use client";

import { useEffect, useState } from "react";
import { profile, neofetchStats } from "@/data/profile";

const LINES = [
  "whoami",
  "cat role.txt",
  "./run --mode=portfolio"
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      const t = setTimeout(() => setShowStats(true), 200);
      return () => clearTimeout(t);
    }
    const full = LINES[lineIndex];
    if (typed.length < full.length) {
      const t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 35);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setTyped("");
    }, 450);
    return () => clearTimeout(t);
  }, [typed, lineIndex]);

  const completedLines = LINES.slice(0, lineIndex);

  return (
    <section className="relative mx-auto max-w-5xl overflow-hidden px-4 pb-16 pt-14 md:pb-24 md:pt-20">
      {/* ambient color blobs — the one place this page spends its color budget freely */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-pink/25 blur-[100px]" />
      <div className="pointer-events-none absolute -top-10 right-1/4 h-72 w-72 rounded-full bg-cyan/20 blur-[100px]" />
      <div className="pointer-events-none absolute top-40 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber/15 blur-[100px]" />

      <div className="relative overflow-hidden rounded-lg border border-cyan/30 bg-surface/90 backdrop-blur-sm glow-cyan">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-pink/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
          <span className="ml-3 font-mono text-xs text-muted">sathvik@iiitb:~</span>
        </div>

        <div className="p-5 font-mono text-sm md:p-8 md:text-base">
          {completedLines.map((line, i) => (
            <div key={i} className="mb-1">
              <span className="prompt text-ink">{line}</span>
            </div>
          ))}

          {lineIndex < LINES.length && (
            <div className="mb-1">
              <span className="prompt text-ink">
                {typed}
                <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-blink bg-cyan align-middle" />
              </span>
            </div>
          )}

          {showStats && (
            <div className="mt-5 animate-[fadein_0.4s_ease] border-t border-border pt-5">
              <p className="mb-1 text-2xl font-bold md:text-3xl"><span className="gradient-text">{profile.name}</span></p>
              <p className="mb-4 text-cyan">{profile.role}</p>

              <div className="grid grid-cols-1 gap-x-8 gap-y-1.5 text-xs md:text-sm">
                {neofetchStats.map((s) => (
                  <div key={s.label} className="flex gap-3">
                    <span className="w-16 shrink-0 text-pink">{s.label}</span>
                    <span className="text-muted">{s.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-xs md:text-sm">
                <a href={profile.github} target="_blank" rel="noreferrer" className="rounded border border-cyan/40 px-3 py-1.5 text-ink transition-all hover:glow-cyan hover:text-cyan">
                  github ↗
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded border border-pink/40 px-3 py-1.5 text-ink transition-all hover:glow-pink hover:text-pink">
                  linkedin ↗
                </a>
                <a href={`mailto:${profile.email}`} className="rounded border border-amber/40 px-3 py-1.5 text-ink transition-all hover:glow-amber hover:text-amber">
                  {profile.email}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
