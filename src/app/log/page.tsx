import { Section } from "../components/layout/section";

export default function LogPage() {
  return (
    <Section>
      <p className="text-[11px] uppercase tracking-[0.1em] text-zinc-500">
        DevLog
      </p>

      <h1 className="mt-6 text-[18px] font-medium leading-[1.6] text-zinc-100">
        Development notes
      </h1>

      <p className="mt-3 text-[13px] leading-[1.6] text-zinc-400">
        Notes on projects, debugging, architecture decisions, and what I learn
        while building.
      </p>
    </Section>
  );
}
