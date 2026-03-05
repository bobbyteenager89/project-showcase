export type Reference = {
  name: string;
  url: string;
  description: string;
  category: string;
};

export const references: Reference[] = [
  // Web Standards
  {
    name: 'MDN Web Docs',
    url: 'https://developer.mozilla.org',
    description: 'The definitive reference for HTML, CSS, and JavaScript. If something feels unclear, MDN is the first stop.',
    category: 'Web Standards',
  },
  {
    name: 'web.dev',
    url: 'https://web.dev',
    description: 'Google\'s guidance on modern web development — Core Web Vitals, performance, accessibility, and progressive enhancement.',
    category: 'Web Standards',
  },
  {
    name: 'WHATWG HTML Living Standard',
    url: 'https://html.spec.whatwg.org',
    description: 'The actual HTML spec. Mostly useful for settling debates about semantic markup and element behavior.',
    category: 'Web Standards',
  },
  {
    name: 'CSS Tricks',
    url: 'https://css-tricks.com',
    description: 'Flexbox, Grid, custom properties — CSS Tricks has the clearest written explanations I\'ve found for layout patterns.',
    category: 'Web Standards',
  },

  // React & Next.js
  {
    name: 'Next.js Docs',
    url: 'https://nextjs.org/docs',
    description: 'App Router, server components, routing, data fetching. I use this constantly — the architecture changes often enough to warrant re-reading.',
    category: 'Framework',
  },
  {
    name: 'React Docs (beta)',
    url: 'https://react.dev',
    description: 'The rewritten React docs with hooks-first thinking. The "Thinking in React" and useEffect sections are essential.',
    category: 'Framework',
  },
  {
    name: 'Vercel Style Guide',
    url: 'https://github.com/vercel/style-guide',
    description: 'ESLint + Prettier config from Vercel Engineering. I use this as the baseline for TypeScript/React projects.',
    category: 'Framework',
  },

  // Styling
  {
    name: 'Tailwind CSS Docs',
    url: 'https://tailwindcss.com/docs',
    description: 'Utility class reference. v4 moved to a CSS-first config (@theme in globals.css) — very different from v3.',
    category: 'Styling',
  },
  {
    name: 'Tailwind UI',
    url: 'https://tailwindui.com',
    description: 'Pre-built component patterns. Useful as a reference for accessibility and structure even when building custom.',
    category: 'Styling',
  },

  // Database
  {
    name: 'Neon Documentation',
    url: 'https://neon.tech/docs',
    description: 'Serverless Postgres. Key note: always provision through the Vercel dashboard (Storage tab), not neon.tech directly.',
    category: 'Database',
  },
  {
    name: 'Drizzle ORM',
    url: 'https://orm.drizzle.team',
    description: 'Type-safe SQL ORM. Schema as TypeScript, migrations as files, no magic. The Neon integration guide is the right starting point.',
    category: 'Database',
  },

  // Deployment
  {
    name: 'Vercel Docs',
    url: 'https://vercel.com/docs',
    description: 'Deployment config, environment variables, edge functions, Blob storage. GitHub push → auto-deploy is the core loop.',
    category: 'Deployment',
  },

  // iOS
  {
    name: 'Apple Human Interface Guidelines',
    url: 'https://developer.apple.com/design/human-interface-guidelines',
    description: 'The HIG. Required reading before building any iOS UI — navigation patterns, typography scale, component behavior.',
    category: 'iOS',
  },
  {
    name: 'SwiftUI Documentation',
    url: 'https://developer.apple.com/documentation/swiftui',
    description: 'Apple\'s SwiftUI reference. The "Exploring SwiftUI Sample Apps" section is underrated for learning layout patterns.',
    category: 'iOS',
  },
  {
    name: 'Fastlane Docs',
    url: 'https://docs.fastlane.tools',
    description: 'Automates App Store screenshots, TestFlight uploads, and metadata. The app-store-ship agent uses this under the hood.',
    category: 'iOS',
  },

  // Tools
  {
    name: 'Claude Code Docs',
    url: 'https://docs.anthropic.com/en/docs/claude-code',
    description: 'Hooks, agents, slash commands, CLAUDE.md format, model configuration. The reference for how the whole system is wired.',
    category: 'Tools',
  },
  {
    name: 'Tailscale Docs',
    url: 'https://tailscale.com/kb',
    description: 'The setup guide for the personal mesh network. SSH, ACLs, exit nodes — used to connect MacBook + Mac Mini + iPhone.',
    category: 'Tools',
  },
  {
    name: 'tmux Cheat Sheet',
    url: 'https://tmuxcheatsheet.com',
    description: 'Session management reference. Attach, detach, split panes. The core of keeping Claude sessions alive on the Mac Mini.',
    category: 'Tools',
  },
];

export const referenceCategories = [...new Set(references.map((r) => r.category))];
