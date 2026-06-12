import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { siteInfo, footerSection } from "../data/content";

const inputCls =
  "border border-brand/40 bg-white px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand";

export default function Contact() {
  const ref = useReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your CRM / email service here
    setSent(true);
  };

  return (
    <section ref={ref} className="relative bg-surface">
      <div className="container-site relative">

        {/* ════ Floating form card ════ */}
        <div
          id="contact"
          data-reveal
          className="relative z-20 mx-auto mt-14 w-full max-w-md bg-white p-8 shadow-[0_24px_60px_rgba(16,34,47,0.16)] lg:absolute lg:right-10 lg:top-14 lg:mx-0 lg:mt-0 xl:right-24"
        >
          {/* gradient accent on top edge */}
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />

          {sent ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 text-center">
              <CheckCircle2 size={34} className="text-brand-ink" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-[0.08em] text-ink">
                {footerSection.form.successTitle}
              </h3>
              <p className="max-w-[260px] text-base text-muted">{footerSection.form.successText}</p>
            </div>
          ) : (
            <>
              <h3 className="font-heading text-xl font-bold uppercase tracking-[0.12em] text-ink">
                {footerSection.form.title}
              </h3>
              <span className="mt-2.5 block h-0.5 w-10 rounded-full bg-gradient-brand" />

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <input required placeholder={footerSection.form.namePlaceholder} className={inputCls} />
                <input type="tel" required placeholder={footerSection.form.phonePlaceholder} className={inputCls} />
                <input type="email" placeholder={footerSection.form.emailPlaceholder} className={inputCls} />
                <select required defaultValue="" className={`${inputCls} px-3.5`}>
                  <option value="" disabled>{footerSection.form.interestLabel}</option>
                  {footerSection.form.interestOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <textarea rows="4" placeholder={footerSection.form.messagePlaceholder} className={`${inputCls} resize-none`} />
                <button
                  type="submit"
                  className="mt-1 w-full py-3.5 font-heading text-base font-semibold uppercase tracking-[0.16em] text-white shadow-card transition-all duration-300 hover:-translate-y-px hover:shadow-lift"
                  style={{ backgroundImage: "linear-gradient(120deg, var(--c-brand), var(--c-brand-2))" }}
                >
                  {footerSection.form.button}
                </button>
              </form>
            </>
          )}
        </div>

        {/* ════ White zone: Get In Touch ════ */}
        <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl" data-reveal>
              {footerSection.getInTouch.label}
            </h2>
            <span className="mt-4 block h-0.5 w-12 rounded-full bg-gradient-brand" data-reveal />
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted" data-reveal>
              {footerSection.getInTouch.paragraph}
            </p>

            <ul className="mt-10 space-y-6">
              <li data-reveal>
                <a href={`mailto:${siteInfo.email}`} className="group flex items-center gap-4 text-base text-muted transition-colors hover:text-brand-ink md:text-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand-ink transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-white">
                    <Mail size={17} />
                  </span>
                  {siteInfo.email}
                </a>
              </li>
              <li data-reveal>
                <a href={`tel:${siteInfo.phone.replace(/\s/g, "")}`} className="group flex items-center gap-4 text-base text-muted transition-colors hover:text-brand-ink md:text-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand-ink transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-white">
                    <Phone size={17} />
                  </span>
                  {siteInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-4 text-base text-muted md:text-lg" data-reveal>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
                  <MapPin size={17} />
                </span>
                {siteInfo.address}
              </li>
            </ul>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}