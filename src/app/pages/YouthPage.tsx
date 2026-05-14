import logomarkImg from "../../imports/Immortal_Logomark_1C.png";
import youthPhoto from "../../imports/_A7_2924.jpg";
import { Shield, Users, Trophy, Heart, PoundSterling } from "lucide-react";

export function YouthPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={youthPhoto}
            alt="Youth athlete training with coach"
            width={1920}
            height={2880}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl tracking-tight mb-4">Youth Programme</h1>
          <p className="text-xl text-white/80">Building strong, confident young athletes</p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Youth Programme Overview */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <img
                src={logomarkImg}
                alt=""
                width={648}
                height={1239}
                decoding="async"
                className="h-12 w-auto opacity-80"
              />
              <h2 className="text-5xl tracking-tight">Youth Weightlifting Programme</h2>
            </div>
            <div className="space-y-12">
              <div className="space-y-6 text-lg text-white/80 leading-relaxed max-w-4xl">
                <p>
                  Our youth programme introduces young athletes (ages 11-18) to Olympic weightlifting in a safe, structured, and fun environment. We focus on building proper movement patterns, developing athleticism, and fostering a lifelong love of strength training.
                </p>
                <p>
                  Olympic weightlifting is one of the best sports for developing explosive power, coordination, discipline, and confidence in young athletes. It's also a fantastic complement to other sports—many of our youth athletes come from rugby, football, athletics, and gymnastics backgrounds.
                </p>
                <p>
                  Our youth sessions are coached by experienced, DBS-checked coaches who specialise in working with young people. We emphasise technique over load, progression over intensity, and always prioritise safety and enjoyment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="min-h-[18rem] md:min-h-0">
                  <img
                    src={youthPhoto}
                    alt="Coach Sai with young athlete"
                    width={1920}
                    height={2880}
                    loading="lazy"
                    decoding="async"
                    className="h-full min-h-[18rem] w-full rounded-lg object-cover md:min-h-[min(32rem,70vh)]"
                  />
                </div>
                <div className="flex flex-col gap-8">
                  <div className="bg-zinc-950 border border-white/10 p-8 rounded-lg">
                    <h3 className="text-2xl mb-6">Programme Highlights</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <Users className="h-6 w-6 flex-shrink-0 mt-1 text-immortal-red" />
                        <div>
                          <p className="text-white mb-1">Small Group Coaching</p>
                          <p className="text-sm text-white/60">Max 8 athletes per session for individualised attention</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Trophy className="h-6 w-6 flex-shrink-0 mt-1 text-immortal-red" />
                        <div>
                          <p className="text-white mb-1">Competition Pathway</p>
                          <p className="text-sm text-white/60">Opportunities to compete at regional and national youth events</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Heart className="h-6 w-6 flex-shrink-0 mt-1 text-immortal-red" />
                        <div>
                          <p className="text-white mb-1">Supportive Environment</p>
                          <p className="text-sm text-white/60">Positive, encouraging culture where every athlete belongs</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-white/10 p-8 rounded-lg">
                    <PoundSterling className="h-10 w-10 mb-4 text-immortal-red" />
                    <h3 className="text-2xl mb-6">Youth membership</h3>
                    <div className="mb-6">
                      <div className="text-5xl mb-2 text-immortal-red">£90</div>
                      <p className="text-white/70">Per month · ages 17 and under</p>
                      <p className="text-white/60 text-sm mt-3">
                        2× Immortal Athletics coached classes and 2× weightlifting platform open gym per week.
                      </p>
                    </div>
                    <ul className="space-y-3 text-white/70 mb-6">
                      <li>• Personalised technique coaching</li>
                      <li>• Progress tracking and goal-setting</li>
                      <li>• Youth appropriate programming through TrainHeroic app</li>
                      <li>• Competition coaching</li>
                    </ul>
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-sm text-white/60">
                        This tier is arranged through the club (not on Kilo).{" "}
                        <a href="/#contact" className="text-immortal-red hover:underline">
                          Contact us
                        </a>{" "}
                        to join or ask about options for younger athletes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ages & Structure */}
          <div className="mb-24 border-t border-immortal-red/20 pt-24">
            <h2 className="text-4xl mb-8 tracking-tight">Ages & What to Expect</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-950 border border-white/10 p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Ages 11-14 (Foundation)</h3>
                <p className="text-white/70 mb-6">
                  At this stage, we focus on movement quality, mobility, and building a strong technical foundation. Sessions are fun, varied, and designed to develop coordination and body awareness.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li>• Introduction to snatch and clean & jerk</li>
                  <li>• Bodyweight and light barbell training</li>
                  <li>• Games and skill-building drills</li>
                  <li>• Emphasis on movement quality over load</li>
                </ul>
              </div>

              <div className="bg-zinc-950 border border-white/10 p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Ages 15-18 (Development)</h3>
                <p className="text-white/70 mb-6">
                  As athletes mature, we introduce a more structured programme, progressive loading, and competition preparation. Athletes at this level may begin competing at British Weightlifting youth events.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li>• Advanced technique refinement</li>
                  <li>• Progressive strength training</li>
                  <li>• Competition preparation and strategy</li>
                  <li>• Introduction to periodised programme design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Safeguarding Section */}
          <div id="safeguarding" className="border-t-4 border-immortal-red pt-24">
            <div className="flex items-center gap-4 mb-8">
              <Shield className="h-12 w-12 text-immortal-red" />
              <h2 className="text-5xl tracking-tight">Safeguarding Policy</h2>
            </div>

            <div className="bg-zinc-950 border border-white/10 p-12 rounded-lg">
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  The safety, welfare, and wellbeing of all young athletes at Immortal Athletics is our absolute priority. We are committed to providing a safe, positive, and inclusive environment where young people can develop their skills and confidence.
                </p>

                <div>
                  <h3 className="text-2xl mb-4 text-white">Our Commitment</h3>
                  <ul className="space-y-2 pl-6">
                    <li>• All coaches are DBS-checked and safeguarding trained</li>
                    <li>• We follow British Weightlifting safeguarding guidelines and UK Coaching standards</li>
                    
                    
                    <li>• We maintain appropriate coach-to-athlete ratios at all times</li>
                    <li>• Clear codes of conduct for coaches, athletes, and parents are in place</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl mb-4 text-white">Reporting Concerns</h3>
                  <p className="mb-4">
                    If you have any concerns about the safety or welfare of a young athlete, or if you witness inappropriate behaviour, please contact us immediately:
                  </p>
                  <div className="bg-black border border-white/20 p-6 rounded">
                    <p className="mb-2"><strong>Safeguarding Officer: <span className="font-normal">Heather Sinclair</span></strong> </p>
                    <p className="mb-2"><strong>Email:</strong> safeguarding@immortalathletics.co.uk</p>
                    
                    <p className="text-sm text-white/60 mt-4">
                      All concerns will be treated seriously and handled confidentially in line with our safeguarding procedures.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl mb-4 text-white">Policies & Documents</h3>
                  <ul className="space-y-2">
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                    
                    <li>
                      <a href="https://www.britishweightlifting.org/safeguarding" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                        British Weightlifting Safeguarding Resources
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/60">
                    Immortal Athletics is committed to creating a culture where everyone feels safe, valued, and able to raise concerns without fear. We regularly review our safeguarding practices to ensure we meet the highest standards of care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <a
              href="/#contact"
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
