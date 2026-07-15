"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { skills } from "@/data/skills";
import { useLanguage } from "@/lib/language-provider";

export function Skills() {
  const { locale, t } = useLanguage();

  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.skills.eyebrow} heading={t.skills.heading} />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <Card className="p-6">
                <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                  {locale === "fa" ? group.categoryFa : group.category}
                </h3>
                <div className="mt-5 space-y-4">
                  {group.items.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-[var(--color-text-secondary)]">{skill.name}</span>
                        <span className="text-xs text-[var(--color-text-secondary)]">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)]"
                        />
                      </div>
                    </div>
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
