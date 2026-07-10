# Nawton — TODO / Roadmap

Baserat på en genomgång av hela sajten (2026-07-10). Prioriterat efter påverkan.

## 🔴 Kritiskt

- [ ] **Aktivera Resend i kontaktformuläret** (`app/actions/contact.ts`) — mailet skickas aldrig, bara `console.log`. Formuläret visar "Message sent!" men leads går förlorade. Kräver `RESEND_API_KEY` i `.env.local`.
- [ ] **Lägg till lead-capture i chatboten** (`app/api/chat/route.ts`) — spara/notifiera när en besökare visar köpintresse i AI-assistenten. Just nu försvinner all den konversationen spårlöst.

## 🟠 Trovärdighet i portfolion

- [ ] Städa upp `components/Work.tsx` (startsidan) — La Trattoria är enda riktiga caset (riktig url + bilder). De tre andra (Mode E-commerce, Booking App, Fastighetsbyrån) har `url: "#"` och saknar bilder — märk dem tydligt som koncept eller ta bort dem.
- [ ] Synka `/work`-sidan (`app/work/page.tsx`) med startsidans projektlista — just nu visar de olika projekt (Restaurang Sundsvall vs. La Trattoria), vilket motsäger varandra.
- [ ] Fyll i riktiga sociala länkar överallt — `#` används som placeholder i footer på `/`, `/about`, `/work`, `/how-we-help`.

## 🟡 Teknik / SEO

- [ ] Lägg till `app/sitemap.ts` och `app/robots.ts`.
- [ ] Unik `metadata` (title/description) per sida — just nu har bara root layout metadata.
- [ ] Ersätt `<img>` med `next/image` på projektkort (`/work`, `Work.tsx`) för lazy-loading/WebP.
- [ ] Lägg till analytics (t.ex. Plausible — GDPR-vänligt, ingen cookie-banner-konflikt).
- [ ] Skapa `app/not-found.tsx`.
- [ ] Fixa navbarens "Services"-dropdown — länkar till `#services` som bara finns på startsidan, blir en dead-end på `/about`, `/work`, `/contact`.

## 🟢 UX-detaljer

- [ ] Granska kontrast på lågopacitets-text (`white/20`–`white/30`) mot mörk bakgrund, särskilt priser i FAQ och sidfot.
- [ ] Visa prisintervall (finns redan i FAQ: "från 15 000 kr") även i kontaktformulär/tjänstesektioner för bättre kvalificering.
- [ ] Formulär-feedback: spinner/status under Server Action-anrop.
- [ ] Bekräftelsemail till kunden när kontaktformuläret skickas.

---

## Nya tjänster att utveckla

### 1. IT-konsult / extra kapacitet-partner

Avlastning av företags **befintliga** system — inte nybyggnation.

- [ ] Definiera retainer-paket (timmar/månad, fast pris, svarstid/SLA).
- [ ] Ta fram ett "gratis teknisk hälsokontroll"-erbjudande som ingång (låg tröskel → naturlig övergång till retainer).
- [ ] Ny sida/sektion som beskriver detta separat från "Vad vi erbjuder" (som idag bara signalerar nybyggnation).
- [ ] Definiera målgrupp i marknadsföringen: företag med 1 intern utvecklare (sårbarhet vid frånvaro) eller ingen IT-kompetens alls.

### 2. AI-bottar / AI-agenter — bygg, träna, lansera

Egen chatbot (`ChatWidget.tsx` + Gemini) är redan ett fungerande proof-of-concept — gör den till en synlig case study.

- [ ] Paketera "Kundtjänst-/säljbot" — samma mönster som er egen widget, tränad på kundens tjänster/FAQ.
- [ ] Paketera "Interna AI-agenter" — automatisera mejl, bokning, CRM/Slack-koppling. Nytt kundsegment: företag utan sajt hos oss.
- [ ] Paketera "Träning & finslipning" som löpande retainer (matchar Launch & Grow-filosofin).
- [ ] Lyft fram att ni redan har `@anthropic-ai/sdk`, `openai` och `@google/generative-ai` installerat — inte låsta till en leverantör.
- [ ] Gör den egna chatboten till en publik case study på sajten ("Byggd av oss, körs här").

---

## Strategisk riktning

Gå från *"webbyrå som bygger nya sajter"* till tre ben:
1. Nybyggnation (nuvarande kärnverksamhet)
2. Löpande teknisk kapacitet/underhåll åt andras system
3. AI-automation

De två nya benen är säljbara till kunder som inte behöver en ny hemsida — breddar marknaden utan att tappa kärnverksamheten.
