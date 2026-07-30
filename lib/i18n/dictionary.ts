// Central bilingual copy dictionary. Swedish is the default/primary
// language; English is the secondary language exposed via the language
// toggle (see LanguageContext). Keep the `sv` and `en` objects structurally
// identical — TypeScript will flag any drift.

import { STARTING_PRICE_LABEL } from "@/lib/pricing";

export type Lang = "sv" | "en";

const sv = {
  meta: {
    title: "Nawton — Digitala produkter, appar & webbyrå i Sverige",
    description:
      "Nawton är en webbyrå som designar och bygger snabba, moderna hemsidor och webbappar i hela Sverige.",
  },

  nav: {
    about: "Om oss",
    services: "Tjänster",
    work: "Projekt & Case",
    contact: "Kontakt",
    menu: "Meny",
    servicesDropdown: [
      { label: "Hemsidor", description: "Snabba, moderna hemsidor" },
      { label: "Webbappar", description: "Skalbara applikationer" },
      { label: "Mobilappar", description: "Appar för iOS & Android" },
      { label: "SEO", description: "Synlighet i sökmotorer" },
    ],
  },

  hero: {
    tagline: "· Design · Webb · Utveckling ·",
    h1Line1: "Vi bygger digitala produkter",
    h1Line2: "— inklusive våra egna.",
    subtitle:
      "Två systemvetare som designar och utvecklar hemsidor, webbappar och mobilappar. Vi vet vad som krävs för att få ut något i skarpt läge, för vi driver våra egna produkter också.",
    ctaPrimary: "Kontakta oss",
    ctaSecondary: "Så kan vi hjälpa dig",
    servicesTitle:
      "Som webbyrå bygger vi inte bara hemsidor — vi bygger företag som växer. Vi reser dit du är, var i Sverige du än finns.",
    services: [
      {
        title: "Strategi & upptäckt",
        description:
          "Vi börjar med att förstå din verksamhet, dina användare och dina mål. Sedan formar vi det till en tydlig riktning hela ditt team kan samlas kring — vad ni står för, vem ni finns till för och hur ni syns.",
      },
      {
        title: "Design & varumärke",
        description:
          "Vi översätter strategi till en visuell upplevelse som är omisskännligt er. Från UI-system till varumärkesidentitet — hur det ser ut, känns och talar.",
      },
      {
        title: "Webbutveckling",
        description:
          "Er design blir verklighet. Vi bygger snabba, skalbara och SEO-optimerade hemsidor och webbappar med modern teknik. Ren kod, smidiga interaktioner, verklig prestanda.",
      },
      {
        title: "Lansering & tillväxt",
        description:
          "Vi stannar kvar efter lansering. Övervakning, förbättringar och vidareutveckling — samma team som förstod er vision bygger och finslipar den tills den fungerar som ni behöver.",
      },
    ],
  },

  work: {
    tagline: "· Utvalda projekt ·",
    title: "Våra kunder har ambitiösa visioner — vi får folk att känna dem.",
    visitSite: "Besök sajten",
    screenshotAlt: "skärmdump",
    projects: {
      seventyfive: {
        name: "SeventyFive",
        description:
          "Vår egen mobilapp för 75 Hard-utmaningen — med schemaläggning, GPS-cardio, muskelkarta och framstegsfoton. Vi bygger även egna produkter — samma kvalitet levererar vi till våra kunder.",
        location: "Egen produkt",
        badge: "Egen produkt",
      },
      latrattoria: {
        name: "La Trattoria",
        description:
          "En modern hemsida för en äkta italiensk restaurang i Åre — med digital meny, avhämtningsinfo och en varm, inbjudande design som speglar maten.",
        tags: ["Webbdesign", "Next.js", "Varumärke"],
        location: "Åre, Sverige",
      },
      ecommerce: {
        name: "Mode E-commerce",
        description:
          "En fullständig e-handelsplattform med betalningar, lagerhantering och en skräddarsydd butik designad för att konvertera. Stripe-integration med lagerstatus i realtid.",
        tags: ["Webbapp", "Stripe", "Next.js"],
        location: "Stockholm, Sverige",
        badge: "Konceptprojekt",
      },
      booking: {
        name: "Bokningsapp",
        description:
          "En mobilapp för bokning av tjänster med realtidstillgänglighet och push-notiser. Tillgänglig på iOS och Android med delad kodbas.",
        tags: ["Mobilapp", "React Native", "Expo"],
        location: "Sundsvall, Sverige",
        badge: "Konceptprojekt",
      },
    },
  },

  faq: {
    title: "Vanliga frågor",
    items: [
      {
        question: "Hur lång tid tar ett projekt?",
        answer:
          "Det beror på omfattning. En hemsida tar oftast 3–6 veckor från start till lansering, en webbapp eller mobilapp längre — vanligtvis 2–4 månader. Du får en tydlig tidsplan innan vi börjar.",
      },
      {
        question: "Vad kostar det?",
        answer: `En webbplats börjar typiskt från ${STARTING_PRICE_LABEL} beroende på omfattning. En webbapp eller mobilapp offereras efter en kostnadsfri genomgång. Du får alltid fast pris innan vi startar.`,
      },
      {
        question: "Var är ni baserade?",
        answer:
          "Vi jobbar med kunder i hela Sverige och reser gärna dit du är. Det mesta av arbetet kan också skötas på distans, med tydlig kommunikation via videosamtal, delade dokument och regelbundna uppdateringar.",
      },
      {
        question: "Vad behöver ni från oss för att komma igång?",
        answer:
          "Bara ett samtal. Berätta om ditt projekt, dina mål och din tidsplan, så tar vi det därifrån.",
      },
      {
        question: "Erbjuder ni löpande support efter lansering?",
        answer:
          "Ja. Vi finns kvar efter lansering för buggfixar, uppdateringar och förbättringar. Många kunder fortsätter med oss löpande — vi blir en långsiktig partner, inte bara en leverantör.",
      },
      {
        question: "Kan ni bygga om en befintlig hemsida?",
        answer:
          "Ja, vi gör omdesign regelbundet. Vi granskar det ni har, identifierar vad som fungerar och vad som inte gör det, och bygger om det ordentligt.",
      },
    ],
  },

  teamPreview: {
    intro:
      "Vilka vi är — två systemvetare som bygger egna produkter och kundprojekt med samma noggrannhet.",
    link: "Läs mer om oss",
    roles: { anton: "Utvecklare", nawid: "Design & utveckling" },
  },

  ownProduct: {
    tagline: "· Vår egen produkt ·",
    title: "Vi bygger inte bara åt andra",
    paragraph1:
      "seventyfive — en 75-dagars träningsutmaning med passloggning, GPS-spårning och lagfunktioner. Vi designade, byggde och lanserade den själva, och driver den vidare med riktiga användare.",
    paragraph2:
      "Det är därför vi kan säga att vi förstår vad som händer efter lansering. Vi lever i det varje dag med vår egen produkt.",
    cta: "Se caset",
  },

  auditCta: {
    title: "Osäker på var du ska börja?",
    description:
      "Boka en kostnadsfri 20-minutersgenomgång av din nuvarande webbplats. Vi visar tre konkreta saker du kan förbättra — oavsett om du anlitar oss eller inte.",
    button: "Boka gratis genomgång",
  },

  contact: {
    portfolioLabel: "Portfolio",
    portfolioTitle: ["Projekt &", "case studies"],
    portfolioDescription: ["Webbdesign, Next.js-utveckling", "och mobilappar."],
    ctaLabel: "Hör av dig",
    ctaCopy: ["Nu kör vi —", "tillsammans."],
    ctaTitle: "Starta ett projekt",
    ctaLink: "Kontakta oss",
    orgNrLabel: "Org.nr",
    social: { linkedin: "LinkedIn", github: "GitHub", instagram: "Instagram" },
  },

  contactPage: {
    back: "Tillbaka",
    tagline: "· Hör av dig ·",
    title: "Låt oss bygga något bra tillsammans.",
    subtitle: "Berätta om ditt projekt så hör vi av oss inom 24 timmar med en plan framåt.",
    subtitleAudit:
      "Berätta lite om er nuvarande webbplats så återkommer vi inom 24 timmar och bokar in er kostnadsfria genomgång.",
    reachDirectly: "Eller nå oss direkt",
    successTitle: "Meddelande skickat!",
    successSubtitle: "Vi hör av oss inom 24 timmar.",
    backHome: "Tillbaka till startsidan",
    genericError: "Något gick fel.",
    labels: {
      name: "Namn",
      namePlaceholder: "Fullständigt namn",
      email: "E-post",
      emailPlaceholder: "Din e-post",
      projectType: "Projekttyp",
      selectType: "Välj typ",
      typeAudit: "Kostnadsfri genomgång",
      typeWebsite: "Hemsida",
      typeWebApp: "Webbapp",
      typeMobileApp: "Mobilapp",
      typeSeo: "SEO",
      typeOther: "Annat",
      budget: "Budget",
      selectBudget: "Välj budget",
      budgetUnder10k: "Under 10 000 kr",
      budget10to30k: "10 000 – 30 000 kr",
      budget30to50k: "30 000 – 50 000 kr",
      budget50kPlus: "50 000 kr+",
      message: "Meddelande",
      messagePlaceholder: "Beskriv ditt projekt, dina mål och eventuell tidsplan eller andra förutsättningar…",
      replyTime: "Vi svarar inom 24 timmar.",
      send: "Skicka meddelande",
      sending: "Skickar…",
    },
  },

  about: {
    back: "Tillbaka",
    contact: "Kontakt",
    tagline: "· Om oss ·",
    title: "Två systemvetare. En gemensam besatthet av kvalitet.",
    founders: [
      {
        name: "Anton Wretenberg",
        role: "Medgrundare · Utvecklare",
        photoTodo: "TODO: ersätt med riktigt foto av Anton",
        bio: [
          "Anton är systemvetare och fokuserar på den tekniska sidan — han bygger snabba, skalbara webbapplikationer och ser till att allt fungerar exakt som det ska. Han har ett skarpt öga för prestanda och låg tolerans för sådant som känns långsamt eller trasigt.",
          "Han har byggt för webben sedan tonåren och bygger dessutom egna produkter vid sidan om kunduppdragen — samma nyfikenhet i allt han gör.",
        ],
      },
      {
        name: "Nawid",
        role: "Medgrundare · Design & utveckling",
        photoTodo: "TODO: ersätt med riktigt foto av Nawid",
        bio: [
          "Nawid är också systemvetare och befinner sig i skärningspunkten mellan design och teknik. Han bryr sig djupt om hur saker ser ut och känns — övergångarna, hierarkin, hur en sida guidar blicken utan att man märker det.",
          "Hans bakgrund spänner över både kreativ ledning och frontend-utveckling, vilket betyder att designer inte bara ser bra ut i Figma — de fungerar i webbläsaren också. Han bygger även egna produkter, som appen SeventyFive.",
        ],
      },
    ],
    storyTitle: "Varför vi startade Nawton",
    story: [
      "Vi såg samma problem gång på gång: företag med genuin ambition som satt fast med hemsidor som inte speglade dem. Generiska mallar, byråer som lovade för mycket och levererade för lite, eller utvecklare som kunde bygga men inte designa — och designers som inte kunde bygga.",
      "Nawton är vårt svar på det. En liten, fokuserad studio där design och utveckling inte är två separata överlämningar — de sker tillsammans, av folk som bryr sig om båda.",
      "Vi jobbar med ett fåtal kunder åt gången så vi kan göra jobbet ordentligt. Inga account managers, inga överlämningar. Ni jobbar direkt med oss.",
    ],
    valuesTitle: "Hur vi jobbar",
    values: [
      {
        title: "Hantverk före hastighet",
        description:
          "Vi tar hellre tid på oss att göra rätt än att leverera något som precis fungerar. Varje detalj spelar roll — de folk märker och de de inte gör.",
      },
      {
        title: "Ärlig kommunikation",
        description:
          "Ingen jargong, ingen omväg. Vi säger vad vi tycker, förklarar våra beslut och håller er uppdaterade i varje steg.",
      },
      {
        title: "Långsiktigt tänkande",
        description:
          "Vi bygger sådant som håller. Ren kod, stabila grunder och design som inte känns daterad om sex månader.",
      },
    ],
    ctaTitle: "Redo att bygga något värt att visa upp?",
    ctaLink: "Starta ett projekt",
  },

  workPage: {
    tagline: "· Projekt & case studies ·",
    title: "Arbete vi är stolta över.",
    subtitle:
      "Ett urval projekt inom webb, mobil och e-handel — samt vår egen produkt. Allt byggt från grunden, inga mallar, inga genvägar.",
    visit: "Besök",
    ctaTitle: "Har du ett projekt i åtanke?",
    ctaLink: "Starta ett projekt",
  },

  seventyfivePage: {
    back: "Tillbaka",
    tagline: "· Egen produkt ·",
    title: "SeventyFive",
    subtitle:
      "En 75-dagars träningsutmaning som vi designade, byggde och lanserade själva — och som vi driver vidare med riktiga användare.",
    paragraph1:
      "seventyfive är vår egen mobilapp för 75 Hard-utmaningen, med passloggning, GPS-spårning, lagfunktioner och framstegsfoton. Vi äger hela resan: idé, design, utveckling och drift.",
    paragraph2:
      "Det är därför vi kan säga att vi förstår vad som händer efter lansering. Vi lever i det varje dag med vår egen produkt — samma noggrannhet ger vi till varje kundprojekt.",
    ctaTitle: "Vill du bygga något liknande?",
    ctaLink: "Starta ett projekt",
  },

  howWeHelp: {
    tagline: "· Vår process ·",
    titleLine1: "Så jobbar vi",
    titleLine2: "tillsammans med dig.",
    subtitle: "Från första samtalet till lansering och därefter — så här ser det ut att jobba med Nawton.",
    ctaTitle: "Redo att komma igång?",
    ctaLink: "Kontakta oss",
    steps: [
      {
        title: "Utforskning",
        subtitle: "Vi lär känna dig",
        description:
          "Innan vi rör en enda pixel eller skriver en rad kod sätter vi oss ner med dig. Vi går på djupet med din verksamhet, dina användare, dina mål och vad som står i vägen. Resultatet är en tydlig riktning — vad vi bygger, varför, och för vem.",
        tags: ["Uppstartsmöte", "Användarundersökning", "Strategidokument"],
      },
      {
        title: "Design",
        subtitle: "Vi får det att se ut som dig",
        description:
          "Vi översätter strategi till en visuell upplevelse som är omisskännligt din. Wireframes, UI-system, varumärkesdetaljer — allt övervägs noga. Du ser det och godkänner innan vi bygger något alls.",
        tags: ["Wireframes", "UI-design", "Varumärkesidentitet"],
      },
      {
        title: "Utveckling",
        subtitle: "Vi bygger det rätt",
        description:
          "Din design blir verklighet. Snabbt, skalbart och byggt på modern teknik. Vi skriver ren kod, bygger smidiga interaktioner och ser till att allt presterar — på alla enheter, i alla skärmstorlekar.",
        tags: ["Next.js", "React Native", "Prestanda"],
      },
      {
        title: "Test",
        subtitle: "Vi säkerställer att det fungerar",
        description:
          "Inget lanseras förrän det är noggrant testat. Vi går igenom varje flöde, varje specialfall, varje enhet. Är något fel fixar vi det innan du eller dina användare någonsin ser det.",
        tags: ["QA-testning", "Flera enheter", "Prestandagranskning"],
      },
      {
        title: "Lansering",
        subtitle: "Vi går live — tillsammans",
        description:
          "Lanseringsdagen ska vara spännande, inte stressig. Vi sköter driftsättning, övervakar prestanda och finns tillgängliga. Efter lansering stannar vi kvar för vidareutveckling och förbättringar — samma team som byggde det håller det igång.",
        tags: ["Driftsättning", "Övervakning", "Löpande support"],
      },
    ],
  },

  cookieBanner: {
    title: "Vi använder cookies",
    description: "Vi använder cookies för att förbättra din upplevelse på vår webbplats.",
    accept: "Acceptera",
    decline: "Avböj",
  },

  chatWidget: {
    greeting: "Hej! Jag är Nawtons assistent. Hur kan jag hjälpa dig idag?",
    placeholder: "Fråga något...",
    subtitle: "AI-assistent",
    genericError: "Förlåt, något gick fel.",
    connectionError: "Förlåt, jag kunde inte ansluta just nu. Försök igen.",
  },

  languageToggle: {
    label: "Språk",
  },
};

