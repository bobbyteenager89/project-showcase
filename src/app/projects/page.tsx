import { Window } from '@/components/Window';
import { projectGroups } from '@/lib/projects';
import { ProjectGroup } from '@/components/projects/ProjectGroup';

export default function ProjectsPage() {
  return (
    <>
      <div style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '12px',
        background: 'var(--white)',
        border: '2px solid var(--ink)',
        padding: '4px 8px',
        width: 'fit-content',
        boxShadow: '3px 3px 0 var(--ink)',
      }}>
        C:\PROJECTS\
      </div>
      <Window title="projects.dir">
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '28px', lineHeight: 1.1, margin: '0 0 8px 0', fontWeight: 700 }}>
            Projects
          </h2>
          <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', opacity: 0.7, margin: 0 }}>
            A mix of consulting work, iOS apps, internal tools, and personal experiments — all built with Claude Code.
          </p>
        </div>
        {projectGroups.map((group) => (
          <ProjectGroup key={group.label} group={group} />
        ))}
      </Window>
    </>
  );
}
