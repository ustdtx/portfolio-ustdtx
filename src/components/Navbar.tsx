import Link from "next/link";
import { profile } from "@/data/portfolio";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-white/[0.07]">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-[15px] font-semibold tracking-tight text-zinc-100">
          {profile.shortName}
        </Link>
        <nav className="hidden items-center gap-5 text-[13.5px] text-zinc-400 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-zinc-100">
              {l.label}
            </Link>
          ))}
        </nav>
        <nav className="flex items-center gap-4 text-[13px] text-zinc-400 md:hidden">
          <Link href="/projects" className="hover:text-zinc-100">Work</Link>
          <Link href="/contact" className="hover:text-zinc-100">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
