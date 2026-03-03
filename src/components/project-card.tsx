import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./status-badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-lg border border-border transition-colors hover:border-muted-gray/40"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-surface">
        {project.heroScreenshot ? (
          <Image
            src={project.heroScreenshot}
            alt={`${project.name} screenshot`}
            width={800}
            height={500}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-gray/40">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-3">
          <h2 className="text-lg font-semibold text-soft-black">
            {project.name}
          </h2>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-sm leading-relaxed text-muted-gray">
          {project.tagline}
        </p>
      </div>
    </Link>
  );
}
