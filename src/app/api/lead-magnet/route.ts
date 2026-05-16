import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const email = body?.email as string | undefined;

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  // TODO: intégrer service email (Brevo, Resend, etc.)
  console.log("[lead-magnet] new subscriber:", email);

  return NextResponse.json({ success: true });
}
