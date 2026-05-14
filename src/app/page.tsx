import Link from "next/link";
import { Section } from "./components/layout/section";
import { ProjectsSection } from "./components/home/projects-section";
import { DevLogSection } from "./components/home/devlog-section";

export default function HomePage() {
  const skills = [
    "TypeScript",
    "Node.js",
    "HTML5",
    "CSS3",
    "WebSockets",
    "Electron",
    "React Query",
    "Next.js",
    "Tailwind CSS",
    "Vitest",
    "AWS (IAM, Cognito)",
    "Git",
    "PostgreSQL",
    "MySQL",
    "system design",
    "desktop application development",
    "microservices",
  ];

  return (
    <>
      <Section>
        <div className="max-w-[450px]">
          <h1 className="text-[18px] font-medium leading-[1.6] text-primary">
            Sebastian Rios
          </h1>

          <p className="mt-3 text-[13px] leading-[1.6] text-secondary">
            Software Developer & Cloud Engineer focused on building full-stack
            web applications with practical cloud, infrastructure, and systems
            foundations.
          </p>

          <p className="mt-5 text-[13px] leading-[1.6] text-secondary">
            This site documents the projects I build, the technical decisions
            behind them, and what I learn while improving as an engineer.
          </p>

          <p className="mt-5 text-[13px] leading-[2.2] text-secondary">
            Currently working with{" "}
            {skills.map((skill) => (
              <span
                key={skill}
                className="mx-0.5 my-0.5 inline-flex items-center rounded bg-white/5 px-2 py-0.5 text-[11px] text-primary "
              >
                {skill}
              </span>
            ))}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-[13px]">
            <Link
              href="mailto:juanriosubeda@gmail.com"
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2 text-primary transition hover:border-faint hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="relative flex h-2 w-2">
                {/* This span creates the "active" pulse effect */}
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                {/* This is the solid green dot */}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Email
            </Link>
            <Link
              href="https://github.com/Chatan2700"
              target="_blank"
              className="rounded-lg border border-border bg-surface px-3.5 py-2 text-primary transition hover:border-faint hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              GitHub
            </Link>

            <Link
              href="https://linkedin.com/in/juan-sebastian-rios-ubeda-a1025922a
"
              target="_blank"
              className="rounded-lg border border-border bg-surface px-3.5 py-2 text-primary transition hover:border-faint hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </Section>
      <ProjectsSection />
      <DevLogSection />
    </>
  );
}
