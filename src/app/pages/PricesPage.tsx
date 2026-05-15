import { ContactLink } from "../components/ContactLink";
import { PageHeroGradients } from "../components/PageHeroGradients";
import { Accordion } from "../components/Accordion";
import logomarkImg from "../../imports/Immortal_Logomark_1C.png";
import pricesHeroImg from "../../imports/new_horizon_crossfit_gym_inside.jpg";
import {
  BOOK_TASTER_SESSION_URL,
  NEW_HORIZON_KILO_SALES_PORTAL_URL,
  STUDENT_MEMBERSHIPS_OFFLINE_NOTE,
  STUDENT_WEIGHTLIFTING_OFFERS,
  WEIGHTLIFTING_MONTHLY_PACKAGES,
  WEIGHTLIFTING_PASS_PACKAGES,
  type WeightliftingMembershipPackage,
} from "../data/weightliftingMembershipPackages";

function PricingTierCard({ pkg }: { pkg: WeightliftingMembershipPackage }) {
  return (
    <div
      className={`flex flex-col p-8 ${
        pkg.highlighted ? "border-2 border-immortal-red relative" : "border border-white/20"
      }`}
    >
      {pkg.highlighted ? (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-immortal-red text-white px-4 py-1 text-sm uppercase tracking-wide">
          Most popular
        </div>
      ) : null}
      <h3 className="text-2xl mb-2">{pkg.name}</h3>
      <div className="text-4xl mb-2 text-immortal-red">{pkg.priceLabel}</div>
      <p className="text-white/70 mb-6">{pkg.billingNote}</p>
      <ul className="space-y-3 text-white/80 grow">
        {pkg.bullets.map((line) => (
          <li key={line}>• {line}</li>
        ))}
      </ul>
      <a
        href={pkg.checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block text-center border border-immortal-red text-immortal-red px-4 py-3 text-sm uppercase tracking-wide hover:bg-immortal-red hover:text-white transition-colors"
      >
        Buy on Kilo
      </a>
    </div>
  );
}

export function PricesPage() {
  const pricingFaqs = [
    {
      question: "What's included in a membership?",
      answer:
        "All memberships include open gym access, personalised programming and progress tracking through the TrainHeroic app, and competition coaching for those who want it.",
    },
    {
      question: "Can I pay per session instead of taking out a membership?",
      answer:
        "Yes, we offer drop-in rates for casual sessions. Monthly membership works out better value if you're training regularly and includes the full benefits above.",
    },
    {
      question: "Is there a joining fee?",
      answer:
        "No joining fee. Your first month's membership is all you need to get started.",
    },
    {
      question: "Can I freeze my membership if I need a break?",
      answer:
        "Yes. You can freeze your membership for up to three months per year, whether that's for holidays, injury recovery, or anything else life throws at you.",
    },
    {
      question: "How do I buy or renew a membership?",
      answer:
        "Use the “Buy on Kilo” button on the card for the product you want, or open the main “View plans and purchase on Kilo” link to browse the full New Horizon portal. Checkout and renewals are handled on Kilo.",
    },
    {
      question: "Do you offer student or concession rates?",
      answer:
        "Yes. Student weightlifting membership is £105 per month (2 coached classes and 2 weightlifting platform open gyms per week) with a valid student ID. For athletes aged 17 and under, the weightlifting student rate is £90 per month on the same training pattern. These student tiers are set up through the club, not on Kilo—contact us.",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative flex h-[40vh] items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={pricesHeroImg}
            alt="Olympic weightlifting platforms at Immortal Athletics, Hatfield"
            width={1920}
            height={960}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <PageHeroGradients />
        </div>
        <h1 className="relative z-10 text-6xl tracking-tight [text-shadow:0_1px_2px_rgb(0_0_0/0.9),0_8px_32px_rgb(0_0_0/0.55)]">
          Prices & Membership
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
              We offer flexible weightlifting membership options to suit your training goals and schedule. All memberships include access to our coaching, dedicated Olympic platforms, and supportive club community.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-lg p-8 md:p-12 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl tracking-tight text-white mb-3">
                Weightlifting membership
              </h2>
              <p className="text-white/80 leading-relaxed">
                Summary of Immortal Athletics weightlifting options.{" "}
                <strong className="text-white/90">Final price, billing, and terms are set at checkout</strong>{" "}
                on Kilo (New Horizon CrossFit).
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {WEIGHTLIFTING_MONTHLY_PACKAGES.map((pkg) => (
                <PricingTierCard key={pkg.id} pkg={pkg} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <div className="grid w-full max-w-3xl gap-8 sm:grid-cols-2">
                {WEIGHTLIFTING_PASS_PACKAGES.map((pkg) => (
                  <PricingTierCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-8 p-6 md:p-10 bg-black border border-white/10 rounded">
              <h3 className="text-xl md:text-2xl tracking-tight text-white text-center">
                Youth & student weightlifting
              </h3>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {STUDENT_WEIGHTLIFTING_OFFERS.map((offer) => (
                  <div
                    key={offer.id}
                    className="border border-white/15 rounded-lg p-6 text-left flex flex-col"
                  >
                    <h4 className="text-lg font-medium text-white mb-2">{offer.title}</h4>
                    <div className="text-3xl text-immortal-red mb-1">{offer.priceLabel}</div>
                    <p className="text-sm text-white/80 mb-4">{offer.billingNote}</p>
                    <ul className="space-y-2 text-white/80 text-sm grow">
                      {offer.lines.map((line) => (
                        <li key={line}>• {line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-center text-white/80 text-sm max-w-2xl mx-auto leading-relaxed">
                {STUDENT_MEMBERSHIPS_OFFLINE_NOTE}
              </p>
              <div className="text-center">
                <ContactLink
                  className="inline-block border border-white/30 text-white px-8 py-3 text-sm uppercase tracking-wide hover:border-immortal-red hover:text-immortal-red transition-colors"
                >
                  Contact us for details
                </ContactLink>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={NEW_HORIZON_KILO_SALES_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-immortal-red text-white px-10 py-4 text-lg uppercase tracking-wide hover:bg-immortal-red-dark transition-colors text-center w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-immortal-red"
              >
                View plans and purchase on Kilo
              </a>
            </div>

            <p className="text-center text-sm text-white/70 mt-6 max-w-xl mx-auto">
              CrossFit and other New Horizon products are listed on the same Kilo portal—open the
              link above to compare plans.
            </p>
          </div>

          {/* Pricing FAQ */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl mb-8 tracking-tight">Pricing Questions</h2>
            <Accordion items={pricingFaqs} />
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
