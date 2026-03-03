import { projectGroups } from '@/lib/projects';
import { ProjectGroup } from '@/components/projects/ProjectGroup';

export default function ProjectsPage() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Projects</h2>
        <p className="text-gray-500">A mix of consulting work, iOS apps, internal tools, and personal experiments — all built with Claude Code.</p>
      </div>
      {projectGroups.map((group) => (
        <ProjectGroup key={group.label} group={group} />
      ))}
    </div>
  );
}
