export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent-secondary)]" />
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
          Loading
        </span>
      </div>
    </div>
  );
}
