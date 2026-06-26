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
const pinnedPressSlugs = ["isletmelere-cop-veri-uyarisi-yapay-zekada-veri-temizligi"];

const comparePinnedPress = (a: PressPost, b: PressPost) => {
  const aIndex = pinnedPressSlugs.indexOf(a.slug);
  const bIndex = pinnedPressSlugs.indexOf(b.slug);

  if (aIndex === bIndex) {
    return 0;
  }

  if (aIndex === -1) {
    return 1;
  }

  if (bIndex === -1) {
    return -1;
  }

  return aIndex - bIndex;
};

const hasHurriyetTitle = (post: PressPost) => {
  const searchableTitle = `${post.title} ${post.seoTitle}`.toLocaleLowerCase("tr-TR");
  return searchableTitle.includes("hürriyet") || searchableTitle.includes("hurriyet");
};

export const allPressPosts = [...pressPosts].sort((a, b) => {
  const pinnedOrder = comparePinnedPress(a, b);
  if (pinnedOrder !== 0) {
    return pinnedOrder;
  }

  return Number(hasHurriyetTitle(b)) - Number(hasHurriyetTitle(a));
});

export const pressPerPage = 12;

export const fallbackPressImage = "/assets/images/blog-kobi-ai.webp";

export const homePressPosts = allPressPosts.slice(0, 3);
