import { ImageResponse } from "next/og";
import { getBlogPost } from "@/modules/content/lib/blog";

export const alt = "Blog post cover image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return new ImageResponse(
      <div
        style={{
          display: "flex",
          fontSize: 48,
          background: "#000000",
          color: "#ffffff",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Post Not Found
      </div>,
      { ...size }
    );
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#000000",
        padding: 64,
      }}
    >
      {/* Top section with label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 20,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontFamily: "monospace",
          }}
        >
          Blog
        </div>
        <div
          style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#a1a1aa",
          }}
        />
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 18,
            fontFamily: "monospace",
          }}
        >
          {post.readingTime} min read
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: "95%",
            fontFamily: "system-ui",
          }}
        >
          {post.frontmatter.title}
        </div>
      </div>

      {/* Bottom section with author and site */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "#27272a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            MX
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ color: "#ffffff", fontSize: 20, fontWeight: 500 }}>
              Michael Xymitoulias
            </div>
            <div style={{ color: "#a1a1aa", fontSize: 16 }}>
              {post.frontmatter.publishedAt.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
        <div
          style={{
            color: "#71717a",
            fontSize: 18,
            fontFamily: "monospace",
          }}
        >
          michxymi.com
        </div>
      </div>
    </div>,
    { ...size }
  );
}
