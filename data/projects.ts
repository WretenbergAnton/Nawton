import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Restaurang Sundsvall",
    description:
      "Modern hemsida med bokningssystem och meny för en lokal restaurang.",
    tags: ["Hemsida", "Next.js", "Tailwind"],
    image: "/images/projects/restaurang.jpg",
    year: "2025",
  },
  {
    id: 2,
    title: "E-handel Mode",
    description:
      "Fullständig e-handelsplattform med betalningar och lagerhantering.",
    tags: ["Webbapp", "Next.js", "Stripe", "Supabase"],
    image: "/images/projects/ehandel.jpg",
    year: "2025",
  },
  {
    id: 3,
    title: "Bokningsapp",
    description:
      "Plattformsoberoende mobilapp för bokning av tjänster med realtidsuppdateringar.",
    tags: ["Mobilapp", "React Native", "Expo"],
    image: "/images/projects/bokningsapp.jpg",
    year: "2025",
  },
];
