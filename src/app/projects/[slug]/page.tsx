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
      <Container className=" border-white/10 py-12">
        <article className="max-w-[560px]">
          <Link
            href="/projects"
            className="text-[12px] text-zinc-500 hover:text-zinc-100"
          >
            ← Back to projects
          </Link>

          <p className="mt-8 text-[11px] uppercase tracking-[0.1em] text-zinc-500">
            {project.status}
          </p>

          <h1 className="mt-4 text-[18px] font-medium leading-[1.6] text-zinc-100">
            {project.title}
          </h1>

          <p className="mt-4 text-[13px] leading-[1.7] text-zinc-400">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 px-2 py-1 text-[11px] text-zinc-400"
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
                className="text-zinc-100 hover:underline"
              >
                GitHub ↗
              </Link>
            ) : null}

            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="text-zinc-100 hover:underline"
              >
                Live site ↗
              </Link>
            ) : null}
          </div>
          {project.sections ? (
            <div className="mt-10 space-y-8">
              {project.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-[11px] uppercase tracking-[0.1em] text-zinc-500">
                    {section.title}
                  </h2>

                  <p className="mt-3 text-[13px] leading-[1.7] text-zinc-400">
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
