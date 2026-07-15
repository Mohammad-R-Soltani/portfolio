"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, MessagesSquare, ListTree, Search, Network, BookOpenText } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { research } from "@/data/research";
import { useLanguage } from "@/lib/language-provider";

const icons = [Brain, Sparkles, Network, MessagesSquare, ListTree, Search, BookOpenText];

export function Research() {
  const { locale, t } = useLanguage();

  return (
    <section id="research" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.research.eyebrow} heading={t.research.heading} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {research.map((item, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Card className="h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-secondary)]">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[var(--color-text-primary)]">
                    {locale === "fa" ? item.titleFa : item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {locale === "fa" ? item.descriptionFa : item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
