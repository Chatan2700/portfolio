import { Section } from "../components/layout/section";

export default function ProjectsPage() {
  return (
    <Section>
      <p className="text-[11px] uppercase tracking-[0.1em] text-zinc-500">
        Projects
      </p>

      <h1 className="mt-6 text-[18px] font-medium leading-[1.6] text-zinc-100">
        Project archive
      </h1>

      <p className="mt-3 text-[13px] leading-[1.6] text-zinc-400">
        Selected software projects, technical experiments, and case studies.
      </p>
    </Section>
  );
}
