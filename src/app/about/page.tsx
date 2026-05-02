import { Section } from "../components/layout/section";

export default function AboutPage() {
  return (
    <Section>
      <p className="text-[11px] uppercase tracking-[0.1em] text-zinc-500">
        About
      </p>

      <h1 className="mt-6 text-[18px] font-medium leading-[1.6] text-zinc-100">
        About me
      </h1>

      <p className="mt-3 text-[13px] leading-[1.6] text-zinc-400">
        Software engineer focused on practical web applications, cloud
        fundamentals, and learning through shipped projects.
      </p>
    </Section>
  );
}
