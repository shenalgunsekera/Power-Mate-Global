import { NextResponse, type NextRequest } from "next/server";

const phoneRe = /^(?:\+94|0)?[1-9]\d{8}$/;

/**
 * Lead / application intake endpoint.
 *
 * ⚠️ PLACEHOLDER DELIVERY: this currently validates and logs the lead. Wire it
 * to your real destination — email (Resend/SES), a CRM, Google Sheets, or a DB —
 * where the `// TODO: deliver lead` comment is.
 */
export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").replace(/\s/g, "");
  const email = String(body.email ?? "").trim();
  const consent = body.consent === "yes" || body.consent === true;

  if (!name) return NextResponse.json({ ok: false, error: "Name is required" }, { status: 422 });
  if (!phoneRe.test(phone))
    return NextResponse.json({ ok: false, error: "Valid phone is required" }, { status: 422 });
  if (!consent)
    return NextResponse.json({ ok: false, error: "Consent is required" }, { status: 422 });

  const lead = {
    name,
    phone,
    email,
    product: String(body.product ?? ""),
    branch: String(body.branch ?? ""),
    amount: String(body.amount ?? ""),
    message: String(body.message ?? ""),
    mode: String(body.mode ?? "contact"),
    locale: String(body.locale ?? "en"),
    receivedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? "",
  };

  // TODO: deliver lead — send email / push to CRM / persist to DB here.
  console.info("[lead] new submission", lead);

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ ok: true, message: "Power Mate lead endpoint. POST to submit." });
}
