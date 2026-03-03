# Project Showcase — Progress Log

## Project
A personal meta-project showcasing how Andrew works with Claude Code — workflow, project portfolio, and tool setup. Three-tab web app for sharing with friends.

**Deployment:** https://project-showcase-silk.vercel.app
**Repo:** https://github.com/bobbyteenager89/project-showcase

---

## 2026-03-03 — Session 1: Initial build + retro OS design

### Accomplished
- Brainstormed and designed three-tab structure (Workflow, Projects, Setup) with editorial aesthetic
- Wrote implementation plan to `docs/plans/2026-03-03-initial-build.md`
- Executed plan via subagent-driven development (7 tasks, spec + quality review per task)
- Scaffolded Next.js 16 project with TypeScript, Tailwind v4, App Router
- Built layout with sticky header (`RetroHeader`) + live clock (`Clock`) + bottom dock nav (`DockNav`)
- Built `Window` component with traffic lights, title bar, and CSS float animation
- Wrote full Workflow tab — 7 narrative sections (What Is Claude Code, The Stack, Project Structure, Agents, Skills & Commands, Hooks & Automation, Settings & Evolution)
- Agents section updated to show all 15 agents with numbered prefixes (00–13)
- Built Projects tab — 7 groups, 22 projects from `.projects.json`, all as line items (curation pending)
- Built Setup tab — 7 utility apps (Alfred, Magnet, Tailscale, CleanShot X, Clop, Screens 5, Granola)
- Applied retro OS design: diagonal stripe background, Space Grotesk + Space Mono fonts, hard drop shadows, brutalist borders, window chrome
- Deployed to Vercel via GitHub integration (font fix required: Space Grotesk not Space Grotesque)
- Preflight passed: all 3 tabs verified at desktop + mobile, no console errors

### Files Modified
| File | Changes |
|------|---------|
| `src/app/globals.css` | Design system variables, diagonal stripe body, float keyframes, reduced-motion guard |
| `src/app/layout.tsx` | Space Grotesk + Space Mono fonts, RetroHeader + DockNav |
| `src/app/workflow/page.tsx` | Full 7-section narrative, Window chrome, all 15 agents numbered |
| `src/app/projects/page.tsx` | Breadcrumb chip + Window chrome + all project groups |
| `src/app/setup/page.tsx` | Window chrome + 7 utility apps |
| `src/components/Clock.tsx` | Live clock client component |
| `src/components/RetroHeader.tsx` | Sticky header with logo + clock |
| `src/components/Window.tsx` | Reusable window chrome with traffic lights + float animation |
| `src/components/DockNav.tsx` | Bottom dock navigation replacing top TabNav |
| `src/components/workflow/Section.tsx` | Uppercase monospace section headers |
| `src/components/projects/ProjectGroup.tsx` | Bordered line-item container |
| `src/components/projects/ProjectLineItem.tsx` | Monospace name/description rows |
| `src/components/projects/ProjectCard.tsx` | Full card for liveLink/recap types |
| `src/lib/projects.ts` | All project data — 7 groups, 22 projects |
| `src/lib/setup.ts` | 7 utility app entries |
| `docs/plans/2026-03-03-initial-build.md` | Full implementation plan |

### Next Steps
- [ ] Curate projects one by one — upgrade from `lineItem` to `liveLink` or `recap`
- [ ] Add screenshots to recap projects (drop into `public/screenshots/`)
- [ ] Add App Store / TestFlight links for iOS apps (Sponsio, Frend, Passaround)
- [ ] Consider adding a fourth tab: "Claude Code Setup" showing global CLAUDE.md structure, hooks, memory system
- [ ] Custom domain (optional)
