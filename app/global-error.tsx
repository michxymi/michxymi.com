"use client";

import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "28rem",
              width: "100%",
            }}
          >
            <div
              style={{
                marginBottom: "1.5rem",
                fontSize: "0.875rem",
                letterSpacing: "-0.05em",
                fontFamily: "JetBrains Mono, monospace",
                color: "#888",
              }}
            >
              Error
            </div>

            <h1
              style={{
                marginBottom: "2rem",
                fontSize: "1.875rem",
                fontWeight: 600,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              The whole thing crashed
            </h1>

            <p
              style={{
                marginBottom: "1.5rem",
                color: "#888",
                fontSize: "1rem",
              }}
            >
              Not a page. Not a component. The entire application. The root
              layout itself has failed. This is the nuclear option of error
              states.
            </p>

            <p
              style={{
                marginBottom: "2rem",
                color: "#888",
                fontSize: "0.75rem",
              }}
            >
              Whatever caused this was significant enough to take down
              everything that normally catches errors. Congratulations, I
              suppose.
            </p>

            {error.digest && (
              <p
                style={{
                  marginBottom: "1.5rem",
                  fontSize: "0.75rem",
                  fontFamily: "JetBrains Mono, monospace",
                  color: "#666",
                }}
              >
                Error ID: {error.digest}
              </p>
            )}

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                onClick={reset}
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid #333",
                  borderRadius: "0.375rem",
                  backgroundColor: "transparent",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
                type="button"
              >
                Try again
              </button>
              <a
                href="/"
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: "0.375rem",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                Go home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
