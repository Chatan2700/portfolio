import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/app/components/layout/container";
import { getAllProjects, getProjectBySlug } from "@/app/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Sebastian Rios`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Container className="py-12">
        <article className="max-w-[560px]">
          <Link
            href="/projects"
            className="text-[12px] text-muted hover:text-primary"
          >
            ← Back to projects
          </Link>

          <p className="mt-8 text-[11px] uppercase tracking-[0.1em] text-muted">
            {project.status}
          </p>

          <h1 className="mt-4 text-[18px] font-medium leading-[1.6] text-primary">
            {project.title}
          </h1>

          <p className="mt-4 text-[13px] leading-[1.7] text-secondary">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border-soft px-2 py-1 text-[11px] text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-[12px] font-medium">
            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="text-primary hover:underline"
              >
                GitHub ↗
              </Link>
            ) : null}

            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="text-primary hover:underline"
              >
                Live site ↗
              </Link>
            ) : null}
          </div>
          {project.sections ? (
            <div className="mt-10 space-y-8">
              {project.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-[11px] uppercase tracking-[0.1em] text-muted">
                    {section.title}
                  </h2>

                  <p className="mt-3 text-[13px] leading-[1.7] text-secondary">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          ) : null}
        </article>
      </Container>
    </main>
  );
}
