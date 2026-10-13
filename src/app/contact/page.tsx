"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <section className="contact" aria-labelledby="contact-title">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Have a product in mind?</h2>
          <p style={{ marginTop: "1rem", maxWidth: "40rem" }}>I am open to full-stack, backend and AI engineering work. Email is the quickest way to reach me.</p>
          <a className="big" href={`mailto:${profile.email}`}>{profile.email}</a>
          <p className="muted">{profile.phoneIntl} · {profile.location}</p>
          <form onSubmit={submit} style={{ marginTop: "2.5rem", maxWidth: "40rem" }}>
          <label style={{ display: "block", fontSize: "0.9rem" }}>
            Name
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={{ display: "block", width: "100%", marginTop: "0.4rem", padding: "0.65rem 0.8rem", font: "inherit", background: "var(--surface)", color: "var(--ink)", border: "1px solid var(--rule)" }}
              placeholder="Your name"
            />
          </label>
          <label style={{ display: "block", fontSize: "0.9rem", marginTop: "1rem" }}>
            Email
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={{ display: "block", width: "100%", marginTop: "0.4rem", padding: "0.65rem 0.8rem", font: "inherit", background: "var(--surface)", color: "var(--ink)", border: "1px solid var(--rule)" }}
              placeholder="you@example.com"
            />
          </label>
          <label style={{ display: "block", fontSize: "0.9rem", marginTop: "1rem" }}>
            Message
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              style={{ display: "block", width: "100%", marginTop: "0.4rem", padding: "0.65rem 0.8rem", font: "inherit", background: "var(--surface)", color: "var(--ink)", border: "1px solid var(--rule)" }}
              placeholder="What did you have in mind?"
            />
          </label>
          <button
            disabled={status === "sending"}
            className="btn solid"
            style={{ marginTop: "1.25rem", cursor: "pointer" }}
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>
          {status === "sent" && <p style={{ marginTop: "1rem" }}>Thanks — got it, I&apos;ll reply soon.</p>}
          {status === "error" && <p className="muted" style={{ marginTop: "1rem" }}>Didn&apos;t go through. Just email me directly.</p>}
        </form>
        </div>
      </section>
    </main>
  );
}
