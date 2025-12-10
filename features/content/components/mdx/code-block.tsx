import type { ReactNode } from "react";
import type { BundledLanguage } from "shiki";
import { CodeBlockContent } from "@/components/kibo-ui/code-block/server";
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";

type PreProps = {
  children?: ReactNode;
  className?: string;
};

const LANGUAGE_REGEX = /language-(\w+)/;

const lineNumberClassNames = cn(
  "[&_code]:[counter-reset:line]",
  "[&_code]:[counter-increment:line_0]",
  "[&_.line]:before:content-[counter(line)]",
  "[&_.line]:before:inline-block",
  "[&_.line]:before:[counter-increment:line]",
  "[&_.line]:before:w-4",
  "[&_.line]:before:mr-4",
  "[&_.line]:before:text-[13px]",
  "[&_.line]:before:text-right",
  "[&_.line]:before:text-muted-foreground/50",
  "[&_.line]:before:font-mono",
  "[&_.line]:before:select-none"
);

const darkModeClassNames = cn(
  "dark:[&_.shiki]:!text-[var(--shiki-dark)]",
  "dark:[&_.shiki]:![font-style:var(--shiki-dark-font-style)]",
  "dark:[&_.shiki]:![font-weight:var(--shiki-dark-font-weight)]",
  "dark:[&_.shiki]:![text-decoration:var(--shiki-dark-text-decoration)]",
  "dark:[&_.shiki_span]:!text-[var(--shiki-dark)]",
  "dark:[&_.shiki_span]:![font-style:var(--shiki-dark-font-style)]",
  "dark:[&_.shiki_span]:![font-weight:var(--shiki-dark-font-weight)]",
  "dark:[&_.shiki_span]:![text-decoration:var(--shiki-dark-text-decoration)]"
);

const codeBlockClassName = cn(
  "bg-background text-sm",
  "[&_pre]:py-4",
  "[&_.shiki]:!bg-transparent",
  "[&_code]:w-full",
  "[&_code]:grid",
  "[&_code]:overflow-x-auto",
  "[&_code]:bg-transparent",
  "[&_.line]:px-4",
  "[&_.line]:w-full",
  "[&_.line]:relative"
);

export function Pre({ children, className }: PreProps) {
  // MDX renders code blocks as <pre><code className="language-xxx">content</code></pre>
  // Extract the code element's props
  const codeElement = children as React.ReactElement<{
    children?: string;
    className?: string;
  }>;

  const code = codeElement?.props?.children || "";
  const codeClassName = codeElement?.props?.className || "";

  // Extract language from className (format: "language-typescript")
  const languageMatch = codeClassName.match(LANGUAGE_REGEX);
  const language = (languageMatch?.[1] || "plaintext") as BundledLanguage;

  return (
    <div className={cn("my-6 overflow-hidden rounded-md border", className)}>
      <div className="flex flex-row items-center justify-between border-b bg-secondary p-1">
        <span className="flex items-center gap-2 px-4 py-1.5 text-muted-foreground text-xs">
          {language}
        </span>
        <CopyButton code={code.trim()} />
      </div>
      <div
        className={cn(
          codeBlockClassName,
          lineNumberClassNames,
          darkModeClassNames
        )}
      >
        <CodeBlockContent language={language}>{code.trim()}</CodeBlockContent>
      </div>
    </div>
  );
}

export const mdxComponents = {
  pre: Pre,
};
