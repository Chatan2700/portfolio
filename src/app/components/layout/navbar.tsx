import Link from "next/link";
import { Container } from "./container";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/log", label: "DevLog" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <header>
      <Container className="flex min-h-16 items-center justify-between gap-6 py-4 border-b border-white/10 max-[480px]:flex-col max-[480px]:items-start">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-zinc-100 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-100"
        >
          Sebastian Rios
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-6 text-sm text-zinc-300"
        >
          <Link href="/projects" className="hover:opacity-50">
            Projects
          </Link>
          <Link href="/log" className="hover:opacity-50">
            DevLog
          </Link>
          <Link href="/about" className="hover:opacity-50">
            About
          </Link>
        </nav>
      </Container>
    </header>
  );
}
