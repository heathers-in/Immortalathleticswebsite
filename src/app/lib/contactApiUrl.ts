/** Same origin as reviews/Instagram when unset; or preview URL via `VITE_REVIEWS_API_BASE` (see README). */
export function contactApiUrl(): string {
  const base = (import.meta.env.VITE_REVIEWS_API_BASE as string | undefined)?.replace(/\/$/, "");
  return `${base ?? ""}/api/contact`;
}
