import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, MapPin } from "lucide-react";
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
  style={{ backgroundImage: "linear-gradient(135deg, #1c3d2a 0%, #0e2b1c 45%, #1a4a35 80%, #0d3020 100%)" }}
>
      {/* gradient hairline along the top edge */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.55), transparent)" }}
      />

      {/* depth glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white opacity-[0.08] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 right-6 h-72 w-72 rounded-full opacity-[0.18] blur-3xl" style={{ background: "var(--c-brand-ink)" }} />

      {/* faint texture for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* lg:pt-44 reserves room for the contact card hanging from above */}
      <div className="container-site relative pb-5 pt-10 lg:pt-44">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

          {/* ── Brand block ── */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              {/* mini brand glyph */}
              <span
                className="flex h-12 w-12 items-center justify-center rounded-lg font-display text-xl font-bold"
                style={{
                  background: "rgba(255,255,255,0.16)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  color: "#fff",
                  backdropFilter: "blur(8px)",
                }}
              >
                B
              </span>
              <p className="font-display text-4xl font-semibold leading-none tracking-wide md:text-5xl">
                {siteInfo.name}
                <span className="ml-2.5 align-middle font-heading text-xs font-medium uppercase tracking-[0.22em] text-white/80">
                  {siteInfo.tagline}
                </span>
              </p>
            </div>

            <span
              className="mt-4 block h-0.5 w-14 rounded-full"
              style={{ background: "linear-gradient(to right, #fff, rgba(255,255,255,0.3))" }}
            />

            <p className="mt-3.5 max-w-sm text-sm leading-relaxed text-white/85">
              RERA No:{" "}
              <span className="font-semibold text-white">{siteInfo.rera}</span>{" "}
              · EOI fully refundable
            </p>
          </div>

          {/* ── About ── */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-white/70" />
              <h4 className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-white">
                {footerSection.about.title}
              </h4>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
              {footerSection.about.text}
            </p>
          </div>

          {/* ── Socials ── */}
          <div className="flex items-start gap-3 lg:col-span-3 lg:justify-end">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-ink shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                {/* gradient swap on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(120deg, var(--c-brand-ink), var(--c-brand))",
                  }}
                />
                <Icon size={17} strokeWidth={2} className="relative z-10 transition-colors duration-300 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Nav row ── */}
        <nav className="mt-9 border-t border-white/25 pt-5">
          <ul className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="group relative font-heading text-xs font-semibold uppercase tracking-[0.22em] text-white/90 transition-colors hover:text-white"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Bottom line ── */}
        <div className="mt-5 flex flex-col items-start justify-between gap-2 border-t border-white/25 pt-4 text-xs text-white/80 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {siteInfo.name} {siteInfo.tagline}. All rights reserved.</span>
          <span className="inline-flex items-center gap-1.5 font-heading font-medium tracking-wide">
            <MapPin size={11} className="text-white/80" />
            Sarjapur Road · Bengaluru
          </span>
        </div>
      </div>
    </footer>
  );
}