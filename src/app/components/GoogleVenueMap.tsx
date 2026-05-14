import { getVenueMapEmbedSrc, IMMORTAL_GOOGLE_MAPS_URL } from "../data/venueLocation";

type GoogleVenueMapProps = {
  /** Optional line under the “Open in Google Maps” link (e.g. address hint). */
  caption?: string;
};

export function GoogleVenueMap({ caption }: GoogleVenueMapProps) {
  const src = getVenueMapEmbedSrc();

  return (
    <div className="flex h-96 min-h-[256px] flex-col gap-3">
      <iframe
        title="Immortal Athletics on Google Maps"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="min-h-0 w-full flex-1 rounded-lg border-0 bg-zinc-800"
      />
      <div className="shrink-0 space-y-1 text-center">
        <a
          href={IMMORTAL_GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-immortal-red underline-offset-2 hover:underline"
        >
          Open in Google Maps
        </a>
        {caption ? (
          <p className="text-xs text-white/50">{caption}</p>
        ) : null}
      </div>
    </div>
  );
}
