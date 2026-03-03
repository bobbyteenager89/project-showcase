# Project Showcase

Personal meta-project — showcases how Andrew works with Claude Code. Three-tab web app for sharing with friends.

**Deployment:** https://project-showcase-silk.vercel.app
**Repo:** https://github.com/bobbyteenager89/project-showcase

---

## Tech Stack

- **Next.js 16** (App Router, Turbopack, static export)
- **Tailwind CSS v4** (CSS-first config, `@plugin` syntax)
- **TypeScript 5**
- **Space Grotesk + Space Mono** via `next/font/google`
- **lucide-react** for icons
- **@tailwindcss/typography** for prose styles
- **Vercel** deployment via GitHub integration

## Design System

Retro OS aesthetic. All defined in `src/app/globals.css`:

```
--bg-stripe-1: #BCE4E0   (mint)
--bg-stripe-2: #F2EBD9   (cream)
--ink: #181818            (near-black)
--paper: #F2EBD9
--white: #FFFFFF
--stroke-width: 2.5px
--shadow-depth: 4px
--window-radius: 12px
```

- Body: diagonal stripe background (`repeating-linear-gradient` at -45deg)
- Borders: `2.5px solid var(--ink)` everywhere
- Shadows: hard drop shadow, no blur (`box-shadow: 4px 4px 0px var(--ink)`)
- Float animation on windows (CSS `@keyframes float`, reduced-motion guarded)

## Project Structure

```
src/
  app/
    layout.tsx          # RetroHeader + DockNav shell
    globals.css         # Design system variables + base styles
    workflow/page.tsx   # 7-section narrative
    projects/page.tsx   # Portfolio grid
    setup/page.tsx      # Utility app list
  components/
    Clock.tsx           # Live clock (client component)
    RetroHeader.tsx     # Sticky header with logo + clock
    Window.tsx          # Reusable window chrome
    DockNav.tsx         # Bottom dock navigation
    workflow/
      Section.tsx       # Section wrapper with uppercase monospace header
    projects/
      ProjectGroup.tsx  # Group section with label
      ProjectCard.tsx   # Full card (liveLink / recap types)
      ProjectLineItem.tsx # Compact row (lineItem type)
  lib/
    projects.ts         # All project data (ProjectType, Project, ProjectGroup)
    setup.ts            # Utility app data
docs/
  plans/               # Implementation plans
```

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Content Editing

**Projects:** Edit `src/lib/projects.ts`
- Change `type` from `'lineItem'` to `'liveLink'` or `'recap'` to upgrade a card
- `liveLink`: add `deployment` URL + optional `techStack[]`
- `recap`: add `screenshots[]` (paths under `public/screenshots/`), `writeup`, `techStack[]`, optional `appStoreUrl`

**Setup apps:** Edit `src/lib/setup.ts`

**Workflow content:** Edit `src/app/workflow/page.tsx` directly (inline content)

## Notes

- Google Fonts (`next/font/google`) blocked in local build env — Vercel builds work fine. If local build fails on fonts, the `display: 'swap'` + fallback stack handles gracefully.
- Font name is `Space_Grotesk` (not "Grotesque") in the Next.js font API.
- All deploys via GitHub push to `master` → Vercel auto-builds.
