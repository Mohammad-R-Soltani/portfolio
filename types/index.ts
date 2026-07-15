export type Locale = "en" | "fa";

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "telegram" | "mail";
}

export interface Profile {
  name: string;
  nameFa: string;
  titles: string[];
  titlesFa: string[];
  tagline: string;
  taglineFa: string;
  location: string;
  locationFa: string;
  email: string;
  resumeUrl: string;
  avatarUrl: string;
}

export interface ExperienceItem {
  role: string;
  roleFa: string;
  organization: string;
  organizationFa: string;
  period: string;
  periodFa: string;
  description: string;
  descriptionFa: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  degreeFa: string;
  institution: string;
  institutionFa: string;
  period: string;
  periodFa: string;
  description?: string;
  descriptionFa?: string;
}

export interface SkillGroup {
  category: string;
  categoryFa: string;
  items: { name: string; level: number }[];
}

export interface Project {
  id: string;
  title: string;
  titleFa: string;
  description: string;
  descriptionFa: string;
  stack: string[];
  category: "AI" | "NLP" | "Web" | "Research";
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface ResearchInterest {
  title: string;
  titleFa: string;
  description: string;
  descriptionFa: string;
}

export interface Thesis {
  title: string;
  titleFa: string;
  supervisor: string;
  supervisorFa: string;
  summary: string;
  summaryFa: string;
  topics: string[];
}
