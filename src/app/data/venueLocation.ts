/**
 * Immortal Athletics (New Horizon CrossFit, Hatfield).
 * Coordinates match the Google Maps listing for the club.
 */
export const IMMORTAL_VENUE_LAT = 51.7796553;
export const IMMORTAL_VENUE_LNG = -0.2110275;

/** Open this listing in Google Maps (browser / app). */
export const IMMORTAL_GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Immortal+Athletics+Weightlifting+Club/@51.7796553,-0.2110275,17z/data=!3m1!4b1!4m6!3m5!1s0x48763be7f380d389:0xa345a93bff4569b3!8m2!3d51.7796553!4d-0.2110275!16s%2Fg%2F11n44x8cvh";

/** Embed without Maps Embed API (no key). */
export const IMMORTAL_MAP_EMBED_COORDS_SRC = `https://www.google.com/maps?q=${IMMORTAL_VENUE_LAT},${IMMORTAL_VENUE_LNG}&z=17&hl=en-GB&output=embed`;

/**
 * Iframe `src` for the venue map.
 * If `VITE_GOOGLE_MAPS_EMBED_KEY` and `VITE_GOOGLE_PLACE_ID` are set (same place id as
 * server `GOOGLE_PLACE_ID`), uses the official Embed API; otherwise coordinate embed.
 */
export function getVenueMapEmbedSrc(): string {
  const key = import.meta.env.VITE_GOOGLE_MAPS_EMBED_KEY?.trim();
  const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID?.trim();
  if (key && placeId) {
    const q = `place_id:${placeId}`;
    return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=${encodeURIComponent(q)}`;
  }
  return IMMORTAL_MAP_EMBED_COORDS_SRC;
}
