import { Container } from "./container";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Devlog", href: "/log" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  return (
    <header className="border-b border-zinc-200">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Sebastian Rios
        </Link>

        <nav className="flex items-center gap-6 text-sm text-zinc-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
