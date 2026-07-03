import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "name, email, and message are all required." },
        { status: 400 }
      );
    }
    if (name.length > 120 || email.length > 200 || message.length > 4000) {
      return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "That email address doesn't look valid." }, { status: 400 });
    }

    const db = await getDb();
    await db.collection("messages").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
      userAgent: request.headers.get("user-agent") || null
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact] error:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Try again in a moment." },
      { status: 500 }
    );
  }
}
