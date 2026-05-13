import { useEffect, useRef } from "react";

/** Matches New Horizon CrossFit live embed (see https://newhorizoncrossfit.co.uk/gym-info/). */
const KILO_SCRIPT_SRC = "https://widget.static.usekilo.com/widget.js";

/**
 * Kilo schedule calendar: placeholder div + one deferred script.
 * Script is not removed on unmount (widget may register globals).
 */
export function KiloScheduleWidget() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const marker = "data-kilo-schedule-widget";
    document.querySelectorAll(`script[${marker}]`).forEach((el) => {
      if (el.getAttribute("src") !== KILO_SCRIPT_SRC) el.remove();
    });
    if (host.querySelector(`script[${marker}]`)) return;

    const script = document.createElement("script");
    script.src = KILO_SCRIPT_SRC;
    script.defer = true;
    script.setAttribute(marker, "true");
    host.appendChild(script);
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <div
        ref={hostRef}
        id="kilo-calendar-widget"
        className="w-full min-h-[400px] min-w-[700px] rounded-md bg-white p-2 text-neutral-900 scheme-light"
        data-gym-id="MTM4NWIyMGItZDUzMC00ZjE0LTg1NmItYmYzMzc1MWViMzk2"
        data-base-url="https://app.usekilo.com"
        data-sales-portal-slug="new-horizon-crossfit"
      />
    </div>
  );
}
