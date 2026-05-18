import { PageHeroGradients } from "../components/PageHeroGradients";
import { KiloScheduleWidget } from "../components/KiloScheduleWidget";
import { BOOK_TASTER_SESSION_URL } from "../data/weightliftingMembershipPackages";
import logomarkImg from "../../imports/Immortal_Logomark_1C.png";
import scheduleHeroImg from "../../imports/dsc_9667_lifting_stations.png";

export function SchedulePage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative flex h-[40vh] items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={scheduleHeroImg}
            alt="Olympic weightlifting platforms and racks at Immortal Athletics, Hatfield"
            width={1024}
            height={678}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <PageHeroGradients />
        </div>
        <h1 className="relative z-10 text-6xl tracking-tight [text-shadow:0_1px_2px_rgb(0_0_0/0.9),0_8px_32px_rgb(0_0_0/0.55)]">
          Schedule
        </h1>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <img
              src={logomarkImg}
              alt=""
              width={648}
              height={1239}
              decoding="async"
              className="mx-auto mb-6 h-12 w-auto opacity-60"
            />
            <p className="text-xl text-white/80 leading-relaxed">
              Our Olympic weightlifting timetable is designed for athletes of all levels. Whether you are learning the fundamentals or chasing competition totals, you will find coached sessions and open platform times that fit your week.
            </p>
          </div>


          <div className="min-w-0 overflow-hidden rounded-lg border border-white/10 bg-zinc-900 p-4 sm:p-8 md:p-12 mb-12">
            <h2 className="mb-6 text-center text-2xl tracking-tight md:mb-8 md:text-3xl">
              Class timetable
            </h2>
            <KiloScheduleWidget />
          </div>

          <div className="text-center">
            <a
              href={BOOK_TASTER_SESSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-immortal-red text-white px-12 py-5 text-xl uppercase tracking-wide hover:bg-immortal-red-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-immortal-red"
            >
              Book a Taster Session
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
