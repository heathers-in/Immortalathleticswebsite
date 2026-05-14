import { ImageWithFallback } from "../components/ImageWithFallback";
import { ContactForm } from "../components/ContactForm";
import { GoogleVenueMap } from "../components/GoogleVenueMap";
import { GoogleReviewsPanel } from "../components/GoogleReviewsPanel";
import { InstagramFeedSection } from "../components/InstagramFeedSection";
import { ChevronDown } from "lucide-react";
import { Accordion } from "../components/Accordion";
import { useState, useEffect } from "react";
import coachSaiImg from "../../imports/new_horizon_crossfit_coach_sai_asghari.jpg";
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
      question: "Do I need any experience to join?",
      answer:
        "No experience needed at all. Our coaches will take you through everything from scratch using a stick or a lightweight technique bar. Olympic weightlifting is a technical sport and we're used to starting from zero. If you're unsure, book a taster session and come and see for yourself.",
    },
    {
      question: "What ages do you cater for?",
      answer:
        "We welcome athletes from age 11 through to masters (35–80+). Our Youth programme is specifically designed for 11–17 year olds, with coaching tailored to developing athletes. Masters athletes as well are very much part of the club; British Weightlifting has an active masters competition scene and we support athletes at every stage of life.",
    },
    {
      question: "What happens in a weightlifting class?",
      answer:
        "Sessions are built around the two Olympic lifts, the snatch and the clean & jerk. You'll spend the majority of your time learning and developing these movements. As you progress, sessions will also include accessory work such as squats and pulls that support your lifting. Expect a structured, coached environment. This isn't a drop-in gym session.",
    },
    {
      question: "What should I wear and bring?",
      answer:
        "Wear comfortable training clothes you can move freely in. Flat, firm-soled shoes are best. Dedicated weightlifting shoes are worth investing in eventually, but don't worry about that to start. Bring water and be ready to work hard.",
    },
    {
      question: "How do I get started?",
      answer:
        "Book a taster session. It's the best way to meet the coaches, see the club, and try a session with no commitment. You can book directly through the Schedule page.",
    },
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
            className="inline-block bg-immortal-red text-white px-12 py-5 text-xl uppercase tracking-wide hover:bg-immortal-red-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-immortal-red"
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
                  Operating out of New Horizon CrossFit in Hertfordshire, we provide dedicated Olympic weightlifting platforms, expert programme design, and a supportive environment where athletes can pursue excellence.
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
          <div className="border-t border-immortal-red/20 pt-16">
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
                    index === currentSlide ? "bg-immortal-red" : "bg-white/30"
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
                These lifts develop full-body strength, speed, coordination, and athleticism like no other training method. Olympic weightlifting is practised by elite athletes worldwide and is a core component of strength and conditioning programmes across many sports.
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

          <GoogleReviewsPanel />

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block bg-immortal-red text-white px-12 py-5 text-xl uppercase tracking-wide hover:bg-immortal-red-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-immortal-red"
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

          <InstagramFeedSection />
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
              <div className="rounded-lg border border-white/10 bg-zinc-900 p-4">
                <GoogleVenueMap caption="New Horizon CrossFit, Hatfield, UK" />
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
