import { NextResponse } from "next/server";

const GITHUB_USER = "svnsaisathvik";

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 } // cache for 1 hour, avoid hammering GitHub's rate limit
      }
    );

    if (!res.ok) {
      return NextResponse.json({ repos: [] }, { status: 200 });
    }

    const data = await res.json();
    const repos = data
      .filter((r) => !r.fork)
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        stars: r.stargazers_count,
        language: r.language,
        updatedAt: r.updated_at
      }))
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    return NextResponse.json({ repos });
  } catch (err) {
    console.error("[api/repos] error:", err);
    return NextResponse.json({ repos: [] }, { status: 200 });
  }
}
