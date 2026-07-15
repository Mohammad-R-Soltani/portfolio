import { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    categoryFa: "زبان‌های برنامه‌نویسی",
    items: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "SQL", level: 85 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    category: "Frameworks",
    categoryFa: "فریم‌ورک‌ها",
    items: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Artificial Intelligence",
    categoryFa: "هوش مصنوعی",
    items: [
      { name: "Machine Learning", level: 93 },
      { name: "Deep Learning", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 88 },
      { name: "Scikit-learn", level: 88 },
      { name: "Transformers", level: 85 },
      { name: "Word2Vec", level: 87 },
      { name: "NLP", level: 90 },
    ],
  },
  {
    category: "Databases & Tools",
    categoryFa: "پایگاه داده و ابزارها",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "Git", level: 92 },
      { name: "Docker", level: 80 },
      { name: "Linux", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
];
