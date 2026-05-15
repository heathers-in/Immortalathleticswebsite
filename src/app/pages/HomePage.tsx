import { Accordion } from "../components/Accordion";
import { PageHeroGradients } from "../components/PageHeroGradients";
import { BOOK_TASTER_SESSION_URL } from "../data/weightliftingMembershipPackages";
import { lazy, Suspense, useEffect, useState } from "react";
import coachSaiImg from "../../imports/new_horizon_crossfit_coach_sai_asghari.jpg";
import logomarkImg from "../../imports/Immortal_Logomark_1C.png";
import athletePhoto from "../../imports/_A7_2913.jpg";
import trainingPhoto1 from "../../imports/IMG_0110.jpg";
import trainingPhoto2 from "../../imports/IMG-20240922-WA0045__1_.jpg";
import trainingPhoto3 from "../../imports/WhatsApp_Image_2026-05-12_at_13.59.29.jpeg";
import trainingPhoto4 from "../../imports/WhatsApp_Image_2026-05-11_at_11.04.38__4_.jpeg";
import trainingPhoto5 from "../../imports/WhatsApp_Image_2026-05-11_at_11.04.38.jpeg";
import trainingPhoto6 from "../../imports/WhatsApp_Image_2026-05-12_at_13.59.29__1_.jpeg";

const GoogleReviewsPanel = lazy(() =>
  import("../components/GoogleReviewsPanel").then((m) => ({
    default: m.GoogleReviewsPanel,
  })),
);
const InstagramFeedSection = lazy(() =>
  import("../components/InstagramFeedSection").then((m) => ({
    default: m.InstagramFeedSection,
  })),
);
const HomeContactSection = lazy(() =>
  import("./HomeContactSection").then((m) => ({ default: m.HomeContactSection })),
);

function ReviewsSectionSkeleton() {
  return (
    <div
      className="mb-16 flex min-h-[280px] items-center justify-center rounded-lg border border-white/10 bg-zinc-900 p-12"
      aria-hidden
    >
      <p className="text-center text-white/40 text-sm">Loading reviews…</p>
    </div>
  );
}

function InstagramSectionSkeleton() {
  return (
    <div
      className="flex min-h-[280px] items-center justify-center rounded-lg border border-white/10 bg-black p-12"
      aria-hidden
    >
      <p className="text-center text-white/40 text-sm">Loading feed…</p>
    </div>
  );
}

function ContactSectionSkeleton() {
  return (
    <div className="grid min-h-[384px] gap-12 md:grid-cols-2" aria-hidden>
      <div className="rounded-lg border border-white/10 bg-zinc-900 p-4">
        <div className="flex h-96 min-h-[256px] items-center justify-center rounded-lg bg-zinc-800">
          <p className="text-sm text-white/40">Loading map…</p>
        </div>
      </div>
      <div className="flex min-h-[384px] items-center justify-center rounded-lg border border-white/10 bg-zinc-900">
        <p className="text-sm text-white/40">Loading form…</p>
      </div>
    </div>
  );
}

/** Intrinsic size of `public/images/hero.jpg` / `hero.webp` (cropped header export, 16:9). */
const HERO_WIDTH = 1920;
const HERO_HEIGHT = 1080;

