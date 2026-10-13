export const profile = {
  name: "Md. Mujahidul Islam Mridha",
  shortName: "Mujahidul Islam Mridha",
  handle: "ustdtx",
  title: "Software Engineer — Full-stack, AI/ML",
  tagline:
    "I build web platforms, mobile apps, and AI features that hold up in production.",
  summary:
    "I'm a software engineer based in Narayanganj, Bangladesh. For the past two years I've worked on live products — trivia and payments at scale, an Islamic lifestyle app, an AI math tutor, plus booking and ed-tech platforms. I tend to own things end to end: backend, frontend, data, and deployment.",
  summary2:
    "Most of my work is TypeScript and Python — React/Next.js up front, NestJS, FastAPI, and Laravel behind it — with a side of applied ML: RAG, agents, and vision models.",
  availability: "Previously at Antimattr Labs (until September 2026). Open to new roles and freelance projects.",
  location: "Narayanganj, Bangladesh",
  phone: "01776346255",
  phoneIntl: "+8801776346255",
  email: "tamim18016@gmail.com",
  github: "https://github.com/ustdtx",
  githubLabel: "github.com/ustdtx",
  codewars: "https://www.codewars.com/users/ustdtx",
  codewarsLabel: "codewars.com/users/ustdtx",
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "Professional" | "Personal";
  company?: string;
  period?: string;
  liveUrl: string;
  liveLabel: string;
  role: string;
  description: string;
  highlights: string[];
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "quizboxbd",
    title: "QuizBoxBD",
    subtitle:
      "Multi-tenant trivia & gamification platform with tournaments, live leaderboards, and multilingual support",
    category: "Professional",
    company: "Antimattr Labs",
    period: "Jul 2025 – Sep 2026",
    liveUrl: "https://www.quizboxbd.com/bn/tournaments",
    liveLabel: "quizboxbd.com",
    role: "Full-stack — backend, frontend, back-office, deploys",
    description:
      "Trivia platform with tournaments and live leaderboards. I helped split it into smaller NestJS services, fixed score and payment bugs that only showed up under load, redid the UI, and built the internal admin tool the staff use every day.",
    highlights: [
      "Restructured monolith into NestJS + MongoDB microservices for independent parallel releases",
      "Fixed leaderboard & payment concurrency with Redis caching and atomic writes",
      "Integrated bKash, BDApps & EPS payments (bKash runs with very few transaction errors)",
      "Full UI overhaul in Astro + end-to-end delivery",
      "Built Appsmith back-office: tenants, questions, quizzes, tournaments, daily player insights, reports",
      "Docker + Kubernetes + GitOps (FluxCD) deployments; agile sprints & code reviews",
    ],
    tech: [
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Next.js",
      "Astro",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
      "Kubernetes",
      "FluxCD",
      "Appsmith",
    ],
    featured: true,
  },
  {
    slug: "amardeen",
    title: "AmarDeen",
    subtitle:
      "Islamic lifestyle app with Quran reader, prayer tools, habit tracking, tasbeeh & Qibla compass",
    category: "Professional",
    company: "Antimattr Labs",
    period: "Jul 2025 – Sep 2026",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.amardeen.app&hl=en",
    liveLabel: "Google Play — AmarDeen",
    role: "Mobile — features, caching, notifications",
    description:
      "Islamic lifestyle app on the Play Store. I fixed up the habit tracker, added a nearby-mosque finder, sorted out caching and push notifications, and put together the audiobook section.",
    highlights: [
      "TanStack Query for data fetching & caching, Zustand for global state",
      "Fixed habit-tracker bugs; built nearest-masjid feature (OpenStreetMap)",
      "Client-side data caching + OneSignal push notifications",
      "Multi-voice TTS audiobook pipeline",
    ],
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "OneSignal",
      "OpenStreetMap",
    ],
    featured: true,
  },
  {
    slug: "lets-math",
    title: "Let's Math",
    subtitle:
      "AI math-learning platform generating narrated, animated video explanations",
    category: "Professional",
    company: "Antimattr Labs",
    period: "Jul 2025 – Sep 2026",
    liveUrl: "https://letsmath.app/child",
    liveLabel: "letsmath.app",
    role: "AI — RAG, agent, video output",
    description:
      "Math tutor that turns curriculum topics into narrated animated videos. I built the retrieval setup so answers stay on syllabus, plus the agent that writes the script and renders it to video.",
    highlights: [
      "Domain-grounded RAG for accurate LLM math explanations",
      "AI agent + tool chain with structured tool calls for video generation",
      "Remotion-synced narration to animated video output",
    ],
    tech: ["Python", "FastAPI", "LangChain", "RAG", "Ollama", "ChromaDB", "Remotion"],
    featured: true,
  },
  {
    slug: "gulshan-club-hall-booking",
    title: "Gulshan Club Hall Booking",
    subtitle:
      "Banquet management system — booking, availability, reporting, analytics & accounting",
    category: "Professional",
    company: "Fleeting Trails",
    period: "Jun 2024 – Jun 2025",
    liveUrl: "https://hallbooking.gulshanclub.com/",
    liveLabel: "hallbooking.gulshanclub.com",
    role: "Sole developer — frontend, backend, database, admin",
    description:
      "Booking system for Gulshan Club's halls. I built the whole thing myself — availability, payments, reports, accounts — and it replaced their paper process.",
    highlights: [
      "Built solo: frontend, backend, database, admin/back-office",
      "SSLCommerz payments, booking/availability engine",
      "Reporting, analytics, accounting & business operations modules",
      "Replaced paper-based process with digital workflow",
    ],
    tech: ["Laravel", "PHP", "React", "Next.js", "MySQL", "SSLCommerz", "Docker"],
    featured: true,
  },
  {
    slug: "symamlaw",
    title: "Symamlaw",
    subtitle:
      "Real-time law education platform — live/recorded classes, courses, exams & resources",
    category: "Professional",
    company: "Fleeting Trails",
    period: "Jun 2024 – Jun 2025",
    liveUrl: "https://symamlaw.com/",
    liveLabel: "symamlaw.com",
    role: "Full-stack — features, performance",
    description:
      "Law learning site with live classes and quizzes. I worked on the app itself and on keeping it stable when a lot of students join at once.",
    highlights: [
      "Frontend + backend development in Laravel/React",
      "Load balancing for concurrent quiz traffic & live sessions",
      "Performance optimization for stability under load",
    ],
    tech: ["Laravel", "PHP", "React", "Node.js", "MySQL", "Docker"],
  },
  {
    slug: "slashed",
    title: "Slashed",
    subtitle: "Offers-discovery app — buckets, nearby offers, shop browsing & price-ranked search",
    category: "Personal",
    period: "Personal project",
    liveUrl: "https://slashed-app-web.vercel.app/",
    liveLabel: "slashed-app-web.vercel.app",
    role: "Side project — web + Android",
    description:
      "You save things you want into buckets, and it pings you when something nearby goes on sale. Also lets you browse shops around you and search by price.",
    highlights: [
      "Category-based buckets + matching-offer notifications",
      "Radius-based shop & item browsing",
      "Price-ranked product search",
      "Web + Android builds",
    ],
    tech: [".NET 8", "Flutter", "REST APIs", "FCM"],
    featured: true,
  },
  {
    slug: "talk2",
    title: "Talk2",
    subtitle: "Social platform centered on moment-to-moment interactions",
    category: "Personal",
    period: "Personal project",
    liveUrl: "https://talk2-ui.vercel.app/",
    liveLabel: "talk2-ui.vercel.app",
    role: "Side project — web",
    description:
      "Small social app built around in-the-moment posts. I paid extra attention to account safety and privacy.",
    highlights: [
      "Moment-to-moment interaction model",
      "Security-conscious product design",
      "Modern Next.js + Go stack",
    ],
    tech: ["Next.js", "Go", "Tailwind CSS", "JWT"],
    featured: true,
  },
  {
    slug: "aibit",
    title: "AiBit",
    subtitle: "Habit-tracking app with AI-powered personal reflections",
    category: "Personal",
    period: "Personal project",
    liveUrl: "https://web-phi-ruddy-97.vercel.app/",
    liveLabel: "web-phi-ruddy-97.vercel.app",
    role: "Side project — web + Android",
    description:
      "Habit tracker that writes you a short reflection based on how the week went.",
    highlights: [
      "Habit tracking + progress analytics",
      "AI-generated personal reflections",
      "Web + Android builds",
    ],
    tech: ["Flutter", ".NET 8", "REST APIs", "AI/LLM"],
  },
];

