import { ImageWithFallback } from "../components/ImageWithFallback";
import coachSaiImg from "../../imports/new_horizon_crossfit_coach_sai_asghari.jpg";
import logomarkImg from "../../imports/Immortal_Logomark_1C.png";
import { User, Calendar, Target, Clipboard, Video, MessageSquare } from "lucide-react";

export function CoachingPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1535202666646-1a0a3884bc34?w=1920"
            alt="Coaching session"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl tracking-tight mb-4">Coaching Services</h1>
          <p className="text-xl text-white/80">Personalised training to elevate your performance</p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <img src={logomarkImg} alt="" className="h-12 w-auto mx-auto mb-6 opacity-60" />
            <p className="text-xl text-white/80 leading-relaxed">
              Whether you prefer in-person attention or the flexibility of remote programme delivery, Immortal Athletics offers elite coaching tailored to your goals, experience level, and schedule.
            </p>
          </div>

          {/* Coach Profile */}
          <div className="mb-24 border border-white/10 p-12 rounded-lg">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div>
                <img
                  src={coachSaiImg}
                  alt="Sai Asghari - Head Coach"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="md:col-span-2 space-y-4 text-white/80">
                <div>
                  <h2 className="text-4xl mb-2">Sai Asghari</h2>
                  <p className="text-xl text-white/75">Head Coach & Founder</p>
                </div>
                <p className="text-lg leading-relaxed">
                  With over a decade of coaching experience and a technical foundation built on elite Turkish and Bulgarian weightlifting systems, Sai brings world-class methodology to every athlete he works with. As a multi-time English Championships competitor, he understands the demands of competition and trains athletes not just to lift, but to perform under pressure.
                </p>
                <p className="text-lg leading-relaxed">
                  Sai's approach is rooted in precision, progressive development, and the "long game"—building athletes who are strong, confident, and resilient both on and off the platform.
                </p>
              </div>
            </div>
          </div>

          {/* Two Coaching Options */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* 1-2-1 Coaching */}
            <div className="bg-zinc-950 border border-white/10 p-12 rounded-lg">
              <div className="mb-8">
                <User className="h-12 w-12 mb-4 text-[#E74C3C]" />
                <h2 className="text-4xl mb-3 tracking-tight">1-2-1 Coaching</h2>
                <p className="text-xl text-white/70">In-person, personalised attention</p>
              </div>

              <div className="mb-8 space-y-4 text-white/80">
                <p>
                  One-to-one coaching provides the highest level of personalised attention, technical refinement, and accountability. Every session is tailored to your needs, with real-time feedback and hands-on coaching.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl mb-4">Who It's For</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Athletes preparing for competition</li>
                  <li>• Lifters working through technical challenges</li>
                  <li>• Individuals who prefer dedicated coaching time</li>
                  <li>• Those returning from injury or managing limitations</li>
                  <li>• Beginners wanting a strong technical foundation</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl mb-4">What's Included</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Personalised session programme design</li>
                  <li>• Real-time technique coaching and video analysis</li>
                  <li>• Strength and mobility assessments</li>
                  <li>• Competition strategy and peak planning</li>
                  <li>• Direct communication with your coach</li>
                  <li>• Flexible scheduling to fit your availability</li>
                </ul>
              </div>

              <a
                href="/#contact"
                className="block w-full text-center bg-[#E74C3C] text-white px-8 py-4 uppercase tracking-wide hover:bg-[#C0392B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E74C3C]"
              >
                Enquire About 1-2-1 Coaching
              </a>
            </div>

            {/* Online Coaching */}
            <div className="bg-zinc-950 border border-white/10 p-12 rounded-lg">
              <div className="mb-8">
                <Video className="h-12 w-12 mb-4 text-[#E74C3C]" />
                <h2 className="text-4xl mb-3 tracking-tight">Online Coaching</h2>
                <p className="text-xl text-white/70">Remote programme & support</p>
              </div>

              <div className="mb-8 space-y-4 text-white/80">
                <p>
                  Online coaching gives you access to elite programme design and expert guidance no matter where you train. Perfect for athletes who need flexibility but still want structured, progressive training with coach oversight.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl mb-4">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Clipboard className="h-6 w-6 flex-shrink-0 mt-1 text-white/70" />
                    <div>
                      <p className="text-white mb-1">Initial Assessment</p>
                      <p className="text-sm text-white/75">Video analysis, movement screening, and goal-setting call</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Calendar className="h-6 w-6 flex-shrink-0 mt-1 text-white/70" />
                    <div>
                      <p className="text-white mb-1">Custom programme</p>
                      <p className="text-sm text-white/75">Individualised training delivered weekly via app or spreadsheet</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Video className="h-6 w-6 flex-shrink-0 mt-1 text-white/70" />
                    <div>
                      <p className="text-white mb-1">Video Review & Feedback</p>
                      <p className="text-sm text-white/75">Submit videos, receive detailed technique feedback within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MessageSquare className="h-6 w-6 flex-shrink-0 mt-1 text-white/70" />
                    <div>
                      <p className="text-white mb-1">Ongoing Communication</p>
                      <p className="text-sm text-white/75">Direct access to your coach for questions and adjustments</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Target className="h-6 w-6 flex-shrink-0 mt-1 text-white/70" />
                    <div>
                      <p className="text-white mb-1">Progress Tracking & Adjustments</p>
                      <p className="text-sm text-white/75">Regular check-ins and programme adjustments based on your progress</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl mb-4">What's Included</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Fully individualised programme design (3-6 sessions/week)</li>
                  <li>• Video review and technique feedback</li>
                  <li>• Weekly check-ins and programme adjustments</li>
                  <li>• Direct messaging with your coach</li>
                  <li>• Competition peaking and strategy planning</li>
                  <li>• Access to our online training community</li>
                </ul>
              </div>

              <a
                href="/#contact"
                className="block w-full text-center bg-[#E74C3C] text-white px-8 py-4 uppercase tracking-wide hover:bg-[#C0392B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E74C3C]"
              >
                Enquire About Online Coaching
              </a>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center border-t border-[#E74C3C]/20 pt-16">
            <h2 className="text-3xl md:text-4xl mb-6 tracking-tight">Not sure which option is right for you?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Book a free consultation call to discuss your goals, experience level, and training needs. We'll help you choose the coaching approach that fits your lifestyle and ambitions.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-[#E74C3C] text-white px-12 py-5 text-xl uppercase tracking-wide hover:bg-[#C0392B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E74C3C]"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
