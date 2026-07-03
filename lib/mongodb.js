import { MongoClient } from "mongodb";

const dbName = process.env.MONGODB_DB || "portfolio";

let clientPromise;

// Connects lazily on first call (not at module import / build time), and
// caches the promise so dev hot-reloads and serverless warm invocations
// reuse the same connection instead of opening a new one every time.
function getClientPromise() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "MONGODB_URI is not set. Add it to .env.local (see .env.local.example)."
    );
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri).connect();
    }
    return global._mongoClientPromise;
  }

  if (!clientPromise) {
    clientPromise = new MongoClient(uri).connect();
  }
  return clientPromise;
}

export async function getDb() {
  const client = await getClientPromise();
  return client.db(dbName);
}
