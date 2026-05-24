"use server";

import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2, "Namnet måste vara minst 2 tecken"),
  email: z.email("Ogiltig e-postadress"),
  projectType: z.string().min(1, "Välj typ av projekt"),
  budget: z.string().min(1, "Välj budget"),
  message: z.string().min(20, "Meddelandet måste vara minst 20 tecken"),
});

export async function sendContact(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    projectType: formData.get("projectType"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  };

  const result = schema.safeParse(raw);

  if (!result.success) {
    return { error: result.error.issues[0].message };
  }

  const { name, email, projectType, budget, message } = result.data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Nawton <onboarding@resend.dev>",
    to: ["anton.wretenberg04@outlook.com"],
    subject: `Nytt projektförslag från ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #ffffff;">
        <h1 style="font-size: 24px; margin-bottom: 24px; color: #ffffff;">Nytt meddelande via Nawton</h1>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #27272a; color: #71717a; width: 140px;">Namn</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #27272a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #27272a; color: #71717a;">E-post</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #27272a;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #27272a; color: #71717a;">Typ av projekt</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #27272a;">${projectType}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #27272a; color: #71717a;">Budget</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #27272a;">${budget}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #71717a; vertical-align: top;">Meddelande</td>
            <td style="padding: 12px 0; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="margin-top: 32px; color: #71717a; font-size: 12px;">Skickat via nawton.se</p>
      </div>
    `,
  });

  if (error) {
    return { error: "Något gick fel. Försök igen." };
  }

  return { success: true };
}
