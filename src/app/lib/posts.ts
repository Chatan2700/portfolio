import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Post } from "../types/post";

const postsDirectory = path.join(process.cwd(), "src/app/content/posts");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags ?? [],
        published: data.published ?? false,
        content,
      } satisfies Post;
    })
    .filter((post) => post.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getRecentPosts(limit = 3): Post[] {
  return getAllPosts().slice(0, limit);
}