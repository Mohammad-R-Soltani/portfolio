"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/language-provider";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

const categories: Array<Project["category"] | "All"> = ["All", "AI", "NLP", "Web", "Research"];

export function Projects() {
  const { locale, t } = useLanguage();
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.projects.eyebrow} heading={t.projects.heading} />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors focus-ring",
                active === cat
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-text-primary)]"
                  : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              )}
            >
              {cat === "All" ? t.projects.all : cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Card className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-[var(--color-accent-secondary)]">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-xs text-[var(--color-success)]">Featured</span>
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
                    {locale === "fa" ? project.titleFa : project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {locale === "fa" ? project.descriptionFa : project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] focus-ring"
                      >
                        <Github size={15} /> {t.projects.viewCode}
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] focus-ring"
                      >
                        <ExternalLink size={15} /> {t.projects.viewDemo}
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
