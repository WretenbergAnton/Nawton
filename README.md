# Nawton – Landingpage

```
Bygg en komplett landingpage med Next.js 14 (App Router), Tailwind CSS, TypeScript och Framer Motion.

Företaget heter Nawton – en webbutvecklingsbyrå i Sundsvall grundad av Anton och Nawid.
Vi bygger hemsidor, webbappar och mobilappar för småföretag och startups.

---

DESIGN – INSPIRERAD AV REFOKUS.COM
Designen ska kännas som en high-end byrå. Ren, luftig och typografidriven.
Inga 3D-element. Fokus på stor text, whitespace och subtila rörelser.

- Bakgrund: #0a0a0a (nästan svart)
- Text: #ffffff, sekundär: #71717a
- Accent: vit eller svag lila ton – håll det dämpat och elegant
- Typografi: Inter (eller Geist) – rubriker ska vara stora och dominanta, ibland hela bredden
- Layout: fullbredd, asymmetrisk grid, sektioner med generöst whitespace
- Känsla: Refokus-stil – minimalistisk, filmisk, storytelling-driven

TYPOGRAFIPRINCIPER
- Rubriker ska vara stora (text-6xl till text-9xl) och ta plats på sidan
- Ibland splitta rubriken på två rader med olika vikt eller färg för kontrast
- Brödtext liten och diskret bredvid eller under rubrikerna
- Använd uppercase + letter-spacing på taglines och labels

---

VIDEO
Bara Hero-sektionen har video. Alla andra sektioner har mörk enfärgad bakgrund (#0a0a0a).
Bygg videon direkt i Hero.tsx – ingen separat komponent behövs.

- Videofil: /public/videos/hero.mp4
- Vad som filmas: händer som kodar i ett mörkt rum, skärm i fokus
- autoPlay muted loop playsInline, position absolute, object-cover, w-full h-full
- Overlay: bg-black/70 ovanpå videon

---

MOTION DESIGN (Framer Motion) – SUBTILT OCH ELEGANT
Animationerna ska vara mjuka och avsiktliga, aldrig distraherande. Inspirerat av Refokus stil.

Desktop:
- Rubriker: varje ord eller rad animeras in separat med stagger (maskerad slide-up från underkant)
- Sektioner: fade in + y: 40 → 0 med whileInView, once: true, duration 0.7s, easing easeOut
- Stagger på listor och kort: 0.08s fördröjning per element
- Navbar: backdrop-blur + border dyker upp mjukt vid scroll
- Hover på knappar: subtil scale(1.03) + brightness ökar något
- Hover på projektrader: floating video/bild-preview följer musen
- Cursor: custom cursor som är en liten cirkel, växer vid hover på klickbara element
- Linjer och dividers: animeras in horisontellt (width 0 → 100%) när de scrollas in

Mobil (max-width 768px):
- Stäng av custom cursor helt på mobil (touch-enheter har ingen mus)
- Stäng av hover-effekter som kräver mus (floating preview, hover på projektrader)
- Behåll bara: fade in + y: 30 → 0 på sektioner, duration 0.5s – rent och snabbt
- Stagger reduceras till 0.05s så det inte känns långsamt att scrolla
- Inga ord-för-ord-animationer på rubriker – animera hela raden istället
- Navbar-animationen behålls – den fungerar bra på touch
- Linjer animeras in – de är subtila och funkar bra på mobil
- Använd Framer Motions useReducedMotion-hook: om användaren har "reduce motion" aktiverat i OS-inställningar ska alla animationer stängas av helt

---

NAVBAR
Sticky, transparent → backdrop-blur-md + border-b border-white/10 vid scroll.
Logotyp vänster: "Nawton" – vit, bold, stor.
Länkar höger: Om oss · Tjänster · Projekt · Kontakt – uppercase, text-xs, letter-spacing.
Smooth scroll till respektive sektion.
Hamburger-meny på mobil.

---

HERO
Fullscreen video (hero.mp4) med overlay bg-black/70.
Innehållet är placerat längst ned till vänster (inte centrerat) – Refokus-stil.
- Liten uppercase tagline: "WEBBUTVECKLINGSBYRÅ — SUNDSVALL"
- Stor rubrik uppdelad på två rader (text-7xl–text-9xl):
  rad 1: "Vi bygger"
  rad 2: "digitala produkter." (kursiv eller ljusare vikt för kontrast)
- Varje ord animeras in separat med masked slide-up
- En enkel "Kontakta oss →"-länk, ingen stor knapp – diskret och stilren
- Scroll-indikator längst ned till höger: litet "Scrolla" + animerad pil nedåt

---

OM OSS
Mörk bakgrund, ingen video.
Asymmetrisk layout: stor rubrik till vänster, text till höger (två kolumner).
- Vänster: stor rubrik "Om oss" (text-7xl) + liten tagline under "— SUNDSVALL, SVERIGE"
- Höger: två rader med namn och roll, sedan en längre brödtext
  "Anton Wretenberg & Nawid — två webbutvecklare som kombinerar teknisk precision
  med ett öga för design. Vi bygger produkter som både ser bra ut och fungerar felfritt."
- Under: en tunn horisontell linje (animeras in) + tre siffror i rad:
  "2 GRUNDARE · 15+ PROJEKT · 100% NÖJDA KUNDER"

---

TJÄNSTER
Mörk bakgrund.
Rubrik: "Vad vi erbjuder" (stor, vänsterjusterad)
Lista-stil istället för kort – varje tjänst är en rad med en tunn linje ovanför, Refokus-liknande:
- Numrering till vänster (01, 02, 03, 04) i liten text
- Tjänstens namn stort i mitten
- Kort beskrivning till höger i liten text
- Pil → längst till höger
- Hover: raden lyser upp och pilen rör sig höger
Tjänster:
01 · Hemsidor · "Snabba, moderna och SEO-optimerade hemsidor."
02 · Webbappar · "Skalbara applikationer byggda med de senaste teknologierna."
03 · Mobilappar · "Plattformsoberoende appar för iOS och Android."
04 · SEO · "Vi optimerar din synlighet i sökmotorer."

---

PROJEKT (PORTFOLIO)
Mörk bakgrund.
Rubrik: "Utvalda projekt" (stor, vänsterjusterad)

PROJEKTDATASYSTEM
Alla projekt definieras i /data/projects.ts. För att lägga till ett nytt projekt räcker det med
att lägga till ett objekt i arrayen – allt annat renderas automatiskt.

Typdefinition i /types/project.ts:
  type Project = {
    id: number
    title: string           // projektnamn, t.ex. "Restaurang Sundsvall"
    description: string     // 1–2 meningar om projektet
    tags: string[]          // kategorier, t.ex. ["Next.js", "Tailwind", "Hemsida"]
    image: string           // sökväg till stillbild, t.ex. "/images/projects/restaurang.jpg"
    video?: string          // valfri: sökväg till mp4 som spelas vid hover, t.ex. "/videos/projects/restaurang.mp4"
    url?: string            // valfri: länk till live-projektet
    year: string            // t.ex. "2025"
  }

Exempeldata i /data/projects.ts:
  export const projects: Project[] = [
    {
      id: 1,
      title: "Restaurang Sundsvall",
      description: "Modern hemsida med bokningssystem och meny för en lokal restaurang.",
      tags: ["Hemsida", "Next.js", "Tailwind"],
      image: "/images/projects/restaurang.jpg",
      video: "/videos/projects/restaurang.mp4",
      url: "https://example.com",
      year: "2025"
    },
    ...
  ]

LAYOUT – REFOKUS-STIL
Projekten visas som en vertikal lista där varje projekt är fullbredd och tar upp hela skärmbredden.
Varje projekt är separerat av en tunn horisontell linje (animeras in).

Varje projektrad innehåller:
- Projektnummer litet till vänster (01, 02, 03...)
- Projektnamn stort i mitten (text-5xl, bold)
- År diskret till höger
- Vid hover: en video eller bild glider in som en stor floating preview bredvid musen (följer musen)
- Hover: texten dämpas något och preview visas med en mjuk fade-in
- Klick: öppnar projektet i ny flik (url) om det finns, annars ingen länk

FILTERRAD
Ovanför listan: klickbara taggar för att filtrera på kategori (t.ex. Hemsida, Webbapp, Mobilapp).
Aktiv tagg markeras med vit bakgrund + svart text. Animerad transition när listan filtreras.

---

KONTAKT
Mörk bakgrund.
Stor rubrik centrerad: "Har du ett projekt?" (text-7xl–text-8xl)
Under: "Hör av dig – vi svarar inom 24 timmar."
Formulär centrerat på sidan: Namn, E-post, Meddelande, Skicka-knapp.
Knappen är vit med svart text – inverterat mot resten av sidan.
Server action (contact.ts) + Resend. Success-toast vid skickat.
Under formuläret: e-post och LinkedIn som plain text-länkar.

---

FOOTER
Tunn, minimal.
Vänster: "© 2025 Nawton"
Höger: LinkedIn · GitHub
Ingenting mer.

---

MAPPSTRUKTUR
/app/layout.tsx
/app/page.tsx
/app/actions/contact.ts
/components/Navbar.tsx
/components/Hero.tsx
/components/About.tsx
/components/Services.tsx
/components/Portfolio.tsx
/components/Contact.tsx
/components/Footer.tsx
/components/CustomCursor.tsx
/data/projects.ts              ← lägg till nya projekt här
/types/project.ts              ← Project-typen
/public/videos/hero.mp4
/public/videos/projects/      ← projekt-videor (valfritt)
/public/images/projects/      ← projekt-bilder

---

PAKET
npm install framer-motion lucide-react resend

MILJÖVARIABEL i .env.local:
RESEND_API_KEY=din_nyckel_här
```
