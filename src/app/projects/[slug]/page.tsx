import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/data/projects";
import { StatusBadge } from "@/components/status-badge";
import { ScreenshotGallery } from "@/components/screenshot-gallery";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.name} — What I'm Building`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted-gray transition-colors hover:text-soft-black"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M10 12L6 8L10 4" />
        </svg>
        All Projects
      </Link>

      {/* Hero */}
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-soft-black sm:text-4xl">
            {project.name}
          </h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-lg text-muted-gray">{project.tagline}</p>

        {project.heroScreenshot && (
          <div className="mt-8 overflow-hidden rounded-lg border border-border">
            <Image
              src={project.heroScreenshot}
              alt={`${project.name} hero screenshot`}
              width={1200}
              height={750}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        )}
      </header>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-gray">
          Overview
        </h2>
        <p className="text-base leading-relaxed text-soft-black">
          {project.overview}
        </p>
      </section>

      {/* Problem */}
      <section className="mb-12">
        <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-gray">
          Problem
        </h2>
        <p className="text-base leading-relaxed text-soft-black">
          {project.problem}
        </p>
      </section>

      {/* Solution */}
      <section className="mb-12">
        <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-gray">
          Solution
        </h2>
        <p className="text-base leading-relaxed text-soft-black">
          {project.solution}
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-gray">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {project.features.map((feature, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <p className="text-sm leading-relaxed text-soft-black">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-gray">
            Screenshots
          </h2>
          <ScreenshotGallery screenshots={project.screenshots} />
        </section>
      )}

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-gray">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-gray"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Links */}
      {(project.liveUrl || project.githubUrl) && (
        <section className="mb-12">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-gray">
            Links
          </h2>
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-soft-black underline underline-offset-4 transition-colors hover:text-muted-gray"
              >
                Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-soft-black underline underline-offset-4 transition-colors hover:text-muted-gray"
              >
                GitHub
              </a>
            )}
          </div>
        </section>
      )}

      {/* Status */}
      {project.statusNote && (
        <section className="mb-12">
          <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-gray">
            Status
          </h2>
          <p className="text-sm leading-relaxed text-muted-gray italic">
            {project.statusNote}
          </p>
        </section>
      )}

      {/* Footer nav */}
      <footer className="mt-16 border-t border-border pt-8">
        <Link
          href="/"
          className="text-sm text-muted-gray transition-colors hover:text-soft-black"
        >
          &larr; Back to all projects
        </Link>
      </footer>
    </main>
  );
}
