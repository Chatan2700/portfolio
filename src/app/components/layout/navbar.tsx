import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/log", label: "DevLog" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <header>
      <Container className="flex min-h-16 items-center justify-between gap-6 border-b border-border-soft py-4 max-[480px]:flex-col max-[480px]:items-start">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-primary transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={24}
            height={24}
            className="mr-2"
          />{" "}
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-6 text-sm text-secondary"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-50">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
