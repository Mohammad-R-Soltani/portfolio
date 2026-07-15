"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/language-provider";

export function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();
  const name = locale === "fa" ? profile.nameFa : profile.name;

  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-[var(--color-text-secondary)] sm:flex-row">
        <p>
          {t.footer.built} <span className="text-[var(--color-text-primary)]">{name}</span>
        </p>
        <p>
          © {year} {name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
