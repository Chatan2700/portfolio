import Link from "next/link";
import { Container } from "@/app/components/layout/container";
import { PostCard } from "@/app/components/log/post-card";
import { getRecentPosts } from "@/app/lib/posts";

export function DevLogSection() {
  const posts = getRecentPosts(3);

  return (
    <section id="devlog" aria-labelledby="devlog-heading">
      <Container className="border-t border-border-soft py-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2
            id="devlog-heading"
            className="text-[11px] uppercase tracking-[0.1em] text-muted"
          >
            DevLog
          </h2>

          <Link
            href="/log"
            className="text-[12px] text-secondary hover:text-primary"
          >
            View all
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-[13px] leading-[1.6] text-muted">
            No DevLog entries yet.
          </p>
        )}
      </Container>
    </section>
  );
}
