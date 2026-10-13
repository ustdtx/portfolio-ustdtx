import Image from "next/image";
import { activities, education, experience, profile, projects, research, skills } from "@/data/portfolio";

export default function Home() {
  const order = ["quizboxbd", "lets-math", "amardeen", "slashed", "gulshan-club-hall-booking", "talk2", "aibit", "symamlaw"];
  const orderedProjects = order.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean);
  const toolkit = skills.flatMap((group) => group.items).filter((item) => ["TypeScript", "Python", "C#", "Go", "Dart", "PHP", "Next.js", "React", "React Native", "Flutter", "Astro", "NestJS", "FastAPI", "Laravel", ".NET 8", "PostgreSQL", "MongoDB", "Redis", "PyTorch", "LangChain", "RAG", "Docker", "Kubernetes", "GitOps"].includes(item));

  return (
    <>
      <a className="skip" href="#work">Skip to projects</a>
      <main id="main">
        <div className="intro" id="top">
          <div className="wrap intro-grid">
            <div>
              <p className="eyebrow">Software engineer, {profile.location}</p>
              <h1>{profile.name}</h1>
              <p className="lead">I build web and mobile products, the backend systems behind them, and AI tools for learning. Eight live projects below, from trivia SaaS and payment flows to a RAG-based math tutor.</p>
              <div className="links">
                <a className="btn solid" href="#work">See the work</a>
                <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
              </div>
            </div>
            <Image className="portrait" src="/mujahidul-islam-mridha.jpg" alt={profile.name} width={128} height={128} priority />
          </div>
        </div>

        <section id="work" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Projects</h2>
            </div>
            {orderedProjects.map((project, index) => project && (
              <article className="project" key={project.slug}>
                <div className="num">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{project.title}</h3>
                  <p className="kind">{project.subtitle}</p>
                  <p className="summary">{project.description}</p>
                  <ul>
                    {project.highlights.slice(0, project.slug === "talk2" || project.slug === "aibit" ? 2 : 3).map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <div className="meta-row">
                    <div className="tags">{project.tech.slice(0, 6).map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
                    <a className="live" href={project.liveUrl} rel="noopener" target="_blank">{project.liveLabel} →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about" aria-labelledby="about-title">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">About</p>
              <h2 id="about-title">How I work</h2>
            </div>
            <p>I am a software engineer with a B.Sc. in Computer Science from BRAC University. Most of my production work has been in full-stack product teams, where I handle everything from database design and payment integrations to deployment on Docker and Kubernetes.</p>
            <p>I care about systems that hold up under load, such as caching and atomic writes for leaderboards and payments, and about interfaces that are quick and simple to use. On the research side, I work on applied machine learning, especially computer vision and generative models.</p>

            <p className="eyebrow" style={{ marginTop: "3rem" }}>Research</p>
            <div className="papers" style={{ marginTop: 0 }}>
              {research.map((paper) => <article className="paper" key={paper.title}><h3>{paper.title}</h3><p>{paper.detail}</p></article>)}
            </div>

            <p className="eyebrow" style={{ marginTop: "3rem" }}>Toolkit</p>
            <div className="toolkit">{toolkit.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
            <p className="muted" style={{ marginTop: "1.5rem" }}>{education[0].degree}, {education[0].school} · {education[0].period} · {activities[0].title}</p>
          </div>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Have a product in mind?</h2>
            <p style={{ marginTop: "1rem", maxWidth: "40rem" }}>I am open to full-stack, backend and AI engineering work. Email is the quickest way to reach me.</p>
            <a className="big" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="links">
              <a className="btn" href={profile.github} rel="me noopener" target="_blank">GitHub</a>
              <a className="btn" href={profile.codewars} rel="me noopener" target="_blank">Codewars</a>
              <a className="btn" href="/Mujahidul-Islam-Mridha-CV.pdf" download>CV</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
