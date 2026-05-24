import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Restaurang Sundsvall",
    description: "Modern hemsida med bokningssystem och digital meny för en lokal restaurang i centrala Sundsvall.",
    tags: ["Hemsida", "Next.js", "Tailwind"],
    image: "/images/projects/restaurang.jpg",
    year: "2025",
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Mobilapp för träningsloggning med statistik, veckomål och push-notiser för iOS och Android.",
    tags: ["Mobilapp", "React Native", "TypeScript"],
    image: "/images/projects/fitness.jpg",
    year: "2025",
  },
  {
    id: 3,
    title: "E-handel Dashboard",
    description: "Adminpanel för en e-handelsbutik med orderhantering, lagerstatistik och kundöversikt i realtid.",
    tags: ["Webbapp", "Next.js", "TypeScript", "Tailwind"],
    image: "/images/projects/ehandel.jpg",
    year: "2024",
  },
  {
    id: 4,
    title: "Frisörsalong Härnösand",
    description: "SEO-optimerad hemsida med online-bokning och Google Maps-integration för en lokal frisörsalong.",
    tags: ["Hemsida", "SEO", "Next.js"],
    image: "/images/projects/frisor.jpg",
    year: "2024",
  },
];

export function filterProjects(allProjects: Project[], category: string): Project[] {
  if (category === "Alla") return allProjects;
  return allProjects.filter((project) => project.tags.includes(category));
}

export function getAvailableCategories(allProjects: Project[]): string[] {
  const mainCategories = ["Hemsida", "Webbapp", "Mobilapp", "SEO"];
  const usedCategories = mainCategories.filter((cat) =>
    allProjects.some((project) => project.tags.includes(cat))
  );
  return ["Alla", ...usedCategories];
}
