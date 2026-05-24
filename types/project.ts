// /types/project.ts
// Lägg till nya fält här om ni behöver utöka projektkorten i framtiden

export type ProjectTag =
  | "Hemsida"
  | "Webbapp"
  | "Mobilapp"
  | "SEO"
  | "Next.js"
  | "React"
  | "React Native"
  | "Tailwind"
  | "TypeScript"
  | string; // tillåter custom tags utan att bryta typen

export type Project = {
  id: number;
  title: string;         // Projektnamn, t.ex. "Restaurang Sundsvall"
  description: string;   // 1–2 meningar om projektet
  tags: ProjectTag[];    // kategorier, t.ex. ["Next.js", "Tailwind", "Hemsida"]
  image: string;         // sökväg till stillbild, t.ex. "/images/projects/restaurang.jpg"
  video?: string;        // valfri: sökväg till mp4 som spelas vid hover
  url?: string;          // valfri: länk till live-projektet
  year: string;          // t.ex. "2025"
};

// Hjälpfunktion som Anton kan använda för att hämta unika filter-taggar
// Returnerar bara huvud-kategorier (Hemsida, Webbapp, Mobilapp, SEO)
export const FILTER_CATEGORIES: ProjectTag[] = [
  "Hemsida",
  "Webbapp",
  "Mobilapp",
  "SEO",
];
