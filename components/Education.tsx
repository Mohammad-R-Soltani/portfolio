"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { education } from "@/data/education";
import { useLanguage } from "@/lib/language-provider";

export function Education() {
  const { locale, t } = useLanguage();

  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={t.education.eyebrow} heading={t.education.heading} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-secondary)]">
                  <GraduationCap size={18} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
                  {locale === "fa" ? item.degreeFa : item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-accent-secondary)]">
                  {locale === "fa" ? item.institutionFa : item.institution}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                  {locale === "fa" ? item.periodFa : item.period}
                </p>
                {item.description && (
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {locale === "fa" ? item.descriptionFa : item.description}
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
