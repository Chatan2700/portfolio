import Link from "next/link";
import { Section } from "./components/layout/section";
import { ProjectsSection } from "./components/home/projects-section";
import { DevLogSection } from "./components/home/devlog-section";

export default function HomePage() {
  return (
    <>
      <Section>
        <div className="max-w-[430px]">
          <h1 className="text-[18px] font-medium leading-[1.6] text-zinc-100">
            Sebastian Rios
          </h1>

          <p className="mt-3 text-[13px] leading-[1.6] text-zinc-400">
            Software engineer focused on building clean web applications,
            learning through implementation, and documenting the process.
          </p>

          <p className="mt-5 text-[13px] leading-[1.6] text-zinc-400">
            Currently working with Next.js, TypeScript, Tailwind CSS, and
            cloud-oriented application architecture.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-[13px]">
            <Link
              href="https://github.com/"
              target="_blank"
              className="rounded-lg border border-white/10 bg-[#111] px-3.5 py-2 text-zinc-100 transition hover:border-white/20 hover:bg-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-100"
            >
              GitHub
            </Link>

            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="rounded-lg border border-white/10 bg-[#111] px-3.5 py-2 text-zinc-100 transition hover:border-white/20 hover:bg-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-100"
            >
              LinkedIn
            </Link>

            <Link
              href="mailto:you@example.com"
              className="rounded-lg border border-white/10 bg-[#111] px-3.5 py-2 text-zinc-100 transition hover:border-white/20 hover:bg-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-100"
            >
              Email
            </Link>
          </div>
        </div>
      </Section>

      <ProjectsSection />
      <DevLogSection />
    </>
  );
}
