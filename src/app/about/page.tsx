import { Container } from "@/app/components/layout/container";

export default function AboutPage() {
  return (
    <main>
      <section aria-labelledby="about-heading">
        <Container className="border-b border-white/10 py-12">
          <p className="text-[11px] uppercase tracking-[0.1em] text-zinc-500">
            About
          </p>

          <div className="mt-8 grid gap-10 min-[760px]:grid-cols-[1fr_240px]">
            <div>
              <h1
                id="about-heading"
                className="text-[22px] font-medium leading-[1.4] text-zinc-100"
              >
                Software Developer & Cloud Engineer
              </h1>

              <div className="mt-6 space-y-5 text-[15px] leading-[1.8] text-zinc-400">
                <p>
                  I’m a software developer focused on building full-stack web
                  applications with practical cloud, infrastructure, and systems
                  foundations.
                </p>

                <p>
                  My background includes hands-on work with AWS services such as
                  IAM, Cognito, GuardDuty, Inspector, and Control Tower. That
                  experience shaped how I think about authentication, access
                  management, security posture, and operational reliability.
                </p>

                <p>
                  Currently, I’m building projects with Next.js, TypeScript,
                  Node.js, Tailwind CSS, and cloud-oriented architecture
                  patterns. I’m especially interested in work that connects
                  application development with backend systems, deployment, and
                  infrastructure.
                </p>

                <p>
                  This portfolio is where I document what I build, the technical
                  decisions I make, and the lessons I learn while improving as
                  an engineer.
                </p>
              </div>

              <div className="mt-10 rounded-xl border border-white/10 bg-[#111] p-5">
                <p className="text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                  Looking for
                </p>

                <p className="mt-4 text-[14px] leading-[1.8] text-zinc-400">
                  Software developer, full-stack developer, or cloud-focused
                  engineering roles where I can contribute to real applications,
                  backend systems, deployment workflows, and
                  infrastructure-aware engineering.
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-xl border border-white/10 bg-[#111] p-5">
              <p className="text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                Stack
              </p>

              <div className="mt-5 space-y-5 text-[13px] leading-[1.7] text-zinc-400">
                <p>
                  <span className="font-medium text-zinc-100">
                    Languages & Core Tech
                  </span>
                  <br />
                  TypeScript, JavaScript (ES6+), Python, React, Node.js, HTML5,
                  CSS3, Electron, WebSockets, REST APIs, C++ (basics)
                </p>

                <p>
                  <span className="font-medium text-zinc-100">
                    Frameworks & libraries
                  </span>
                  <br />
                  Next.js, React Query, Express.js, Tailwind CSS, Zustand, Vite
                </p>

                <p>
                  <span className="font-medium text-zinc-100">Testing</span>
                  <br />
                  Vitest, Jest, unit testing, integration testing
                </p>

                <p>
                  <span className="font-medium text-zinc-100">
                    Infrastructure & tooling
                  </span>
                  <br />
                  Git, GitHub, Docker, Postman, Vercel, CI/CD pipelines, AWS
                  services, Terraform (basics), Pipeline orchestration
                </p>

                <p>
                  <span className="font-medium text-zinc-100">Databases</span>
                  <br />
                  PostgreSQL, MySQL, MongoDB
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
