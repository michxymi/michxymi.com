import { ImageResponse } from "next/og";
import {
  generateProjectStaticParams,
  getProject,
} from "@/features/content/lib/projects";

export const alt = "Project cover image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generate OG images at build time for all projects
// biome-ignore lint/suspicious/useAwait: NextJS requires generateStaticParams to be async
export async function generateStaticParams() {
  return generateProjectStaticParams();
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
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
        Project Not Found
      </div>,
      { ...size }
    );
  }

  const statusColors: Record<string, { bg: string; text: string }> = {
    completed: { bg: "#22c55e20", text: "#22c55e" },
    active: { bg: "#3b82f620", text: "#3b82f6" },
    "in-progress": { bg: "#eab30820", text: "#eab308" },
  };

  const statusStyle = statusColors[project.frontmatter.status] || {
    bg: "#27272a",
    text: "#a1a1aa",
  };

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
      {/* Top section with label and status */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#a1a1aa",
            fontSize: 20,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontFamily: "monospace",
          }}
        >
          Project
        </div>
        <div
          style={{
            display: "flex",
            background: statusStyle.bg,
            color: statusStyle.text,
            fontSize: 16,
            padding: "8px 16px",
            borderRadius: 6,
            textTransform: "capitalize",
          }}
        >
          {project.frontmatter.status}
        </div>
      </div>

      {/* Title and Description */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.1,
            fontFamily: "system-ui",
          }}
        >
          {project.frontmatter.title}
        </div>
        <div
          style={{
            display: "flex",
            color: "#a1a1aa",
            fontSize: 24,
            lineHeight: 1.4,
            maxWidth: "85%",
          }}
        >
          {project.frontmatter.description}
        </div>
      </div>

      {/* Bottom section with site name */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: 32,
        }}
      >
        <div
          style={{
            display: "flex",
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
