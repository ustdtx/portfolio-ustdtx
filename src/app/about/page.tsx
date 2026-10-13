import type { Metadata } from "next";
import { profile, education, research, activities, skills } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "About Mujahidul Islam Mridha, a software engineer focused on full-stack development and AI/ML.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="about" aria-labelledby="about-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2 id="about-title">How I work</h2>
          </div>
          <p>{profile.summary}</p>
          <p>{profile.summary2} {profile.availability}</p>
          <p className="muted">
            {education[0].degree}, {education[0].school} · {education[0].period} · {activities[0].title}
          </p>

          <p className="eyebrow" style={{ marginTop: "3rem" }}>Education</p>
          <div className="papers" style={{ marginTop: 0 }}>
            {education.map((e) => (
              <article className="paper" key={e.school}>
                <h3>{e.school}</h3>
                <p>{e.degree} · {e.period} · {e.detail}</p>
              </article>
            ))}
          </div>

          <p className="eyebrow" style={{ marginTop: "3rem" }}>Research</p>
          <div className="papers" style={{ marginTop: 0 }}>
            {research.map((r) => (
              <article className="paper" key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.detail}</p>
              </article>
            ))}
          </div>

          <p className="eyebrow" style={{ marginTop: "3rem" }}>Toolkit</p>
          <div className="toolkit">
            {skills.flatMap((s) => s.items).map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>

          <div className="links intro-links" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.5rem" }}>
            <a className="btn solid" href="/Mujahidul-Islam-Mridha-CV.pdf" download>Download CV</a>
          </div>
        </div>
      </section>
    </main>
  );
}
