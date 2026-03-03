export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: '40px' }}>
      <h2 style={{
        fontSize: '16px',
        fontWeight: 700,
        margin: '0 0 12px 0',
        fontFamily: 'var(--font-mono), monospace',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        paddingBottom: '8px',
        borderBottom: '2px solid var(--ink)',
      }}>
        {title}
      </h2>
      <div style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '13px',
        lineHeight: 1.7,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        color: 'rgba(24,24,24,0.85)',
      }}>
        {children}
      </div>
    </section>
  );
}
