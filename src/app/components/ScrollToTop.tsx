import { useEffect } from "react";
import { useLocation } from "react-router";

const HASH_SCROLL_RETRY_MS = 50;
const HASH_SCROLL_MAX_ATTEMPTS = 80;

/**
 * Scrolls to `document.getElementById(hash)` when the URL has a hash that
 * matches an element on the page; otherwise scrolls to the top on path or
 * search changes.
 */
export function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    const id = hash.startsWith("#") ? hash.slice(1) : "";
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }

    let cancelled = false;
    let attempts = 0;

    const tryScroll = () => {
      if (cancelled) return;

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      attempts += 1;
      if (attempts < HASH_SCROLL_MAX_ATTEMPTS) {
        window.setTimeout(tryScroll, HASH_SCROLL_RETRY_MS);
      }
    };

    tryScroll();

    return () => {
      cancelled = true;
    };
  }, [pathname, search, hash]);

  return null;
}
