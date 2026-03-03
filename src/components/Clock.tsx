'use client';

import { useEffect, useState } from 'react';

export function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      fontFamily: 'var(--font-mono), monospace',
      fontSize: '12px',
    }}>
      {time}
    </div>
  );
}
