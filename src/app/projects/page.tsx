import type { Metadata } from "next";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected production and personal projects by Mujahidul Islam Mridha.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const pro = projects.filter((p) => p.category === "Professional");
  const personal = projects.filter((p) => p.category === "Personal");
  let n = 0;

  const render = (p: (typeof projects)[number]) => {
    n += 1;
    const num = String(n).padStart(2, "0");
    return (
      <article className="project" key={p.slug}>
        <div className="num">{num}</div>
        <div>
          <h3>{p.title}</h3>
          <p className="kind">{p.subtitle}</p>
          <p className="summary">{p.description}</p>
          <ul>
            {p.highlights.slice(0, 4).map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="meta-row">
            <div className="tags">
              {p.tech.slice(0, 6).map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
            <a className="live" href={p.liveUrl} rel="noopener" target="_blank">
              {p.liveLabel} →
            </a>
          </div>
        </div>
      </article>
    );
  };

  return (
    <main>
      <section aria-labelledby="work-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Projects</h2>
          </div>
          <p className="eyebrow">Professional</p>
          {pro.map(render)}
          <p className="eyebrow" style={{ marginTop: "3rem" }}>Side projects</p>
          {personal.map(render)}
        </div>
      </section>
    </main>
  );
}
