import {
  IMMORTAL_GOOGLE_MAPS_URL,
  IMMORTAL_VENUE_LAT,
  IMMORTAL_VENUE_LNG,
} from "./venueLocation";
import { DEFAULT_OG_IMAGE, SITE_URL } from "./seo";

const INSTAGRAM_URL = "https://www.instagram.com/immortalathletics/";

/** Opening hours aligned with site footer (schema.org DayOfWeek). */
const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "06:00",
    closes: "20:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Friday",
    opens: "06:00",
    closes: "10:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Friday",
    opens: "17:30",
    closes: "19:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "09:00",
    closes: "12:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Sunday",
    opens: "10:30",
    closes: "12:30",
  },
] as const;

export function getSportsActivityLocationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Immortal Athletics Weightlifting Club",
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    email: "info@immortalathletics.co.uk",
    description:
      "British Olympic weightlifting club in Hertfordshire. Expert coaching and dedicated platforms at New Horizon CrossFit, Hatfield.",
    sport: "Olympic weightlifting",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 3, The CowShed, Woodhall Farm",
      addressLocality: "Hatfield",
      postalCode: "AL9 5NU",
      addressRegion: "Hertfordshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: IMMORTAL_VENUE_LAT,
      longitude: IMMORTAL_VENUE_LNG,
    },
    containedInPlace: {
      "@type": "SportsActivityLocation",
      name: "New Horizon CrossFit",
    },
    openingHoursSpecification: OPENING_HOURS,
    sameAs: [INSTAGRAM_URL, IMMORTAL_GOOGLE_MAPS_URL],
  };
}
