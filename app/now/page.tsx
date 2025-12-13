import type { Metadata } from "next";
import Link from "next/link";
import { GithubChart } from "@/features/content/components/github-chart";
import { getAllBlogPosts } from "@/features/content/lib/blog";
import { PageHeader } from "@/features/navigation/components/page-header";

const description =
  "A snapshot of what's happening. Before you commit to reading anything else.";

export const metadata: Metadata = {
  title: "Now",
  description,
  alternates: {
    canonical: "/now",
  },
  openGraph: {
    title: "Now",
    description,
  },
  twitter: {
    title: "Now",
    description,
  },
};

export default async function NowPage() {
  const blogPosts = await getAllBlogPosts();

  return (
    <div>
      <PageHeader description={description} title="Now" />

      <div className="space-y-4">
        {/* Uses & Currently */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Uses */}
          <div className="rounded-md border border-border p-6">
            <div className="mb-4 font-mono text-muted-foreground text-xs uppercase tracking-wider">
              Uses
            </div>
            <div className="grid grid-cols-2 gap-4">
              <UseItem label="Editor" value="Cursor" />
              <UseItem label="AI" value="Claude" />
              <UseItem label="Terminal" value="Ghostty" />
              <UseItem label="Notes" value="Obsidian" />
            </div>
          </div>

          {/* Currently */}
          <div className="rounded-md border border-border p-6">
            <div className="mb-4 font-mono text-muted-foreground text-xs uppercase tracking-wider">
              Currently
            </div>
            <div className="grid grid-cols-2 gap-4">
              <UseItem label="Reading" value="Atomic Habits" />
              <UseItem label="Listening" value="Lex Friedman #475" />
              <UseItem label="Exploring" value="Cloudflare Hyperdrive" />
              <UseItem label="Building" value="This site" />
            </div>
          </div>
        </div>
        {/* GitHub Contributions */}
        <div className="rounded-md border border-border p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="font-mono text-muted-foreground text-xs uppercase tracking-wider">
              GitHub Activity
            </div>
            <Link
              className="text-muted-foreground text-xs transition-colors hover:text-foreground"
              href="https://github.com/michxymi"
              rel="noopener noreferrer"
              target="_blank"
            >
              @michxymi →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <GithubChart />
          </div>
        </div>
        {/* Recent Posts */}
        {blogPosts.length > 0 && (
          <div className="rounded-md border border-border p-6">
            <div className="mb-4 font-mono text-muted-foreground text-xs uppercase tracking-wider">
              Recent Posts
            </div>
            <div className="space-y-3">
              {blogPosts.slice(0, 3).map((post, index) => (
                <Link
                  className="group flex items-start gap-3"
                  href={post.url}
                  key={post.slug}
                >
                  <span
                    className={`mt-1.5 size-2 shrink-0 rounded-full ${
                      index === 0
                        ? "bg-primary"
                        : "border border-muted-foreground"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm transition-colors group-hover:text-primary">
                      {post.frontmatter.title}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {post.frontmatter.publishedAt.toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function UseItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-muted-foreground text-xs">{label}</div>
      <div className="font-display text-sm">{value}</div>
    </div>
  );
}
