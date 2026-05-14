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
    status: "completed",
    featured: false,
    image: "/projects/portfolio-screenshot.png",
    imageAlt: "Dark minimal portfolio interface preview",
    githubUrl: "https://github.com/Chatan2700/portfolio",
    liveUrl: "",
    startedAt: "2026-04",
    sections: [
  {
    title: "Problem",
    body: "I needed a simple portfolio that could showcase my work effectively.",
  },
  {
    title: "Architecture",
    body: "The first version uses Next.js, TypeScript, Tailwind CSS, and file-based content to keep the system simple and performant.",
  },
  {
    title: "What I learned",
    body: "This project helped me reinforce routing, reusable components, content modeling, and visual iteration.",
  },
],
  },
    
];
