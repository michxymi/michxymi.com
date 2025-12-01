import { cn } from "@/modules/design-system/lib/utils";

export function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm prose-zinc dark:prose-invert max-w-none text-foreground",
        // Headings
        "prose-headings:font-display prose-headings:text-foreground",
        // Links
        "prose-a:break-word prose-a:font-medium prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary",
        // Code
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-normal prose-code:text-sm prose-code:before:content-none prose-code:after:content-none",
        // Pre (code blocks)
        "prose-pre:rounded-lg prose-pre:border prose-pre:bg-muted/50",
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
