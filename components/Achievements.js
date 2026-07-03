import { achievements, leadership } from "@/data/profile";
import { SectionHeading } from "./About";

const ACCENT_CYCLE = ["cyan", "pink", "amber", "violet"];
const DOT_CLASSES = { cyan: "bg-cyan", pink: "bg-pink", amber: "bg-amber", violet: "bg-violet" };
const DATE_CLASSES = { cyan: "text-cyan", pink: "text-pink", amber: "text-amber", violet: "text-violet" };

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-14">
      <SectionHeading file="achievements.log" title="Achievements & Leadership" />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-wide text-pink">achievements</p>
          <ul className="space-y-4">
            {achievements.map((a, i) => {
              const accent = ACCENT_CYCLE[i % ACCENT_CYCLE.length];
              return (
                <li key={a.title} className="flex gap-3">
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${DOT_CLASSES[accent]}`} />
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                      <span className="font-semibold text-ink">{a.title}</span>
                      <span className={`font-mono text-xs ${DATE_CLASSES[accent]}`}>{a.date}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{a.detail}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-surface p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-wide text-pink">leadership</p>
          <ul className="space-y-4">
            {leadership.map((l) => (
              <li key={l.role} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet" />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                    <span className="font-semibold text-ink">{l.role}</span>
                    <span className="font-mono text-xs text-violet">{l.period}</span>
                  </div>
                  <p className="text-sm text-amber">{l.org}</p>
                  <p className="mt-1 text-sm text-muted">{l.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
