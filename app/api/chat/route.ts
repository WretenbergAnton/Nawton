import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `Du är assistent åt Nawton, en webbyrå i Sverige. Du hjälper besökare att lära sig om Nawtons tjänster och guidar dem mot att höra av sig.

Om Nawton:
- Webbyrå som jobbar med kunder i hela Sverige
- Tjänster: hemsidor, webbutveckling (Next.js), mobilappar, SEO, varumärke & strategi
- Arbetar med företag som vill ha en stark digital närvaro
- Kontakt: nawton.net/contact

Din roll:
- Svara på frågor om tjänster, pris, process och tidsplan
- Var hjälpsam, professionell och kortfattad
- Om någon är intresserad av ett projekt, uppmuntra dem att gå till /contact eller fylla i kontaktformuläret
- Om pris frågas efter: en hemsida börjar typiskt från 25 000 kr beroende på omfattning, och webbappar/mobilappar offereras efter en kostnadsfri genomgång
- Håll svaren korta (max 2–4 meningar)
- Svara på samma språk som besökaren skriver på (svenska eller engelska) — svenska är standardspråket`;

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages[messages.length - 1].content;

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(lastMessage);
    const text = result.response.text();

    return NextResponse.json({ message: text });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[chat route]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
