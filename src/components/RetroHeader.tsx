import { Clock } from '@/components/Clock';

export function RetroHeader() {
  return (
    <header style={{
      background: 'var(--white)',
      borderBottom: 'var(--stroke-width) solid var(--ink)',
      padding: '12px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        fontFamily: 'var(--font-mono), monospace',
        fontWeight: 700,
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '-0.5px',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
      }}>
        <div style={{
          width: '20px',
          height: '20px',
          border: '2px solid var(--ink)',
          background: 'var(--ink)',
          borderRadius: '50%',
          position: 'relative',
          flexShrink: 0,
        }}>
          <div style={{
            position: 'absolute',
            top: '2px',
            left: '2px',
            width: '6px',
            height: '6px',
            background: 'var(--white)',
            borderRadius: '50%',
          }} />
        </div>
        <span>How_I_Build</span>
      </div>
      <Clock />
    </header>
  );
}