export function HomePage() {
  const trainingPhotos = [
    { src: trainingPhoto1, alt: "Training at Immortal Athletics", width: 607, height: 910 },
    { src: trainingPhoto2, alt: "Training at Immortal Athletics", width: 1200, height: 1600 },
    { src: trainingPhoto3, alt: "Training at Immortal Athletics", width: 1440, height: 1920 },
    { src: trainingPhoto4, alt: "Training at Immortal Athletics", width: 1143, height: 1600 },
    { src: trainingPhoto5, alt: "Training at Immortal Athletics", width: 1143, height: 1600 },
    { src: trainingPhoto6, alt: "Training at Immortal Athletics", width: 750, height: 1000 },
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
      <section className="relative flex min-h-[300px] h-[48svh] max-h-[520px] w-full flex-col items-center justify-start overflow-visible px-0 pt-8 pb-10 md:h-[42svh] md:max-h-[560px] md:pt-10 md:pb-12">
        <div className="absolute inset-0 overflow-hidden">
          <picture className="block h-full w-full">
            <source srcSet="/images/hero.webp" type="image/webp" />
            <img
              src="/images/hero.jpg"
              alt="Olympic barbell and lifting platform, close view from the hands downward"
              width={HERO_WIDTH}
              height={HERO_HEIGHT}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </picture>
          <PageHeroGradients />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-4xl shrink-0 px-4 text-center">
          <img
            src={logomarkImg}
            alt=""
            width={648}
            height={1239}
            decoding="async"
            className="mx-auto mb-3 block h-16 w-auto max-w-full object-contain opacity-90 md:mb-4 md:h-20"
          />
          <div
            className="mx-auto mb-5 h-px w-20 bg-immortal-red/45 md:mb-6 md:w-24"
            aria-hidden
          />
          <h1 className="mx-auto mb-5 max-w-[min(22ch,100%)] text-5xl tracking-tighter [text-shadow:0_1px_2px_rgb(0_0_0/0.9),0_8px_32px_rgb(0_0_0/0.55)] contrast-more:[text-shadow:0_2px_4px_rgb(0_0_0/1),0_12px_40px_rgb(0_0_0/0.75)] md:mb-6 md:text-7xl">
            IMMORTAL ATHLETICS
          </h1>
          <p className="mb-2 text-lg text-white/85 [text-shadow:0_1px_2px_rgb(0_0_0/0.85),0_6px_24px_rgb(0_0_0/0.5)] md:text-xl">
            Olympic weightlifting club · Welwyn Hatfield, Hertfordshire
          </p>
          <p className="mb-6 text-xl text-white/90 [text-shadow:0_1px_2px_rgb(0_0_0/0.85),0_6px_24px_rgb(0_0_0/0.5)] contrast-more:text-white md:mb-8 md:text-2xl">
            Build Strength. Build Legacy.
          </p>
          <a
            href={BOOK_TASTER_SESSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-immortal-red px-10 py-4 text-lg uppercase tracking-wide text-white shadow-lg shadow-black/40 transition-colors hover:bg-immortal-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-immortal-red md:px-12 md:py-4 md:text-xl"
          >
            Book a Taster Session
          </a>
        </div>
      </section>

      {/* About & Coaches Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-5xl tracking-tight">About Immortal Athletics</h2>
              <div className="space-y-4 text-lg leading-relaxed text-white/80">
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
                width={1920}
                height={2880}
                loading="lazy"
                decoding="async"
                className="h-[500px] w-full object-cover"
              />
            </div>
          </div>

          {/* Meet the Coach */}
          <div className="border-t border-immortal-red/20 pt-16">
            <h3 className="mb-12 text-4xl tracking-tight">Meet Your Coach</h3>
            <div className="grid items-start gap-12 md:grid-cols-2">
              <div className="relative">
                <img
                  src={coachSaiImg}
                  alt="Sai Asghari - Head Coach"
                  width={605}
                  height={605}
                  loading="lazy"
                  decoding="async"
                  className="h-[600px] w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                  <h4 className="mb-1 text-3xl">Sai Asghari</h4>
                  <p className="text-white/70">Head Coach & Founder</p>
                </div>
              </div>
              <div className="space-y-4 text-lg leading-relaxed text-white/80">
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
          <div className="relative mt-16">
            <div className="mb-8 text-center">
              <h3 className="mb-3 text-3xl tracking-tight">Our Athletes in Competition</h3>
              <p className="mx-auto max-w-2xl text-white/70">
                Immortal Athletics athletes competing at regional and national events across the UK. These photos showcase our lifters representing the club on the platform.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
              {[0, 1, 2, 3, 4].map((offset) => {
                const photoIndex = (currentSlide + offset) % trainingPhotos.length;
                const ph = trainingPhotos[photoIndex];
                return (
                  <div key={offset} className="relative overflow-hidden">
                    <img
                      src={ph.src}
                      alt={ph.alt}
                      width={ph.width}
                      height={ph.height}
                      loading="lazy"
                      decoding="async"
                      className="h-80 w-full object-cover transition-opacity duration-500"
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {trainingPhotos.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
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
      <section className="bg-white px-4 py-24 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <img
                src={logomarkImg}
                alt=""
                width={648}
                height={1239}
                decoding="async"
                className="h-12 w-auto"
              />
              <h2 className="text-5xl tracking-tight">What is Olympic Weightlifting?</h2>
            </div>
            <div className="mb-16 space-y-6 text-lg leading-relaxed">
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

            <h3 className="mb-8 text-4xl tracking-tight">Benefits of Olympic Weightlifting</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-3 text-2xl">Physical Development</h4>
                <ul className="space-y-2 text-black/80">
                  <li>• Explosive power and speed</li>
                  <li>• Full-body strength and coordination</li>
                  <li>• Improved mobility and flexibility</li>
                  <li>• Enhanced athletic performance</li>
                  <li>• Increased bone density and joint stability</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-2xl">Mental & Lifestyle</h4>
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
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-5xl tracking-tight">What Our Athletes Say</h2>

          <Suspense fallback={<ReviewsSectionSkeleton />}>
            <GoogleReviewsPanel />
          </Suspense>

          <div className="text-center">
            <a
              href={BOOK_TASTER_SESSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-immortal-red px-12 py-5 text-xl uppercase tracking-wide text-white transition-colors hover:bg-immortal-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-immortal-red"
            >
              Book a Taster Session
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="bg-zinc-950 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-5xl tracking-tight">Follow Our Journey</h2>

          <Suspense fallback={<InstagramSectionSkeleton />}>
            <InstagramFeedSection />
          </Suspense>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-5xl tracking-tight">Frequently Asked Questions</h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 bg-zinc-950 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-5xl tracking-tight">Get in Touch</h2>

          <Suspense fallback={<ContactSectionSkeleton />}>
            <HomeContactSection />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
