import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((m) => ({ default: m.HomePage })),
);
const SchedulePage = lazy(() =>
  import("./pages/SchedulePage").then((m) => ({ default: m.SchedulePage })),
);
const PricesPage = lazy(() =>
  import("./pages/PricesPage").then((m) => ({ default: m.PricesPage })),
);
const FacilitiesPage = lazy(() =>
  import("./pages/FacilitiesPage").then((m) => ({ default: m.FacilitiesPage })),
);
const CoachingPage = lazy(() =>
  import("./pages/CoachingPage").then((m) => ({ default: m.CoachingPage })),
);
const YouthPage = lazy(() =>
  import("./pages/YouthPage").then((m) => ({ default: m.YouthPage })),
);
const TermsPage = lazy(() =>
  import("./pages/TermsPage").then((m) => ({ default: m.TermsPage })),
);
const PrivacyPage = lazy(() =>
  import("./pages/PrivacyPage").then((m) => ({ default: m.PrivacyPage })),
);

function RouteFallback() {
  return (
    <div className="flex min-h-[40vh] flex-1 items-center justify-center bg-black text-white/60">
      <p className="text-sm tracking-wide">Loading…</p>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<RouteFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "schedule",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <SchedulePage />
          </Suspense>
        ),
      },
      {
        path: "prices",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <PricesPage />
          </Suspense>
        ),
      },
      {
        path: "facilities",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <FacilitiesPage />
          </Suspense>
        ),
      },
      {
        path: "coaching",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <CoachingPage />
          </Suspense>
        ),
      },
      {
        path: "youth",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <YouthPage />
          </Suspense>
        ),
      },
      {
        path: "terms",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <TermsPage />
          </Suspense>
        ),
      },
      {
        path: "privacy",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <PrivacyPage />
          </Suspense>
        ),
      },
    ],
  },
]);
