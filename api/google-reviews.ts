import type { VercelRequest, VercelResponse } from "@vercel/node";
import { config as loadEnv } from "dotenv";
import { existsSync } from "node:fs";
import { join } from "node:path";

/** Local `vercel dev` / Node may not inject `.env.local` into serverless `process.env`; load without overriding Vercel-set vars. */
const _reviewsEnvRoot = process.cwd();
for (const name of [".env.local", ".env"] as const) {
  const p = join(_reviewsEnvRoot, name);
  if (existsSync(p)) {
    loadEnv({ path: p, override: false });
  }
}

/** Aggregate stats only (no `reviews` field — avoids Enterprise+ SKU; review cards are curated on the client). */
const DETAILS_MASKS = [
  "rating,userRatingCount,displayName,googleMapsUri",
  "displayName,googleMapsUri",
] as const;

type LocalizedText = { text?: string };

type PlaceDetailsBody = {
  displayName?: LocalizedText;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
};

function setCors(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
}

function normalizePlaceId(raw: string): string {
  const t = raw.trim();
  if (t.startsWith("places/")) return t.slice("places/".length);
  return t;
}

/** Strip accidental `key` prefix when pasting from UIs that show "key AIzaSy…". */
function normalizePlacesApiKey(raw: string): string {
  const t = raw.trim();
  if (
    t.length > 7 &&
    t.slice(0, 3).toLowerCase() === "key" &&
    t.slice(3, 7).toLowerCase() === "aiza"
  ) {
    return t.slice(3);
  }
  return t;
}

function googleApiErrorSnippet(text: string): string {
  const slice = text.slice(0, 500).trim();
  try {
    const o = JSON.parse(slice) as { error?: { message?: string } };
    const m = o.error?.message;
    if (typeof m === "string" && m.length) return m.slice(0, 280);
  } catch {
    /* ignore */
  }
  return slice.slice(0, 200);
}

async function resolvePlaceId(apiKey: string): Promise<string | null> {
  const configured = process.env.GOOGLE_PLACE_ID?.trim();
  if (configured) return normalizePlaceId(configured);

  const textQuery = process.env.GOOGLE_PLACES_TEXT_QUERY?.trim();
  if (!textQuery) return null;

  const searchRes = await fetch(
    "https://places.googleapis.com/v1/places:searchText",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.name",
      },
      body: JSON.stringify({ textQuery }),
    },
  );

  if (!searchRes.ok) {
    const errBody = await searchRes.text();
    throw new Error(
      `Places searchText failed (${searchRes.status}): ${errBody.slice(0, 400)}`,
    );
  }

  const searchJson = (await searchRes.json()) as {
    places?: { name?: string }[];
  };
  const name = searchJson.places?.[0]?.name;
  if (!name?.startsWith("places/")) return null;
  return name.slice("places/".length);
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = normalizePlacesApiKey(process.env.GOOGLE_PLACES_API_KEY ?? "");
  if (!apiKey) {
    return res.status(500).json({
      error: "Missing GOOGLE_PLACES_API_KEY",
      hint: "Add it under Vercel → Settings → Environment Variables (and locally in .env.local for vercel dev).",
    });
  }

  try {
    const placeId = await resolvePlaceId(apiKey);
    if (!placeId) {
      return res.status(500).json({
        error: "Missing GOOGLE_PLACE_ID or GOOGLE_PLACES_TEXT_QUERY",
        hint: "Set GOOGLE_PLACE_ID (recommended) or GOOGLE_PLACES_TEXT_QUERY so the server can resolve the listing.",
      });
    }

    const detailsUrl = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;

    let place: PlaceDetailsBody | null = null;
    let lastFail: { status: number; text: string } | null = null;

    for (const mask of DETAILS_MASKS) {
      const detailsRes = await fetch(detailsUrl, {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": mask,
        },
      });
      const bodyText = await detailsRes.text();
      if (!detailsRes.ok) {
        lastFail = { status: detailsRes.status, text: bodyText };
        continue;
      }
      place = JSON.parse(bodyText) as PlaceDetailsBody;
      break;
    }

    if (!place) {
      const st = lastFail?.status ?? 0;
      const snippet = lastFail ? googleApiErrorSnippet(lastFail.text) : "no response";
      return res.status(502).json({
        error: `Google Places Place Details failed (${st}): ${snippet}`,
        status: st,
        hint:
          st === 403
            ? "Check API key restrictions (use a server key or IP allowlist for Vercel), enable Places API (New), and billing."
            : "If the message mentions billing or SKU, confirm Place Details (Pro/Enterprise) SKUs are enabled for your project.",
        details: lastFail?.text.slice(0, 600),
      });
    }

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate=3600",
    );

    return res.status(200).json({
      placeName: place.displayName?.text ?? "",
      rating: place.rating,
      userRatingCount: place.userRatingCount,
      googleMapsUri: place.googleMapsUri,
      reviews: [],
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return res.status(500).json({ error: message });
  }
}
