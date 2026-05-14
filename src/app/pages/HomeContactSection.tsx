import { ContactForm } from "../components/ContactForm";
import { GoogleVenueMap } from "../components/GoogleVenueMap";

export function HomeContactSection() {
  return (
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
  );
}
