export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  published: boolean;
  content: string;
};