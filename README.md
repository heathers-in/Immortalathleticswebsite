
  # Immortal Athletics Website Design

  This is a code bundle for Immortal Athletics Website Design. The original project is available at https://www.figma.com/design/8mNGF7Drl1EaqLWqrZjydn/Immortal-Athletics-Website-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Live Google reviews (Vercel)

  The home page loads reviews from a Vercel serverless route at `/api/google-reviews`, which calls the [Google Places API (New)](https://developers.google.com/maps/documentation/places/web-service/place-details) using a server-side key.

  1. In Google Cloud Console, enable **Places API (New)** and create an API key (restrict it to that API and, in production, to your site’s HTTP referrers where applicable).
  2. In Vercel → your project → **Environment Variables**, set `GOOGLE_PLACES_API_KEY` and either `GOOGLE_PLACE_ID` (recommended) or `GOOGLE_PLACES_TEXT_QUERY` (first search result is used).
  3. Redeploy. Locally, run `npm run dev:vercel` so `/api/*` is available alongside Vite, or set `VITE_REVIEWS_API_BASE` in `.env.local` to a preview deployment URL while using `npm run dev`.

  ## Embedded venue map

  The **Home** (Get in Touch) and **Facilities** (Location & Access) pages embed Google Maps for Immortal Athletics at New Horizon CrossFit, Hatfield. By default the iframe uses a coordinate-based embed (`output=embed`) and needs no API key.

  Optionally, use the official [Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started) with a **browser-safe** key (HTTP referrer restrictions only; not your server `GOOGLE_PLACES_API_KEY` unless you deliberately restrict it for embed + referrers). In `.env.local` or Vercel env, set:

  - `VITE_GOOGLE_MAPS_EMBED_KEY` — Maps Embed API key  
  - `VITE_GOOGLE_PLACE_ID` — same place id string as server `GOOGLE_PLACE_ID` (ChIJ…)

  When both are set, the site uses `https://www.google.com/maps/embed/v1/place` instead of the coordinate fallback.

  Copy [.env.example](.env.example) to `.env.local` for reference (do not commit secrets).

  ## Contact form (Vercel + Resend)

  The home page **Get in Touch** form posts to `/api/contact`, which sends email via [Resend](https://resend.com/) using a **server-side API key** (never exposed to the browser).

  1. Create a Resend account, verify your sending domain (or use their test sender while evaluating).
  2. In Vercel → **Environment variables**, set:
     - `RESEND_API_KEY` — Resend API key (required for real delivery).
     - `CONTACT_TO_EMAIL` — inbox that receives enquiries (default: `info@immortalathletics.co.uk`).
     - `CONTACT_FROM_EMAIL` — verified sender, e.g. `Immortal Athletics <enquiries@yourdomain.com>` (default Resend test sender only works for limited testing).
     - `CONTACT_ALLOWED_ORIGINS` — optional comma-separated list of allowed `Origin` values for CORS (defaults include localhost and immortalathletics.co.uk). Add your **Vercel preview** URL if you test the form against a preview deployment while running `npm run dev` with `VITE_REVIEWS_API_BASE` pointing at that preview.
  3. Run `npm run dev:vercel` locally so `/api/contact` exists alongside Vite, or set `VITE_REVIEWS_API_BASE` to a deployment URL that has these env vars set (same pattern as Google reviews).

  The API applies basic **validation**, a **honeypot** field, **per-IP rate limiting** (best-effort on serverless), and **origin checks** for browser `Origin` headers.
  