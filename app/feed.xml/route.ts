import { getAllBlogPosts } from "@/modules/content/lib/blog";

const BASE_URL = "https://michxymi.com";
const SITE_NAME = "Michael Xymitoulias";
const SITE_DESCRIPTION = "Full Stack Software Engineer and Engineering Manager";

export async function GET() {
  const posts = await getAllBlogPosts({ includeDrafts: false, limit: 20 });

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${BASE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.frontmatter.title}]]></title>
      <link>${BASE_URL}${post.url}</link>
      <guid isPermaLink="true">${BASE_URL}${post.url}</guid>
      <description><![CDATA[${post.frontmatter.description}]]></description>
      <pubDate>${post.frontmatter.publishedAt.toUTCString()}</pubDate>
      ${post.frontmatter.tags.map((tag) => `<category>${tag}</category>`).join("")}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
