"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import { LinkButton } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/language-provider";

export function Hero() {
  const { locale, t } = useLanguage();
  const name = locale === "fa" ? profile.nameFa : profile.name;
  const titles = locale === "fa" ? profile.titlesFa : profile.titles;
  const tagline = locale === "fa" ? profile.taglineFa : profile.tagline;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden mesh-bg pt-28"
    >
      <HeroBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-1.5 text-xs text-[var(--color-text-secondary)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-success)]" />
            {titles[0]}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-6xl">
            <span className="gradient-text">{name}</span>
          </h1>

          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-lg text-[var(--color-text-secondary)] sm:text-xl">
            {titles.map((title, i) => (
              <span key={title} className="flex items-center gap-3">
                {title}
                {i < titles.length - 1 && <span className="text-[var(--color-accent)]">/</span>}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            {tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <LinkButton href="#projects" variant="primary">
              {t.hero.viewProjects}
            </LinkButton>
            <LinkButton href={profile.resumeUrl} variant="secondary" download>
              {t.hero.downloadResume}
            </LinkButton>
            <LinkButton href="#contact" variant="ghost">
              {t.hero.contactMe}
            </LinkButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm animate-float lg:block"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-accent)]/40 via-[var(--color-accent-secondary)]/20 to-transparent blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] shadow-2xl shadow-black/40">
            <Image
              src={profile.avatarUrl}
              alt={name}
              fill
              priority
              sizes="(min-width: 1024px) 380px, 0px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -start-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/90 px-4 py-3 backdrop-blur-sm">
            <p className="text-xs text-[var(--color-text-secondary)]">
              {locale === "fa" ? profile.locationFa : profile.location}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label={t.hero.scroll}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-[var(--color-border)] p-2 text-[var(--color-text-secondary)] focus-ring"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
