import { useEffect, useState } from "react";

export type GoogleReviewCard = {
  author: string;
  rating?: number;
  text: string;
  relativeTime: string;
  authorPhotoUri?: string;
  authorUri?: string;
};

export type GoogleReviewsPayload = {
  placeName: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews: GoogleReviewCard[];
};

type State =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ok"; data: GoogleReviewsPayload };

function reviewsUrl() {
  const base = (import.meta.env.VITE_REVIEWS_API_BASE as string | undefined)?.replace(
    /\/$/,
    "",
  );
  return `${base ?? ""}/api/google-reviews`;
}

export function useGoogleReviews() {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(reviewsUrl());
        const json = (await res.json()) as GoogleReviewsPayload & {
          error?: string;
          hint?: string;
        };
        if (!res.ok) {
          const hint =
            typeof json.hint === "string" && json.hint.trim()
              ? ` — ${json.hint.trim()}`
              : "";
          throw new Error(
            (json.error || `Request failed (${res.status})`) + hint,
          );
        }
        if (!cancelled) {
          setState({ status: "ok", data: json });
        }
      } catch (e) {
        if (!cancelled) {
          setState({
            status: "error",
            message: e instanceof Error ? e.message : "Could not load reviews",
          });
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
