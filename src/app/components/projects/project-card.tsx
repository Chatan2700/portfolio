import { Project } from "@/app/types/project";
import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300 hover:border-faint">
      {project.image ? (
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative aspect-16/10 bg-background">
            <Image
              src={project.image}
              alt={project.imageAlt ?? ""}
              fill
              className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-80"
              sizes="640px"
            />
          </div>
        </Link>
      ) : null}
      {/* Project Status and Name */}
      <div className="p-4">
        <p className="text-[10px] uppercase tracking-[0.1em] text-muted">
          {project.status}
        </p>

        <h3 className="mt-3 text-[14px] font-medium leading-[1.6] text-primary">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            {project.title}
          </Link>
        </h3>

        {/* Project Description and Stack */}
        <p className="mt-2 text-[13px] leading-[1.6] text-secondary">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-border-soft px-2 py-1 text-[11px] text-secondary"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Project redirection Link */}
        <div className="mt-4 flex flex-wrap gap-4 text-[12px] font-medium text-primary">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            View project ↗
          </Link>

          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="text-secondary hover:text-primary"
            >
              GitHub
            </Link>
          ) : null}

          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="text-secondary hover:text-primary"
            >
              Live
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
