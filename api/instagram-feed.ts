import type { VercelRequest, VercelResponse } from "@vercel/node";
import { config as loadEnv } from "dotenv";
import { existsSync } from "node:fs";
import { join } from "node:path";

/** Local `vercel dev` / Node may not inject `.env.local` into serverless `process.env`; load without overriding Vercel-set vars. */
const _igEnvRoot = process.cwd();
for (const name of [".env.local", ".env"] as const) {
  const p = join(_igEnvRoot, name);
  if (existsSync(p)) {
    loadEnv({ path: p, override: false });
  }
}

const GRAPH_VERSION = "v21.0";
const DEFAULT_LIMIT = 12;

function setCors(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
}

type GraphMediaNode = {
  id?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  caption?: string;
  timestamp?: string;
  children?: { data?: GraphMediaNode[] };
};

type GraphMediaList = {
  data?: GraphMediaNode[];
  error?: { message?: string; code?: number };
};

function graphErrorSnippet(text: string): string {
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

/** Square / grid thumbnail URL for Instagram Graph media nodes. */
function pickImageUrl(m: GraphMediaNode): string | null {
  const t = (m.media_type ?? "").toUpperCase();
  if (t === "IMAGE" && m.media_url) return m.media_url;
  if (t === "VIDEO") return m.thumbnail_url || null;
  if (t === "CAROUSEL_ALBUM") {
    const kids = m.children?.data;
    if (kids?.length) {
      for (const c of kids) {
        const u = pickImageUrl(c);
        if (u) return u;
      }
    }
    return m.media_url || m.thumbnail_url || null;
  }
  return m.media_url || m.thumbnail_url || null;
}

function captionAlt(caption: string | undefined): string {
  if (!caption) return "Immortal Athletics on Instagram";
  const oneLine = caption.replace(/\s+/g, " ").trim();
  return oneLine.length <= 120 ? oneLine : `${oneLine.slice(0, 117)}…`;
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

  const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
  const userId = process.env.INSTAGRAM_USER_ID?.trim();

  if (!token || !userId) {
    return res.status(500).json({
      error: "Missing INSTAGRAM_ACCESS_TOKEN or INSTAGRAM_USER_ID",
      hint: "Add both under Vercel → Environment Variables. INSTAGRAM_USER_ID is the Instagram Business Account id (numeric) from Meta Graph API tools, not the @handle.",
    });
  }

  const limitRaw = req.query.limit;
  const limit =
    typeof limitRaw === "string" && /^\d+$/.test(limitRaw)
      ? Math.min(24, Math.max(1, parseInt(limitRaw, 10)))
      : DEFAULT_LIMIT;

  const fields = [
    "id",
    "media_type",
    "media_url",
    "thumbnail_url",
    "permalink",
    "caption",
    "timestamp",
    "children{media_type,media_url,thumbnail_url}",
  ].join(",");

  const url = new URL(
    `https://graph.facebook.com/${GRAPH_VERSION}/${encodeURIComponent(userId)}/media`,
  );
  url.searchParams.set("fields", fields);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("access_token", token);

  try {
    const graphRes = await fetch(url.toString(), { method: "GET" });
    const bodyText = await graphRes.text();

    if (!graphRes.ok) {
      return res.status(502).json({
        error: `Instagram Graph API failed (${graphRes.status}): ${graphErrorSnippet(bodyText)}`,
        hint:
          graphRes.status === 400 || graphRes.status === 403
            ? "Confirm the token is a long-lived Page or Instagram-capable token with access to this INSTAGRAM_USER_ID, and that the account is a Professional (Business/Creator) Instagram linked to a Facebook Page."
            : "See Meta’s Instagram Graph API docs for token and permission requirements.",
      });
    }

    const json = JSON.parse(bodyText) as GraphMediaList;
    if (json.error?.message) {
      return res.status(502).json({
        error: json.error.message.slice(0, 400),
        hint: "The Graph API returned an error object. Regenerate the access token or check app permissions in Meta Developer Console.",
      });
    }

    const items = (json.data ?? [])
      .map((m) => {
        const id = m.id;
        const permalink = m.permalink;
        const imageUrl = pickImageUrl(m);
        if (!id || !permalink || !imageUrl) return null;
        return {
          id,
          permalink,
          mediaType: m.media_type ?? "UNKNOWN",
          imageUrl,
          caption: m.caption,
          timestamp: m.timestamp,
        };
      })
      .filter(Boolean) as {
      id: string;
      permalink: string;
      mediaType: string;
      imageUrl: string;
      caption?: string;
      timestamp?: string;
    }[];

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate=3600",
    );

    return res.status(200).json({
      items: items.map((row) => ({
        id: row.id,
        permalink: row.permalink,
        mediaType: row.mediaType,
        imageUrl: row.imageUrl,
        alt: captionAlt(row.caption),
        timestamp: row.timestamp,
      })),
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return res.status(500).json({ error: message });
  }
}
