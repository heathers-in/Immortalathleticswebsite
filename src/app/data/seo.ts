export const SITE_URL = "https://www.immortalathletics.co.uk";
export const SITE_NAME = "Immortal Athletics";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero.webp`;

export type SeoRouteKey =
  | "home"
  | "schedule"
  | "prices"
  | "facilities"
  | "coaching"
  | "youth"
  | "terms"
  | "privacy"
  | "notFound";

export interface PageSeoConfig {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export const SEO_BY_PATH: Record<string, PageSeoConfig> = {
  "/": {
    title: "Immortal Athletics Weightlifting Club",
    description:
      "British Olympic weightlifting club in Hertfordshire. Expert coaching, dedicated platforms at New Horizon CrossFit, Hatfield. Book a taster session.",
    path: "/",
  },
  "/schedule": {
    title: "Class Schedule | Immortal Athletics",
    description:
      "View Olympic weightlifting class times at Immortal Athletics in Hatfield, Hertfordshire. Sessions for beginners through competitive lifters.",
    path: "/schedule",
  },
  "/prices": {
    title: "Prices & Membership | Immortal Athletics",
    description:
      "Weightlifting membership and pass options at Immortal Athletics, Hatfield. Flexible plans, student rates, and drop-in sessions.",
    path: "/prices",
  },
  "/facilities": {
    title: "Facilities & Location | Immortal Athletics",
    description:
      "Olympic weightlifting platforms and venue details at New Horizon CrossFit, Hatfield AL9 5NU. Parking, access, and equipment.",
    path: "/facilities",
  },
  "/coaching": {
    title: "Coaching Services | Immortal Athletics",
    description:
      "Olympic weightlifting coaching in Hertfordshire—technique sessions, programme design, and competition prep with British Weightlifting coaches.",
    path: "/coaching",
  },
  "/youth": {
    title: "Youth Programme | Immortal Athletics",
    description:
      "Junior Olympic weightlifting in Hatfield for ages 11–18. Safe, coached youth sessions with DBS-checked staff at Immortal Athletics.",
    path: "/youth",
  },
  "/terms": {
    title: "Terms & Conditions | Immortal Athletics",
    description:
      "Terms and conditions for training, memberships, and use of Immortal Athletics weightlifting club services.",
    path: "/terms",
  },
  "/privacy": {
    title: "Privacy Policy | Immortal Athletics",
    description:
      "How Immortal Athletics collects and uses personal data when you use our website and club services.",
    path: "/privacy",
  },
};

export const NOT_FOUND_SEO: PageSeoConfig = {
  title: "Page Not Found | Immortal Athletics",
  description: "The page you requested could not be found.",
  path: "",
  noindex: true,
};

export function canonicalUrl(pathname: string): string {
  const normalized = pathname.split("?")[0].split("#")[0] || "/";
  if (normalized === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${normalized.replace(/\/$/, "")}`;
}

export function getSeoForPathname(pathname: string): PageSeoConfig {
  const normalized = pathname.split("?")[0].split("#")[0] || "/";
  return SEO_BY_PATH[normalized] ?? NOT_FOUND_SEO;
}

/** Indexable paths for sitemap generation. */
export const SITEMAP_PATHS = Object.values(SEO_BY_PATH).map((entry) => entry.path);
