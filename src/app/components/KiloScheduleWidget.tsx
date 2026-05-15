import { useEffect, useRef } from "react";

/** Matches New Horizon CrossFit live embed (see https://newhorizoncrossfit.co.uk/gym-info/). */
const KILO_SCRIPT_SRC = "https://widget.static.usekilo.com/widget.js";

/** Option label substring to select in the Kilo class-type filter (case-insensitive). */
const KILO_SCHEDULE_DEFAULT_FILTER_LABEL = "Weightlifting";

const FILTER_WATCH_MS = 12_000;
const POLL_MS = 200;

/** True if label is relevant to the weightlifting class filter (broad, for finding the right <select>). */
function mentionsWeightlifting(text: string | null | undefined): boolean {
  return (text?.toLowerCase() ?? "").includes(KILO_SCHEDULE_DEFAULT_FILTER_LABEL.toLowerCase());
}

/**
 * Prefer the plain "Weightlifting" row over longer names (e.g. "Olympic Weightlifting Workshop").
 * Higher score wins.
 */
function scoreWeightliftingOptionLabel(text: string | null | undefined): number {
  const raw = text?.trim() ?? "";
  const t = raw.toLowerCase();
  const want = KILO_SCHEDULE_DEFAULT_FILTER_LABEL.toLowerCase();
  if (!t.includes(want)) return -1;
  if (t === want) return 10_000;
  let score = 1000;
  if (t.includes("workshop")) score -= 600;
  if (t.includes("olympic")) score -= 400;
  score -= Math.min(raw.length, 120);
  return score;
}

function bestWeightliftingTargetFromElements(els: Iterable<HTMLElement>): HTMLElement | null {
  let best: HTMLElement | null = null;
  let bestScore = -1;
  for (const el of els) {
    const s = scoreWeightliftingOptionLabel(el.textContent);
    if (s > bestScore) {
      bestScore = s;
      best = el;
    }
  }
  return bestScore >= 0 ? best : null;
}

function isPlainWeightliftingSelection(text: string | null | undefined): boolean {
  const first = (text ?? "").split("\n")[0]?.trim().toLowerCase() ?? "";
  return first === KILO_SCHEDULE_DEFAULT_FILTER_LABEL.toLowerCase();
}

/** Walk host, shadow roots, and one level of nested open shadow hosts. */
function forEachQueryRoot(host: HTMLElement, visit: (root: ParentNode) => void): void {
  visit(host);
  if (host.shadowRoot) {
    visit(host.shadowRoot);
    host.shadowRoot.querySelectorAll("*").forEach((el) => {
      if (el instanceof HTMLElement && el.shadowRoot) visit(el.shadowRoot);
    });
  }
}

function querySelectorAllDeep(host: HTMLElement, selector: string): HTMLElement[] {
  const out: HTMLElement[] = [];
  forEachQueryRoot(host, (root) => {
    root.querySelectorAll(selector).forEach((el) => {
      if (el instanceof HTMLElement) out.push(el);
    });
  });
  return out;
}

function setNativeSelectValue(select: HTMLSelectElement, value: string): void {
  const proto = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value");
  if (proto?.set) proto.set.call(select, value);
  else select.value = value;
  select.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }));
  select.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
}

/** Prefer a <select> that looks like the class filter (has “classes” / “all” style options + weightlifting). */
function findClassFilterSelect(host: HTMLElement): HTMLSelectElement | null {
  const candidates = querySelectorAllDeep(host, "select");
  const scored: { sel: HTMLSelectElement; score: number }[] = [];

  for (const sel of candidates) {
    const opts = [...sel.options].map((o) => o.textContent?.toLowerCase() ?? "");
    if (!opts.some((t) => mentionsWeightlifting(t))) continue;
    let score = 1;
    if (opts.some((t) => /\ball\b/.test(t) && t.includes("class"))) score += 3;
    if (opts.some((t) => t.includes("crossfit"))) score += 1;
    scored.push({ sel, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.sel ?? null;
}

function tryNativeSelect(host: HTMLElement): boolean {
  const sel = findClassFilterSelect(host);
  if (!sel) return false;
  const target = bestWeightliftingTargetFromElements([...sel.options]);
  if (!target) return false;
  if (sel.value !== target.value) {
    setNativeSelectValue(sel, target.value);
  }
  return sel.value === target.value && isPlainWeightliftingSelection(target.textContent);
}

function isProbablyVisible(el: HTMLElement): boolean {
  const st = getComputedStyle(el);
  if (st.visibility === "hidden" || st.display === "none") return false;
  return el.getClientRects().length > 0;
}

/** Headless / Radix options often stay in DOM; try clicking without opening. */
function tryClickRoleOptionInHost(host: HTMLElement): boolean {
  const pool = querySelectorAllDeep(host, '[role="option"], [role="menuitem"]');
  const best = bestWeightliftingTargetFromElements(pool);
  if (!best) return false;
  if (!isPlainWeightliftingSelection(best.textContent)) return false;
  best.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
  best.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true }));
  best.click();
  return true;
}

/** Combobox trigger that looks like the “All classes” filter (not Day/Week tabs). */
function findClassFilterCombobox(host: HTMLElement): HTMLElement | null {
  const combos = querySelectorAllDeep(host, '[role="combobox"]');
  for (const el of combos) {
    const t = el.textContent?.toLowerCase() ?? "";
    if (t.length > 80) continue;
    if (/\ball\s+classes\b/.test(t)) return el;
    if (t.includes("class") && (t.includes("all") || t.includes("filter"))) return el;
  }
  return null;
}

