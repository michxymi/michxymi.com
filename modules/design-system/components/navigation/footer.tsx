import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border py-6 text-center text-xs text-muted-foreground">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
        <Link
          href="/privacy-policy"
          className="transition-colors hover:text-foreground"
        >
          Privacy Policy
        </Link>
        <span className="hidden sm:inline">·</span>
        <span>© {currentYear} Michael Xymitoulias</span>
      </div>
    </footer>
  );
}
