"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { SectionHeading } from "./About";

const STATUS = { IDLE: "idle", SENDING: "sending", SENT: "sent", ERROR: "error" };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errorMsg, setErrorMsg] = useState("");

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(STATUS.SENDING);
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send.");
      setStatus(STATUS.SENT);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus(STATUS.ERROR);
      setErrorMsg(err.message);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-14">
      <SectionHeading file="contact.sh" title="Get in touch" />

      <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
        <div className="rounded-lg border border-border bg-surface p-6 font-mono text-sm">
          <p className="mb-4 text-muted">Prefer to reach out directly?</p>
          <div className="space-y-2">
            <a href={`mailto:${profile.email}`} className="block text-cyan hover:underline">
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="block text-ink hover:text-cyan">
              github.com/{profile.githubUser}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="block text-ink hover:text-cyan">
              linkedin ↗
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-surface p-6">
          <div className="mb-4">
            <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-pink">
              name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={update("name")}
              maxLength={120}
              className="w-full rounded border border-border bg-bg px-3 py-2 text-sm text-ink outline-none focus:border-cyan"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-pink">
              email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              maxLength={200}
              className="w-full rounded border border-border bg-bg px-3 py-2 text-sm text-ink outline-none focus:border-cyan"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-pink">
              message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={update("message")}
              maxLength={4000}
              className="w-full resize-none rounded border border-border bg-bg px-3 py-2 text-sm text-ink outline-none focus:border-cyan"
            />
          </div>

          <button
            type="submit"
            disabled={status === STATUS.SENDING}
            className="rounded border border-cyan/40 px-4 py-2 font-mono text-sm text-cyan transition-colors hover:bg-cyan/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === STATUS.SENDING ? "sending…" : "./send_message"}
          </button>

          {status === STATUS.SENT && (
            <p className="mt-3 font-mono text-sm text-cyan">✓ Message sent — thanks, I&apos;ll get back to you soon.</p>
          )}
          {status === STATUS.ERROR && (
            <p className="mt-3 font-mono text-sm text-pink">✗ {errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
