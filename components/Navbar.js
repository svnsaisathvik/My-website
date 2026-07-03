"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "home.md" },
  { href: "/projects", label: "projects/" },
  { href: "/experience", label: "experience.log" },
  { href: "/contact", label: "contact.sh" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-1 overflow-x-auto px-4 font-mono text-sm">
        <div className="flex items-center gap-1.5 py-3 pr-4">
          <span className="h-2.5 w-2.5 rounded-full bg-pink" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
        </div>
        {tabs.map((t) => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`whitespace-nowrap border-b-2 px-3 py-3 transition-colors ${
                active
                  ? "border-cyan text-ink"
                  : "border-transparent text-muted hover:border-cyan/40 hover:text-ink"
              }`}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
