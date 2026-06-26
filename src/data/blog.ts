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
  contentHtml?: string;
};

export const allBlogPosts = generatedPosts as BlogPost[];

export const homeBlogSlugs = [
  "sirket-islerinde-yapay-zekayi-api-ile-kullanmanin-farki",
  "kobiler-icin-yapay-zeka-danismanligi-rehberi",
  "agentic-ai-ile-satin-alma-sureclerinde-maliyet-azaltma-rehberi",
  "kobiler-yapay-zeka-ile-nasil-deger-yaratir",
  "2026-kobi-yapay-zeka-stratejileri",
  "kobiler-icin-satin-alma-surecinde-yapay-zeka-kullanimi"
];

export const fallbackBlogImage = "/assets/images/blog-kobi-ai.webp";

export const homeBlogPosts = homeBlogSlugs
  .map((slug) => allBlogPosts.find((post) => post.slug === slug))
  .filter(Boolean) as BlogPost[];

export const postsPerPage = 12;
