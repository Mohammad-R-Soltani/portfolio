import type { Metadata } from "next";
import { Geist, Vazirmatn } from "next/font/google";
import { profile } from "@/data/profile";
import { Providers } from "@/app/providers";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const siteUrl = "https://mohammadrezasoltaninezhad.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI Engineer & Machine Learning Researcher`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning Researcher",
    "Full Stack Developer",
    "NLP",
    "Recommendation Systems",
    profile.name,
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — AI Engineer & Machine Learning Researcher`,
    description: profile.tagline,
    siteName: profile.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Engineer & Machine Learning Researcher`,
    description: profile.tagline,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.titles[0],
    url: siteUrl,
    sameAs: [],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Recommendation Systems",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.variable} ${vazirmatn.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
