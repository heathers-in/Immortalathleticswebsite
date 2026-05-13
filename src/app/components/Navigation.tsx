import { Link } from "react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logoImg from "../../imports/Immortal_Ath_V2_Logo_Full_2C_white.png";

export function Navigation() {
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-[#E74C3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src={logoImg} alt="Immortal Athletics" className="h-10 w-auto" />
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

              <Link to="/#contact" className="hover:text-white/70 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/#contact"
              className="hidden sm:block bg-[#E74C3C] text-white px-6 py-3 hover:bg-[#C0392B] transition-colors uppercase tracking-wide text-sm"
            >
              Book a Taster Session
            </Link>

            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-6">
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
              <Link
                to="/#contact"
                className="hover:text-white/70 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/#contact"
                className="bg-[#E74C3C] text-white px-6 py-3 hover:bg-[#C0392B] transition-colors uppercase tracking-wide text-sm text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Taster Session
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
