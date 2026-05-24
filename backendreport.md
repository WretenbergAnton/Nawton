# Nawton Backend – Integration Guide för Anton

Nawid har byggt dessa filer på `dev-backend`. Så här integrerar du dem i `feature/frontend`.

---

## 1. Installera beroenden

```bash
npm install resend zod
```

---

## 2. Miljövariabel

Skapa `.env.local` i projektroten (om den inte finns):

```env
RESEND_API_KEY=din_nyckel_här
```

Hämta en gratis API-nyckel på resend.com (gratisplan räcker för start).

---

## 3. Portfolio-komponenten – så här använder du projektdatan

```tsx
// /components/Portfolio.tsx
"use client";

import { useState } from "react";
import { projects, filterProjects, getAvailableCategories } from "@/data/projects";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Alla");

  const categories = getAvailableCategories(projects);
  const filtered = filterProjects(projects, activeCategory);

  return (
    <section id="projekt">
      {/* Filterrad */}
      <div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? "bg-white text-black" : "text-white"}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projektlista */}
      {filtered.map((project, index) => (
        <div key={project.id}>
          {/* Använd project.title, project.image, project.video, project.year, project.tags */}
        </div>
      ))}
    </section>
  );
}
```

---

## 4. Contact-komponenten – så här kopplar du formuläret

```tsx
// /components/Contact.tsx
"use client";

import { useState } from "react";
import { sendContactForm, ContactActionResult } from "@/app/actions/contact";

export default function Contact() {
  const [status, setStatus] = useState<ContactActionResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const result = await sendContactForm({
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    });

    setStatus(result);
    setLoading(false);

    if (result.success) form.reset();
  }

  return (
    <section id="kontakt">
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Namn" required />
        <input name="email" type="email" placeholder="E-post" required />
        <textarea name="message" placeholder="Meddelande" required />
        <button type="submit" disabled={loading}>
          {loading ? "Skickar..." : "Skicka →"}
        </button>
      </form>

      {/* Success / Error toast */}
      {status && (
        <p className={status.success ? "text-green-400" : "text-red-400"}>
          {status.message}
        </p>
      )}
    </section>
  );
}
```

---

## 5. Filstruktur som Nawid levererar

```
/types/project.ts        ← Project-typen + FILTER_CATEGORIES
/data/projects.ts        ← Projektdata + filterProjects() + getAvailableCategories()
/app/actions/contact.ts  ← sendContactForm() server action
```

---

## 6. Lägga till ett nytt projekt (båda kan göra detta)

1. Öppna `/data/projects.ts`
2. Lägg till ett objekt i arrayen
3. Lägg bilden i `/public/images/projects/`
4. (Valfritt) Lägg video i `/public/videos/projects/`

Klart – Portfolio uppdateras automatiskt.
