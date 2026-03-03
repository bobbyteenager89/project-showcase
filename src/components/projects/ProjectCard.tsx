import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '@/lib/projects';

export function ProjectCard({ project }: { project: Project }) {
  if (project.type === 'lineItem') return null;

  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{project.name}</h3>
        <div className="flex gap-2 ml-4 flex-shrink-0">
          {project.deployment && (
            <a
              href={project.deployment}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1 border border-gray-200 rounded px-2 py-1"
            >
              Visit <ExternalLink size={11} />
            </a>
          )}
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1 border border-gray-200 rounded px-2 py-1"
            >
              App Store <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {project.screenshots.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={200}
              height={128}
              className="h-32 w-auto rounded border border-gray-100 object-cover flex-shrink-0"
            />
          ))}
        </div>
      )}
      {project.writeup && (
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">{project.writeup}</p>
      )}
      {project.techStack && (
        <div className="flex gap-1.5 mt-3 flex-wrap">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-xs bg-gray-100 text-gray-600 rounded px-2 py-0.5">{tech}</span>
          ))}
        </div>
      )}
    </div>
  );
}
