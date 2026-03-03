# Project Showcase — Initial Build

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a clean editorial web app with three tabs — Workflow (how Andrew uses Claude Code), Projects (curated portfolio), and Setup (utility apps) — for sharing with friends.

**Architecture:** Static Next.js App Router site, no database. Content is hardcoded/curated. Three tab routes under a shared sticky nav. Editorial design (Stripe Press feel — clean, readable, centered single-column).

**Tech Stack:** Next.js 15 (App Router), Tailwind CSS v4, TypeScript, Vercel deployment.

---

## Context

- Project lives at `~/Projects/project-showcase`
- No database needed — all content is static/hardcoded
- Projects data comes from `~/Projects/.projects.json` (copy what's needed into the app)
- This is a showcase/prototype — build check + browser verification is sufficient (no mandatory TDD)
- Design reference: clean, editorial, Stripe Press aesthetic

---

### Task 1: Scaffold Next.js project

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `src/` directory

**Step 1: Initialize Next.js app**

```bash
cd ~/Projects/project-showcase
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-git --import-alias "@/*"
```

Expected: Project scaffolded with src/app/, public/, etc.

**Step 2: Verify it builds**

```bash
npm run build
```

Expected: Build succeeds with no errors.

**Step 3: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Next.js project"
```

---

### Task 2: Set up global layout and tab navigation

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `src/app/globals.css`
- Create: `src/components/TabNav.tsx`
- Create: `src/app/workflow/page.tsx` (placeholder)
- Create: `src/app/projects/page.tsx` (placeholder)
- Create: `src/app/setup/page.tsx` (placeholder)
- Modify: `src/app/page.tsx` (redirect to /workflow)

**Step 1: Update globals.css with editorial base styles**

Replace contents of `src/app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --font-sans: 'Inter', system-ui, sans-serif;
}

body {
  @apply bg-white text-gray-900 antialiased;
}
```

**Step 2: Create the TabNav component**

Create `src/components/TabNav.tsx`:

```tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Workflow', href: '/workflow' },
  { label: 'Projects', href: '/projects' },
  { label: 'Setup', href: '/setup' },
];

