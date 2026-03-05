import { Window } from '@/components/Window';
import { ExternalLink } from 'lucide-react';
import { references, referenceCategories } from '@/lib/references';

export default function ReferencesPage() {
  return (
    <Window title="references.txt">
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '28px', lineHeight: 1.1, margin: '0 0 8px 0', fontWeight: 700 }}>
          References
        </h2>
        <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', opacity: 0.7, margin: 0 }}>
          The docs, specs, and tools I actually use. No filler.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {referenceCategories.map((category) => {
          const items = references.filter((r) => r.category === category);
          return (
            <div key={category}>
              <div style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                borderBottom: '2px solid var(--ink)',
                paddingBottom: '6px',
                marginBottom: '20px',
              }}>
                {category}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {items.map((ref, i) => (
                  <div
                    key={ref.url}
                    style={{
                      borderBottom: i < items.length - 1 ? '1.5px solid rgba(24,24,24,0.12)' : 'none',
                      paddingBottom: i < items.length - 1 ? '20px' : '0',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontWeight: 700, fontSize: '15px' }}>{ref.name}</span>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${ref.name}`}
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
                        {ref.url.replace('https://', '').replace('http://', '').split('/')[0]}
                        <ExternalLink size={11} />
                      </a>
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '13px',
                      margin: 0,
                      lineHeight: 1.6,
                      opacity: 0.8,
                    }}>
                      {ref.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Window>
  );
}
