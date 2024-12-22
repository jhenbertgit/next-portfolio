import EmailTemplate from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL;
const toEmail = process.env.NEXT_PUBLIC_TO_EMAIL;

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: `Jhenbert <${fromEmail!}>`,
      to: [toEmail!, email],
      subject: subject,
      react: await EmailTemplate({ email, subject, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(
      { ...data, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
