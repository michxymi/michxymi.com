import { ImageResponse } from "next/og";

export const alt = "Michael Xymitoulias - Technical Software Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
      {/* Top label */}
      <div
        style={{
          display: "flex",
          color: "#a1a1aa",
          fontSize: 20,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          fontFamily: "monospace",
          marginBottom: 32,
        }}
      >
        Personal Website
      </div>

      {/* Name and title */}
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
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            fontFamily: "system-ui",
          }}
        >
          Michael Xymitoulias
        </div>
        <div
          style={{
            display: "flex",
            color: "#a1a1aa",
            fontSize: 28,
            lineHeight: 1.4,
          }}
        >
          Technical Software Manager & Engineer
        </div>
      </div>

      {/* Bottom section with skills and site */}
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
            color: "#71717a",
            fontSize: 18,
            fontFamily: "monospace",
          }}
        >
          TypeScript • React • Next.js • Python
        </div>
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
