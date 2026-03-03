import type { Metadata } from 'next';
import { TabNav } from '@/components/TabNav';
import './globals.css';

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
      <body className="font-sans antialiased">
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
