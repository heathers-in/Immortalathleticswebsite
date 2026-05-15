import { Link } from "react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logoImg from "../../imports/Immortal_Ath_V2_Logo_Full_2C_white.png";
import { ContactLink } from "./ContactLink";
import { BOOK_TASTER_SESSION_URL } from "../data/weightliftingMembershipPackages";

export function Navigation() {
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-immortal-red/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img
                src={logoImg}
                alt="Immortal Athletics"
                width={3788}
                height={1239}
                decoding="async"
                className="h-10 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <div
                className="relative"
                onMouseEnter={() => setIsTrainingOpen(true)}
                onMouseLeave={() => setIsTrainingOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-white/70 transition-colors">
                  Training
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isTrainingOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-black border border-white/20 min-w-[160px] py-2">
                      <Link
                        to="/schedule"
                        className="block px-4 py-2 hover:bg-white/10 transition-colors"
                      >
                        Schedule
                      </Link>
                      <Link
                        to="/prices"
                        className="block px-4 py-2 hover:bg-white/10 transition-colors"
                      >
                        Prices
                      </Link>
                      <Link
                        to="/facilities"
                        className="block px-4 py-2 hover:bg-white/10 transition-colors"
                      >
                        Facilities
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/coaching" className="hover:text-white/70 transition-colors">
                Coaching
              </Link>

              <Link to="/youth" className="hover:text-white/70 transition-colors">
                Youth
              </Link>

              <ContactLink className="hover:text-white/70 transition-colors">
                Contact
              </ContactLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BOOK_TASTER_SESSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-immortal-red text-white px-6 py-3 hover:bg-immortal-red-dark transition-colors uppercase tracking-wide text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-immortal-red"
            >
              Book a Taster Session
            </a>

            <button
              type="button"
              className="lg:hidden p-2 -m-2 text-white hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="site-mobile-nav"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="site-mobile-nav" className="lg:hidden border-t border-white/10 py-6">
            <div className="flex flex-col gap-4">
              <Link
                to="/schedule"
                className="hover:text-white/70 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link
                to="/prices"
                className="hover:text-white/70 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prices
              </Link>
              <Link
                to="/facilities"
                className="hover:text-white/70 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Facilities
              </Link>
              <Link
                to="/coaching"
                className="hover:text-white/70 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Coaching
              </Link>
              <Link
                to="/youth"
                className="hover:text-white/70 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Youth
              </Link>
              <ContactLink
                className="hover:text-white/70 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </ContactLink>
              <a
                href={BOOK_TASTER_SESSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-immortal-red text-white px-6 py-3 hover:bg-immortal-red-dark transition-colors uppercase tracking-wide text-sm text-center mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-immortal-red"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Taster Session
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
