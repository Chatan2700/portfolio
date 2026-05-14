import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/app/components/layout/container";
import { getAllPosts, getPostBySlug } from "@/app/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type LogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: LogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title} | DevLog`,
    description: post.excerpt,
  };
}

export default async function LogPostPage({ params }: LogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Container className="border-b border-border-soft py-12">
        <article className="max-w-[560px]">
          <Link
            href="/log"
            className="text-[12px] text-muted hover:text-primary"
          >
            ← Back to DevLog
          </Link>

          <time
            dateTime={post.date}
            className="mt-8 block text-[11px] text-muted"
          >
            {post.date}
          </time>

          <h1 className="mt-4 text-[18px] font-medium leading-[1.6] text-primary">
            {post.title}
          </h1>

          <p className="mt-4 text-[13px] leading-[1.7] text-secondary">
            {post.excerpt}
          </p>

          <div className="mt-10">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-10 text-[15px] font-medium leading-[1.6] text-primary">
                    {children}
                  </h2>
                ),

                h3: ({ children }) => (
                  <h3 className="mt-8 text-[13px] uppercase tracking-[0.1em] text-muted">
                    {children}
                  </h3>
                ),

                p: ({ children }) => (
                  <p className="mt-4 text-[13px] leading-[1.8] text-secondary">
                    {children}
                  </p>
                ),

                ul: ({ children }) => (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[13px] leading-[1.8] text-secondary">
                    {children}
                  </ul>
                ),

                li: ({ children }) => <li>{children}</li>,

                code: ({ children }) => (
                  <code className="rounded border border-border bg-surface px-1.5 py-0.5 text-[12px] text-primary">
                    {children}
                  </code>
                ),

                pre: ({ children }) => (
                  <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-surface p-4 text-[12px] leading-[1.7] text-primary">
                    {children}
                  </pre>
                ),

                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-primary underline underline-offset-4"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </Container>
    </main>
  );
}
