import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { siteInfo, navLinks, footerSection } from "../data/content";

const SOCIALS = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ backgroundImage: "linear-gradient(135deg, var(--c-brand), var(--c-brand-2))" }}
    >
      {/* soft depth glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white opacity-[0.07] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-10 h-80 w-80 rounded-full opacity-[0.15] blur-3xl" style={{ background: "var(--c-brand-ink)" }} />

      {/* lg:pt-44 reserves room for the contact card hanging from above */}
      <div className="container-site relative pb-8 pt-14 lg:pt-44">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* brand + blurb */}
          <div className="lg:col-span-5">
            <p className="font-display text-4xl font-semibold tracking-wide md:text-5xl">
              {siteInfo.name}
              <span className="ml-3 align-middle font-heading text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                {siteInfo.tagline}
              </span>
            </p>
            <span className="mt-4 block h-px w-14 bg-white/60" />
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/85">
              RERA No: {siteInfo.rera} · EOI fully refundable
            </p>
          </div>

          {/* about us */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-base font-bold uppercase tracking-[0.16em]">
              {footerSection.about.title}
            </h4>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-white/85">
              {footerSection.about.text}
            </p>
          </div>

          {/* socials — solid white circles, brand icons */}
          <div className="flex items-start gap-3.5 lg:col-span-3 lg:justify-end">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-ink shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <Icon size={19} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        {/* nav row */}
        <nav className="mt-14 border-t border-white/30 pt-7">
          <ul className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="group relative font-heading text-sm font-semibold uppercase tracking-[0.18em] text-white/90 transition-colors hover:text-white"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* bottom line */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2.5 border-t border-white/30 pt-6 text-sm text-white/80 md:flex-row">
          <span>© {new Date().getFullYear()} {siteInfo.name} {siteInfo.tagline}. All rights reserved.</span>
          <span>Sarjapur Road · Bengaluru</span>
        </div>
      </div>
    </footer>
  );
}