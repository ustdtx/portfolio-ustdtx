import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: {
    default: `${profile.shortName} — Software Engineer`,
    template: `%s | ${profile.shortName}`,
  },
  description: profile.summary,
  applicationName: profile.shortName,
  alternates: {
    canonical: "/",
  },
  creator: profile.shortName,
  publisher: profile.shortName,
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: profile.shortName,
    title: `${profile.shortName} — Software Engineer`,
    description: profile.tagline,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: profile.shortName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} — Software Engineer`,
    description: profile.tagline,
    images: ["/opengraph-image"],
  },
  metadataBase: new URL("https://portfolio-ustdtx.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              jobTitle: "Software Engineer",
              description: profile.summary,
              email: `mailto:${profile.email}`,
              telephone: profile.phoneIntl,
              address: { "@type": "PostalAddress", addressLocality: "Narayanganj", addressCountry: "BD" },
              url: "https://portfolio-ustdtx.vercel.app",
              sameAs: [profile.github, profile.codewars],
              knowsAbout: ["Full-stack development", "AI/ML", "RAG", "React", "Next.js", "NestJS", "Python"],
            }),
          }}
        />
        <header className="topbar">
          <div className="wrap">
            <a className="brand" href="/" aria-label="Home"><span className="logo" aria-hidden="true">M</span></a>
            <nav className="topnav" aria-label="Sections">
              <ul>
                <li><a href="/#work">Work</a></li>
                <li><a href="/blog">Writing</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
