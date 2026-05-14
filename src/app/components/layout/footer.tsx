import { Container } from "./container";

export function Footer() {
  return (
    <footer>
      <Container className="flex justify-between border-t border-border-soft py-8">
        <p className="text-[11px] leading-5 text-muted">
          © {new Date().getFullYear()} Sebastian Rios.{" "}
        </p>
        <p className="text-[11px] leading-5 text-muted">
          <span>Contact me </span>
          <a
            href="mailto:juanriosubeda@gmail.com"
            className="text-primary hover:underline"
          >
            via email
          </a>
        </p>
      </Container>
    </footer>
  );
}