export const experience = [
  {
    company: "Antimattr Labs",
    title: "Software Engineer",
    type: "Full-Time · Remote",
    period: "July 2025 – September 2026",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "FluxCD",
      "BullMQ",
      "Remotion",
    ],
    bullets: [
      "Restructured a multi-tenant gamified trivia SaaS (QuizBoxBD) into NestJS + MongoDB microservices, enabling independent parallel releases and shorter delivery time.",
      "Fixed leaderboard and payment concurrency issues with caching + atomic writes, improving reliability under concurrent load.",
      "Integrated bKash, BDApps & EPS gateways; bKash integration runs with very few transaction errors.",
      "Extensive debugging + full Astro UI overhaul; backend business logic, UI implementation & data analysis tools.",
      "Built Appsmith back-office: tenants, questions, quizzes, tournaments, daily player insights, reports.",
      "Developed nearest-masjid finder, OneSignal push, multi-voice audiobook pipeline, and FastAPI + LangChain RAG for accurate math explanations.",
      "Agile sprints, code reviews, GitOps deployments with Docker + Kubernetes.",
    ],
  },
  {
    company: "Fleeting Trails",
    title: "Software Engineer",
    type: "Full-Time · Remote",
    period: "June 2024 – June 2025",
    stack: ["TypeScript", "React", "Next.js", "Laravel", "PHP", "MySQL", "SSLCommerz", "Docker"],
    bullets: [
      "Independently designed & built Gulshan Club Hall Booking (Laravel + React): bookings, payments, reporting, accounting — replacing paper process with digital workflow.",
      "Developed features for Symamlaw law-learning platform in Laravel; implemented load balancing + performance optimization for concurrent quiz & live-session traffic.",
    ],
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C#", "Go", "Dart", "PHP", "C", "SQL", "MQL", "RISC-V Assembly"],
  },
  {
    group: "Frontend & Mobile",
    items: ["Next.js", "React", "Astro", "React Native", "Expo", "Flutter", "Tailwind CSS", "Zustand", "TanStack Query"],
  },
  {
    group: "Backend & APIs",
    items: ["NestJS", "Node.js", "FastAPI", ".NET 8", "Laravel", "REST APIs", "JWT", "RBAC", "HMAC", "BullMQ", "Microservices", "Algorithms"],
  },
  {
    group: "AI/ML & Data",
    items: ["PyTorch", "TensorFlow", "LangChain", "Ollama", "Hugging Face Transformers", "OCR", "RAG", "ChromaDB", "MongoDB", "PostgreSQL", "Redis", "DragonflyDB"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "GitOps", "FluxCD", "Cloudflare Workers", "S3/MinIO", "GitHub Actions", "Railway", "Git"],
  },
  {
    group: "Integrations",
    items: ["SSLCommerz", "bKash", "EPS", "BDApps", "Appwrite", "OneSignal", "FCM", "OpenStreetMap", "SMS gateways", "Remotion"],
  },
  {
    group: "Practices",
    items: ["Agile", "Code review", "Unit testing", "Performance optimization", "Technical documentation", "Architecture design"],
  },
];

