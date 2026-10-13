export default function SectionHeading({
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-7">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-100">{title}</h2>
      {desc ? (
        <p className="mt-1 max-w-xl text-[14px] leading-relaxed text-zinc-500">{desc}</p>
      ) : null}
    </div>
  );
}
