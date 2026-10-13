import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/portfolio";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date, tags: post.tags },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main>
      <section aria-labelledby="post-title">
        <div className="wrap">
          <p className="eyebrow"><Link href="/blog">← Writing</Link></p>
          <h2 id="post-title" style={{ maxWidth: "40rem" }}>{post.title}</h2>
          <p className="kind muted">{post.date} · {post.readingTime}</p>
          <div className="about" style={{ marginTop: "2rem" }}>
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="meta-row">
            <div className="tags">
              {post.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
          <p className="eyebrow" style={{ marginTop: "3rem" }}>More</p>
          <ul>
            {related.map((r) => (
              <li key={r.slug} style={{ marginBottom: "0.5rem" }}>
                <Link href={`/blog/${r.slug}`}>{r.title} →</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
