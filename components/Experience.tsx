"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { experience } from "@/data/experience";
import { useLanguage } from "@/lib/language-provider";

export function Experience() {
  const { locale, t } = useLanguage();

  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={t.experience.eyebrow} heading={t.experience.heading} />

        <div className="relative mt-16 space-y-10 border-s border-[var(--color-border)] ps-8 rtl:border-e rtl:border-s-0 rtl:pe-8 rtl:ps-0">
          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -start-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-bg)] text-[var(--color-accent-secondary)]">
                <Briefcase size={14} />
              </span>

              <Card className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    {locale === "fa" ? item.roleFa : item.role}
                  </h3>
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    {locale === "fa" ? item.periodFa : item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--color-accent-secondary)]">
                  {locale === "fa" ? item.organizationFa : item.organization}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {locale === "fa" ? item.descriptionFa : item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-[var(--color-text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
