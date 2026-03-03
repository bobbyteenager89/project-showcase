import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <header className="mb-16">
        <h1 className="mb-3 text-4xl font-semibold tracking-tight text-soft-black sm:text-5xl">
          What I&rsquo;m Building
        </h1>
        <p className="text-lg text-muted-gray">
          Projects built with Claude Code
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
