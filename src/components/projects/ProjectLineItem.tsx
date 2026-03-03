import { ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/projects';

export function ProjectLineItem({ project }: { project: Project }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '10px 12px',
        borderBottom: '1.5px solid rgba(24,24,24,0.15)',
      }}
      className="last-line-item"
    >
      <div style={{ flex: 1, minWidth: 0, paddingRight: '12px' }}>
        <span style={{ fontFamily: 'var(--font-mono), monospace', fontWeight: 700, fontSize: '13px' }}>
          {project.name}
        </span>
        <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', opacity: 0.6, marginLeft: '8px' }}>
          {project.description}
        </span>
      </div>
      {project.deployment && (
        <a
          href={project.deployment}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.name}`}
          style={{ flexShrink: 0, opacity: 0.4, color: 'var(--ink)' }}
        >
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}
