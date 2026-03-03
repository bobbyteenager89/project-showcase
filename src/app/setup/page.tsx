import { Window } from '@/components/Window';
import { ExternalLink } from 'lucide-react';
import { apps } from '@/lib/setup';

export default function SetupPage() {
  return (
    <Window title="setup.cfg">
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '28px', lineHeight: 1.1, margin: '0 0 8px 0', fontWeight: 700 }}>
          My Setup
        </h2>
        <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', opacity: 0.7, margin: 0 }}>
          The utility apps that make the workflow possible.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {apps.map((app, i) => (
          <div
            key={app.name}
            style={{
              borderBottom: i < apps.length - 1 ? '1.5px solid rgba(24,24,24,0.15)' : 'none',
              paddingBottom: i < apps.length - 1 ? '28px' : '0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontWeight: 700, fontSize: '16px' }}>{app.name}</span>
                <span style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  opacity: 0.5,
                }}>
                  {app.category}
                </span>
              </div>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${app.name} website`}
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '11px',
                  opacity: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  flexShrink: 0,
                  marginLeft: '12px',
                }}
              >
                {app.url.replace('https://', '').replace('http://', '').split('/')[0]}
                <ExternalLink size={11} />
              </a>
            </div>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '12px',
              margin: '0 0 8px 0',
              opacity: 0.6,
              fontStyle: 'italic',
            }}>
              {app.tagline}
            </p>
            <p style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '13px',
              margin: 0,
              lineHeight: 1.6,
              opacity: 0.85,
            }}>
              {app.why}
            </p>
          </div>
        ))}
      </div>
    </Window>
  );
}
