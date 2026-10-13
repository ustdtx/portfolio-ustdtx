import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <p>
          {profile.shortName} — {profile.location}
        </p>
        <p>
          <a href={`mailto:${profile.email}`}>Email</a>{" · "}
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>{" · "}
          <a href={profile.codewars} target="_blank" rel="noreferrer">Codewars</a>{" · "}
          <a href="/rss.xml">RSS</a>
        </p>
      </div>
    </footer>
  );
}
