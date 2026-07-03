import { profile, coursework } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-14">
      <SectionHeading file="about.md" title="About" />

      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="card-cyan rounded-lg border p-6">
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-pink">education</p>
          <p className="text-lg font-semibold text-ink">{profile.education.school}</p>
          <p className="mt-1 text-sm text-muted">{profile.education.degree}</p>
          <div className="mt-3 flex gap-6 font-mono text-sm">
            <span className="text-cyan">{profile.education.period}</span>
            <span className="text-amber">CGPA {profile.education.cgpa}</span>
          </div>
        </div>

        <div className="card-pink rounded-lg border p-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-wide text-pink">coursework</p>
          <ul className="space-y-1.5 text-sm text-muted">
            {coursework.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-cyan">›</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ file, title }) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <h2 className="gradient-text text-2xl font-bold md:text-3xl">{title}</h2>
      <span className="font-mono text-xs text-muted">// {file}</span>
    </div>
  );
}
