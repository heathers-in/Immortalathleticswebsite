/**
 * Weightlifting products shown on the site (mirrors Kilo / New Horizon).
 * When Kilo copy or prices change, update this file and the checkout URLs if needed.
 *
 * @see https://app.usekilo.com/sales-portal/new-horizon-crossfit/
 */
export const NEW_HORIZON_KILO_SALES_PORTAL_URL =
  "https://app.usekilo.com/sales-portal/new-horizon-crossfit/";

export type WeightliftingMembershipPackage = {
  id: string;
  name: string;
  priceLabel: string;
  billingNote: string;
  bullets: string[];
  /** Deep link to this product on Kilo */
  checkoutUrl: string;
  /** Renders the “Most popular” ribbon when true */
  highlighted?: boolean;
};

export const WEIGHTLIFTING_MONTHLY_PACKAGES: WeightliftingMembershipPackage[] = [
  {
    id: "basic",
    name: "Basic",
    priceLabel: "£115",
    billingNote: "Per month · auto-renew on Kilo",
    checkoutUrl:
      "https://app.usekilo.com/sales-portal/new-horizon-crossfit/e03b8f43-c9c7-451c-b241-1cd4d03aa5ca/048b9d4e-2626-4b93-a5db-95ac3c37e4ba",
    bullets: [
      "2× Immortal Athletics coached classes per week",
      "2× weightlifting platform open gym per week",
    ],
  },
  {
    id: "intermediate",
    name: "Intermediate",
    priceLabel: "£140",
    billingNote: "Per month · auto-renew on Kilo",
    highlighted: true,
    checkoutUrl:
      "https://app.usekilo.com/sales-portal/new-horizon-crossfit/697e278e-a387-49b0-8861-faf2d0a8537d/1ed841e8-cbbb-4ff3-867e-433578c549c8",
    bullets: [
      "3× Immortal Athletics coached classes per week",
      "Unlimited weightlifting platform open gym (subject to first-come booking / availability)",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    priceLabel: "£160",
    billingNote: "Per month · auto-renew on Kilo",
    checkoutUrl:
      "https://app.usekilo.com/sales-portal/new-horizon-crossfit/88da5bba-bc07-481b-97ce-567ad746d375/2b084e96-6949-49a7-97c9-2028c41a547e",
    bullets: [
      "5× Immortal Athletics coached classes per week",
      "Unlimited weightlifting platform open gym (subject to first-come platform booking / availability)",
    ],
  },
];

/** Drop-in and multi-session passes (second row on the prices page). */
export const WEIGHTLIFTING_PASS_PACKAGES: WeightliftingMembershipPackage[] = [
  {
    id: "drop-in",
    name: "Drop-in (coached session)",
    priceLabel: "£35",
    billingNote: "Single session · time-based pass on Kilo",
    checkoutUrl:
      "https://app.usekilo.com/sales-portal/new-horizon-crossfit/041b0f04-46b7-44f9-8c45-644f65aa97e2/d914ee10-80e5-4dc7-a1f1-fc012d6403e2",
    bullets: ["One coached Immortal Athletics weightlifting class"],
  },
  {
    id: "five-pack",
    name: "5-class pack",
    priceLabel: "£85",
    billingNote: "Five sessions · time-based pass on Kilo",
    checkoutUrl:
      "https://app.usekilo.com/sales-portal/new-horizon-crossfit/2163fee0-4152-4190-ad5a-16612d2374c2/f494f9af-9719-4db5-9ba0-eaf55b3345bb",
    bullets: ["Five coached weightlifting sessions (use within the validity period shown on Kilo)"],
  },
];

export type StudentWeightliftingOffer = {
  id: string;
  title: string;
  priceLabel: string;
  billingNote: string;
  lines: string[];
};

/** Office / in-person setup only — not sold through Kilo checkout. */
export const STUDENT_WEIGHTLIFTING_OFFERS: StudentWeightliftingOffer[] = [
  {
    id: "student-with-id",
    title: "Student weightlifting membership",
    priceLabel: "£105",
    billingNote: "Per month",
    lines: [
      "2× Immortal Athletics coached classes per week",
      "2× weightlifting platform open gym per week",
      "Valid student ID must be presented",
    ],
  },
  {
    id: "student-17-under",
    title: "Weightlifting student (17 and under)",
    priceLabel: "£90",
    billingNote: "Per month",
    lines: [
      "2× Immortal Athletics coached classes per week",
      "2× weightlifting platform open gym per week",
      "For athletes aged 17 and under",
    ],
  },
];

export const STUDENT_MEMBERSHIPS_OFFLINE_NOTE =
  "These student memberships cannot be purchased directly on Kilo. Contact us for eligibility checks, student ID verification, and to arrange your membership.";
