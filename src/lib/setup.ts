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
