import type { ProjectStatus } from "@/data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  Live: "bg-badge-live/10 text-badge-live",
  "In Progress": "bg-badge-progress/10 text-badge-progress",
  Concept: "bg-badge-concept/10 text-badge-concept",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
