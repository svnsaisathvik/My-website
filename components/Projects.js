"use client";

import { useEffect, useRef, useState } from "react";
import { featuredProjects, profile } from "@/data/profile";
import { SectionHeading } from "./About";

// Full class strings on purpose — Tailwind's compiler can't detect
// dynamically interpolated class names like `text-${color}`.
const STACK_TEXT_COLORS = ["text-cyan", "text-pink", "text-amber", "text-violet"];
const stackColor = (i) => STACK_TEXT_COLORS[i % STACK_TEXT_COLORS.length];

const CARD_CLASSES = { cyan: "card-cyan", pink: "card-pink", amber: "card-amber", violet: "card-violet" };
const GLOW_CLASSES = { cyan: "hover:glow-cyan", pink: "hover:glow-pink", amber: "hover:glow-amber", violet: "hover:glow-violet" };
const PERIOD_CLASSES = { cyan: "text-cyan", pink: "text-pink", amber: "text-amber", violet: "text-violet" };

export default function Projects() {
  const [counts, setCounts] = useState({});
  const [repos, setRepos] = useState([]);
  const [reposLoading, setReposLoading] = useState(true);
  const firedSlugs = useRef(new Set());

  useEffect(() => {
    fetch("/api/views")
      .then((r) => r.json())
      .then(setCounts)
      .catch(() => {});

    fetch("/api/repos")
      .then((r) => r.json())
      .then((d) => setRepos(d.repos || []))
      .catch(() => {})
      .finally(() => setReposLoading(false));
  }, []);

  function registerView(slug) {
    if (firedSlugs.current.has(slug)) return;
    firedSlugs.current.add(slug);
    fetch("/api/views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug })
    })
      .then((r) => r.json())
      .then((d) => {
        if (d?.slug) setCounts((c) => ({ ...c, [d.slug]: d.count }));
      })
      .catch(() => {});
  }

  const featuredNames = new Set(featuredProjects.map((p) => p.name.toLowerCase()));
  const otherRepos = repos.filter((r) => !featuredNames.has(r.name.toLowerCase())).slice(0, 6);

  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-14">
      <SectionHeading file="projects/" title="Projects" />

      <div className="grid gap-5 md:grid-cols-2">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} views={counts[p.slug]} onView={() => registerView(p.slug)} />
        ))}
      </div>

      <div className="mt-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-wide text-pink">
          more on github{" "}
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-muted hover:text-cyan">
            @{profile.githubUser} ↗
          </a>
        </p>

        {reposLoading ? (
          <p className="font-mono text-sm text-muted">fetching repos…</p>
        ) : otherRepos.length === 0 ? (
          <p className="font-mono text-sm text-muted">No additional public repos found.</p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherRepos.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border bg-surface p-4 transition-colors hover:border-cyan/50"
              >
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="truncate font-mono text-sm text-ink">{r.name}</span>
                  {r.stars > 0 && <span className="shrink-0 font-mono text-xs text-amber">★ {r.stars}</span>}
                </div>
                <p className="line-clamp-2 text-xs text-muted">{r.description || "No description provided."}</p>
                {r.language && <p className="mt-2 font-mono text-xs text-cyan">{r.language}</p>}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, views, onView }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onView();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col rounded-lg border p-6 transition-all duration-300 ${CARD_CLASSES[project.accent] || "card-cyan"} ${GLOW_CLASSES[project.accent] || "hover:glow-cyan"}`}
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="font-semibold text-ink">{project.name}</h3>
        <span className="shrink-0 font-mono text-xs text-muted">
          {views != null ? `${views} views` : "\u00A0"}
        </span>
      </div>

      <p className={`mb-3 font-mono text-xs ${PERIOD_CLASSES[project.accent] || "text-cyan"}`}>{project.period}</p>
      <p className="mb-4 flex-1 text-sm text-muted">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.stack.map((s, i) => (
          <span
            key={s}
            className={`rounded border border-border px-2 py-0.5 font-mono text-xs ${stackColor(i)}`}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex gap-3 font-mono text-xs">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-cyan">
            source ↗
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="text-muted hover:text-cyan">
            live ↗
          </a>
        )}
      </div>
    </div>
  );
}
