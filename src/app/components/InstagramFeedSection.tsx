import { Instagram } from "lucide-react";
import { useInstagramFeed } from "../hooks/useInstagramFeed";

const PROFILE_URL = "https://www.instagram.com/immortalathletics/";

export function InstagramFeedSection() {
  const state = useInstagramFeed();

  if (state.status === "loading") {
    return (
      <div className="bg-black border border-white/10 p-12 rounded-lg">
        <p className="text-center text-white/60">Loading Instagram…</p>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="bg-black border border-white/10 p-10 rounded-lg space-y-4 text-center">
        <p className="text-white/80">
          Instagram feed could not be loaded ({state.message}).
        </p>
        <p className="text-sm text-white/50 max-w-xl mx-auto">
          After deploying, set{" "}
          <code className="text-white/70">INSTAGRAM_ACCESS_TOKEN</code> and{" "}
          <code className="text-white/70">INSTAGRAM_USER_ID</code> on the server.
          For local Vite-only dev, use{" "}
          <code className="text-white/70">vercel dev</code> or point{" "}
          <code className="text-white/70">VITE_REVIEWS_API_BASE</code> at your
          deployment URL.
        </p>
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-immortal-red hover:text-immortal-red-dark underline text-sm"
        >
          <Instagram className="h-4 w-4 shrink-0" aria-hidden />
          @immortalathletics on Instagram
        </a>
      </div>
    );
  }

  const { items } = state.data;

  return (
    <div className="bg-black border border-white/10 p-8 md:p-12 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <p className="text-sm text-zinc-300 uppercase tracking-wide">
          Latest from the club
        </p>
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-white/20 px-5 py-2 text-sm uppercase tracking-wide hover:border-immortal-red hover:text-immortal-red transition-colors shrink-0"
        >
          <Instagram className="h-4 w-4" aria-hidden />
          View on Instagram
        </a>
      </div>

      {items.length === 0 ? (
        <p className="text-center text-white/60 mb-6">
          No posts returned yet. Open the profile on Instagram to see all
          updates.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-immortal-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-90"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
