import type { VercelRequest, VercelResponse } from "@vercel/node";
import { config as loadEnv } from "dotenv";
import { existsSync } from "node:fs";
import { join } from "node:path";

const _envRoot = process.cwd();
for (const name of [".env.local", ".env"] as const) {
  const p = join(_envRoot, name);
  if (existsSync(p)) {
    loadEnv({ path: p, override: false });
  }
}

const DEFAULT_ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://immortalathletics.co.uk",
  "https://www.immortalathletics.co.uk",
];

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;
const rateBuckets = new Map<string, number[]>();

function parseAllowedOrigins(): string[] {
  const raw = process.env.CONTACT_ALLOWED_ORIGINS?.trim();
  if (!raw) return [...DEFAULT_ALLOWED_ORIGINS];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function setCors(req: VercelRequest, res: VercelResponse) {
  const origin = (req.headers.origin as string | undefined)?.trim();
  const allowed = parseAllowedOrigins();
  if (origin && allowed.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  } else if (!origin) {
    res.setHeader("Access-Control-Allow-Origin", "*");
  } else {
    res.setHeader("Access-Control-Allow-Origin", allowed[0] ?? "*");
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Max-Age", "86400");
}

function clientIp(req: VercelRequest): string {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string" && xf.length) {
    return xf.split(",")[0]?.trim() || "unknown";
  }
  if (Array.isArray(xf) && xf[0]) return xf[0].split(",")[0]?.trim() || "unknown";
  return (req.socket?.remoteAddress as string) || "unknown";
}

function rateLimitOk(ip: string): boolean {
  const now = Date.now();
  let arr = rateBuckets.get(ip) ?? [];
  arr = arr.filter((t) => now - t < RATE_WINDOW_MS);
  if (arr.length >= RATE_MAX) {
    rateBuckets.set(ip, arr);
    return false;
  }
  arr.push(now);
  rateBuckets.set(ip, arr);
  return true;
}

const EMAIL_RE =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  /** Honeypot — must be empty */
  company?: unknown;
};

function str(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

function validate(body: Body): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  const name = str(body.name, 120);
  const email = str(body.email, 254);
  const phone = str(body.phone, 40);
  const message = str(body.message, 4000);

  if (name.length < 1) return { ok: false, error: "Please enter your name." };
  if (name.length < 2) return { ok: false, error: "Please enter a valid name." };
  if (!email || !EMAIL_RE.test(email)) return { ok: false, error: "Please enter a valid email address." };
  if (message.length < 10) return { ok: false, error: "Please enter a message (at least 10 characters)." };
  if (message.length > 4000) return { ok: false, error: "Message is too long." };

  return { ok: true, data: { name, email, phone, message } };
}

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

async function sendViaResend(data: ContactPayload): Promise<{ ok: true } | { ok: false; detail: string }> {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) {
    return { ok: false, detail: "RESEND_API_KEY is not set" };
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || "info@immortalathletics.co.uk";
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Immortal Athletics <onboarding@resend.dev>";

  const text = [
    `New website enquiry`,
    ``,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "(not provided)"}`,
    ``,
    `Message:`,
    data.message,
    ``,
    `— Sent via immortalathletics.co.uk contact form`,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `[Website] Enquiry from ${data.name}`,
      text,
    }),
  });

  if (!res.ok) {
    const t = await res.text().catch(() => "");
    return { ok: false, detail: t.slice(0, 500) || res.statusText };
  }

  return { ok: true };
}

function readJsonBody(req: VercelRequest): Body {
  const b = req.body as unknown;
  if (b && typeof b === "object" && !Array.isArray(b)) return b as Body;
  if (typeof b === "string" && b.trim()) {
    try {
      const o = JSON.parse(b) as unknown;
      if (o && typeof o === "object" && !Array.isArray(o)) return o as Body;
    } catch {
      /* ignore */
    }
  }
  return {};
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    setCors(req, res);
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  setCors(req, res);

  const origin = (req.headers.origin as string | undefined)?.trim();
  const allowed = parseAllowedOrigins();
  if (origin && !allowed.includes(origin)) {
    res.status(403).json({ error: "Forbidden" });
    return;
  }

  const body = readJsonBody(req);

  const honeypot = str(body.company, 200);
  if (honeypot.length > 0) {
    res.status(200).json({ ok: true });
    return;
  }

  const ip = clientIp(req);
  if (!rateLimitOk(ip)) {
    res.status(429).json({ error: "Too many enquiries from this network. Please try again in a little while." });
    return;
  }

  const parsed = validate(body);
  if (!parsed.ok) {
    res.status(400).json({ error: parsed.error });
    return;
  }

  const sent = await sendViaResend(parsed.data);
  if (!sent.ok) {
    const missingKey = sent.detail.includes("RESEND_API_KEY");
    if (missingKey) {
      res.status(503).json({
        error: "The enquiry service is not configured yet. Please email us directly.",
        code: "NOT_CONFIGURED",
      });
      return;
    }
    console.error("[contact] Resend error:", sent.detail);
    res.status(502).json({
      error: "We could not send your message. Please try again or email info@immortalathletics.co.uk directly.",
    });
    return;
  }

  res.status(200).json({ ok: true });
}
