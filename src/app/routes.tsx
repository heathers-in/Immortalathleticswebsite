import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { SchedulePage } from "./pages/SchedulePage";
import { PricesPage } from "./pages/PricesPage";
import { FacilitiesPage } from "./pages/FacilitiesPage";
import { CoachingPage } from "./pages/CoachingPage";
import { YouthPage } from "./pages/YouthPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "schedule", Component: SchedulePage },
      { path: "prices", Component: PricesPage },
      { path: "facilities", Component: FacilitiesPage },
      { path: "coaching", Component: CoachingPage },
      { path: "youth", Component: YouthPage },
    ],
  },
]);
