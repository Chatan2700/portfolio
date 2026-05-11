import Link from "next/link";
import { Container } from "../layout/container";
import { ProjectCard } from "../projects/project-card";
import { getFeaturedProjects } from "@/app/lib/projects";

export function ProjectsSection() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <Container className="border-b border-white/10 py-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2
            id="projects-heading"
            className="text-[11px] uppercase tracking-[0.1em] text-zinc-500"
          >
            Projects
          </h2>

          <Link
            href="/projects"
            className="text-[12px] text-zinc-400 hover:text-zinc-100"
          >
            View all
          </Link>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
