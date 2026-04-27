import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8">
      <Container className="flex flex-col gap-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p> @ 2026 Sebastian Rios</p>

        <div className=" flex items-center gap-4">
          <Link href="https://github.com/" className="hover:text-zinc-950">
            Github
          </Link>
          <Link href="https://linkedin.com/" className="hover:text-zinc-950">
            LinkedIn
          </Link>
          <Link
            href="mailto:juanriosubeda@gmail.com"
            className="hover:text-zinc-950"
          >
            Email
          </Link>
        </div>
      </Container>
    </footer>
  );
}
