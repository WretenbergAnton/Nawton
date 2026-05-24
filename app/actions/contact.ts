// /app/actions/contact.ts
"use server";

import { Resend } from "resend";
import { z } from "zod";

// ──────────────────────────────────────────────────────────────
//  Validerings-schema
// ──────────────────────────────────────────────────────────────
const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Namnet måste vara minst 2 tecken")
    .max(100, "Namnet får max vara 100 tecken"),
  email: z.string().email("Ange en giltig e-postadress"),
  message: z
    .string()
    .min(10, "Meddelandet måste vara minst 10 tecken")
    .max(5000, "Meddelandet får max vara 5000 tecken"),
});

// ──────────────────────────────────────────────────────────────
//  Typer som Anton kan använda i Contact-komponenten
// ──────────────────────────────────────────────────────────────
export type ContactFormData = z.infer<typeof ContactSchema>;

export type ContactActionResult =
  | { success: true; message: string }
  | { success: false; message: string; errors?: Record<string, string> };

// ──────────────────────────────────────────────────────────────
//  Server Action
// ──────────────────────────────────────────────────────────────
export async function sendContactForm(
  formData: ContactFormData
): Promise<ContactActionResult> {
  // 1. Validera input
  const parsed = ContactSchema.safeParse(formData);

  if (!parsed.success) {
    const errors = Object.fromEntries(
      Object.entries(parsed.error.flatten().fieldErrors).map(([key, val]) => [
        key,
        val?.[0] ?? "Ogiltigt värde",
      ])
    );
    return {
      success: false,
      message: "Kontrollera formuläret och försök igen.",
      errors,
    };
  }

  const { name, email, message } = parsed.data;

  // 2. Kolla att API-nyckeln finns
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY saknas i .env.local");
    return {
      success: false,
      message: "Serverkonfigurationsfel. Försök igen senare.",
    };
  }

  // 3. Skicka mejl via Resend
  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      // Byt ut mot er verifierade domän när ni har en, t.ex. no-reply@nawton.se
      from: "Nawton Kontakt <onboarding@resend.dev>",
      to: ["nawton@gmail.com"], // ← byt till er riktiga mejl
      replyTo: email,
      subject: `Nytt meddelande från ${name} – Nawton`,
      html: buildEmailHtml({ name, email, message }),
    });

    return {
      success: true,
      message: "Tack! Vi återkommer inom 24 timmar.",
    };
  } catch (error) {
    console.error("Resend-fel:", error);
    return {
      success: false,
      message: "Kunde inte skicka meddelandet. Försök igen senare.",
    };
  }
}

// ──────────────────────────────────────────────────────────────
//  HTML-mall för mejlet
// ──────────────────────────────────────────────────────────────
function buildEmailHtml({
  name,
  email,
  message,
}: ContactFormData): string {
  // Sanitera input för att undvika XSS i mejlet
  const safe = (str: string) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `
    <!DOCTYPE html>
    <html lang="sv">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style="margin:0;padding:0;background:#0a0a0a;font-family:Inter,sans-serif;color:#ffffff;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center" style="padding:40px 16px;">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#111111;border-radius:8px;overflow:hidden;border:1px solid #222;">
                
                <!-- Header -->
                <tr>
                  <td style="padding:32px 40px;border-bottom:1px solid #222;">
                    <p style="margin:0;font-size:12px;letter-spacing:0.1em;color:#71717a;text-transform:uppercase;">
                      Nawton — Nytt meddelande
                    </p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:40px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom:24px;">
                          <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.08em;color:#71717a;text-transform:uppercase;">Från</p>
                          <p style="margin:0;font-size:16px;font-weight:600;">${safe(name)}</p>
                          <a href="mailto:${safe(email)}" style="color:#a1a1aa;font-size:14px;text-decoration:none;">${safe(email)}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:24px;border-top:1px solid #222;">
                          <p style="margin:0 0 12px;font-size:11px;letter-spacing:0.08em;color:#71717a;text-transform:uppercase;">Meddelande</p>
                          <p style="margin:0;font-size:15px;line-height:1.7;color:#e4e4e7;white-space:pre-wrap;">${safe(message)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:24px 40px;border-top:1px solid #222;">
                    <p style="margin:0;font-size:12px;color:#52525b;">
                      Skickat via nawton.se — Svara direkt på detta mejl för att nå ${safe(name)}.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
