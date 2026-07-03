import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

// GET /api/views -> { slug: count, ... } for every project that has been viewed
export async function GET() {
  try {
    const db = await getDb();
    const docs = await db.collection("projectViews").find({}).toArray();
    const counts = {};
    for (const d of docs) counts[d.slug] = d.count;
    return NextResponse.json(counts);
  } catch (err) {
    console.error("[api/views GET] error:", err);
    return NextResponse.json({}, { status: 200 }); // fail soft: UI just shows no counts
  }
}

// POST /api/views { slug } -> increments and returns the new count for that project
export async function POST(request) {
  try {
    const { slug } = await request.json();
    if (!slug || typeof slug !== "string" || slug.length > 80) {
      return NextResponse.json({ error: "Invalid slug." }, { status: 400 });
    }

    const db = await getDb();
    const result = await db.collection("projectViews").findOneAndUpdate(
      { slug },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" }
    );

    return NextResponse.json({ slug, count: result?.count ?? 1 });
  } catch (err) {
    console.error("[api/views POST] error:", err);
    return NextResponse.json({ error: "Could not record view." }, { status: 500 });
  }
}
