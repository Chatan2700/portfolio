import { Container } from "./container";

export function Footer() {
  return (
    <footer>
      <Container className="border-t border-white/10 py-8">
        <p className="text-[11px] leading-5 text-zinc-500">
          Built with Next.js. No tracking, no noise.
        </p>
      </Container>
    </footer>
  );
}
