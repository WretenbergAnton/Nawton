import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an assistant for Nawton, a web agency based in Sundsvall, Sweden. You help website visitors learn about Nawton's services and guide them toward getting in touch.

About Nawton:
- Web agency in Sundsvall, Sweden
- Services: Web Design, Web Development (Next.js), Mobile Apps, SEO, Branding & Strategy
- They work with businesses that want a strong digital presence
- Contact: nawton.net/contact

Your role:
- Answer questions about services, pricing, process, and timeline
- Be helpful, professional, and concise
- If someone is interested in a project, encourage them to go to /contact or fill out the contact form
- For pricing, say that it varies per project and invite them to get a free quote
- Keep replies short (2-4 sentences max)
- Respond in the same language the user writes in (Swedish or English)`;

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
