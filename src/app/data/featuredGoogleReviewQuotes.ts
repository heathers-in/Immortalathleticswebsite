import alexPhoto from "../../assets/reviewers/alex.png";
import danPhoto from "../../assets/reviewers/dan.png";
import laylaPhoto from "../../assets/reviewers/layla.png";

export type FeaturedGoogleReviewQuote = {
  author: string;
  text: string;
  relativeTime?: string;
  rating?: number;
  /** Bundled avatar for the reviewer card */
  authorPhotoSrc?: string;
};

/** Editorial highlights shown in the reviews panel; aggregate stats still come from Google. */
export const FEATURED_GOOGLE_REVIEW_QUOTES: FeaturedGoogleReviewQuote[] = [
  {
    author: "Alex",
    rating: 5,
    authorPhotoSrc: alexPhoto,
    text: "Love training at Immortal Athletics, definitely the best place for weightlifting in Hertfordshire! The sessions always have a great atmosphere - focused but incredibly supportive and fun, with top level coaching and lovely club members :) Sai really knows how to get the best out of all of his lifters, whether you're just lifting for fun or want to compete at a high level.",
  },
  {
    author: "Layla",
    rating: 5,
    authorPhotoSrc: laylaPhoto,
    text: "Sai is a fantastic coach who can somehow see what you're doing even when he is facing the opposite direction. He is patient, extremely knowledgeable and has given me so much confidence in my lifting. Great gym, great people, excellent coach.",
  },
  {
    author: "Dan",
    rating: 5,
    authorPhotoSrc: danPhoto,
    text: "Fantastic session with Sai at Immortal when I was training for English Masters - great facility, fantastic knowledge as a coach, and a great range of equipment!",
  },
];
