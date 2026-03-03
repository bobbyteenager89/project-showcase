export function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="window-float"
      style={{
        background: 'var(--paper)',
        border: 'var(--stroke-width) solid var(--ink)',
        borderRadius: 'var(--window-radius)',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '8px 8px 0px var(--ink)',
        animation: 'float 6s ease-in-out infinite',
      }}
    >
      {/* Title bar */}
      <div style={{
        borderBottom: 'var(--stroke-width) solid var(--ink)',
        padding: '10px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'var(--white)',
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['close', 'minimize', 'maximize'].map((action) => (
            <div
              key={action}
              aria-label={action}
              style={{
                width: '12px',
                height: '12px',
                border: '2px solid var(--ink)',
                borderRadius: '50%',
                cursor: 'default',
              }}
            />
          ))}
        </div>
        <div style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '12px',
          marginLeft: 'auto',
          marginRight: 'auto',
          transform: 'translateX(-18px)',
        }}>
          {title}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px 20px' }}>
        {children}
      </div>
    </div>
  );
}
