import Link from "next/link";
import { Button } from "@/features/design-system/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
      <div className="flex w-full max-w-md flex-col items-center">
        <div className="mb-6 font-display text-muted-foreground text-sm tracking-tighter">
          404
        </div>

        <h1 className="mb-8 font-display font-semibold text-3xl sm:text-4xl">
          This page does not exist
        </h1>

        <p className="mb-6 text-base text-muted-foreground">
          You asked for something that is not here. Maybe it never was. Maybe it
          was and I deleted it. Maybe you typed the URL wrong. We will never
          know and honestly neither of us should spend more time on this.
        </p>

        <p className="mb-8 text-muted-foreground text-xs">
          The server looked. It found nothing. That is the whole story.
        </p>

        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
