/**
 * Full-bleed scrims matched to the home hero so interior page heroes read the same way.
 */
export function PageHeroGradients() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_72%_at_50%_44%,transparent_0%,rgb(0_0_0/0.42)_100%)]"
        aria-hidden
      />
    </>
  );
}
