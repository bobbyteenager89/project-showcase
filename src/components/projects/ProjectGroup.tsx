import { ProjectCard } from './ProjectCard';
import { ProjectLineItem } from './ProjectLineItem';
import type { ProjectGroup as ProjectGroupType } from '@/lib/projects';

export function ProjectGroup({ group }: { group: ProjectGroupType }) {
  const cards = group.projects.filter((p) => p.type !== 'lineItem');
  const lineItems = group.projects.filter((p) => p.type === 'lineItem');

  return (
    <section style={{ marginBottom: '32px' }}>
      <h2 style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '10px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        opacity: 0.5,
        marginBottom: '12px',
        margin: '0 0 12px 0',
      }}>
        {group.label}
      </h2>
      {cards.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
      {lineItems.length > 0 && (
        <div style={{ border: '2px solid var(--ink)', background: 'var(--white)' }}>
          {lineItems.map((project) => (
            <ProjectLineItem key={project.name} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
