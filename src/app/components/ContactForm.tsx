import { useCallback, useState, type FormEvent } from "react";
import { Link } from "react-router";
import { contactApiUrl } from "../lib/contactApiUrl";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const resetForNewMessage = useCallback(() => {
    setStatus("idle");
    setErrorMessage("");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setHoneypot("");
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(contactApiUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          company: honeypot,
        }),
      });

      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
        code?: string;
        ok?: boolean;
      };

      if (!res.ok) {
        if (json.code === "NOT_CONFIGURED" || res.status === 503) {
          setErrorMessage(
            json.error ||
              "This form is not fully set up yet. Please email info@immortalathletics.co.uk and we will get back to you.",
          );
        } else if (res.status === 429) {
          setErrorMessage(json.error || "Too many attempts. Please wait before trying again.");
        } else {
          setErrorMessage(json.error || "Something went wrong. Please try again or email us directly.");
        }
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Network error. Check your connection or email info@immortalathletics.co.uk directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-6" role="status" aria-live="polite">
        <p className="text-lg text-white/90 leading-relaxed">
          Thank you — your message has been sent. We will get back to you as soon as we can.
        </p>
        <button
          type="button"
          onClick={resetForNewMessage}
          className="border border-white/30 text-white px-8 py-3 text-sm uppercase tracking-wide hover:border-[#E74C3C] hover:text-[#E74C3C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-white/75 mb-6 leading-relaxed">
        Read our{" "}
        <Link
          to="/privacy"
          className="text-[#E74C3C] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E74C3C] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm underline-offset-2 hover:underline"
        >
          Privacy Policy
        </Link>{" "}
        for how we use personal data when you send a message through this form.
      </p>

      <form className="space-y-6 relative" onSubmit={onSubmit} noValidate>
        <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
          <label htmlFor="contact-company">Company (leave blank)</label>
          <input
            type="text"
            id="contact-company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="contact-name" className="block mb-2 uppercase tracking-wide text-sm">
            Name
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#E74C3C] focus-visible:ring-2 focus-visible:ring-[#E74C3C] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            required
            maxLength={120}
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block mb-2 uppercase tracking-wide text-sm">
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#E74C3C] focus-visible:ring-2 focus-visible:ring-[#E74C3C] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            required
            maxLength={254}
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block mb-2 uppercase tracking-wide text-sm">
            Phone
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#E74C3C] focus-visible:ring-2 focus-visible:ring-[#E74C3C] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            maxLength={40}
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block mb-2 uppercase tracking-wide text-sm">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#E74C3C] focus-visible:ring-2 focus-visible:ring-[#E74C3C] focus-visible:ring-offset-2 focus-visible:ring-offset-black resize-none"
            required
            maxLength={4000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={status === "submitting"}
          />
        </div>

        {status === "error" ? (
          <p className="text-sm text-[#E74C3C]" role="alert">
            {errorMessage}{" "}
            <a href="mailto:info@immortalathletics.co.uk" className="underline hover:text-white">
              info@immortalathletics.co.uk
            </a>
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#E74C3C] text-white px-8 py-4 uppercase tracking-wide hover:bg-[#C0392B] transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E74C3C]"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </button>
      </form>
    </div>
  );
}
