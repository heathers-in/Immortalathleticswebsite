import { ImageWithFallback } from "../components/ImageWithFallback";
import gymInsideImg from "../../imports/new_horizon_crossfit_gym_inside.png";
import { GoogleVenueMap } from "../components/GoogleVenueMap";
import logomarkImg from "../../imports/Immortal_Logomark_1C.png";

export function FacilitiesPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={gymInsideImg}
            alt="New Horizon CrossFit facility"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <h1 className="relative z-10 text-6xl tracking-tight">Facilities</h1>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* The Platforms */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <img src={logomarkImg} alt="" className="h-12 w-auto opacity-80" />
              <h2 className="text-5xl tracking-tight">The Platforms</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  Immortal Athletics operates dedicated Olympic weightlifting platforms equipped with everything you need to train at the highest level.
                </p>
                <p>
                  Our platforms feature:
                </p>
                <ul className="space-y-2 pl-6">
                  <li>• Competition-standard barbells (20kg men's, 15kg women's)</li>
                  <li>• Full sets of calibrated competition bumper plates</li>
                  <li>• Professional lifting platforms with shock-absorbing surfaces</li>
                  <li>• Squat racks and jerk blocks for accessory work</li>
                  <li>• Chalk and essential accessories</li>
                </ul>
                <p>
                  Whether you're hitting a new PR or drilling technique, our equipment meets the standards used in national and international competition.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1741478551786-734ddc960779?w=600"
                  alt="Barbell and platform"
                  className="w-full h-64 object-cover"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1689514226730-c0fbca1345c9?w=600"
                  alt="Weightlifting equipment"
                  className="w-full h-64 object-cover"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1689514226984-15f849652eaa?w=600"
                  alt="Barbell closeup"
                  className="w-full h-64 object-cover col-span-2"
                />
              </div>
            </div>
          </div>

          {/* The Box */}
          <div className="mb-24 border-t border-[#E74C3C]/20 pt-24">
            <h2 className="text-5xl mb-8 tracking-tight">The Box</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={gymInsideImg}
                  alt="New Horizon CrossFit facility exterior"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  We're proud to operate out of <strong className="text-white">New Horizon CrossFit</strong> in Hertfordshire—a spacious, purpose-built training facility with excellent amenities and a welcoming atmosphere.
                </p>
                <p>
                  The box features high ceilings, ample natural light, and a community-focused environment. While we share the space with CrossFit athletes, our dedicated Olympic weightlifting platforms ensure you have the equipment and space you need during scheduled sessions.
                </p>
                <p>
                  Facilities include:
                </p>
                <ul className="space-y-2 pl-6">
                  <li>• Clean, modern changing rooms and showers</li>
                  <li>• Ample free parking on-site</li>
                  <li>• Comfortable waiting area for spectators</li>
                  <li>• Kitchen facilities and water stations</li>
                  <li>• Easy access from major Hertfordshire routes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="border-t border-[#E74C3C]/20 pt-24">
            <h2 className="text-5xl mb-12 tracking-tight">Location & Access</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="rounded-lg border border-white/10 bg-zinc-900 p-4">
                  <GoogleVenueMap />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl mb-3">Address</h3>
                  <p className="text-white/80 text-lg">
                    New Horizon CrossFit<br />
                    Unit 3, Woodhall Farm<br />
                    Hatfield AL9 5NU<br />
                    </p>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Parking</h3>
                  <p className="text-white/80">
                    Free on-site parking available for all members and visitors. The facility is easily accessible by car with ample spaces in front of the building.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Public Transport</h3>
                  <p className="text-white/80">
                    The nearest bus stop is a 10-minute walk from the facility, or a 35-minute walk from Hatfield train station. There are convenient and safe cycling paths from Hatfield and Welwyn Garden City.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Accessibility</h3>
                  <p className="text-white/80">
                    Ground-floor access with wheelchair-friendly facilities. Please contact us in advance if you have specific accessibility requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
