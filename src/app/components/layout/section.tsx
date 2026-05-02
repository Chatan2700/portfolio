import { Container } from "./container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
