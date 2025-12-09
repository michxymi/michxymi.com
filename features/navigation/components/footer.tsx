import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-border border-t py-6 text-center text-muted-foreground text-xs">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
        <Link
          className="transition-colors hover:text-foreground"
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
        <span className="hidden sm:inline">·</span>
        <span>© {currentYear} Michael Xymitoulias</span>
      </div>
    </footer>
  );
}
