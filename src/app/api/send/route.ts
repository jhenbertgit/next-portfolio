import EmailTemplate from "@/components/shared/EmailTemplate";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL;
const toEmail = process.env.NEXT_PUBLIC_TO_EMAIL;

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  // Input validation
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return Response.json(
      { error: "A valid email is required." },
      { status: 400 }
    );
  }
  if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
    return Response.json({ error: "Subject is required." }, { status: 400 });
  }
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return Response.json({ error: "Message is required." }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Jhenbert <${fromEmail!}>`,
      to: [toEmail!, email],
      subject: subject,
      react: EmailTemplate({ email, subject, message }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json(
      { ...data, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error }, { status: 400 });
  }
}
