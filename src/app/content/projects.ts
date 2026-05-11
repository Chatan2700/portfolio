import { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "portfolio-devlog",
    title: "Portfolio + DevLog",
    summary:
      "Minimal developer portfolio with project case studies and a file-based DevLog.",
    description:
      "A fast, dark, brutalist-minimal portfolio built with Next.js, TypeScript, Tailwind CSS, and MDX. The goal is to showcase software projects, document technical growth, and keep the architecture simple enough to maintain.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    status: "in-progress",
    featured: true,
    image: "/projects/test.jpg",
    imageAlt: "Dark minimal portfolio interface preview",
    githubUrl: "https://github.com/",
    liveUrl: "",
    startedAt: "2026-05",
    sections: [
  {
    title: "Problem",
    body: "I needed a simple portfolio that could launch fast without adding a dashboard, auth, or database too early.",
  },
  {
    title: "Architecture",
    body: "The first version uses Next.js, TypeScript, Tailwind CSS, and file-based content to keep the system simple and performant.",
  },
  {
    title: "What I learned",
    body: "This project helped me practice routing, reusable components, content modeling, and visual iteration.",
  },
],
  },
  {
    slug: "devlog-saas-concept",
    title: "DevLog SaaS Concept",
    summary:
      "Future full-stack version of this idea with auth, database-backed entries, and a private writing dashboard.",
    description:
      "A planned evolution of the current file-based portfolio into a full-stack DevLog platform. The future version would include authentication, a database, protected authoring workflows, structured publishing, and project-linked entries.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    status: "planned",
    featured: true,
    image: "/projects/test.jpg",
    imageAlt: "Abstract interface concept for a DevLog SaaS",
    githubUrl: "",
    liveUrl: "",
    startedAt: "",
    sections: [
  {
    title: "Problem",
    body: "I needed a simple portfolio that could launch fast without adding a dashboard, auth, or database too early.",
  },
  {
    title: "Architecture",
    body: "The first version uses Next.js, TypeScript, Tailwind CSS, and file-based content to keep the system simple and performant.",
  },
  {
    title: "What I learned",
    body: "This project helped me practice routing, reusable components, content modeling, and visual iteration.",
  },
],
  },
];
