"use server";

export async function sendContact(data: FormData) {
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const projectType = data.get("projectType") as string;
  const budget = data.get("budget") as string;
  const message = data.get("message") as string;

  if (!name || !email || !projectType || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // Wire up Resend or any email provider here
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: "...", to: "...", subject: "...", html: "..." });

  console.log({ name, email, projectType, budget, message });

  return { success: true };
}
