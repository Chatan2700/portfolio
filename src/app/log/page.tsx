import { Container } from "../components/layout/container";
import { PostCard } from "../components/log/post-card";
import { getAllPosts } from "@/app/lib/posts";

export default function LogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <section aria-labelledby="log-heading">
        <Container className="border-b border-white/10 py-12">
          <p className="text-[11px] uppercase tracking-[0.1em] text-zinc-500">
            DevLog
          </p>

          <h1
            id="log-heading"
            className="mt-6 text-[18px] font-medium leading-[1.6] text-zinc-100"
          >
            Development notes
          </h1>

          <p className="mt-3 max-w-[430px] text-[13px] leading-[1.6] text-zinc-400">
            Notes on projects, debugging, architecture decisions, and what I
            learn while building.
          </p>

          <div className="mt-10 space-y-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
