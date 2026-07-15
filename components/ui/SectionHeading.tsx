"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  heading,
  align = "center",
}: {
  eyebrow: string;
  heading: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent-secondary)]">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
        {heading}
      </h2>
    </motion.div>
  );
}
