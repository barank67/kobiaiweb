const brandSuffixPattern = /\s[-|]\sKobi ai\s*$/i;

export const withBrandSuffix = (title: string) => {
  const cleanTitle = title.trim();
  return brandSuffixPattern.test(cleanTitle) ? cleanTitle : `${cleanTitle} - Kobi ai`;
};

export const normalizeEmbeddedHeadings = (contentHtml: string) => {
  let previousHeadingLevel = 1;

  return contentHtml.replace(/<h([1-6])([^>]*)>([\s\S]*?)<\/h[1-6]>/gi, (_match, level, attrs, content) => {
    const numericLevel = Number(level);
    if (numericLevel === 1) {
      previousHeadingLevel = 2;
      return `<h2${attrs}>${content}</h2>`;
    }
    if (numericLevel === 5) {
      return `<p class="content-kicker"${attrs}>${content}</p>`;
    }
    if (numericLevel === 6) {
      return `<p class="content-step"${attrs}>${content}</p>`;
    }

    const normalizedLevel = Math.min(numericLevel, previousHeadingLevel + 1);
    previousHeadingLevel = normalizedLevel;
    return `<h${normalizedLevel}${attrs}>${content}</h${normalizedLevel}>`;
  });
};
