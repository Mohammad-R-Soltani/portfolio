"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/language-provider";
import { cn } from "@/lib/utils";

type SectionId = "home" | "about" | "projects" | "research" | "resume" | "contact";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { id: SectionId; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "research", label: t.nav.research },
    { id: "resume", label: t.nav.resume },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-sm font-semibold tracking-wide text-[var(--color-text-primary)]">
          MR<span className="text-[var(--color-accent-secondary)]">.</span>Soltaninezhad
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] focus-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            aria-label="Toggle language"
            onClick={() => setLocale(locale === "en" ? "fa" : "en")}
            className="flex items-center gap-1 rounded-full border border-[var(--color-border)] px-3 py-2 text-xs text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] focus-ring"
          >
            <Languages size={14} />
            {locale === "en" ? "FA" : "EN"}
          </button>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full border border-[var(--color-border)] p-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] focus-ring"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="rounded-full border border-[var(--color-border)] p-2 text-[var(--color-text-primary)] focus-ring md:hidden"
        >
          <Menu size={18} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 glass md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-sm font-semibold text-white">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-full border border-[var(--color-border)] p-2 text-white focus-ring"
              >
                <X size={18} />
              </button>
            </div>
            <ul className="flex flex-col gap-2 px-6">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-4 text-lg text-white/90 hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3 px-6">
              <button
                onClick={() => setLocale(locale === "en" ? "fa" : "en")}
                className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-white/80"
              >
                <Languages size={14} /> {locale === "en" ? "فارسی" : "English"}
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-white/80"
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
