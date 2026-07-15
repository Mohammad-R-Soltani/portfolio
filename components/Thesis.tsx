"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { thesis } from "@/data/thesis";
import { useLanguage } from "@/lib/language-provider";

export function Thesis() {
  const { locale, t } = useLanguage();

  return (
    <section id="thesis" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={t.thesis.eyebrow} heading={t.thesis.heading} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="p-8">
            <h3 className="text-xl font-semibold leading-snug text-[var(--color-text-primary)]">
              {locale === "fa" ? thesis.titleFa : thesis.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-accent-secondary)]">
              {t.thesis.supervisor}: {locale === "fa" ? thesis.supervisorFa : thesis.supervisor}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
              {locale === "fa" ? thesis.summaryFa : thesis.summary}
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)]">
              {t.thesis.topics}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {thesis.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs text-[var(--color-text-secondary)]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
