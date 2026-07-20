import generatedPress from "./press.generated.json";

export type PressPost = {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image?: string | null;
  mediaType?: "written" | "radio-tv" | string;
  section?: string;
  category?: string;
  seoTitle: string;
  seoDescription: string;
  content: string;
  contentHtml?: string;
  sourceUrl?: string;
  embedUrl?: string;
  videoUrl?: string;
  audioUrl?: string;
};

const pressPosts = generatedPress as PressPost[];

const hasHurriyetTitle = (post: PressPost) => {
  const searchableTitle = `${post.title} ${post.seoTitle}`.toLocaleLowerCase("tr-TR");
  return searchableTitle.includes("hürriyet") || searchableTitle.includes("hurriyet");
};

const normalizePressField = (value?: string) => (value ?? "").toLocaleLowerCase("tr-TR");

const isRadioTvPost = (post: PressPost) => {
  const mediaType = normalizePressField(post.mediaType);
  const section = normalizePressField(post.section);
  const category = normalizePressField(post.category);

  return (
    mediaType === "radio-tv" ||
    mediaType === "radyo-televizyon" ||
    section === "radio-tv" ||
    section === "radyo-televizyon" ||
    category.includes("radyo") ||
    category.includes("televizyon")
  );
};

const sortPressPosts = (posts: PressPost[]) => [...posts].sort((a, b) => {
  const hurriyetOrder = Number(hasHurriyetTitle(b)) - Number(hasHurriyetTitle(a));
  if (hurriyetOrder !== 0) {
    return hurriyetOrder;
  }

  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export const allPressItems = sortPressPosts(pressPosts);

export const allRadioTvPosts = allPressItems.filter(isRadioTvPost);

export const allPressPosts = allPressItems.filter((post) => !isRadioTvPost(post));

export const pressPerPage = 12;

export const fallbackPressImage = "/assets/images/blog-kobi-ai.webp";

export const homePressPosts = allPressPosts.slice(0, 3);
