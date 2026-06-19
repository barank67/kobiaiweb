import generatedPress from "./press.generated.json";

export type PressPost = {
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

export const allPressPosts = generatedPress as PressPost[];

export const pressPerPage = 12;

export const fallbackPressImage = "/assets/images/blog-kobi-ai.webp";

export const homePressPosts = allPressPosts.slice(0, 3);
