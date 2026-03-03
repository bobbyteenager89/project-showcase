import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import { DockNav } from '@/components/DockNav';
import { RetroHeader } from '@/components/RetroHeader';
import './globals.css';

const spaceGrotesque = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-grotesque',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['monospace'],
});

export const metadata: Metadata = {
  title: 'How I Build',
  description: 'My Claude Code workflow, projects, and setup',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesque.variable} ${spaceMono.variable}`}>
      <body style={{ fontFamily: 'var(--font-grotesque), system-ui, sans-serif' }}>
        <RetroHeader />
        <main style={{ padding: '24px 16px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '640px', margin: '0 auto', width: '100%' }}>
          {children}
        </main>
        <DockNav />
      </body>
    </html>
  );
}
