import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { PageSeo } from "./PageSeo";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageSeo />
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
