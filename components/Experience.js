import { experience } from "@/data/profile";
import { SectionHeading } from "./About";

const DOT_CLASSES = { cyan: "bg-cyan", pink: "bg-pink", amber: "bg-amber", violet: "bg-violet" };
const PERIOD_CLASSES = { cyan: "text-cyan", pink: "text-pink", amber: "text-amber", violet: "text-violet" };
const CARD_CLASSES = { cyan: "card-cyan", pink: "card-pink", amber: "card-amber", violet: "card-violet" };

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-14">
      <SectionHeading file="experience.log" title="Experience" />

      <div className="space-y-5">
        {experience.map((e) => (
          <div key={e.role} className={`rounded-lg border p-6 ${CARD_CLASSES[e.accent] || "card-cyan"}`}>
            <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${DOT_CLASSES[e.accent] || "bg-cyan"}`} />
              <h3 className="font-semibold text-ink">{e.role}</h3>
              {e.github && (
                <a href={e.github} target="_blank" rel="noreferrer" className="font-mono text-xs text-muted hover:text-cyan">
                  repo ↗
                </a>
              )}
            </div>
            <div className="mb-3 flex flex-wrap gap-x-4 pl-5 font-mono text-xs">
              <span className={PERIOD_CLASSES[e.accent] || "text-cyan"}>{e.period}</span>
              <span className="text-muted">{e.stack}</span>
            </div>
            <ul className="space-y-1.5 pl-5 text-sm text-muted">
              {e.points.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 text-pink">▸</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
