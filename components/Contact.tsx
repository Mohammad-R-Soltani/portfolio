"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Send as TelegramIcon, Mail, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { socials } from "@/data/socials";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/language-provider";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  telegram: TelegramIcon,
  mail: Mail,
};

export function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Client-only demo submission. Wire this up to an API route or form service
    // (e.g. Resend, Formspree) for production use.
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={t.contact.eyebrow} heading={t.contact.heading} />
        <p className="mx-auto mt-6 max-w-xl text-center text-[var(--color-text-secondary)]">
          {t.contact.body}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="md:col-span-3"
          >
            <Card className="space-y-4 p-6">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-[var(--color-text-secondary)]">
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-secondary)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-[var(--color-text-secondary)]">
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-secondary)]"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-[var(--color-text-secondary)]">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-secondary)]"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                <Send size={16} /> {t.contact.send}
              </Button>
              {sent && (
                <p className="text-sm text-[var(--color-success)]" role="status">
                  {t.contact.sent}
                </p>
              )}
            </Card>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <Card className="h-full p-6">
              <p className="text-sm text-[var(--color-text-secondary)]">{profile.email}</p>
              <div className="mt-5 space-y-2">
                {socials.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border)] hover:text-[var(--color-text-primary)]"
                    >
                      <Icon size={16} />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
