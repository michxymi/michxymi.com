import { Briefcase, Building2, Code, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts } from "@/modules/content/lib/blog";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const blogPosts = await getAllBlogPosts();

  const yearsExperience = new Date().getFullYear() - 2017;
  const yearsLeading = new Date().getFullYear() - 2021;

  const stats = [
    {
      name: "Years of experience",
      value: `${yearsExperience}+`,
      icon: Briefcase,
    },
    {
      name: "Years leading teams",
      value: `${yearsLeading}+`,
      icon: Users,
    },
    {
      name: "Industries",
      value: "4",
      icon: Building2,
    },
    {
      name: "Technologies",
      value: "20+",
      icon: Code,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Stats Grid */}
      <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {stats.map((stat) => (
          <div
            className="flex flex-col justify-between gap-0 rounded-md border border-border p-6"
            key={stat.name}
          >
            <stat.icon className="mb-10 size-4 text-primary" />
            <h2 className="flex max-w-xl flex-row items-end gap-4 text-left font-display text-4xl tracking-tighter">
              {stat.value}
            </h2>
            <p className="max-w-xl text-left text-muted-foreground leading-relaxed tracking-tight">
              {stat.name}
            </p>
          </div>
        ))}
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
          <Image
            alt="GitHub Contributions chart showing activity over the past year"
            className="w-full dark:brightness-90 dark:contrast-125 dark:hue-rotate-180 dark:invert"
            height={104}
            sizes="(max-width: 768px) 100vw, 722px"
            src="https://ghchart.rshah.org/michxymi"
            unoptimized
            width={722}
          />
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
                    {post.frontmatter.publishedAt.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
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
            <UseItem label="Learning" value="Tanstack Start" />
            <UseItem label="Building" value="This site" />
            <UseItem label="Listening" value="Lex Friedman Podcast" />
            <UseItem label="Watching" value="Xmas Movies" />
          </div>
        </div>
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
