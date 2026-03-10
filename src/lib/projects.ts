export type ProjectType = 'liveLink' | 'recap' | 'lineItem';

export interface Project {
  name: string;
  description: string;
  type: ProjectType;
  deployment?: string;
  appStoreUrl?: string;
  techStack?: string[];
  screenshots?: string[];
  writeup?: string;
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
      { name: 'Visualizer', description: 'Interactive D3.js visualization platform exploring mental models, datasets, and concepts.', type: 'lineItem', deployment: 'https://visualizer-ten-sandy.vercel.app', lastWorked: '2026-03-03' },
      { name: 'Data Cleanup Dashboard', description: 'Terminal-aesthetic dashboard tracking a 9-drive cleanup and archive pipeline.', type: 'lineItem', deployment: 'https://data-cleanup-dashboard.vercel.app', lastWorked: '2026-02-23' },
    ],
  },
];
