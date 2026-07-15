"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { research } from "@/data/research";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/language-provider";

export function About() {
  const { locale, t } = useLanguage();
  const name = locale === "fa" ? profile.nameFa : profile.name;

  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={t.about.eyebrow} heading={t.about.heading} />

        <div className="mt-12 grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto aspect-square w-full max-w-xs"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[var(--color-accent)]/30 to-transparent blur-xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)]">
              <Image
                src={profile.avatarUrl}
                alt={name}
                fill
                sizes="(min-width: 768px) 320px, 280px"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg"
          >
            {t.about.body}
          </motion.p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {research.map((item, i) => (
            <motion.span
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/60 hover:text-[var(--color-text-primary)]"
            >
              {locale === "fa" ? item.titleFa : item.title}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
