import { PageHeroGradients } from "../components/PageHeroGradients";
import facilitiesHeroImg from "../../imports/dsc_9657_immortal_platform.png";
import gymInsideImg from "../../imports/new_horizon_crossfit_gym_inside.jpg";
import galleryJerkBlocksImg from "../../imports/dsc_9646_gym_wide.png";
import galleryPlatformsWideImg from "../../imports/dsc_9667_lifting_stations.png";
import platformBarbellsImg from "../../imports/dsc_9676_barbells.png";
import { GoogleVenueMap } from "../components/GoogleVenueMap";
import logomarkImg from "../../imports/Immortal_Logomark_1C.png";

export function FacilitiesPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative flex h-[40vh] items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={facilitiesHeroImg}
            alt="Immortal Athletics branded Olympic weightlifting platform"
            width={1024}
            height={678}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <PageHeroGradients />
        </div>
        <h1 className="relative z-10 text-6xl tracking-tight [text-shadow:0_1px_2px_rgb(0_0_0/0.9),0_8px_32px_rgb(0_0_0/0.55)]">
          Facilities
        </h1>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* The Platforms */}
<div id="platforms" className="mb-24 scroll-mt-20">
<p className="text-sm font-medium uppercase tracking-widest text-white/80 mb-3">Equipment</p>
            <div className="flex items-center gap-4 mb-8">
              <img
                src={logomarkImg}
                alt=""
                width={648}
                height={1239}
                decoding="async"
                className="h-12 w-auto opacity-80"
              />
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
                <img
                  src={galleryJerkBlocksImg}
                  alt="Jerk blocks and Olympic weightlifting area at New Horizon CrossFit"
                  width={1024}
                  height={678}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover"
                />
                <img
                  src={galleryPlatformsWideImg}
                  alt="Olympic weightlifting platforms and racks at Immortal Athletics"
                  width={1024}
                  height={678}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover"
                />
                <img
                  src={platformBarbellsImg}
                  alt="Competition barbells at Immortal Athletics"
                  width={1024}
                  height={678}
                  loading="lazy"
                  decoding="async"
                  className="col-span-2 h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* The Box */}
          <div className="mb-24 border-t border-immortal-red/20 pt-24">
            <p className="text-sm font-medium uppercase tracking-widest text-white/70 mb-3">Venue</p>
<h2 className="text-5xl mb-8 tracking-tight">The Box</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={gymInsideImg}
                  alt="New Horizon CrossFit facility exterior"
                  width={1920}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  className="h-[500px] w-full object-cover"
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
          <div className="border-t border-immortal-red/20 pt-24">
            <p className="text-sm font-medium uppercase tracking-widest text-white/70 mb-3">Visit</p>
            <h2 className="text-5xl mb-12 tracking-tight">Location & Access</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="rounded-lg border border-white/10 bg-zinc-900 p-4">
                  <GoogleVenueMap />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl mb-6 tracking-tight">Visit details</h3>
                <div>
                  <h4 className="text-xl font-medium mb-3">Address</h4>
                  <p className="text-white/80 text-lg">
                    New Horizon CrossFit<br />
                    Unit 3, Woodhall Farm<br />
                    Hatfield AL9 5NU<br />
                    </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-3">Parking</h4>
                  <p className="text-white/80">
                    Free on-site parking available for all members and visitors. The facility is easily accessible by car with ample spaces in front of the building.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-3">Public Transport</h4>
                  <p className="text-white/80">
                    The nearest bus stop is a 10-minute walk from the facility, or a 35-minute walk from Hatfield train station. There are convenient and safe cycling paths from Hatfield and Welwyn Garden City.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-3">Accessibility</h4>
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
