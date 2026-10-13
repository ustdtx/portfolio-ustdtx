import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on full-stack development, AI, RAG, mobile apps, payments, and production systems.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <section aria-labelledby="blog-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Blog</p>
            <h2 id="blog-title">Writing</h2>
          </div>
          <p style={{ maxWidth: "40rem" }}>Occasional notes from work. Short, practical, no fluff.</p>
          {posts.map((p, i) => (
            <article className="project" key={p.slug}>
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3>
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="kind">{p.date} · {p.readingTime}</p>
                <p className="summary">{p.excerpt}</p>
                <div className="meta-row">
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <Link className="live" href={`/blog/${p.slug}`}>Read →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
