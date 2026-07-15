import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[var(--color-bg)] px-6 text-center mesh-bg">
      <span className="gradient-text text-7xl font-bold">404</span>
      <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Page not found</h1>
      <p className="max-w-sm text-[var(--color-text-secondary)]">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-secondary)]"
      >
        Back to home
      </Link>
    </div>
  );
}
