import { Container } from "../components/layout/container";
import { ProjectCard } from "../components/projects/project-card";
import { getAllProjects } from "../lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main>
      <section aria-labelledby="projects-heading">
        <Container className="border-b border-white/10 py-12">
          <p className="text-[11px] uppercase tracking-[0.1em] text-zinc-500">
            Projects
          </p>

          <h1
            id="projects-heading"
            className="mt-6 text-[18px] font-medium leading-[1.6] text-zinc-100"
          >
            Project archive
          </h1>

          <p className="mt-3 max-w-[430px] text-[13px] leading-[1.6] text-zinc-400">
            Selected software projects, technical experiments, and case studies.
          </p>

          <div className="mt-8 space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
