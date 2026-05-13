import { useEffect, useState } from "react";

export type InstagramFeedItem = {
  id: string;
  permalink: string;
  mediaType: string;
  imageUrl: string;
  alt: string;
  timestamp?: string;
};

export type InstagramFeedPayload = {
  items: InstagramFeedItem[];
};

type State =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ok"; data: InstagramFeedPayload };

function instagramFeedUrl() {
  const base = (
    import.meta.env.VITE_REVIEWS_API_BASE as string | undefined
  )?.replace(/\/$/, "");
  return `${base ?? ""}/api/instagram-feed`;
}

export function useInstagramFeed() {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(instagramFeedUrl());
        const json = (await res.json()) as InstagramFeedPayload & {
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
            message:
              e instanceof Error ? e.message : "Could not load Instagram feed",
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