function tryPickPortaledOption(): boolean {
  const scoped: HTMLElement[] = [];
  for (const el of document.querySelectorAll(
    '[role="listbox"] [role="option"], [role="menu"] [role="menuitem"], [data-radix-select-viewport] [role="option"]',
  )) {
    if (el instanceof HTMLElement) scoped.push(el);
  }
  let best = bestWeightliftingTargetFromElements(scoped);
  if (!best) {
    const loose: HTMLElement[] = [];
    for (const el of document.querySelectorAll('[role="option"]')) {
      if (el instanceof HTMLElement) loose.push(el);
    }
    best = bestWeightliftingTargetFromElements(loose);
  }
  if (!best || !isProbablyVisible(best)) return false;
  if (!isPlainWeightliftingSelection(best.textContent)) return false;
  best.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
  best.click();
  return true;
}

function comboboxShowsSelection(host: HTMLElement): boolean {
  const combo = findClassFilterCombobox(host);
  return combo ? isPlainWeightliftingSelection(combo.textContent) : false;
}

type ComboboxCtx = { lastOpenAt: number; opens: number; pendingPickTimers: number[] };

function clearPendingPicks(ctx: ComboboxCtx): void {
  ctx.pendingPickTimers.forEach((id) => window.clearTimeout(id));
  ctx.pendingPickTimers.length = 0;
}

function tryCombobox(host: HTMLElement, ctx: ComboboxCtx): boolean {
  if (comboboxShowsSelection(host)) return true;
  const combo = findClassFilterCombobox(host);
  if (!combo) return false;

  const now = Date.now();
  if (ctx.opens >= 15) return false;
  if (now - ctx.lastOpenAt < 350) return false;

  clearPendingPicks(ctx);
  ctx.lastOpenAt = now;
  ctx.opens += 1;
  combo.focus();
  combo.click();
  tryPickPortaledOption();

  const delays = [40, 120, 280, 500];
  for (const ms of delays) {
    ctx.pendingPickTimers.push(
      window.setTimeout(() => {
        tryPickPortaledOption();
      }, ms),
    );
  }
  return false;
}

function tryApplyOnce(host: HTMLElement, ctx: ComboboxCtx): boolean {
  if (tryNativeSelect(host)) return true;
  if (tryClickRoleOptionInHost(host)) return true;
  if (comboboxShowsSelection(host)) return true;
  void tryCombobox(host, ctx);
  return false;
}

/**
 * Until Weightlifting is selected (or timeout), poll and observe DOM under the widget host.
 */
function attachWeightliftingDefault(host: HTMLElement): () => void {
  let finished = false;
  const comboboxCtx: ComboboxCtx = { lastOpenAt: 0, opens: 0, pendingPickTimers: [] };

  const finish = () => {
    if (finished) return;
    finished = true;
    clearPendingPicks(comboboxCtx);
    observer.disconnect();
    window.clearInterval(pollId);
    window.clearTimeout(timeoutId);
  };

  const tick = () => {
    if (finished) return;
    if (tryApplyOnce(host, comboboxCtx)) finish();
  };

  const observer = new MutationObserver(tick);
  observer.observe(host, { childList: true, subtree: true, characterData: true, attributes: true });

  const pollId = window.setInterval(tick, POLL_MS);
  const timeoutId = window.setTimeout(finish, FILTER_WATCH_MS);

  tick();

  return () => {
    finished = true;
    observer.disconnect();
    window.clearInterval(pollId);
    window.clearTimeout(timeoutId);
  };
}

/**
 * Kilo schedule calendar: placeholder div + one deferred script.
 * Script is not removed on unmount (widget may register globals).
 */
export function KiloScheduleWidget() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let disposeFilter: (() => void) | undefined;

    const startFilterWatch = () => {
      disposeFilter?.();
      disposeFilter = attachWeightliftingDefault(host);
    };

    const marker = "data-kilo-schedule-widget";
    document.querySelectorAll(`script[${marker}]`).forEach((el) => {
      if (el.getAttribute("src") !== KILO_SCRIPT_SRC) el.remove();
    });

    if (host.querySelector(`script[${marker}]`)) {
      startFilterWatch();
      return () => {
        disposeFilter?.();
      };
    }

    const script = document.createElement("script");
    script.src = KILO_SCRIPT_SRC;
    script.defer = true;
    script.setAttribute(marker, "true");
    script.addEventListener("load", startFilterWatch, { once: true });
    host.appendChild(script);
    requestAnimationFrame(startFilterWatch);

    return () => {
      script.removeEventListener("load", startFilterWatch);
      disposeFilter?.();
    };
  }, []);

  return (
    <div className="w-full min-w-0">
      <div
        ref={hostRef}
        id="kilo-calendar-widget"
        className="w-full min-w-0 min-h-[400px] rounded-md bg-white p-2 text-neutral-900 scheme-light"
        data-gym-id="MTM4NWIyMGItZDUzMC00ZjE0LTg1NmItYmYzMzc1MWViMzk2"
        data-base-url="https://app.usekilo.com"
        data-sales-portal-slug="new-horizon-crossfit"
      />
    </div>
  );
}
