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
  const hurriyetOrder = Number(hasHurriyetTitle(b)) - Number(hasHurriyetTitle(a));
  if (hurriyetOrder !== 0) {
    return hurriyetOrder;
  }

  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export const pressPerPage = 12;

export const fallbackPressImage = "/assets/images/blog-kobi-ai.webp";

export const homePressPosts = allPressPosts.slice(0, 3);
