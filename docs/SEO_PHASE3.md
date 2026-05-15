# SEO phase 3 — off-site and measurement

Technical SEO (per-route meta, sitemap, JSON-LD, robots) is implemented in the codebase. Complete these steps outside the repo to maximise visibility.

## Google Search Console

1. Sign in at [Google Search Console](https://search.google.com/search-console).
2. Add property: `https://www.immortalathletics.co.uk` (URL-prefix or domain, matching your canonical host).
3. Verify ownership (DNS TXT or HTML file via Vercel).
4. Submit sitemap: `https://www.immortalathletics.co.uk/sitemap.xml`.
5. Monitor **Pages** and **Performance** for queries such as “weightlifting hatfield”, “olympic weightlifting hertfordshire”.
6. Fix any coverage issues (soft 404s, duplicate canonicals) reported after deploy.

## Google Business Profile

Align with website NAP (name, address, phone/email) exactly:

| Field | Value |
|-------|--------|
| Name | Immortal Athletics Weightlifting Club |
| Address | New Horizon CrossFit, Unit 3, The CowShed, Woodhall Farm, Hatfield AL9 5NU |
| Website | https://www.immortalathletics.co.uk/ |
| Hours | Match footer on site (Mon–Thu 6:00–20:30, Fri split, Sat 9:00–12:00, Sun 10:30–12:30) |
| Categories | Weightlifting club, Gym, Sports club (choose best fit) |

- Link GBP to the website; use the same Instagram URL as `sameAs` in structured data.
- Encourage satisfied members to leave Google reviews (home page already displays reviews when API is configured).

## Vercel / hosting checks

In the Vercel project dashboard (not in `vercel.json`):

- Redirect apex `immortalathletics.co.uk` → `www.immortalathletics.co.uk` (or one chosen canonical host).
- Ensure HTTPS only.
- Optionally add `X-Robots-Tag: noindex` on `*.vercel.app` preview deployments.

## Analytics (when ready)

The site does not load GA4 or similar by default. Before enabling:

1. Update [PrivacyPage.tsx](../src/app/pages/PrivacyPage.tsx) cookies/analytics section.
2. Add consent banner if required under PECR.
3. Install GA4 via tag manager or a lightweight alternative (e.g. Plausible).

## Post-deploy verification

- [Google Rich Results Test](https://search.google.com/test/rich-results) on homepage — `SportsActivityLocation` JSON-LD.
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) on `/coaching` and `/prices` — correct title/description after cache refresh.
- Confirm `/robots.txt` and `/sitemap.xml` return 200 in production.
