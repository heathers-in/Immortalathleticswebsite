import { Star } from "lucide-react";
import { FEATURED_GOOGLE_REVIEW_QUOTES } from "../data/featuredGoogleReviewQuotes";
import { useGoogleReviews } from "../hooks/useGoogleReviews";

const FALLBACK_MAPS_URL =
  "https://maps.app.goo.gl/VJXb3q6RTRmm5K3MA";

function Stars({ value }: { value: number }) {
  const rounded = Math.min(5, Math.max(0, Math.round(value)));
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rounded
              ? "fill-immortal-red text-immortal-red"
              : "text-white/25"
          }`}
        />
      ))}
    </div>
  );
}

export function GoogleReviewsPanel() {
  const state = useGoogleReviews();

  if (state.status === "loading") {
    return (
      <div className="bg-zinc-900 border border-white/10 p-12 rounded-lg mb-16">
        <p className="text-center text-white/60">Loading Google reviews…</p>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="bg-zinc-900 border border-white/10 p-12 rounded-lg mb-16 space-y-4">
        <p className="text-center text-white/80">
          Reviews could not be loaded ({state.message}).
        </p>
        <p className="text-center text-sm text-white/50 max-w-xl mx-auto">
          After deploying to Vercel, set{" "}
          <code className="text-white/70">GOOGLE_PLACES_API_KEY</code> and{" "}
          <code className="text-white/70">GOOGLE_PLACE_ID</code> (or{" "}
          <code className="text-white/70">GOOGLE_PLACES_TEXT_QUERY</code>) in
          the project environment. For local Vite-only dev, run{" "}
          <code className="text-white/70">vercel dev</code> or set{" "}
          <code className="text-white/70">VITE_REVIEWS_API_BASE</code> to your
          deployment URL.
        </p>
        <div className="text-center">
          <a
            href={FALLBACK_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-immortal-red hover:text-immortal-red-dark underline text-sm"
          >
            View reviews on Google Maps
          </a>
        </div>
      </div>
    );
  }

  const { data } = state;
  const mapsHref = data.googleMapsUri || FALLBACK_MAPS_URL;
  const featured = FEATURED_GOOGLE_REVIEW_QUOTES;

  return (
    <div className="bg-zinc-900 border border-white/10 p-8 md:p-12 rounded-lg mb-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          {data.placeName ? (
            <p className="text-sm uppercase tracking-wide text-white/50 mb-1">
              Google reviews
            </p>
          ) : null}
          <p className="text-2xl md:text-3xl font-semibold tracking-tight">
            {data.placeName || "Google Reviews"}
          </p>
          {typeof data.rating === "number" ? (
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <Stars value={data.rating} />
              <span className="text-white/80">
                {data.rating.toFixed(1)}
                {typeof data.userRatingCount === "number"
                  ? ` · ${data.userRatingCount.toLocaleString("en-GB")} ratings`
                  : ""}
              </span>
            </div>
          ) : null}
        </div>
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center justify-center border border-white/20 px-5 py-2 text-sm uppercase tracking-wide hover:border-immortal-red hover:text-immortal-red transition-colors"
        >
          Read all on Google
        </a>
      </div>

      {featured.length === 0 ? (
        <p className="text-center text-white/60 mb-6">
          Featured quotes are not configured yet. Open the listing on Google
          Maps to read full reviews.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((r, index) => (
            <article
              key={`featured-${index}`}
              className="border-l-4 border-immortal-red pl-4 flex flex-col gap-3"
            >
              <div className="flex items-start gap-3">
                {r.authorPhotoSrc ? (
                  <img
                    src={r.authorPhotoSrc}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover bg-white/10 shrink-0"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm text-white/70 shrink-0"
                    aria-hidden
                  >
                    {r.author.slice(0, 1).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium text-white truncate">
                      {r.author}
                    </span>
                    {typeof r.rating === "number" ? (
                      <span className="text-xs text-white/50">
                        {r.rating}/5
                      </span>
                    ) : null}
                  </div>
                  {r.relativeTime ? (
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {r.relativeTime}
                    </p>
                  ) : null}
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                {r.text ? `“${r.text}”` : "—"}
              </p>
            </article>
          ))}
        </div>
      )}


    </div>
  );
}
