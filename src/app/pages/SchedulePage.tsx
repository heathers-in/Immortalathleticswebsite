import { ImageWithFallback } from "../components/ImageWithFallback";
import { KiloScheduleWidget } from "../components/KiloScheduleWidget";
import logomarkImg from "../../imports/Immortal_Logomark_1C.png";

export function SchedulePage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1741478551825-e7e5c77a2247?w=1920"
            alt="Training schedule"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <h1 className="relative z-10 text-6xl tracking-tight">Schedule</h1>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <img src={logomarkImg} alt="" className="h-12 w-auto mx-auto mb-6 opacity-60" />
            <p className="text-xl text-white/80 leading-relaxed">
              Our training schedule is designed to accommodate athletes of all levels. Whether you're a beginner learning the fundamentals or an experienced lifter chasing competition totals, you'll find sessions that fit your needs and schedule.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-lg p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl tracking-tight text-center mb-8">
              Class timetable
            </h2>
            <KiloScheduleWidget />
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block bg-[#E74C3C] text-white px-12 py-5 text-xl uppercase tracking-wide hover:bg-[#C0392B] transition-colors"
            >
              Book a Taster Session
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
