import { ImageWithFallback } from "../components/ImageWithFallback";
import { Accordion } from "../components/Accordion";
import logomarkImg from "../../imports/Immortal_Logomark_1C.png";

export function PricesPage() {
  const pricingFaqs = [
    {
      question: "Can I pay per session instead of a monthly membership?",
      answer: "Yes, we offer drop-in rates for casual sessions. However, monthly memberships provide better value for regular attendees and include additional benefits like programme support."
    },
    {
      question: "Is there a joining fee?",
      answer: "No joining fee! Your first month's membership is all you need to get started. We want to make Olympic weightlifting accessible to everyone."
    },
    {
      question: "Do you offer student or concession rates?",
      answer: "Yes, we offer discounted rates for students, apprentices, and members of the armed forces. Contact us for details."
    },
    {
      question: "Can I freeze my membership if I need a break?",
      answer: "Absolutely. We understand life happens. You can freeze your membership for up to 3 months per year for holidays, injury recovery, or other commitments."
    },
    {
      question: "What's included in the membership?",
      answer: "All memberships include access to scheduled classes, open gym time, use of all equipment and platforms, online programme support, and discounts on workshops and seminars."
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1689514226730-c0fbca1345c9?w=1920"
            alt="Weightlifting equipment"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <h1 className="relative z-10 text-6xl tracking-tight">Prices & Membership</h1>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <img src={logomarkImg} alt="" className="h-12 w-auto mx-auto mb-6 opacity-60" />
            <p className="text-xl text-white/80 leading-relaxed">
              We offer flexible membership options to suit your training goals and schedule. All memberships include access to our world-class coaching, dedicated platforms, and supportive community.
            </p>
          </div>

          {/* Kilo App Pricing Embed */}
          <div className="bg-zinc-900 border border-white/10 rounded-lg p-12 mb-16">
            <div className="text-center text-white/60 mb-8">
              <p className="text-2xl mb-2">Membership Pricing</p>
              <p>Powered by Kilo App</p>
              <p className="text-sm mt-4">Embedded third-party Kilo pricing widget will display here</p>
            </div>

            {/* Mock Pricing Display */}
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="border border-white/20 p-8">
                <h3 className="text-2xl mb-2">Drop-In</h3>
                <div className="text-4xl mb-6 text-[#E74C3C]">£15</div>
                <p className="text-white/70 mb-6">Per session</p>
                <ul className="space-y-3 text-white/70">
                  <li>• Single session access</li>
                  <li>• All equipment included</li>
                  <li>• Coach support available</li>
                </ul>
              </div>

              <div className="border-2 border-[#E74C3C] p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E74C3C] text-white px-4 py-1 text-sm uppercase tracking-wide">
                  Most Popular
                </div>
                <h3 className="text-2xl mb-2">Monthly Unlimited</h3>
                <div className="text-4xl mb-6 text-[#E74C3C]">£90</div>
                <p className="text-white/70 mb-6">Per month</p>
                <ul className="space-y-3 text-white/70">
                  <li>• Unlimited class access</li>
                  <li>• Open gym privileges</li>
                  <li>• Online programme support</li>
                  <li>• Workshop discounts</li>
                </ul>
              </div>

              <div className="border border-white/20 p-8">
                <h3 className="text-2xl mb-2">3-Month Block</h3>
                <div className="text-4xl mb-6 text-[#E74C3C]">£240</div>
                <p className="text-white/70 mb-6">One-time payment</p>
                <ul className="space-y-3 text-white/70">
                  <li>• Save £30 vs monthly</li>
                  <li>• All unlimited benefits</li>
                  <li>• Priority competition entries</li>
                  <li>• Free technique assessment</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-black border border-white/10 rounded">
              <p className="text-center text-white/70">
                <strong className="text-white">Youth Membership (Ages 12-17):</strong> £60/month unlimited access to youth-specific sessions
              </p>
            </div>
          </div>

          {/* Pricing FAQ */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl mb-8 tracking-tight">Pricing Questions</h2>
            <Accordion items={pricingFaqs} />
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
