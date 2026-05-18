import { PageHeroGradients } from "../components/PageHeroGradients";
import logomarkImg from "../../imports/Immortal_Logomark_1C.png";
import legalHeroImg from "../../imports/dsc_9676_barbells.png";

const sections = [
  {
    title: "1. Membership Pricing and Adjustments",
    body: [
      "Immortal Athletics reserves the right to review and amend membership prices at any time. Any changes to pricing will be communicated to members in advance using the contact details provided on their account. Updated prices will take effect from the date specified in the notification. Continued use of Immortal Athletics services after the revised pricing takes effect constitutes acceptance of the new price. Members who do not wish to continue under the updated pricing may cancel their membership in accordance with the cancellation policy.",
    ],
  },
  {
    title: "2. Refunds and Cancellations",
    body: [
      "In accordance with UK consumer law, members are entitled to a 14-day cooling-off period from the date of purchase. During this period, a full refund may be requested. After the 14-day cooling-off period has expired, all membership fees, coaching fees, and payments are strictly non-refundable. This includes situations where a member decides not to continue at the end of the month or chooses to discontinue services for personal reasons. Upon cancellation after the cooling-off period, access to all Immortal Athletics services—including programming, coaching support, and club sessions—will be revoked immediately.",
    ],
  },
  {
    title: "3. Use of Programming & Intellectual Property",
    body: [
      "All training programs, coaching materials, and related content provided by Immortal Athletics remain the exclusive intellectual property of Immortal Athletics. Copying, sharing, distributing, reproducing, or storing programming without explicit written consent is strictly prohibited. Any unauthorised use, duplication, or distribution of Immortal Athletics programming may result in immediate termination of membership and may lead to legal action to protect the company's intellectual property rights.",
    ],
  },
  {
    title: "4. Member Conduct",
    body: [
      "Members are expected to behave respectfully and responsibly while using Immortal Athletics facilities and services. This includes treating coaches, staff, and other athletes with respect, using equipment safely, following instructions, and maintaining a clean training environment. Immortal Athletics reserves the right to suspend or terminate membership without refund if a member engages in behaviour that is unsafe, disruptive, abusive, or damaging to the facility, staff, or other members.",
    ],
  },
  {
    title: "5. Liability",
    body: [
      "Participation in training sessions, classes, and open gym activities is undertaken at the member's own risk. Immortal Athletics is not liable for injuries resulting from improper equipment use, failure to follow instructions, pre-existing medical conditions, or loss or damage of personal property. Members are responsible for ensuring they are medically fit to participate.",
    ],
  },
  {
    title: "6. Late Payments",
    effective: "Effective from 20th March 2026",
    body: [
      "Membership fees must be paid on time and in full. If a payment fails or becomes overdue, access to services may be suspended until payment is resolved. Repeated failed payments may result in membership termination. Outstanding balances remain payable even if membership is cancelled. Immortal Athletics reserves the right to charge reasonable administrative fees for repeated failed payments or recovery of overdue balances.",
    ],
  },
  {
    title: "7. Amendments to Terms",
    body: [
      "Immortal Athletics may update or amend these Terms & Conditions at any time. Members will be notified of significant changes, and continued use of services constitutes acceptance of the updated terms.",
    ],
  },
] as const;

export function TermsPage() {
  return (
    <div className="bg-black text-white">
      <section className="relative flex h-[40vh] items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={legalHeroImg}
            alt=""
            width={1024}
            height={678}
            fetchPriority="high"
            decoding="async"
            aria-hidden
            className="h-full w-full object-cover"
          />
          <PageHeroGradients />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
          <h1 className="text-5xl tracking-tight [text-shadow:0_1px_2px_rgb(0_0_0/0.9),0_8px_32px_rgb(0_0_0/0.55)] md:text-6xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-lg text-white/90 [text-shadow:0_1px_2px_rgb(0_0_0/0.85),0_6px_24px_rgb(0_0_0/0.5)]">
            Please read these terms carefully before using Immortal Athletics services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <img
              src={logomarkImg}
              alt=""
              width={648}
              height={1239}
              decoding="async"
              className="h-10 w-auto opacity-80"
            />
            <p className="text-sm uppercase tracking-wide text-white/50">Legal</p>
          </div>

          <div className="space-y-12 text-white/80 leading-relaxed">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-3">
                  {section.title}
                </h2>
                {"effective" in section && section.effective ? (
                  <p className="text-sm text-immortal-red mb-3">{section.effective}</p>
                ) : null}
                {section.body.map((paragraph, idx) => (
                  <p key={idx} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>

          <p className="mt-16 text-sm text-white/50 border-t border-white/10 pt-8">
            If you have questions about these terms, contact us at{" "}
            <a
              href="mailto:info@immortalathletics.co.uk"
              className="text-immortal-red hover:text-white transition-colors"
            >
              info@immortalathletics.co.uk
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
