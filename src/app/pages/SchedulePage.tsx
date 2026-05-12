import { ImageWithFallback } from "../components/ImageWithFallback";
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

          {/* Kilo App Embed Container */}
          <div className="bg-zinc-900 border border-white/10 rounded-lg p-12 mb-12">
            <div className="text-center text-white/60 mb-8">
              <p className="text-2xl mb-2">Class Schedule</p>
              <p>Powered by Kilo App</p>
              <p className="text-sm mt-4">Embedded third-party Kilo scheduling widget will display here</p>
            </div>

            {/* Mock Schedule Display */}
            <div className="grid gap-6 mt-8">
              <div className="border border-white/20 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl">Monday - Friday</h3>
                    <p className="text-white/60">Morning Sessions</p>
                  </div>
                  <span className="text-2xl text-[#E74C3C]">6:00 AM - 8:00 AM</span>
                </div>
                <p className="text-white/70">Open gym with coached Olympic weightlifting focus</p>
              </div>

              <div className="border border-white/20 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl">Monday, Wednesday, Friday</h3>
                    <p className="text-white/60">Evening Technique Classes</p>
                  </div>
                  <span className="text-2xl text-[#E74C3C]">6:00 PM - 7:30 PM</span>
                </div>
                <p className="text-white/70">Structured classes focusing on snatch and clean & jerk technique</p>
              </div>

              <div className="border border-white/20 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl">Tuesday, Thursday</h3>
                    <p className="text-white/60">Strength & Accessory</p>
                  </div>
                  <span className="text-2xl text-[#E74C3C]">6:30 PM - 8:00 PM</span>
                </div>
                <p className="text-white/70">Squats, pulls, and accessory work to build your foundation</p>
              </div>

              <div className="border border-white/20 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl">Saturday</h3>
                    <p className="text-white/60">Competition Prep & Open Gym</p>
                  </div>
                  <span className="text-2xl text-[#E74C3C]">9:00 AM - 12:00 PM</span>
                </div>
                <p className="text-white/70">Competition simulation for athletes preparing for meets</p>
              </div>

              <div className="border border-white/20 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl">Sunday</h3>
                    <p className="text-white/60">Youth Programme</p>
                  </div>
                  <span className="text-2xl text-[#E74C3C]">10:00 AM - 11:30 AM</span>
                </div>
                <p className="text-white/70">Dedicated sessions for junior athletes ages 12-17</p>
              </div>
            </div>
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
