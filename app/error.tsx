"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
      <div className="flex w-full max-w-md flex-col items-center">
        <div className="mb-6 font-display text-muted-foreground text-sm tracking-tighter">
          500
        </div>

        <h1 className="mb-8 font-display font-semibold text-3xl sm:text-4xl">
          Something broke
        </h1>

        <p className="mb-6 text-base text-muted-foreground">
          The code did something unexpected. This is not your fault. Well, it
          might be your fault if you sent weird data, but let us assume
          innocence.
        </p>

        <p className="mb-8 text-muted-foreground text-xs">
          I would explain what went wrong but the error message would either
          mean nothing to you or reveal embarrassing implementation details.
          Neither seems helpful.
        </p>

        {error.digest && (
          <p className="mb-6 font-mono text-muted-foreground text-xs">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex gap-3">
          <Button onClick={reset} variant="outline">
            Try again
          </Button>
          <Button asChild>
            <a href="/">Go home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
