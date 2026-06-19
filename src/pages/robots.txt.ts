import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const hostname = new URL(site ?? "https://test.perda.com.tr").hostname;
  const isStaging = hostname === "test.perda.com.tr";
  const body = isStaging
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\n\nSitemap: ${site}sitemap-index.xml\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
