import { Link } from "react-router";
import { PageHeroGradients } from "../components/PageHeroGradients";
import logomarkImg from "../../imports/Immortal_Logomark_1C.png";
import legalHeroImg from "../../imports/dsc_9676_barbells.png";

const sections: { title: string; paragraphs: string[] }[] = [
  {
    title: "Who we are",
    paragraphs: [
      "Immortal Athletics (“we”, “us”) is the data controller for personal data processed through this website and in connection with enquiries you send to us, subject to sections below about partners and third-party platforms.",
      "Contact: info@immortalathletics.co.uk. Postal address: New Horizon CrossFit, Unit 3, The CowShed, Woodhall Farm, Hatfield AL9 5NU.",
      "This notice is a working draft aligned to how this website operates. You should have it reviewed by a qualified adviser so it matches your legal structure, contracts with New Horizon CrossFit, Kilo, TrainHeroic, and any other processors you use.",
    ],
  },
  {
    title: "What personal data we process",
    paragraphs: [
      "Website and enquiries: if you use the “Get in Touch” form or email us, we may process your name, email address, phone number (if provided), message content, and technical metadata such as IP address and browser type when those are logged by hosting or security systems. Form submissions may be delivered to our inbox using Resend as an email service provider.",
      "Embedded features: pages may load content or scripts from Google (e.g. venue map, review information), Instagram (feed or links), and Kilo (e.g. schedule or purchase flows linked from this site). Those providers may process data in line with their own policies when you interact with their widgets or leave our site to complete a purchase.",
      "Reviews display: where we show Google reviews, our site may request review data from an API we operate or host (see your deployment configuration). That data originates from Google’s services and may include reviewer names, ratings, text, and related metadata.",
      "Membership and training: if you join as a member or use coaching or programming services, New Horizon CrossFit, Kilo, TrainHeroic, and other tools you use may process additional categories of data (payment, attendance, health and safety, programme data) under their terms and as described in your membership or club agreements.",
    ],
  },
  {
    title: "Why we process data and lawful bases",
    paragraphs: [
      "We process personal data to respond to enquiries, run the club, deliver coaching and memberships, improve the website, comply with law, and protect our legitimate interests (for example network security and fraud prevention), where applicable.",
      "For marketing communications that are not strictly service-related, we will rely on consent or soft opt-in only where the law allows, and you can withdraw consent at any time.",
      "The exact lawful basis (contract, legitimate interests, consent, legal obligation) depends on the activity; your adviser should confirm the mapping for each processing activity.",
    ],
  },
  {
    title: "Sharing and processors",
    paragraphs: [
      "We do not sell your personal data. We may share it with service providers who help us operate the website, email, bookings, payments, coaching platforms, or the gym venue—for example hosting providers, New Horizon CrossFit, Kilo, Google, Meta/Instagram, TrainHeroic, Resend (contact form email delivery), and IT support—under appropriate terms and instructions where they act as processors.",
      "Some providers may be based outside the UK; where personal data is transferred internationally, we aim to rely on appropriate safeguards such as the UK International Data Transfer Agreement or Addendum, or adequacy regulations, as required by UK data protection law.",
    ],
  },
  {
    title: "Retention",
    paragraphs: [
      "We keep enquiry and correspondence data only as long as needed to handle your request and for a reasonable period afterwards for follow-up, disputes, or legal claims, unless a longer period is required by law.",
      "Membership, billing, and programme records are kept according to operational, accounting, and legal requirements agreed in your club or platform terms.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "Under UK GDPR you may have the right to access, rectify, erase, restrict, or object to certain processing, and in some cases the right to data portability. Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of processing before withdrawal.",
      "You may also lodge a complaint with the Information Commissioner’s Office (ICO), the UK supervisory authority.",
    ],
  },
  {
    title: "Cookies and similar technologies",
    paragraphs: [
      "This site may use strictly necessary cookies or similar technologies required for security or basic functionality. If you add analytics, advertising, or social pixels, you should update this section and, where required, implement a cookie consent mechanism in line with PECR.",
    ],
  },
];

export function PrivacyPage() {
  const lastUpdated = "May 2026";

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
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-white/90 [text-shadow:0_1px_2px_rgb(0_0_0/0.85),0_6px_24px_rgb(0_0_0/0.5)]">
            How we use personal data when you use immortalathletics.co.uk and related services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <img
              src={logomarkImg}
              alt=""
              width={648}
              height={1239}
              decoding="async"
              className="h-10 w-auto opacity-80"
            />
            <p className="text-sm uppercase tracking-wide text-white/70">Legal</p>
          </div>
          <p className="text-sm text-white/70 mb-12">Last updated: {lastUpdated}</p>

          <div className="space-y-12 text-white/80 leading-relaxed">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-3">
                  {section.title}
                </h2>
                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="mb-4 last:mb-0">
                    {section.title === "Your rights" && idx === section.paragraphs.length - 1 ? (
                      <>
                        {p}{" "}
                        <a
                          href="https://ico.org.uk/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-immortal-red hover:text-white transition-colors"
                        >
                          ico.org.uk
                        </a>
                        .
                      </>
                    ) : (
                      p
                    )}
                  </p>
                ))}
              </article>
            ))}

            <article>
              <h2 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-3">
                Changes
              </h2>
              <p className="mb-4">
                We may update this privacy notice from time to time. Material changes will be indicated on this page with an updated date.
              </p>
              <p>
                For membership and payment terms, see also our{" "}
                <Link to="/terms" className="text-immortal-red hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </article>
          </div>

          <p className="mt-16 text-sm text-white/50 border-t border-white/10 pt-8">
            Questions about privacy:{" "}
            <a
              href="mailto:info@immortalathletics.co.uk"
              className="text-immortal-red hover:text-white transition-colors"
            >
              info@immortalathletics.co.uk
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
