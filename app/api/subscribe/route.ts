import { NextRequest, NextResponse } from "next/server";

// Stub subscribe endpoint. Phase 2b: persist to Supabase `subscribers`.
// For now it validates and accepts, so the UI flow works end-to-end.
export async function POST(req: NextRequest) {
  let email = "";
  try {
    ({ email } = await req.json());
  } catch {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid email" }, { status: 422 });
  }

  // TODO(Supabase): insert into subscribers (email, created_at) with unique constraint.
  console.log(`[subscribe] ${email}`);

  return NextResponse.json({ ok: true });
}
