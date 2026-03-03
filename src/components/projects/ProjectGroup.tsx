import { ProjectCard } from './ProjectCard';
import { ProjectLineItem } from './ProjectLineItem';
import type { ProjectGroup as ProjectGroupType } from '@/lib/projects';

export function ProjectGroup({ group }: { group: ProjectGroupType }) {
  const cards = group.projects.filter((p) => p.type !== 'lineItem');
  const lineItems = group.projects.filter((p) => p.type === 'lineItem');

  return (
    <section className="mb-10">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">{group.label}</h2>
      {cards.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
      {lineItems.length > 0 && (
        <div>
          {lineItems.map((project) => (
            <ProjectLineItem key={project.name} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
