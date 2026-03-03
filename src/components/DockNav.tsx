'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  {
    label: 'Workflow',
    href: '/workflow',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: 'Setup',
    href: '/setup',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
];

export function DockNav() {
  const pathname = usePathname();

  return (
    <div style={{
      padding: '16px',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      paddingBottom: 'max(16px, env(safe-area-inset-bottom))',
    }}>
      <nav
        aria-label="Main navigation"
        style={{
          background: 'var(--white)',
          border: 'var(--stroke-width) solid var(--ink)',
          padding: '12px',
          borderRadius: '12px',
          display: 'flex',
          gap: '16px',
          boxShadow: '6px 6px 0px rgba(0,0,0,0.2)',
        }}
      >
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                textDecoration: 'none',
                color: 'var(--ink)',
                transition: 'transform 0.2s',
              }}
              aria-current={active ? 'page' : undefined}
            >
              <div style={{
                width: '44px',
                height: '44px',
                border: 'var(--stroke-width) solid var(--ink)',
                background: active ? 'var(--ink)' : 'var(--bg-stripe-1)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: active ? 'var(--white)' : 'var(--ink)',
              }}>
                {item.icon}
              </div>
              <span style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '10px',
                background: 'var(--white)',
                padding: '2px 4px',
                border: '1px solid var(--ink)',
                boxShadow: '2px 2px 0px var(--ink)',
                whiteSpace: 'nowrap',
              }}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
