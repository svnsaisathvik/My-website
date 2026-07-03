import { skillGroups } from "@/data/profile";
import { SectionHeading } from "./About";

const COLOR_CLASSES = {
  cyan: "border-cyan/30 text-cyan hover:bg-cyan/10",
  pink: "border-pink/30 text-pink hover:bg-pink/10",
  amber: "border-amber/30 text-amber hover:bg-amber/10",
  violet: "border-violet/30 text-violet hover:bg-violet/10"
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-14">
      <SectionHeading file="skills.json" title="Skills" />

      <div className="space-y-6">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <p className="mb-2 font-mono text-xs text-muted">
              <span className="text-pink">&quot;{g.label}&quot;</span>
              <span className="text-muted">: [</span>
            </p>
            <div className="flex flex-wrap gap-2 pl-4">
              {g.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${COLOR_CLASSES[g.color]}`}
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="font-mono text-xs text-muted">]</p>
          </div>
        ))}
      </div>
    </section>
  );
}
