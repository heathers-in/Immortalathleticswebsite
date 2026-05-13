import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Scrolls to `document.getElementById(hash)` when the URL has a hash that
 * matches an element on the page; otherwise scrolls to the top on path or
 * search changes.
 */
export function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    const id = hash.startsWith("#") ? hash.slice(1) : "";
    if (id) {
      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };

      if (scrollToTarget()) return;

      const t = window.setTimeout(() => {
        if (!scrollToTarget()) window.scrollTo(0, 0);
      }, 0);
      return () => window.clearTimeout(t);
    }

    window.scrollTo(0, 0);
  }, [pathname, search, hash]);

  return null;
}
