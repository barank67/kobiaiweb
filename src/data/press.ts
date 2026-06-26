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

const pressPosts = generatedPress as PressPost[];

const hasHurriyetTitle = (post: PressPost) => {
  const searchableTitle = `${post.title} ${post.seoTitle}`.toLocaleLowerCase("tr-TR");
  return searchableTitle.includes("hürriyet") || searchableTitle.includes("hurriyet");
};

export const allPressPosts = [...pressPosts].sort((a, b) => {
  return Number(hasHurriyetTitle(b)) - Number(hasHurriyetTitle(a));
});

export const pressPerPage = 12;

export const fallbackPressImage = "/assets/images/blog-kobi-ai.webp";

export const homePressPosts = allPressPosts.slice(0, 3);
