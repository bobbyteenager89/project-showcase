export type ProjectStatus = "Live" | "In Progress" | "Concept";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  tech: string[];
  problem: string;
  solution: string;
  overview: string;
  features: string[];
  screenshots: string[];
  heroScreenshot: string;
  liveUrl?: string;
  githubUrl?: string;
  statusNote?: string;
}

export const projects: Project[] = [
  {
    slug: "dossier",
    name: "Dossier",
    tagline: "Research intelligence platform for brand analysis",
    status: "In Progress",
    tech: [
      "Next.js",
      "React 19",
      "Tailwind v4",
      "Nivo Charts",
      "Framer Motion",
      "Vercel",
    ],
    problem:
      "Brand research is scattered across docs, spreadsheets, and analyst reports. There's no single place to synthesize competitive intelligence, financial models, and expert perspectives into a coherent picture.",
    solution:
      "An all-in-one research platform that brings together financial models, competitive analysis, and expert perspectives into interactive, explorable dossiers. Each dossier is a living document that can be shared with stakeholders.",
    overview:
      "Dossier is a research intelligence platform that transforms scattered brand analysis into interactive, explorable reports. It combines financial modeling, competitive landscape mapping, and expert perspective synthesis into a single interface.",
    features: [
      "Interactive financial models with real-time parameter adjustment",
      "Competitive landscape mapping and positioning analysis",
      "Unit economics waterfall visualization",
      "Subscription mix analysis and scenario planning",
      "Expert perspective synthesis from multiple sources",
      "Fully responsive design with mobile-optimized views",
    ],
    screenshots: [
      "/screenshots/dossier-dashboard.png",
      "/screenshots/dossier-overview.png",
      "/screenshots/dossier-waterfall.png",
      "/screenshots/dossier-unit-economics.png",
      "/screenshots/dossier-marketing-channels.png",
      "/screenshots/dossier-expert-perspectives.png",
    ],
    heroScreenshot: "/screenshots/dossier-dashboard.png",
    statusNote:
      "Core platform built with one complete dossier. Expanding template system and adding new dossier types.",
  },
  {
    slug: "merch-agency",
    name: "Merch Agency (Factum Studio)",
    tagline: "Custom merchandise agency platform",
    status: "Live",
    tech: [
      "Next.js 16",
      "Tailwind",
      "Drizzle ORM",
      "Neon Postgres",
    ],
    problem:
      "Custom merch agencies need a professional web presence combined with internal project management tools. Most end up cobbling together a Squarespace site, a Notion workspace, and scattered Google Docs.",
    solution:
      "A full agency platform with public-facing site, internal wiki CMS, project OS for managing client work, and client-facing pitch builder views. Everything in one codebase.",
    overview:
      "Factum Studio is a complete agency platform built for a custom merchandise business. It combines a marketing site, internal knowledge base, project management, and client pitch tools into a single Next.js application with 97+ dynamic pages.",
    features: [
      "97+ dynamic pages generated from structured data",
      "HMAC authentication for secure admin access",
      "Wiki CMS for internal knowledge management",
      "Client-facing pitch builder with shareable views",
      "Research library with categorized resources",
      "Full responsive design across all page types",
    ],
    screenshots: [
      "/screenshots/review-homepage.png",
      "/screenshots/wiki-page.png",
      "/screenshots/products-page.png",
      "/screenshots/playbook-dashboard.png",
    ],
    heroScreenshot: "/screenshots/review-homepage.png",
    statusNote: "Live and in active use. Ongoing content updates and feature additions.",
  },
  {
    slug: "passaround",
    name: "Passaround",
    tagline: "iOS social recording app",
    status: "Live",
    tech: [
      "SwiftUI",
      "Claude API",
      "Deepgram",
      "Fastlane",
    ],
    problem:
      "Group conversations produce great moments, insights, and inside jokes that nobody captures. By the time you think to write it down, the moment is gone.",
    solution:
      "A social recording app that captures conversations, transcribes them in real-time, and uses AI to surface the best highlights. Share conversation moments with friends like sharing a photo.",
    overview:
      "Passaround is an iOS app that turns group conversations into shareable highlights. It records, transcribes in real-time using Deepgram, and uses Claude to identify the most interesting moments for sharing.",
    features: [
      "Real-time speech-to-text transcription via Deepgram",
      "AI-powered highlight extraction using Claude",
      "Share cards for conversation moments",
      "Friend groups for targeted sharing",
      "99 unit tests for reliability",
      "Fastlane-automated App Store deployment",
    ],
    screenshots: [],
    heroScreenshot: "",
    statusNote: "In App Store review. 99 unit tests passing.",
  },
  {
    slug: "sponsio",
    name: "Sponsio",
    tagline: "iOS prediction and challenge app",
    status: "In Progress",
    tech: ["SwiftUI", "CloudKit"],
    problem:
      "Friends constantly make predictions and friendly bets but never track them. Who said what, who was right, and what was at stake all gets lost.",
    solution:
      "A native iOS app for creating challenges, making predictions, and tracking outcomes. CloudKit keeps everything synced, and Mixpanel tracks engagement patterns.",
    overview:
      "Sponsio is an iOS app for tracking predictions and challenges between friends. Create a challenge, invite friends to make their predictions, and settle up when the outcome is known.",
    features: [
      "CloudKit sync for seamless multi-device support",
      "Mixpanel analytics for engagement tracking",
      "Challenge creation with customizable stakes",
      "Prediction tracking with outcome resolution",
      "Friend management and invite system",
      "Push notification support for challenge updates",
    ],
    screenshots: [],
    heroScreenshot: "",
    statusNote: "In TestFlight with beta testers. Iterating on CloudKit sync reliability.",
  },
  {
    slug: "frend",
    name: "Frend",
    tagline: "iOS draft challenge game",
    status: "In Progress",
    tech: [
      "SwiftUI",
      "Hono API",
      "Neon Postgres",
      "Apple Sign In",
    ],
    problem:
      "Fantasy sports drafts are the most fun part of fantasy leagues, but they only happen once a year and aren't easy to do casually with friends.",
    solution:
      "Head-to-head draft challenges delivered via iMessage. Pick your squad, challenge a friend, and see who drafted better when the results come in.",
    overview:
      "Frend brings the excitement of fantasy drafts to casual, head-to-head challenges between friends. Built as a native iOS app with an iMessage extension, it uses a PairwiseMergeSort algorithm for ranking and a Hono API backend.",
    features: [
      "PairwiseMergeSort algorithm for fair player ranking",
      "iMessage extension for seamless challenge delivery",
      "Real-time API built with Hono on edge functions",
      "Apple Sign In for frictionless authentication",
      "Neon Postgres for persistent game state",
      "Head-to-head and group draft formats",
    ],
    screenshots: [],
    heroScreenshot: "",
    statusNote: "Core draft mechanic and API built. iMessage extension in development.",
  },
  {
    slug: "personal-os",
    name: "Personal OS",
    tagline: "AI assistant dashboard",
    status: "In Progress",
    tech: [
      "Next.js 16",
      "React 19",
      "Supabase",
      "WebSocket",
    ],
    problem:
      "Managing daily tasks across calendars, messages, and to-do apps is fragmented. Context-switching between tools kills productivity.",
    solution:
      "A unified AI-powered dashboard with five specialized agents, each handling a different domain of daily life. Real-time updates via WebSocket keep everything in sync.",
    overview:
      "Personal OS is a unified dashboard powered by five AI agents: Bastian (strategy), Morgan (operations), Kit (creative), Jules (social), and Sasha (wellness). Each agent specializes in a domain and communicates in real-time.",
    features: [
      "5 specialized AI agents with distinct personalities",
      "WebSocket real-time communication layer",
      "Dark and light mode with system preference detection",
      "Supabase backend for persistent state",
      "Agent-to-agent coordination for complex tasks",
      "Mobile-responsive dashboard layout",
    ],
    screenshots: [],
    heroScreenshot: "",
    statusNote: "Agent framework and dashboard built. Expanding agent capabilities and integrations.",
  },
  {
    slug: "brand-guide",
    name: "Brand Guide",
    tagline: "Interactive brand playbook builder",
    status: "In Progress",
    tech: [
      "Next.js 16",
      "Tailwind v4",
      "MDX",
      "Claude API",
      "Resend",
    ],
    problem:
      "Brand guidelines live in scattered PDFs that nobody reads. When teams need brand info, they guess or ask someone who guesses.",
    solution:
      "An interactive, searchable brand playbook that teams actually use. AI-powered builder helps create comprehensive guides from existing brand assets.",
    overview:
      "Brand Guide transforms static brand PDFs into interactive, searchable playbooks. The AI builder helps teams create comprehensive brand guides, and the MDX-based chapter system makes content easy to maintain and extend.",
    features: [
      "MDX-based chapter system for rich content",
      "AI-powered guide builder using Claude",
      "Authentication for team access control",
      "Resend email integration for invitations",
      "Full-text search across all brand content",
      "Responsive reading experience on any device",
    ],
    screenshots: [
      "/screenshots/brand-guide-landing.png",
      "/screenshots/brand-guide-chapter01.png",
    ],
    heroScreenshot: "/screenshots/brand-guide-landing.png",
    statusNote: "Builder flow and chapter system complete. Adding search and collaboration features.",
  },
  {
    slug: "benchmarker",
    name: "Benchmarker",
    tagline: "Marketing benchmarking tool",
    status: "In Progress",
    tech: [
      "Next.js 15",
      "Neon Postgres",
      "Drizzle ORM",
      "Vercel Blob",
    ],
    problem:
      "Marketing teams lack an easy way to benchmark their creative and metrics against competitors. Screenshots pile up in folders with no structure.",
    solution:
      "Upload competitor screenshots, organize by category, and compare metrics side-by-side. Build a structured competitive intelligence library over time.",
    overview:
      "Benchmarker is a marketing tool for organizing competitive intelligence. Teams upload screenshots of competitor ads, emails, and landing pages, categorize them, and track performance metrics for benchmarking.",
    features: [
      "Screenshot upload and organization via Vercel Blob",
      "Category-based competitive library",
      "Side-by-side metric comparison",
      "Drizzle ORM with Neon Postgres backend",
      "Team collaboration and sharing",
      "Export and reporting capabilities",
    ],
    screenshots: [],
    heroScreenshot: "",
    statusNote: "Core upload and categorization built. Adding comparison views and team features.",
  },
  {
    slug: "castle-defense-fellowship",
    name: "Castle Defense Fellowship",
    tagline: "Browser-based tower defense game",
    status: "Concept",
    tech: ["HTML Canvas", "JavaScript", "Web Audio API"],
    problem:
      "Classic WC3-style tower defense games don't exist on the web. The genre is locked behind desktop clients and app stores.",
    solution:
      "A browser-based tower defense game with fellowship mechanics. No downloads, no installs. Just open a tab and defend your castle.",
    overview:
      "Castle Defense Fellowship is a love letter to classic Warcraft III tower defense maps, rebuilt for the browser. It features fellowship-based unit mechanics, wave progression, and a hand-crafted pixel aesthetic.",
    features: [
      "Canvas-based rendering for smooth performance",
      "Fellowship unit mechanics with synergy bonuses",
      "Progressive wave difficulty system",
      "Web Audio API for immersive sound design",
      "No install required, runs in any modern browser",
      "Retro pixel art aesthetic inspired by WC3 custom maps",
    ],
    screenshots: [
      "/screenshots/wc3-game-hud-clean.png",
      "/screenshots/wc3-menu-v3.png",
    ],
    heroScreenshot: "/screenshots/wc3-game-hud-clean.png",
    statusNote: "Game design document and menu system complete. Core gameplay loop in development.",
  },
  {
    slug: "htfeo",
    name: "HTFEO",
    tagline: "How to Fire Everyone Online - interactive book and tools",
    status: "In Progress",
    tech: ["Next.js", "Tailwind"],
    problem:
      "People want to learn how to build and run businesses with AI tools, but traditional books can't include interactive demonstrations.",
    solution:
      "An interactive online book with embedded tools like tax calculators and business model planners. Learn by reading, then immediately apply with built-in utilities.",
    overview:
      "HTFEO (How to Fire Everyone Online) is an interactive book about building AI-powered businesses. Each chapter includes embedded tools and calculators so readers can apply concepts immediately.",
    features: [
      "Interactive chapter-based reading experience",
      "Embedded tax calculator for business planning",
      "Responsive design for reading on any device",
      "Progressive content with practical exercises",
      "Clean typography optimized for long-form reading",
      "Tool integrations within the narrative flow",
    ],
    screenshots: [
      "/screenshots/htfeo-landing-page.png",
      "/screenshots/htfeo-chapter1-full.png",
      "/screenshots/htfeo-tax-calculator.png",
    ],
    heroScreenshot: "/screenshots/htfeo-landing-page.png",
    statusNote: "Landing page and first chapter built with embedded tax calculator.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
