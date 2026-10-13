import type { Project } from "@/data/portfolio";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group border-t border-white/[0.07] py-7 first:border-t-0 first:pt-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[16px] font-semibold tracking-tight text-zinc-100 transition group-hover:text-white">
          {p.title}
        </h3>
        <span className="shrink-0 text-[12.5px] text-zinc-600">
          {p.company ?? p.category}{p.period ? ` · ${p.period}` : ""}
        </span>
      </div>
      <p className="mt-0.5 text-[13.5px] text-zinc-500">{p.subtitle}</p>
      <p className="mt-2.5 max-w-2xl text-[14px] leading-relaxed text-zinc-400">
        {p.description}
      </p>
      <p className="mt-2.5 text-[12.5px] leading-relaxed text-zinc-600">
        {p.tech.join("  ·  ")}
      </p>
      <a
        href={p.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-2.5 inline-block text-[13.5px] text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300"
      >
        {p.liveLabel} →
      </a>
    </article>
  );
}
