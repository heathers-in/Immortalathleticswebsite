import { Link } from "react-router";
import { ContactLink } from "../components/ContactLink";

export function NotFoundPage() {
  return (
    <div className="bg-black text-white">
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-immortal-red">
          404
        </p>
        <h1 className="mb-4 text-5xl tracking-tight md:text-6xl">Page not found</h1>
        <p className="mb-10 max-w-md text-lg text-white/70">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-block border border-immortal-red px-8 py-3 text-sm uppercase tracking-wide text-immortal-red transition-colors hover:bg-immortal-red hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/schedule"
            className="inline-block border border-white/30 px-8 py-3 text-sm uppercase tracking-wide text-white/90 transition-colors hover:border-white hover:text-white"
          >
            Schedule
          </Link>
          <ContactLink className="inline-block border border-white/30 px-8 py-3 text-sm uppercase tracking-wide text-white/90 transition-colors hover:border-white hover:text-white">
            Contact
          </ContactLink>
        </div>
      </section>
    </div>
  );
}
