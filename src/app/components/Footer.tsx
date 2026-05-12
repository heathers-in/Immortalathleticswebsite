import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import logomarkImg from "../../imports/Immortal_Logomark_1C.png";
import immortalLogoWhite from "../../imports/Immortal_Ath_V2_Logo_Full_BW_white.png";
import britishWeightliftingBadge from "../../imports/badge-british_weight_lifting.png";
import headerAlt from "../../imports/header-alt.png";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-[#E74C3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="space-y-6">
            <img
              src={immortalLogoWhite}
              alt="Immortal Athletics"
              className="h-12 w-auto opacity-90"
            />
            <img
              src={britishWeightliftingBadge}
              alt="British Weightlifting"
              className="h-16 w-auto opacity-80"
            />
            <img
              src={headerAlt}
              alt=""
              className="h-12 w-auto opacity-80"
            />
          </div>

          <div>
            <h3 className="uppercase tracking-wide mb-4">Opening Hours</h3>
            <div className="space-y-2 text-white/70">
              <p>Monday - Friday: 6am - 9pm</p>
              <p>Saturday: 8am - 6pm</p>
              <p>Sunday: 9am - 4pm</p>
            </div>
          </div>

          <div>
            <h3 className="uppercase tracking-wide mb-4">Contact</h3>
            <div className="space-y-2 text-white/70">
              <a href="mailto:info@immortalathletics.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                info@immortalathletics.co.uk
              </a>
              
            </div>
          </div>

          <div>
            <h3 className="uppercase tracking-wide mb-4">Address</h3>
            <div className="text-white/70">
              <p>New Horizon CrossFit</p>
              <p>Unit 2, The CowShed, Woodhall Farm</p>
              <p>Hatfield AL9 5NU</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 underline hover:text-white transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          <div>
            <h3 className="uppercase tracking-wide mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <a href="#privacy" className="block hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/youth#safeguarding" className="block hover:text-white transition-colors">
                Safeguarding Policy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E74C3C]/20 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Immortal Athletics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
