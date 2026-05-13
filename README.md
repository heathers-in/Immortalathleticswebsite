
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

  Copy [.env.example](.env.example) to `.env.local` for reference (do not commit secrets).
  