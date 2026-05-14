import Link from "next/link";
import type { Post } from "@/app/types/post";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article>
      <time dateTime={post.date} className="text-[11px] text-muted">
        {post.date}
      </time>

      <h2 className="mt-2 text-[15px] font-medium leading-[1.6] text-primary">
        <Link href={`/log/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>

      <p className="mt-2 text-[13px] leading-[1.6] text-secondary">
        {post.excerpt}
      </p>
    </article>
  );
}
