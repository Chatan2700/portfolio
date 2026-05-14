import Link from "next/link";
import { Container } from "../layout/container";
import { ProjectCard } from "../projects/project-card";
import { getFeaturedProjects } from "@/app/lib/projects";

export function ProjectsSection() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <Container className="border-t border-border-soft py-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2
            id="projects-heading"
            className="text-[11px] uppercase tracking-[0.1em] text-muted"
          >
            Featured Projects
          </h2>

          <Link
            href="/projects"
            className="text-[12px] text-secondary hover:text-primary"
          >
            View all
          </Link>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-[13px] leading-[1.6] text-muted">
            No featured projects at the moment.
          </p>
        )}
      </Container>
    </section>
  );
}