export function TabNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex gap-0">
          {tabs.map((tab) => {
            const active = pathname.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
                  active
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
```

**Step 3: Update root layout**

Replace `src/app/layout.tsx`:

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TabNav } from '@/components/TabNav';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'How I Build',
  description: 'My Claude Code workflow, projects, and setup',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b border-gray-200">
          <div className="max-w-2xl mx-auto px-6 py-6">
            <h1 className="text-xl font-semibold tracking-tight">How I Build</h1>
            <p className="text-sm text-gray-500 mt-1">My Claude Code workflow, projects, and tools</p>
          </div>
        </header>
        <TabNav />
        <main className="max-w-2xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
```

**Step 4: Root page redirects to /workflow**

Replace `src/app/page.tsx`:

```tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/workflow');
}
```

**Step 5: Create placeholder pages**

Create `src/app/workflow/page.tsx`:
```tsx
export default function WorkflowPage() {
  return <div><h2 className="text-2xl font-bold mb-4">Workflow</h2><p className="text-gray-500">Coming soon.</p></div>;
}
```

Create `src/app/projects/page.tsx`:
```tsx
export default function ProjectsPage() {
  return <div><h2 className="text-2xl font-bold mb-4">Projects</h2><p className="text-gray-500">Coming soon.</p></div>;
}
```

Create `src/app/setup/page.tsx`:
```tsx
export default function SetupPage() {
  return <div><h2 className="text-2xl font-bold mb-4">Setup</h2><p className="text-gray-500">Coming soon.</p></div>;
}
```

**Step 6: Build and verify**

```bash
npm run build
```

Expected: Build succeeds. Visit localhost:3000 and verify tab nav works, redirects to /workflow.

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: layout + sticky tab nav + route placeholders"
```

---

### Task 3: Workflow tab — full narrative content

**Files:**
- Modify: `src/app/workflow/page.tsx`
- Create: `src/components/workflow/Section.tsx`

**Step 1: Create Section component for consistent prose layout**

Create `src/components/workflow/Section.tsx`:

```tsx
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
      <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
```

**Step 2: Write full Workflow page with all 7 sections**

Replace `src/app/workflow/page.tsx` with the full content:

```tsx
import { Section } from '@/components/workflow/Section';

export default function WorkflowPage() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-2">How I Work with Claude Code</h2>
        <p className="text-gray-500">A linear walkthrough of my workflow — from the basics to how the system evolved.</p>
      </div>

      <Section id="what-is-claude-code" title="What Is Claude Code">
        <p>Claude Code is Anthropic's official CLI tool for using Claude as a pair programmer directly in the terminal. Unlike ChatGPT-style chat interfaces, Claude Code has access to your filesystem, can run commands, edit files, search code, and browse the web — it operates as a real agent in your development environment.</p>
        <p className="mt-3">I use it as my primary development tool. I still write code manually for small edits, but for anything involving multiple files, architecture decisions, or building full features, I'm working with Claude Code.</p>
      </Section>

      <Section id="the-stack" title="The Stack">
        <p>My default starting point for any web project:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li><strong>Next.js 15</strong> (App Router) — full-stack framework, easy to deploy</li>
          <li><strong>Tailwind CSS v4</strong> — utility-first styling, no context switching</li>
          <li><strong>TypeScript</strong> — always, even for quick prototypes</li>
          <li><strong>Neon</strong> — serverless Postgres, free via Vercel integration</li>
          <li><strong>Vercel</strong> — deployment, environment variables, preview branches</li>
        </ul>
        <p className="mt-3">For iOS: SwiftUI + CloudKit or a lightweight Vercel API proxy. I've shipped four iOS apps this way.</p>
      </Section>

      <Section id="project-structure" title="Project Structure">
        <p>Every project I work on has two files Claude Code creates and maintains:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li><strong>CLAUDE.md</strong> — the project's "briefing doc." Tech stack, commands to run, file structure, rules. Claude reads this at the start of every session.</li>
          <li><strong>PROGRESS.md</strong> — session log. What was done, what's next. Auto-updated by the <code>/done</code> command.</li>
        </ul>
        <p className="mt-3">I also have a global <code>~/.claude/CLAUDE.md</code> with rules that apply everywhere — preferences, model strategy, startup behavior, agent dispatch rules.</p>
        <p className="mt-3">All projects are tracked in <code>~/Projects/.projects.json</code> — a master registry with status, last worked date, deployment URLs, and descriptions. On every session start, Claude reads this file and shows me the list.</p>
      </Section>

      <Section id="agents" title="Agents">
        <p>Claude Code can spawn sub-agents — separate Claude instances with their own context and tool access. I've built a library of named agents for specific jobs. When dispatching one, I announce it: <em>"Calling my friend [Agent Name] in to help."</em></p>
        <div className="mt-3 space-y-3">
          {[
            { name: 'brainstormer', desc: 'Explores requirements, asks questions, presents architecture options before any code is written. Always the first call for new features.' },
            { name: 'project-resumer', desc: 'Reads PROGRESS.md and recent commits, briefs me on where a project left off. Run at the start of any resumed session.' },
            { name: 'implementer', desc: 'Executes a written implementation plan task-by-task, commits frequently, self-reviews.' },
            { name: 'code-reviewer', desc: 'Reviews code for spec compliance, logic, quality, and test coverage.' },
            { name: 'security-reviewer', desc: 'Scans for OWASP top 10, exposed secrets, auth flaws.' },
            { name: 'performance-reviewer', desc: 'Checks for slow queries, bundle bloat, render inefficiencies.' },
            { name: 'compound-docs', desc: 'After solving a hard problem, captures it as searchable documentation so the same issue never costs time twice.' },
          ].map((agent) => (
            <div key={agent.name} className="pl-4 border-l-2 border-gray-200">
              <p className="font-medium text-gray-900"><code>{agent.name}</code></p>
              <p className="text-sm text-gray-600 mt-0.5">{agent.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills-and-commands" title="Skills & Commands">
        <p>Skills are reusable prompt modules — structured instructions Claude loads on demand. Slash commands invoke them. The ones I use most:</p>
        <div className="mt-3 space-y-3">
          {[
            { cmd: '/done', desc: 'End-of-session wrap-up. Updates PROGRESS.md, commits everything, renames the conversation to [Project] — S[N]: [summary] — date.' },
            { cmd: '/preflight', desc: 'Pre-ship check. Runs build, opens the app in a browser, takes screenshots at desktop and mobile widths. Reports pass/fail with evidence.' },
            { cmd: '/review-suite', desc: 'Dispatches all three code reviewers in parallel (code, security, performance).' },
            { cmd: '/brainstorming', desc: 'Opens the brainstorming skill — one question at a time, then presents a design in sections for validation.' },
            { cmd: '/writing-plans', desc: 'Turns a validated design into a bite-sized implementation plan saved to docs/plans/.' },
          ].map((item) => (
            <div key={item.cmd} className="pl-4 border-l-2 border-gray-200">
              <p className="font-medium text-gray-900 font-mono text-sm">{item.cmd}</p>
              <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="hooks-and-automation" title="Hooks & Automation">
        <p>Claude Code supports hooks — shell commands that run automatically in response to events (session start, tool use, etc.). My setup:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li><strong>SessionStart hook</strong> — reads <code>.projects.json</code>, displays the project list grouped by category.</li>
          <li><strong>PreToolUse hooks</strong> — lightweight guards on TaskUpdate and Bash calls.</li>
        </ul>
        <p className="mt-3">One thing I learned the hard way: <strong>Stop hooks don't work reliably.</strong> Prompt-type hooks on the Stop event cause JSON validation errors consistently. I use CLAUDE.md rules for anything I want to happen at the end of a session instead.</p>
        <p className="mt-3">The session naming system is also automated — after the first meaningful action in a session, Claude renames the conversation to <code>[Project] — S[N]: [description] — YYYY-MM-DD</code>. Session numbers are incremented by reading PROGRESS.md.</p>
      </Section>

      <Section id="settings-and-evolution" title="Settings & Evolution">
        <p>My global CLAUDE.md has gone through many iterations. A few things that evolved:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li><strong>Model strategy</strong> — I added a model tier system: Opus for architecture/review (deep reasoning), Sonnet for implementation (fast and capable), Haiku for quick lookups. This meaningfully reduced cost and latency.</li>
          <li><strong>Question format</strong> — standardized to <code>AskUserQuestion</code> with multi-choice tabs. Claude used to ask clarifying questions as free text; now it batches them into structured forms.</li>
          <li><strong>YAGNI enforcement</strong> — added explicit rules against over-engineering. Claude would add error handling, abstractions, and fallbacks that weren't needed. The rule: minimum complexity for the current task.</li>
          <li><strong>Session checkpoints</strong> — added the rule to confirm the session deliverable at start: <em>"The goal for this session is X. I'll tell you when that's done before moving on."</em></li>
          <li><strong>Auto-memory</strong> — Claude maintains a <code>/memory/</code> directory with topic files (Neon patterns, Next.js patterns, debugging insights). These persist across sessions and get updated as new patterns emerge.</li>
        </ul>
        <p className="mt-3">The system keeps getting better because Claude itself maintains the docs. When something breaks or takes too long, I capture it. The rule: if you solved something hard, document it immediately.</p>
      </Section>
    </div>
  );
}
```

**Step 3: Install Tailwind typography plugin for prose styles**

```bash
npm install -D @tailwindcss/typography
```

Update `tailwind.config.ts` to include the plugin, or add to `globals.css` if using CSS-based config.

**Step 4: Build and verify**

```bash
npm run build
```

Expected: Build succeeds. Workflow tab shows all 7 sections with clean prose styling.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: workflow tab with full narrative content"
```

---

### Task 4: Projects tab — data + card components

**Files:**
- Create: `src/lib/projects.ts` (project data + types)
- Create: `src/components/projects/ProjectCard.tsx`
- Create: `src/components/projects/ProjectLineItem.tsx`
- Create: `src/components/projects/ProjectGroup.tsx`

**Step 1: Create the project data file**

Create `src/lib/projects.ts` with typed project data. Copy the structure from `~/Projects/.projects.json`, but only include fields needed for display. Start with all projects as `lineItem` type:

```ts
export type ProjectType = 'liveLink' | 'recap' | 'lineItem';

export interface Project {
  name: string;
  description: string;
  type: ProjectType;
  deployment?: string;
  appStoreUrl?: string;
  techStack?: string[];
  screenshots?: string[]; // paths to public/screenshots/
  writeup?: string; // longer markdown for recap cards
  lastWorked?: string;
}

export interface ProjectGroup {
  label: string;
  projects: Project[];
}

export const projectGroups: ProjectGroup[] = [
  {
    label: 'Consulting',
    projects: [
      { name: 'Dossier', description: 'Consulting command center — multiple research wikis for client meetings. Agent-driven research, editorial design, custom interactive models.', type: 'lineItem', lastWorked: '2026-03-01' },
      { name: 'Merch Agency (Factum Studio)', description: 'Physical goods & experiences agency operational platform. Three zones: internal OS, client dashboard, Shopify operations.', type: 'lineItem', deployment: 'https://factum-studio.vercel.app', lastWorked: '2026-03-02' },
      { name: 'Factum Studio Site', description: 'Marketing site for Factum Studio merch agency.', type: 'lineItem', deployment: 'https://factum-studio-site.vercel.app', lastWorked: '2026-02-23' },
      { name: 'Mobile Gaming Growth Research', description: 'Growth marketing research pack + interactive playbook for a new puzzle game studio.', type: 'lineItem', lastWorked: '2026-02-09' },
    ],
  },
  {
    label: 'iOS Apps',
    projects: [
      { name: 'Passaround', description: 'Bill-splitting iOS app — scan receipts, voice claims, Venmo QR codes.', type: 'lineItem', lastWorked: '2026-02-27' },
      { name: 'Frend', description: 'Social games iOS app — Ranker, Drafter, and Convo. Group party games.', type: 'lineItem', lastWorked: '2026-03-02' },
      { name: 'Sponsio', description: 'iOS betting app for habit challenges and one-time predictions with friends.', type: 'lineItem', lastWorked: '2026-02-28' },
    ],
  },
  {
    label: 'Intelligems',
    projects: [
      { name: 'Benchmarker', description: 'Design research tool — capture competitor screenshots + HTML/CSS, tag metadata, organize collections, export design briefs.', type: 'lineItem', deployment: 'https://benchmarker-steel.vercel.app', lastWorked: '2026-02-28' },
      { name: 'Intelligems Slack Tools', description: 'White-label A/B test monitoring platform. Next.js + Drizzle + Neon + NextAuth.', type: 'lineItem', lastWorked: '2026-02-10' },
    ],
  },
  {
    label: 'Jambys',
    projects: [
      { name: 'Jambys x GQ Collab', description: 'GQ Box House Hoodie campaign operations dashboard — orders, upsells, forecast, inventory.', type: 'lineItem', deployment: 'https://jambys-gq-collab.vercel.app', lastWorked: '2026-02-23' },
      { name: 'Jambys x 260 Sample Sale', description: 'Sample sale merchandising — inventory/pricing management and order operations.', type: 'lineItem', lastWorked: '2026-02-23' },
      { name: 'Klaviyo Migration', description: 'Email marketing audit and flow strategy for Jambys transactional emails.', type: 'lineItem', lastWorked: '2026-02-28' },
    ],
  },
  {
    label: 'Personal',
    projects: [
      { name: 'Futures', description: 'Interactive idea presentation — share future work ideas with close friends for honest feedback. Scorecard with self-ratings, reaction-based feedback, star picks.', type: 'lineItem', deployment: 'https://futures-sage.vercel.app', lastWorked: '2026-03-02' },
      { name: 'Tax Prep', description: 'Personal tax document organizer and accountant handoff tool.', type: 'lineItem', deployment: 'https://tax-prep.vercel.app', lastWorked: '2026-02-27' },
      { name: 'Photo Archive', description: 'Consolidating ~20TB of photography (9x 2TB drives) into a tiered archive.', type: 'lineItem', lastWorked: '2026-02-23' },
    ],
  },
  {
    label: 'SaaS & Games',
    projects: [
      { name: 'Ad Ops', description: 'Unified ad operations platform — 6 modules covering create, launch, analyze, strategize, automate. Meta-only, built for a small power-user team.', type: 'lineItem', deployment: 'https://ad-ops-kappa.vercel.app', lastWorked: '2026-03-01' },
      { name: 'Mouth God', description: 'Celebrity guessing game — identify celebrities by their mouth. Pixel art theme.', type: 'lineItem', deployment: 'https://mouthgod.com', lastWorked: '2026-03-03' },
      { name: 'Brand Guide', description: 'Editorial website + interactive Brand Builder — 5 chapters on brand methodology + guided workbook.', type: 'lineItem', deployment: 'https://brand-guide-vert.vercel.app', lastWorked: '2026-03-01' },
    ],
  },
  {
    label: 'Utilities & Infrastructure',
    projects: [
      { name: 'Personal OS PWA', description: 'Next.js PWA chat interface with Command Center — 4-tab productivity hub (Today, Projects, Activity, Time).', type: 'lineItem', deployment: 'https://personal-os-pwa.vercel.app', lastWorked: '2026-03-03' },
      { name: 'Visualizer', description: 'Interactive D3.js visualization platform exploring mental models, datasets, and concepts.', type: 'lineItem', deployment: 'https://visualizer-ten-sandy.vercel.app', lastWorked: '2026-03-03' },
      { name: 'Data Cleanup Dashboard', description: 'Terminal-aesthetic dashboard tracking a 9-drive cleanup and archive pipeline.', type: 'lineItem', deployment: 'https://data-cleanup-dashboard.vercel.app', lastWorked: '2026-02-23' },
      { name: 'Project Health Dashboard', description: 'Health status dashboard for all active projects — staleness, dependency freshness, deploy status.', type: 'lineItem', deployment: 'https://project-health-dashboard-beryl.vercel.app', lastWorked: '2026-02-28' },
    ],
  },
];
```

**Step 2: Create LineItem component**

Create `src/components/projects/ProjectLineItem.tsx`:

```tsx
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/projects';

export function ProjectLineItem({ project }: { project: Project }) {
  return (
    <div className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex-1 min-w-0">
        <span className="font-medium text-gray-900 text-sm">{project.name}</span>
        <span className="text-gray-500 text-sm ml-2">{project.description}</span>
      </div>
      {project.deployment && (
        <a
          href={project.deployment}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-600"
        >
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}
```

**Step 3: Create LiveLink card component**

Create `src/components/projects/ProjectCard.tsx`:

```tsx
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/projects';

export function ProjectCard({ project }: { project: Project }) {
  if (project.type === 'lineItem') return null;

  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{project.name}</h3>
        <div className="flex gap-2 ml-4 flex-shrink-0">
          {project.deployment && (
            <a href={project.deployment} target="_blank" rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1 border border-gray-200 rounded px-2 py-1">
              Visit <ExternalLink size={11} />
            </a>
          )}
          {project.appStoreUrl && (
            <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1 border border-gray-200 rounded px-2 py-1">
              App Store <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {project.screenshots.map((src) => (
            <img key={src} src={src} alt="" className="h-32 rounded border border-gray-100 object-cover flex-shrink-0" />
          ))}
        </div>
      )}
      {project.writeup && (
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">{project.writeup}</p>
      )}
      {project.techStack && (
        <div className="flex gap-1.5 mt-3 flex-wrap">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-xs bg-gray-100 text-gray-600 rounded px-2 py-0.5">{tech}</span>
          ))}
        </div>
      )}
    </div>
  );
}
```

**Step 4: Create ProjectGroup component**

Create `src/components/projects/ProjectGroup.tsx`:

```tsx
import { ProjectCard } from './ProjectCard';
import { ProjectLineItem } from './ProjectLineItem';
import type { ProjectGroup as ProjectGroupType } from '@/lib/projects';

export function ProjectGroup({ group }: { group: ProjectGroupType }) {
  const cards = group.projects.filter((p) => p.type !== 'lineItem');
  const lineItems = group.projects.filter((p) => p.type === 'lineItem');

  return (
    <section className="mb-10">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">{group.label}</h2>
      {cards.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
      {lineItems.length > 0 && (
        <div>
          {lineItems.map((project) => (
            <ProjectLineItem key={project.name} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
```

**Step 5: Install lucide-react**

```bash
npm install lucide-react
```

**Step 6: Build and verify**

```bash
npm run build
```

Expected: Build succeeds.

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: project data layer + card/lineitem/group components"
```

---

### Task 5: Projects tab — wire up the page

**Files:**
- Modify: `src/app/projects/page.tsx`

**Step 1: Replace placeholder with real Projects page**

```tsx
import { projectGroups } from '@/lib/projects';
import { ProjectGroup } from '@/components/projects/ProjectGroup';

export default function ProjectsPage() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Projects</h2>
        <p className="text-gray-500">A mix of consulting work, iOS apps, internal tools, and personal experiments — all built with Claude Code.</p>
      </div>
      {projectGroups.map((group) => (
        <ProjectGroup key={group.label} group={group} />
      ))}
    </div>
  );
}
```

**Step 2: Build and verify**

```bash
npm run build
```

Expected: Projects tab renders all groups and projects.

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: projects tab with all groups rendered"
```

---

### Task 6: Setup tab

**Files:**
- Modify: `src/app/setup/page.tsx`
- Create: `src/lib/setup.ts`

**Step 1: Create the setup data**

Create `src/lib/setup.ts`:

```ts
export interface App {
  name: string;
  category: string;
  tagline: string;
  why: string;
  url: string;
}

export const apps: App[] = [
  {
    name: 'Alfred',
    category: 'Launcher',
    tagline: 'Spotlight replacement with workflows and clipboard history',
    why: "My command center for everything. Clipboard history alone saves hours — I can recall anything I copied in the last month. Custom workflows for launching projects, opening files, and running scripts.",
    url: 'https://www.alfredapp.com',
  },
  {
    name: 'Magnet',
    category: 'Window Management',
    tagline: 'Drag windows to screen edges to snap and resize',
    why: "Simple keyboard shortcuts for half-screen, full-screen, and corner snapping. I use it dozens of times a day without thinking about it.",
    url: 'https://magnet.crowdcafe.com',
  },
  {
    name: 'Tailscale',
    category: 'Network',
    tagline: 'Mesh VPN connecting all your devices over a private network',
    why: "I run a Mac Mini as a home server. Tailscale means I can SSH into it, access local services, and transfer files from anywhere — my MacBook Pro and iPhone are always on the same private network.",
    url: 'https://tailscale.com',
  },
  {
    name: 'CleanShot X',
    category: 'Screenshots',
    tagline: 'Screenshot and screen recording tool with annotation and cloud upload',
    why: "Replaces macOS's default screenshot tools entirely. Scrolling capture, video recording, annotation, and instant cloud links. I use it constantly when building UIs — screenshot, annotate, share.",
    url: 'https://cleanshot.com',
  },
  {
    name: 'Clop',
    category: 'Compression',
    tagline: 'Automatic image and video compression on copy/paste',
    why: "Sits in the menu bar and automatically compresses images and videos as I move them around. Zero friction — I copy a screenshot, it compresses in the background, the smaller version lands in my clipboard.",
    url: 'https://lowtechguys.com/clop',
  },
  {
    name: 'Screens 5',
    category: 'Remote Desktop',
    tagline: 'VNC client for macOS — remote control any Mac',
    why: "I use this with Tailscale to connect to my Mac Mini. When I need to run something on the server that isn't SSH-accessible, I open Screens and get a full GUI session.",
    url: 'https://www.edovia.com/en/screens-mac/',
  },
  {
    name: 'Granola',
    category: 'Meetings',
    tagline: 'AI meeting notes that run locally alongside any call',
    why: "Records and transcribes meetings in the background. After a call, I have a structured summary with action items. I barely take notes manually anymore — Granola handles it.",
    url: 'https://granola.ai',
  },
];
```

**Step 2: Write the Setup page**

Replace `src/app/setup/page.tsx`:

```tsx
import { ExternalLink } from 'lucide-react';
import { apps } from '@/lib/setup';

export default function SetupPage() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-2">My Setup</h2>
        <p className="text-gray-500">The utility apps that make the workflow possible — things I'd miss immediately if they disappeared.</p>
      </div>

      <div className="space-y-8">
        {apps.map((app) => (
          <div key={app.name} className="border-b border-gray-100 pb-8 last:border-0">
            <div className="flex items-start justify-between mb-1">
              <div>
                <span className="font-semibold text-gray-900">{app.name}</span>
                <span className="ml-2 text-xs text-gray-400 uppercase tracking-wider">{app.category}</span>
              </div>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1"
              >
                {app.url.replace('https://', '').split('/')[0]} <ExternalLink size={11} />
              </a>
            </div>
            <p className="text-sm text-gray-500 mb-2 italic">{app.tagline}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{app.why}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

**Step 3: Build and verify**

```bash
npm run build
```

Expected: Setup tab renders all 7 apps cleanly.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: setup tab with 7 utility apps"
```

---

### Task 7: Polish and deploy

**Files:**
- Modify: `src/app/layout.tsx` (meta tags, favicon)
- Create: `vercel.json` (optional, for clean deploys)

**Step 1: Final build check**

```bash
npm run build && npm run lint
```

Expected: No errors, no warnings.

**Step 2: Create GitHub repo and push**

```bash
cd ~/Projects/project-showcase
git remote add origin https://github.com/bobbyteenager89/project-showcase.git
git push -u origin main
```

(Create the repo on GitHub first if it doesn't exist.)

**Step 3: Deploy to Vercel**

```bash
vercel --prod
```

Or connect via Vercel dashboard → Import Git Repository.

**Step 4: Verify deployed site**

Visit the Vercel URL. Check:
- [ ] All three tabs navigate correctly
- [ ] Workflow tab renders all 7 sections
- [ ] Projects tab shows all groups
- [ ] Setup tab shows all 7 apps
- [ ] External links open in new tab
- [ ] Mobile layout is readable

**Step 5: Final commit**

```bash
git add -A
git commit -m "feat: deployed project showcase v1"
```

---

## What's Not In This Plan (By Design)

- **Database** — not needed, all content is static
- **Auth** — not needed, this is a public/shareable link
- **Search** — not needed for this audience size
- **Project detail pages** — content lives on cards, not sub-pages
- **CMS** — content is edited directly in `src/lib/projects.ts`

---

## Post-Build: Curation Phase

After the scaffold is live, go through projects one by one:
1. Decide type: `liveLink` | `recap` | `lineItem`
2. For `recap`: add `screenshots` (drop files in `public/screenshots/`), `writeup`, `techStack`, `appStoreUrl`
3. For `liveLink`: add `deployment` URL and `techStack`
4. Update `src/lib/projects.ts` per project

This happens iteratively after the initial build.