const en: typeof sv = {
  meta: {
    title: "Nawton — Digital products, apps & web agency in Sweden",
    description:
      "Nawton is a web agency that designs and builds fast, modern websites and web apps across Sweden.",
  },

  nav: {
    about: "About",
    services: "Services",
    work: "Projects & Case Studies",
    contact: "Contact",
    menu: "Menu",
    servicesDropdown: [
      { label: "Websites", description: "Fast, modern websites" },
      { label: "Web Apps", description: "Scalable applications" },
      { label: "Mobile Apps", description: "Apps for iOS & Android" },
      { label: "SEO", description: "Visibility in search engines" },
    ],
  },

  hero: {
    tagline: "· Design · Web · Development ·",
    h1Line1: "Web agency",
    h1Line2: "for all of Sweden",
    subtitle:
      "We design and build fast, modern websites and apps that get small businesses real results — without the big-agency price tag.",
    ctaPrimary: "Contact us",
    ctaSecondary: "How we can help",
    servicesTitle: "We don't just build websites — we build businesses that grow. We travel to wherever you are in Sweden.",
    services: [
      {
        title: "Strategy & Discovery",
        description:
          "We start by understanding your business, your users, and your goals. Then we map it into a clear direction your whole team can align behind — what you stand for, who you serve, and how you show up.",
      },
      {
        title: "Design & Brand",
        description:
          "We translate strategy into a visual experience that's unmistakably yours. From UI systems to brand identity — how it looks, how it feels, and how it speaks.",
      },
      {
        title: "Web Development",
        description:
          "Your designs come to life. We build fast, scalable, SEO-optimized websites and web apps using modern technology. Clean code, smooth interactions, real performance.",
      },
      {
        title: "Launch & Grow",
        description:
          "We stay with the work after launch. Monitoring, improvements, and iterations — the same team that understood your vision builds and refines it until it works the way you need it to.",
      },
    ],
  },

  work: {
    tagline: "· Selected Work ·",
    title: "Our clients have ambitious visions — we make people feel them.",
    visitSite: "Visit site",
    screenshotAlt: "screenshot",
    projects: {
      seventyfive: {
        name: "SeventyFive",
        description:
          "Our own mobile app for the 75 Hard challenge — with scheduling, GPS cardio, a muscle map and progress photos. We build our own products too — the same quality we deliver to our clients.",
        location: "Own product",
        badge: "Own product",
      },
      latrattoria: {
        name: "La Trattoria",
        description:
          "A modern website for an authentic Italian restaurant in Åre — with digital menu, takeaway info and a warm, inviting design that reflects the food.",
        tags: ["Web Design", "Next.js", "Branding"],
        location: "Åre, Sweden",
      },
      ecommerce: {
        name: "Mode E-commerce",
        description:
          "A full e-commerce platform with payments, inventory management, and a custom storefront designed to convert. Stripe integration with real-time stock updates.",
        tags: ["Web App", "Stripe", "Next.js"],
        location: "Stockholm, Sweden",
        badge: "Concept project",
      },
      booking: {
        name: "Booking App",
        description:
          "A cross-platform mobile app for booking services with real-time availability and push notifications. Available on iOS and Android with a shared codebase.",
        tags: ["Mobile App", "React Native", "Expo"],
        location: "Sundsvall, Sweden",
        badge: "Concept project",
      },
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        question: "How long does a project take?",
        answer:
          "It depends on scope. A website typically takes 3–6 weeks from kickoff to launch, a web app or mobile app longer — usually 2–4 months. You'll get a clear timeline before we start.",
      },
      {
        question: "What does it cost?",
        answer: `A website typically starts from ${STARTING_PRICE_LABEL} depending on scope. Web apps and mobile apps are quoted after a free consultation. You'll always get a fixed price before we start.`,
      },
      {
        question: "Where are you based?",
        answer:
          "We work with clients across Sweden and are happy to travel to you. Most of the work can also be done remotely, with clear communication via video calls, shared docs, and regular updates.",
      },
      {
        question: "What do you need from us to get started?",
        answer: "Just a conversation. Tell us about your project, your goals, and your timeline, and we'll take it from there.",
      },
      {
        question: "Do you offer ongoing support after launch?",
        answer:
          "Yes. We stay available after launch for bug fixes, updates, and improvements. Many clients keep working with us on an ongoing basis — we become a long-term partner, not just a vendor.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes, we do redesigns regularly. We'll audit what you have, identify what's working and what isn't, and rebuild it properly.",
      },
    ],
  },

  teamPreview: {
    intro: "Who we are — two systems scientists who build our own products and client projects with the same care.",
    link: "More about us",
    roles: { anton: "Developer", nawid: "Design & development" },
  },

  ownProduct: {
    tagline: "· Our own product ·",
    title: "We don't just build for others",
    paragraph1:
      "seventyfive — a 75-day fitness challenge with workout logging, GPS tracking, and team features. We designed, built, and launched it ourselves, and keep running it with real users.",
    paragraph2:
      "That's why we can say we understand what happens after launch. We live it every day with our own product.",
    cta: "See the case study",
  },

  auditCta: {
    title: "Not sure where to start?",
    description:
      "Book a free 20-minute review of your current website. We'll show you three concrete things you can improve — whether you hire us or not.",
    button: "Book a free review",
  },

  contact: {
    portfolioLabel: "Portfolio",
    portfolioTitle: ["Projects &", "case studies"],
    portfolioDescription: ["Web design, Next.js development", "and mobile apps."],
    ctaLabel: "Get in touch",
    ctaCopy: ["Let's get to it —", "together."],
    ctaTitle: "Start a project",
    ctaLink: "Contact us",
    orgNrLabel: "Reg. no.",
    social: { linkedin: "LinkedIn", github: "GitHub", instagram: "Instagram" },
  },

  contactPage: {
    back: "Back",
    tagline: "· Get in touch ·",
    title: "Let's build something great together.",
    subtitle: "Tell us about your project and we'll get back to you within 24 hours with a plan forward.",
    subtitleAudit: "Tell us a bit about your current website and we'll get back to you within 24 hours to book your free review.",
    reachDirectly: "Or reach us directly",
    successTitle: "Message sent!",
    successSubtitle: "We'll get back to you within 24 hours.",
    backHome: "Back to home",
    genericError: "Something went wrong.",
    labels: {
      name: "Name",
      namePlaceholder: "Full name",
      email: "Email",
      emailPlaceholder: "Your email",
      projectType: "Project type",
      selectType: "Select type",
      typeAudit: "Free review",
      typeWebsite: "Website",
      typeWebApp: "Web App",
      typeMobileApp: "Mobile App",
      typeSeo: "SEO",
      typeOther: "Other",
      budget: "Budget",
      selectBudget: "Select budget",
      budgetUnder10k: "Under 10,000 SEK",
      budget10to30k: "10,000 – 30,000 SEK",
      budget30to50k: "30,000 – 50,000 SEK",
      budget50kPlus: "50,000 SEK+",
      message: "Message",
      messagePlaceholder: "Describe your project, goals, and any relevant timeline or constraints…",
      replyTime: "We reply within 24 hours.",
      send: "Send message",
      sending: "Sending…",
    },
  },

  about: {
    back: "Back",
    contact: "Contact",
    tagline: "· About us ·",
    title: "Two systems scientists. One shared obsession with quality.",
    founders: [
      {
        name: "Anton Wretenberg",
        role: "Co-founder · Developer",
        photoTodo: "TODO: replace with a real photo of Anton",
        bio: [
          "Anton is a systems scientist who focuses on the technical side — building fast, scalable web applications and making sure everything works exactly as it should. He has a sharp eye for performance and a low tolerance for things that feel slow or broken.",
          "He's been building for the web since his teens and also builds his own products alongside client work — the same curiosity in everything he does.",
        ],
      },
      {
        name: "Nawid",
        role: "Co-founder · Design & development",
        photoTodo: "TODO: replace with a real photo of Nawid",
        bio: [
          "Nawid is also a systems scientist and sits at the intersection of design and engineering. He cares deeply about how things look and feel — the transitions, the hierarchy, the way a page guides your eye without you noticing.",
          "His background spans both creative direction and frontend development, which means designs don't just look good in Figma — they work in the browser too. He also builds his own products, like the app SeventyFive.",
        ],
      },
    ],
    storyTitle: "Why we started Nawton",
    story: [
      "We kept seeing the same problem: businesses with genuine ambition stuck with websites that didn't reflect them. Generic templates, agencies that over-promised and under-delivered, or developers who could build but not design — and designers who couldn't build.",
      "Nawton is our answer to that. A small, focused studio where design and development aren't two separate handoffs — they happen together, by people who care about both.",
      "We work with a small number of clients at a time so we can do the work properly. No account managers, no handoffs. You work directly with us.",
    ],
    valuesTitle: "How we work",
    values: [
      {
        title: "Craft over speed",
        description:
          "We'd rather take the time to do something right than ship something that just barely works. Every detail matters — the ones people notice and the ones they don't.",
      },
      {
        title: "Honest communication",
        description:
          "No jargon, no runaround. We tell you what we think, explain our decisions, and keep you in the loop at every step.",
      },
      {
        title: "Long-term thinking",
        description:
          "We build things that last. Clean code, solid foundations, and design that doesn't date itself in six months.",
      },
    ],
    ctaTitle: "Ready to build something worth showing?",
    ctaLink: "Start a project",
  },

  workPage: {
    tagline: "· Projects & Case Studies ·",
    title: "Work we're proud of.",
    subtitle:
      "A selection of projects across web, mobile, and e-commerce — plus our own product. Every one built from scratch, no templates, no shortcuts.",
    visit: "Visit",
    ctaTitle: "Got a project in mind?",
    ctaLink: "Start a project",
  },

  seventyfivePage: {
    back: "Back",
    tagline: "· Own product ·",
    title: "SeventyFive",
    subtitle:
      "A 75-day fitness challenge we designed, built, and launched ourselves — and keep running with real users.",
    paragraph1:
      "seventyfive is our own mobile app for the 75 Hard challenge, with workout logging, GPS tracking, team features, and progress photos. We own the whole journey: idea, design, development, and operations.",
    paragraph2:
      "That's why we can say we understand what happens after launch. We live it every day with our own product — the same care goes into every client project.",
    ctaTitle: "Want to build something similar?",
    ctaLink: "Start a project",
  },

  howWeHelp: {
    tagline: "· Our process ·",
    titleLine1: "How we",
    titleLine2: "work with you.",
    subtitle: "From the first conversation to launch and beyond — here's exactly what working with Nawton looks like.",
    ctaTitle: "Ready to start?",
    ctaLink: "Contact us",
    steps: [
      {
        title: "Discovery",
        subtitle: "We get to know you",
        description:
          "Before we touch a single pixel or write a line of code, we sit down with you. We dig into your business, your users, your goals, and what's standing in the way. The output is a clear direction — what we're building, why, and for whom.",
        tags: ["Kickoff call", "User research", "Strategy brief"],
      },
      {
        title: "Design",
        subtitle: "We make it look like you",
        description:
          "We translate strategy into a visual experience that's unmistakably yours. Wireframes, UI systems, brand touchpoints — every detail is considered. You see it and approve before we build anything.",
        tags: ["Wireframes", "UI design", "Brand identity"],
      },
      {
        title: "Development",
        subtitle: "We build it right",
        description:
          "Your designs come to life. Fast, scalable, and built on modern technology. We write clean code, build smooth interactions, and make sure everything performs — on every device, at every screen size.",
        tags: ["Next.js", "React Native", "Performance"],
      },
      {
        title: "Testing",
        subtitle: "We make sure it works",
        description:
          "Nothing ships until it's been tested thoroughly. We check every flow, every edge case, every device. If something's off, we fix it before you or your users ever see it.",
        tags: ["QA testing", "Cross-device", "Performance audit"],
      },
      {
        title: "Launch",
        subtitle: "We go live — together",
        description:
          "Launch day is exciting, not stressful. We handle deployment, monitor performance, and stay available. After launch, we stick around for iterations and improvements — the same team that built it keeps it running.",
        tags: ["Deployment", "Monitoring", "Ongoing support"],
      },
    ],
  },

  cookieBanner: {
    title: "We use cookies",
    description: "We use cookies to improve your experience on our website.",
    accept: "Accept",
    decline: "Decline",
  },

  chatWidget: {
    greeting: "Hi! I'm the Nawton assistant. How can I help you today?",
    placeholder: "Ask something...",
    subtitle: "AI Assistant",
    genericError: "Sorry, something went wrong.",
    connectionError: "Sorry, I couldn't connect right now. Please try again.",
  },

  languageToggle: {
    label: "Language",
  },
};

export const dictionary = { sv, en };
