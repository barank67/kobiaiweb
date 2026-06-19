import generatedPosts from "./blog.generated.json";

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image?: string | null;
  seoTitle: string;
  seoDescription: string;
  content: string;
};

export const allBlogPosts = generatedPosts as BlogPost[];

export const homeBlogSlugs = [
  "kobiler-icin-yapay-zeka-danismanligi-rehberi",
  "agentic-ai-ile-satin-alma-sureclerinde-maliyet-azaltma-rehberi",
  "2026-kobi-yapay-zeka-stratejileri"
];

export const fallbackBlogImage = "/assets/images/blog-kobi-ai.webp";

export const homeBlogPosts = homeBlogSlugs
  .map((slug) => allBlogPosts.find((post) => post.slug === slug))
  .filter(Boolean) as BlogPost[];

export const postsPerPage = 12;
