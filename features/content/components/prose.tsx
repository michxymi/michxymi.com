import { cn } from "@/lib/utils";

export function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm prose-zinc dark:prose-invert max-w-none text-foreground",
        // Headings
        "prose-headings:font-display prose-headings:text-foreground",
        // Links
        "prose-a:break-word prose-a:font-medium prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary",
        // Inline code (not in pre blocks) - use :not() to exclude code inside pre
        "[&_:not(pre)>code]:rounded-md [&_:not(pre)>code]:border [&_:not(pre)>code]:bg-muted/50 [&_:not(pre)>code]:px-[0.3rem] [&_:not(pre)>code]:py-[0.2rem] [&_:not(pre)>code]:font-normal [&_:not(pre)>code]:text-sm",
        "prose-code:before:content-none prose-code:after:content-none",
        // Remove default pre styles - CodeBlock component handles styling
        "prose-pre:my-0 prose-pre:border-0 prose-pre:bg-transparent prose-pre:p-0",
        // Reset code inside pre blocks
        "[&_pre_code]:rounded-none [&_pre_code]:border-0 [&_pre_code]:bg-transparent [&_pre_code]:p-0",
        // Blockquotes
        "prose-blockquote:border-primary prose-blockquote:text-muted-foreground",
        // Lists
        "prose-li:text-muted-foreground",
        // Paragraphs
        "prose-p:text-muted-foreground",
        // Strong/Bold
        "prose-strong:text-foreground",
        className
      )}
      {...props}
    />
  );
}
