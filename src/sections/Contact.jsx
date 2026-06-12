import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { siteInfo } from "../data/content";

export default function Contact() {
  const ref = useReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your CRM / email service here
    setSent(true);
  };

  return (
    <section ref={ref} id="contact" className="section">
      <div className="container-site">
        <div className="card grid overflow-hidden lg:grid-cols-2">
          {/* Left: gradient info panel */}
          <div className="relative bg-gradient-brand p-7 text-white md:p-9">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
              Book a Site Visit
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight">
              See Binary in person.
              <br />
              We'll handle the rest.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
              Share your details and our team will arrange a complimentary
              guided tour of the project, floor plans, and the launch offer for
              the first 50 flats.
            </p>

            <ul className="mt-7 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={13} /> {siteInfo.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} /> {siteInfo.email}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                {siteInfo.address}
              </li>
            </ul>

            <p className="mt-7 text-xs text-white/70">
              RERA No: {siteInfo.rera} · EOI fully refundable
            </p>
          </div>

          {/* Right: form */}
          <div className="p-7 md:p-9">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                <CheckCircle2 size={32} className="text-brand-ink" />
                <h3 className="font-heading text-xl font-semibold text-ink">
                  Request received
                </h3>
                <p className="max-w-xs text-sm text-muted">
                  Thank you — our team will call you within 24 hours to confirm
                  your site visit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                      Full Name
                    </span>
                    <input required className="field" placeholder="Your name" />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                      Phone
                    </span>
                    <input
                      required
                      type="tel"
                      className="field"
                      placeholder="+91 ..."
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                    Email
                  </span>
                  <input
                    type="email"
                    className="field"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                    Interested In
                  </span>
                  <select className="field" defaultValue="2 BHK">
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                    <option>Launch Offer — First 50 Flats</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                    Message (optional)
                  </span>
                  <textarea
                    rows="3"
                    className="field resize-none"
                    placeholder="Preferred date for the site visit, questions, ..."
                  />
                </label>
                <button type="submit" className="btn-primary mt-1 w-full">
                  Request a Call Back
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