export const education = [
  {
    school: "BRAC University",
    degree: "B.Sc. in Computer Science",
    period: "2021 – 2026",
    detail: "CGPA 3.07 / 4.00 · Dhaka, Bangladesh",
  },
  {
    school: "Dr. Mahbubur Rahman Mollah College",
    degree: "HSC",
    period: "2020",
    detail: "Narayanganj, Bangladesh",
  },
  {
    school: "Narayanganj Ideal School",
    degree: "SSC",
    period: "2018",
    detail: "Narayanganj, Bangladesh",
  },
];

export const research = [
  {
    title: "Synthetic Image Detection Using CNNs",
    detail:
      "Detecting pixel-level and structural artifacts in AI-generated images. CNN-based approach to distinguish synthetic vs. real imagery.",
  },
  {
    title: "Efficient Time-Conditioned Label Diffusion with Adaptive Local-Global Gating",
    detail:
      "Memory-efficient learning with label diffusion, time-conditioned denoising, and adaptive local-global aggregation.",
  },
];

export const activities = [
  {
    title: "HR Executive, BRAC University Leadership Forum",
    period: "2023 – 2026",
  },
];

export const references = [
  {
    name: "Ariyan Jahangir",
    role: "CEO, Fleeting Trails",
    email: "ariyanjahangireng@gmail.com",
  },
  {
    name: "Navid Anindya Neel",
    role: "Technical Lead, Antimattr Labs",
    email: "navidanindya@gmail.com",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "rag-math-explanations-fastapi-langchain",
    title: "Making a math tutor that sticks to the syllabus",
    excerpt:
      "Letting an LLM teach math sounds easy until it invents its own curriculum. Here's how I kept ours grounded.",
    date: "2026-03-10",
    readingTime: "8 min read",
    tags: ["RAG", "LangChain", "FastAPI", "AI", "Remotion"],
    content: [
      "When I started on the math tutor, the model gave confident answers that had nothing to do with what students were actually supposed to learn. So I stopped treating it as a chatbot and started treating it as a retrieval problem first.",
      "Roughly: the curriculum gets chunked by concept into ChromaDB, FastAPI pulls the relevant passages per question, and LangChain builds a prompt that isn't allowed to wander off. If nothing relevant comes back, it says so instead of guessing.",
      "Then an agent turns the checked explanation into a script plus animation steps, and Remotion renders the narrated video. Chunking by concept instead of fixed length made the biggest difference, and keeping a trace of which passage produced which line turned out to be what teachers actually cared about.",
    ],
  },
  {
    slug: "atomic-writes-live-leaderboards",
    title: "Keeping a live leaderboard correct when everyone submits at once",
    excerpt:
      "Tournament nights broke our scores in ways testing never caught. This is what fixed it.",
    date: "2026-01-22",
    readingTime: "7 min read",
    tags: ["NestJS", "Redis", "MongoDB", "Concurrency"],
    content: [
      "During tournaments, hundreds of players submit within seconds while payments settle in the background. Our first version read a score, added to it, and wrote it back — which works fine until two requests do it at the same time.",
      "The fix was unglamorous: Redis holds the hot leaderboard with short expiry, MongoDB stays the source of truth with atomic updates, and every quiz and payment write carries an idempotency key so retries don't double-count.",
      "I also changed the order to validate, reserve, then commit, and the cache only refreshes from committed rows. Staff reports read the same tables, so what players see finally matched what the office saw.",
    ],
  },
  {
    slug: "nestjs-mongodb-microservices-trivia-saas",
    title: "Splitting a trivia app into services without stopping releases",
    excerpt:
      "Every deploy blocked every team. We carved it up piece by piece instead of rewriting it.",
    date: "2025-11-05",
    readingTime: "9 min read",
    tags: ["NestJS", "Microservices", "MongoDB", "Architecture"],
    content: [
      "The trivia app served several tenants out of one deploy — questions, quizzes, tournaments, payments, all tangled together. Any release meant waiting on everyone.",
      "We pulled it apart around tenants, the question bank, the quiz engine, tournaments, and payments. Each became its own NestJS service with its own collections, talking over versioned contracts with BullMQ in between for background jobs.",
      "No big rewrite: new paths ran behind the gateway next to the old ones, we compared reads until we trusted them, then moved tenants over one at a time. Teams stopped queueing behind each other, which was the whole point.",
    ],
  },
  {
    slug: "react-native-caching-notifications-masjid",
    title: "What kept a big React Native app manageable",
    excerpt:
      "One app, five features, endless ways for state to go wrong. Two rules saved us.",
    date: "2025-09-14",
    readingTime: "6 min read",
    tags: ["React Native", "Expo", "TanStack Query", "Zustand"],
    content: [
      "The app has a Quran reader, prayer times, habit tracking, a counter, and a compass. Early on, everything fetched and stored data its own way, and the habit tracker paid for it in bugs.",
      "We settled on a simple split: TanStack Query owns anything from the server, Zustand owns anything local like UI and preferences. That one decision cleared up most of the tracker issues.",
      "Nearby-mosque search caches results so reopening it feels instant, reminders go through OneSignal, and audiobook chapters cache per chapter. Most of the 'AI feature' work turned out to be caching and state work.",
    ],
  },
  {
    slug: "bkash-sslcommerz-payment-integrations",
    title: "Payments: the boring stuff that actually matters",
    excerpt:
      "Webhooks fire twice, users close the tab mid-payment, gateways time out after charging. Plan for all of it.",
    date: "2025-07-02",
    readingTime: "7 min read",
    tags: ["Payments", "bKash", "SSLCommerz", "Backend"],
    content: [
      "Almost every payment bug I've seen is boring: a duplicate webhook, someone closing the browser halfway, a timeout after the charge already went through.",
      "What I do now: every intent gets an idempotency key, webhooks get verified and applied exactly once, and a nightly job reconciles the gateway report against our own ledger. The hall-booking accounts views come from that same ledger.",
      "And the frontend callback is never the source of truth. The webhook plus reconciliation is.",
    ],
  },
];
