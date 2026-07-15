import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "sentiment-recsys",
    title: "Sentiment-Aware Recommendation Engine",
    titleFa: "موتور پیشنهاددهی مبتنی بر تحلیل احساسات",
    description:
      "A deep learning recommender that blends sentiment analysis of user reviews with collaborative filtering to improve ranking quality.",
    descriptionFa:
      "یک موتور پیشنهاددهی مبتنی بر یادگیری عمیق که تحلیل احساسات نظرات کاربران را با فیلترینگ مشارکتی ترکیب می‌کند.",
    stack: ["Python", "PyTorch", "Word2Vec", "PostgreSQL"],
    category: "Research",
    github: "#",
    featured: true,
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation Platform",
    titleFa: "پلتفرم اتوماسیون صنعتی",
    description:
      "A real-time monitoring and control dashboard for industrial equipment, with role-based access and live telemetry charts.",
    descriptionFa:
      "داشبورد نظارت و کنترل بلادرنگ برای تجهیزات صنعتی همراه با دسترسی نقش‌محور و نمودارهای تله‌متری زنده.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    category: "Web",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: "electrical-platform",
    title: "Electrical Engineering Platform",
    titleFa: "پلتفرم مهندسی برق",
    description:
      "A calculation and documentation platform for electrical engineers, covering load analysis and standards-compliant reporting.",
    descriptionFa:
      "پلتفرم محاسبات و مستندسازی برای مهندسان برق شامل تحلیل بار و گزارش‌دهی مطابق استاندارد.",
    stack: ["React", "Node.js", "Express", "SQL"],
    category: "Web",
    github: "#",
    featured: true,
  },
  {
    id: "nlp-classifier",
    title: "Persian Text Sentiment Classifier",
    titleFa: "طبقه‌بند احساسات متن فارسی",
    description:
      "A transformer-based classifier fine-tuned on Persian product reviews, deployed as a lightweight inference API.",
    descriptionFa:
      "یک طبقه‌بند مبتنی بر ترنسفورمر که روی نظرات فارسی محصولات فاین‌تیون شده و به‌صورت API سبک عرضه شده است.",
    stack: ["Python", "Transformers", "FastAPI"],
    category: "NLP",
    github: "#",
  },
  {
    id: "vision-experiments",
    title: "Applied Deep Learning Experiments",
    titleFa: "آزمایش‌های کاربردی یادگیری عمیق",
    description:
      "A collection of reproducible deep learning experiments exploring architectures, regularization and training strategies.",
    descriptionFa:
      "مجموعه‌ای از آزمایش‌های تکرارپذیر یادگیری عمیق درباره‌ی معماری‌ها، تنظیم‌سازی و راهبردهای آموزش مدل.",
    stack: ["Python", "TensorFlow", "Scikit-learn"],
    category: "AI",
    github: "#",
  },
  {
    id: "info-retrieval",
    title: "Query Likelihood Retrieval Engine",
    titleFa: "موتور بازیابی مبتنی بر مدل احتمال پرس‌وجو",
    description:
      "An information retrieval engine implementing query likelihood ranking for document search, benchmarked against BM25.",
    descriptionFa:
      "موتور بازیابی اطلاعات با پیاده‌سازی رتبه‌بندی مبتنی بر مدل احتمال پرس‌وجو و مقایسه با BM25.",
    stack: ["Python", "NLP", "Information Retrieval"],
    category: "Research",
    github: "#",
  },
];
