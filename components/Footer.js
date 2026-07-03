import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-8 font-mono text-xs text-muted md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>built with Next.js · deployed on Vercel</p>
      </div>
    </footer>
  );
}
