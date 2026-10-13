import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body ?? {};
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    // TODO: wire to Resend / Nodemailer / SMTP.
    // For now, log server-side so Vercel logs capture inquiries.
    console.log("CONTACT_FORM", { name, email, message: String(message).slice(0, 2000) });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
