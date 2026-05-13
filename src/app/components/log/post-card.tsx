import Link from "next/link";
import type { Post } from "@/app/types/post";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article>
      <time dateTime={post.date} className="text-[11px] text-zinc-500">
        {post.date}
      </time>

      <h2 className="mt-2 text-[15px] font-medium leading-[1.6] text-zinc-100">
        <Link href={`/log/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>

      <p className="mt-2 text-[13px] leading-[1.6] text-zinc-400">
        {post.excerpt}
      </p>
    </article>
  );
}
