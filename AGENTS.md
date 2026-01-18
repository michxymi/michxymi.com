# AGENTS.md - AI Coding Agent Guidelines

This document provides guidelines for AI coding agents working on this codebase.

## Project Overview

Personal portfolio/blog website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.
Content is authored in MDX and validated with Zod schemas. Uses shadcn/ui components.

## Tech Stack

- **Framework:** Next.js 16 with App Router, React 19, React Compiler enabled
- **Language:** TypeScript 5 with strict mode
- **Styling:** Tailwind CSS 4, shadcn/ui (New York style)
- **Content:** MDX with gray-matter, next-mdx-remote
- **Validation:** Zod 4
- **Linting/Formatting:** Biome via ultracite
- **Package Manager:** pnpm 10.28.0 (enforced - do NOT use npm or yarn)
- **Node Version:** 22.x

## Build/Lint/Test Commands

```bash
# Install dependencies (pnpm only)
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint and format (manual)
pnpm dlx ultracite fix

# Generate changelog
pnpm changelog
```

### Pre-commit Hook

Husky runs lint-staged on commit, which executes `ultracite fix` on staged files.
Files covered: `*.{js,jsx,ts,tsx,json,jsonc,css,scss,md,mdx}`

### Testing

No test framework is configured. If adding tests in the future, prefer Vitest.

## Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout
  page.tsx              # Home page
  blog/[slug]/          # Dynamic blog routes
  projects/[slug]/      # Dynamic project routes

components/             # Shared UI components
  ui/                   # shadcn/ui primitives (excluded from linting)
  theme-provider.tsx    # Theme context

features/               # Feature-based modules
  content/              # Content/MDX handling
    components/         # Blog cards, prose, MDX components
    lib/                # Blog, projects, experience utilities
    schemas/            # Zod schemas for frontmatter
  navigation/           # Sidebar, header, footer
  seo/                  # JSON-LD schema components

content/                # MDX content files
  blog/                 # Blog posts (*.mdx)
  projects/             # Project descriptions (*.mdx)
  experience/           # Work experience (*.mdx)

lib/                    # Core utilities
  utils.ts              # cn() utility (clsx + tailwind-merge)
  site-config.ts        # Site metadata
  social-links.ts       # Social media links

hooks/                  # Custom React hooks
styles/                 # Global CSS
public/                 # Static assets
```

## Code Style Guidelines

### Imports

1. Use `@/*` path alias for all project imports (maps to project root)
2. Order imports: Node builtins > external packages > internal modules > types
3. Use `import type` for type-only imports
4. Group related imports together

```typescript
import path from "node:path";
import { z } from "zod";
import { siteConfig } from "@/lib/site-config";
import type { BlogPost } from "@/features/content/schemas/blog";
```

### TypeScript

1. Strict mode enabled - no `any` types without justification
2. Use `type` keyword for type definitions, not `interface` (Biome preference)
3. Infer types from Zod schemas: `z.infer<typeof schema>`
4. Prefer `Readonly<>` for component props
5. Use explicit return types for exported functions

```typescript
export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // ...
}
```

### React Components

1. Use function declarations for components (not arrow functions)
2. Add `"use client"` directive only when needed (hooks, browser APIs)
3. Props should be typed inline or with a separate type
4. Use `cn()` utility for conditional class names
5. Prefer Server Components by default

```typescript
"use client";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitForm, {
    success: false,
    error: null,
  });
  // ...
}
```

### Naming Conventions

- **Files:** kebab-case for all files (`blog-card.tsx`, `site-config.ts`)
- **Components:** PascalCase (`BlogCard`, `ContactForm`)
- **Functions:** camelCase (`getBlogPost`, `calculateReadingTime`)
- **Constants:** SCREAMING_SNAKE_CASE for true constants (`BLOG_DIR`)
- **Types:** PascalCase (`BlogPost`, `FormState`)
- **Zod schemas:** camelCase with `Schema` suffix (`blogFrontmatterSchema`)

### Error Handling

1. Use try/catch with specific error handling
2. Log errors with `console.error()` for debugging
3. Return `null` or error states instead of throwing in data fetching
4. Provide user-friendly error messages in UI

```typescript
try {
  const { content, frontmatter } = await parseMdxFile(filePath, schema);
  return { slug, content, frontmatter };
} catch (error) {
  console.error(`Failed to parse ${filePath}:`, error);
  return null;
}
```

### Async Patterns

1. Use `Promise.all()` for parallel operations
2. Prefer async/await over `.then()` chains
3. Handle errors in async functions with try/catch

### Styling

1. Use Tailwind CSS utility classes
2. Use `cn()` from `@/lib/utils` for conditional classes
3. Semantic color tokens: `text-muted-foreground`, `bg-background`, etc.
4. Responsive prefixes: `sm:`, `md:`, `lg:`

### Content (MDX)

Blog post frontmatter schema:

```yaml
title: string (1-100 chars, required)
description: string (1-200 chars, required)
publishedAt: date (required)
updatedAt: date (optional)
draft: boolean (default: false)
featured: boolean (default: false)
tags: string[] (default: [])
coverImage: string (optional)
```

## Biome Configuration

Biome extends `ultracite/core` and `ultracite/next`. The following paths are excluded from linting:

- `components/ui/` (shadcn/ui generated components)
- `components/ncdai/` (third-party registry)
- `components/kibo-ui/` (third-party registry)
- `lib/utils.ts` (utility functions)
- `hooks/use-mobile.ts` (generated hook)

## Key Patterns

### Data Fetching

Use async functions in `features/content/lib/` for content:

```typescript
import { getAllBlogPosts, getBlogPost } from "@/features/content/lib/blog";
```

### Zod Validation

All content frontmatter is validated with Zod schemas in `features/content/schemas/`.

### Site Configuration

Central config in `lib/site-config.ts` - use for metadata, URLs, author info.

### Component Libraries

- shadcn/ui components in `components/ui/` - do not edit directly
- Custom components in `components/` or feature directories

## Git Conventions

- Commit messages follow Angular convention (for changelog generation)
- Pre-commit hooks run linting automatically
- Do not commit files with linting errors
