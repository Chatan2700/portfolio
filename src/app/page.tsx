import { Section } from "./components/layout/section";

export default function HomePage() {
  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Software engineer building clean web products and documenting the
          process.
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600">
          I build projects to sharpen my engineering skills and share what I
          learn through a simple DevLog.
        </p>
      </div>
    </Section>
  );
}
