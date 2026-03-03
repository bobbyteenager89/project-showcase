import { ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/projects';

export function ProjectLineItem({ project }: { project: Project }) {
  return (
    <div className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex-1 min-w-0 pr-4">
        <span className="font-medium text-gray-900 text-sm">{project.name}</span>
        <span className="text-gray-500 text-sm ml-2">{project.description}</span>
      </div>
      {project.deployment && (
        <a
          href={project.deployment}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-gray-400 hover:text-gray-600"
        >
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}
