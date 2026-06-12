import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteInfo, navLinks, footerServices } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-site grid gap-10 py-12 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-brand font-heading text-sm font-bold text-white">
              B
            </span>
            <span className="font-heading text-lg font-bold text-ink">
              Binary
              <span className="ml-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {siteInfo.tagline}
              </span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Ultra-luxury 2 & 3 BHK residences at Chambenahalli, Sarjapur Road —
            3.5 acres, 80%+ open space, only 6 homes per floor.
          </p>
          <p className="mt-4 text-xs text-muted">
            RERA No: <span className="font-medium text-ink">{siteInfo.rera}</span>
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-2">
          <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Explore
          </h4>
          <ul className="mt-3.5 space-y-2">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="text-sm text-muted transition-colors hover:text-brand-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-2">
          <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Services
          </h4>
          <ul className="mt-3.5 space-y-2">
            {footerServices.map((s) => (
              <li key={s} className="text-sm text-muted">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Contact
          </h4>
          <ul className="mt-3.5 space-y-2.5">
            <li className="flex items-start gap-2 text-sm text-muted">
              <MapPin size={13} className="mt-0.5 shrink-0 text-brand-ink" />
              {siteInfo.address}
            </li>
            <li>
              <a
                href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-brand-ink"
              >
                <Phone size={13} className="shrink-0 text-brand-ink" />
                {siteInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteInfo.email}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-brand-ink"
              >
                <Mail size={13} className="shrink-0 text-brand-ink" />
                {siteInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="rule-gradient" />
      <div className="container-site flex flex-col items-center justify-between gap-2 py-4 text-xs text-muted md:flex-row">
        <span>
          © {new Date().getFullYear()} {siteInfo.name} {siteInfo.tagline}. All
          rights reserved.
        </span>
        <span>Sarjapur Road · Bengaluru</span>
      </div>
    </footer>
  );
}
