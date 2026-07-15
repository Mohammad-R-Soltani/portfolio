"use client";

import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/language-provider";

export function Resume() {
  const { t } = useLanguage();

  return (
    <section id="resume" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow={t.resume.eyebrow} heading={t.resume.heading} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-[var(--color-text-secondary)]"
        >
          {t.resume.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-sm items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/70 p-10"
        >
          <FileText size={56} className="text-[var(--color-accent-secondary)]" strokeWidth={1.2} />
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <LinkButton href={profile.resumeUrl} download variant="primary">
            <Download size={16} /> {t.resume.download}
          </LinkButton>
          <LinkButton href={profile.resumeUrl} target="_blank" variant="secondary">
            <Eye size={16} /> {t.resume.view}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
