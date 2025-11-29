import Link from "next/link";
import { FlipSentences } from "@/modules/design-system/components/flip-sentences";

export default function HomePage() {
  return (
    <div className="flex min-h-[60vh] flex-1 flex-col items-center justify-center text-center">
      <div className="space-y-6">
        <div>
          <h1 className="mb-2 font-display text-4xl md:text-5xl">
            Michael Xymitoulias
          </h1>
          <div className="text-lg text-muted-foreground">
            <FlipSentences>
              <span>Technical Software Manager</span>
              <span>Software Engineer</span>
              <span>Technical Lead</span>
            </FlipSentences>
          </div>
        </div>

        <p className="mx-auto max-w-md text-muted-foreground leading-relaxed">
          I build and lead teams that create impactful software. With a passion
          for clean architecture and developer experience, I focus on delivering
          solutions that scale.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            className="font-display text-sm transition-colors hover:text-primary"
            href="/about"
          >
            About me &rarr;
          </Link>
          <Link
            className="font-display text-sm transition-colors hover:text-primary"
            href="/projects"
          >
            View projects &rarr;
          </Link>
          <Link
            className="font-display text-sm transition-colors hover:text-primary"
            href="/blog"
          >
            Read blog &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
