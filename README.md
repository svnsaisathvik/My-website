# SVN Sai Sathvik — Portfolio

Next.js 14 (App Router) portfolio with a terminal/code-editor visual identity, project data pulled from `data/profile.js` plus your GitHub API, and MongoDB Atlas powering the contact form and per-project view counters.

## 1. Local setup

```bash
npm install
cp .env.local.example .env.local
```

Fill in `.env.local` with your MongoDB Atlas connection string (see below), then:

```bash
npm run dev
```

Visit http://localhost:3000

## 2. MongoDB Atlas setup

1. Create a free cluster at https://cloud.mongodb.com if you don't have one.
2. **Database Access** → add a database user (username + password).
3. **Network Access** → add `0.0.0.0/0` (allow from anywhere) so Vercel's serverless functions can connect — or add Vercel's specific IPs if you want it tighter.
4. **Connect → Drivers** → copy the `mongodb+srv://...` connection string.
5. Paste it into `.env.local` as `MONGODB_URI`, replacing `<username>`, `<password>`, and the trailing path with your db name (or leave it and just set `MONGODB_DB`).

No manual collection setup needed — `messages` and `projectViews` are created automatically on first write. Optional but recommended once you have data flowing: in Atlas, add a unique index on `projectViews.slug` so concurrent visitors can't create duplicate counters.

## 3. What's in Mongo

- **`messages`** — every contact form submission (`name`, `email`, `message`, `createdAt`). View them directly in Atlas's Data Explorer, or wire up an admin page later.
- **`projectViews`** — one document per project `slug` with a `count`. Increments once per visitor per project (via IntersectionObserver, so it fires when a card actually scrolls into view — not on every re-render).

## 4. Editing your content

Everything text-based — experience, projects, skills, achievements — lives in `data/profile.js`. Edit that file; the page re-renders automatically. Featured projects are hardcoded there for richer copy; anything else on your GitHub shows up automatically in the "more on GitHub" grid (fetched server-side via `/api/repos`, cached for 1 hour).

## 5. Deploying (Vercel)

```bash
npx vercel
```

Or connect the GitHub repo at https://vercel.com/new. Either way, add the same env vars from `.env.local` (`MONGODB_URI`, `MONGODB_DB`) in the Vercel project's **Settings → Environment Variables**, then redeploy.

## 6. Project structure

```
app/
  page.js              — assembles all sections
  layout.js            — fonts + metadata
  api/contact/route.js — POST: stores a contact message in Atlas
  api/views/route.js   — GET: all view counts, POST: increment one
  api/repos/route.js   — GET: your public GitHub repos (server-cached)
components/            — one file per section
data/profile.js        — all resume content, edit here
lib/mongodb.js         — cached Atlas connection helper
```
