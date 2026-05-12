import { ImageWithFallback } from "../components/ImageWithFallback";
import { ChevronDown } from "lucide-react";
import { Accordion } from "../components/Accordion";
import { useState, useEffect } from "react";
import coachSaiImg from "../../imports/new_horizon_crossfit_coach_sai_asghari.png";
import logomarkImg from "../../imports/Immortal_Logomark_1C.png";
import athletePhoto from "../../imports/_A7_2913.jpg";
import trainingPhoto1 from "../../imports/IMG_0110.jpg";
import trainingPhoto2 from "../../imports/IMG-20240922-WA0045__1_.jpg";
import trainingPhoto3 from "../../imports/WhatsApp_Image_2026-05-12_at_13.59.29.jpeg";
import trainingPhoto4 from "../../imports/WhatsApp_Image_2026-05-11_at_11.04.38__4_.jpeg";
import trainingPhoto5 from "../../imports/WhatsApp_Image_2026-05-11_at_11.04.38.jpeg";
import trainingPhoto6 from "../../imports/WhatsApp_Image_2026-05-12_at_13.59.29__1_.jpeg";

export function HomePage() {
  const trainingPhotos = [
    { src: trainingPhoto1, alt: "Training at Immortal Athletics" },
    { src: trainingPhoto2, alt: "Training at Immortal Athletics" },
    { src: trainingPhoto3, alt: "Training at Immortal Athletics" },
    { src: trainingPhoto4, alt: "Training at Immortal Athletics" },
    { src: trainingPhoto5, alt: "Training at Immortal Athletics" },
    { src: trainingPhoto6, alt: "Training at Immortal Athletics" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trainingPhotos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const faqs = [
    {
      question: "Do I need experience to join?",
      answer: "Not at all! We welcome athletes of all levels, from complete beginners to experienced competitors. Our coaches will meet you where you are and help you progress safely."
    },
    {
      question: "What should I bring to my first session?",
      answer: "Wear comfortable athletic clothing and bring a water bottle. We recommend flat-soled shoes like lifting shoes or cross-trainers. Weightlifting shoes are beneficial but not required to start."
    },
    {
      question: "How often should I train?",
      answer: "We recommend 2-3 sessions per week for beginners, progressing to 3-5 sessions as you advance. Our coaches will help you find the right balance for your goals and recovery needs."
    },
    {
      question: "Is Olympic weightlifting safe?",
      answer: "When performed with proper technique and appropriate coaching, Olympic weightlifting is very safe. Our experienced coaches prioritize movement quality and progressive loading to minimize injury risk."
    },
    {
      question: "What age groups do you work with?",
      answer: "We work with athletes from age 12 upward. We have specialized youth programming for ages 12-17, and adult classes for 18+. See our Youth page for more details on junior athletes."
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1741478551865-da01fd4af0e4?w=1920"
            alt="Olympic weightlifter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <img src={logomarkImg} alt="" className="h-24 w-auto mx-auto mb-8 opacity-90" />
          <h1 className="text-6xl md:text-8xl tracking-tighter mb-8">
            IMMORTAL ATHLETICS
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-white/90">
            Build Strength. Build Legacy.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#E74C3C] text-white px-12 py-5 text-xl uppercase tracking-wide hover:bg-[#C0392B] transition-colors"
          >
            Book a Taster Session
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* About & Coaches Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-5xl mb-8 tracking-tight">About Immortal Athletics</h2>
              <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                <p>
                  Immortal Athletics is a British Olympic weightlifting club dedicated to developing athletes at every level—from those stepping onto the platform for the first time to competitors chasing national qualifying totals.
                </p>
                <p>
                  Founded on a passion for the "long game," we believe in building not just strength, but confidence, discipline, and a legacy that extends far beyond the barbell. We're a community-driven club with world-class coaching, rooted in the elite technical lineage of Turkish and Bulgarian weightlifting systems.
                </p>
                <p>
                  Operating out of New Horizon CrossFit in Derbyshire, we provide dedicated Olympic weightlifting platforms, expert programming, and a supportive environment where athletes can pursue excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={athletePhoto}
                alt="Athlete training at Immortal Athletics"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Meet the Coach */}
          <div className="border-t border-[#E74C3C]/20 pt-16">
            <h3 className="text-4xl mb-12 tracking-tight">Meet Your Coach</h3>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative">
                <img
                  src={coachSaiImg}
                  alt="Sai Asghari - Head Coach"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                  <h4 className="text-3xl mb-1">Sai Asghari</h4>
                  <p className="text-white/70">Head Coach & Founder</p>
                </div>
              </div>
              <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                <p>
                  With over a decade of experience under the bar and on the coaching platform, Sai has dedicated his career to mastering the art and science of the Snatch and the Clean & Jerk.
                </p>
                <p>
                  His coaching philosophy is built on a foundation of elite technical lineage; he has spent years studying the world-renowned systems of Turkish and Bulgarian weightlifting, learning directly from some of the sport's most accomplished minds to bring world-class methodology to his athletes.
                </p>
                <p>
                  As a multi-time competitor at the English Championships, Sai understands the grit and mental fortitude required to perform when the lights are brightest. He doesn't just coach the movement; he coaches the competitor.
                </p>
                <p>
                  Sai founded Immortal Athletics Weightlifting out of a genuine passion for the "long game." There is nothing more rewarding than watching an athlete transform—not just in the kilos they put on the bar, but in the confidence they carry through life.
                </p>
              </div>
            </div>
          </div>

          {/* Competition Photos */}
          <div className="mt-16 relative">
            <div className="text-center mb-8">
              <h3 className="text-3xl mb-3 tracking-tight">Our Athletes in Competition</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                Immortal Athletics athletes competing at regional and national events across the UK. These photos showcase our lifters representing the club on the platform.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[0, 1, 2, 3, 4].map((offset) => {
                const photoIndex = (currentSlide + offset) % trainingPhotos.length;
                return (
                  <div key={offset} className="relative overflow-hidden">
                    <img
                      src={trainingPhotos[photoIndex].src}
                      alt={trainingPhotos[photoIndex].alt}
                      className="w-full h-80 object-cover transition-opacity duration-500"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {trainingPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#E74C3C]" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is Olympic Weightlifting */}
      <section className="py-24 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <img src={logomarkImg} alt="" className="h-12 w-auto" />
              <h2 className="text-5xl tracking-tight">What is Olympic Weightlifting?</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed mb-16">
              <p>
                Olympic weightlifting is a barbell sport consisting of two competitive lifts: the Snatch and the Clean & Jerk. Both movements require explosive power, technical precision, mobility, and mental focus.
              </p>
              <p>
                The <strong>Snatch</strong> is a single, continuous movement where the barbell is lifted from the ground to overhead in one fluid motion. The <strong>Clean & Jerk</strong> is a two-part lift: first pulling the bar to the shoulders (the Clean), then driving it overhead (the Jerk).
              </p>
              <p>
                These lifts develop full-body strength, speed, coordination, and athleticism like no other training method. Olympic weightlifting is practiced by elite athletes worldwide and is a core component of strength and conditioning programs across many sports.
              </p>
            </div>

            <h3 className="text-4xl mb-8 tracking-tight">Benefits of Olympic Weightlifting</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl mb-3">Physical Development</h4>
                <ul className="space-y-2 text-black/80">
                  <li>• Explosive power and speed</li>
                  <li>• Full-body strength and coordination</li>
                  <li>• Improved mobility and flexibility</li>
                  <li>• Enhanced athletic performance</li>
                  <li>• Increased bone density and joint stability</li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl mb-3">Mental & Lifestyle</h4>
                <ul className="space-y-2 text-black/80">
                  <li>• Discipline and focus</li>
                  <li>• Confidence and mental resilience</li>
                  <li>• Goal-setting and achievement</li>
                  <li>• Community and camaraderie</li>
                  <li>• Lifelong skill development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-12 tracking-tight text-center">What Our Athletes Say</h2>

          <div className="bg-zinc-900 border border-white/10 p-12 rounded-lg mb-16">
            <div className="text-center text-white/60 mb-4">
              <p className="text-lg">Google Reviews widget placeholder</p>
              <p className="text-sm">Embedded third-party widget will display here</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="border-l-4 border-[#E74C3C] pl-4">
                <p className="mb-4 text-white/80">"The coaching at Immortal Athletics is world-class. Sai's attention to technique has transformed my lifts and kept me injury-free."</p>
                <p className="text-sm text-white/60">— Sarah M.</p>
              </div>
              <div className="border-l-4 border-[#E74C3C] pl-4">
                <p className="mb-4 text-white/80">"I walked in as a complete beginner and now I'm competing. The community here is incredibly supportive."</p>
                <p className="text-sm text-white/60">— James T.</p>
              </div>
              <div className="border-l-4 border-[#E74C3C] pl-4">
                <p className="mb-4 text-white/80">"Best decision I ever made. Not just stronger physically, but mentally too. This sport changes you."</p>
                <p className="text-sm text-white/60">— Emma R.</p>
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

      {/* Instagram Feed */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-12 tracking-tight text-center">Follow Our Journey</h2>

          <div className="bg-black border border-white/10 p-12 rounded-lg">
            <div className="text-center text-white/60 mb-8">
              <p className="text-lg">Instagram Feed</p>
              <p className="text-sm">Embedded third-party widget will display here</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1714051037909-1e585c47da7b?w=400"
                alt="Training moment"
                className="w-full aspect-square object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1741478551865-da01fd4af0e4?w=400"
                alt="Training moment"
                className="w-full aspect-square object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1741478551868-a17b1644228d?w=400"
                alt="Training moment"
                className="w-full aspect-square object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1606657830879-00d70555b1b6?w=400"
                alt="Training moment"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl mb-12 tracking-tight">Frequently Asked Questions</h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-12 tracking-tight text-center">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-zinc-900 border border-white/10 p-8 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <p className="text-lg mb-2">Google Map</p>
                  <p className="text-sm">Embedded map will display here</p>
                  <p className="text-sm mt-4">New Horizon CrossFit, Derbyshire, UK</p>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 uppercase tracking-wide text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#E74C3C]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 uppercase tracking-wide text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#E74C3C]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 uppercase tracking-wide text-sm">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#E74C3C]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 uppercase tracking-wide text-sm">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#E74C3C] resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#E74C3C] text-white px-8 py-4 uppercase tracking-wide hover:bg-[#C0392B] transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
