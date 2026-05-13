import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Scrolls the window to the top when the route path (or query) changes.
 * Hash-only updates are ignored so same-page anchors still work.
 */
export function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}
