import type { Metadata } from "next";
import { experience, references } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description: "Software engineering experience across full-stack products, mobile apps, payments, and applied AI.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <main>
      <section aria-labelledby="exp-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Career</p>
            <h2 id="exp-title">Experience</h2>
          </div>
          {experience.map((e) => (
            <article className="project" key={e.company}>
              <div className="num">{e.period}</div>
              <div>
                <h3>{e.title}, {e.company}</h3>
                <p className="kind">{e.type}</p>
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="meta-row">
                  <div className="tags">
                    {e.stack.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
          <p className="eyebrow" style={{ marginTop: "3rem" }}>References</p>
          <div className="papers" style={{ marginTop: 0 }}>
            {references.map((r) => (
              <article className="paper" key={r.email}>
                <h3>{r.name}</h3>
                <p>{r.role} · <a href={`mailto:${r.email}`}>{r.email}</a></p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
