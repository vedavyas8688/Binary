import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Building2 } from "lucide-react";
import { navLinks, siteInfo, navbarPartner } from "../data/content";

// dark forest green to match the hero, with a subtle gradient for depth
const NAV_BG = "linear-gradient(180deg, #2f3d2f 0%, #253225 100%)";
const HAIRLINE = "color-mix(in srgb, var(--c-brand-2) 35%, transparent)";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundImage: NAV_BG,
        borderBottom: `1px solid color-mix(in srgb, var(--c-brand-2) 18%, transparent)`,
      }}
    >
      <div className="container-site flex h-20 items-center justify-between gap-8">

        {/* ── Logo (left) ── */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-lg font-display text-lg font-bold text-white"
            style={{ backgroundImage: "linear-gradient(120deg, var(--c-brand), var(--c-brand-2))" }}
          >
            B
          </span>
          <div className="leading-tight">
            <span
              className="block font-display text-xl font-bold tracking-wide"
              style={{ color: "var(--c-brand-2)" }}
            >
              {siteInfo.name}
            </span>
            <span
              className="block font-heading text-[9px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "color-mix(in srgb, var(--c-brand-2) 60%, transparent)" }}
            >
              {siteInfo.tagline}
            </span>
          </div>
        </Link>

        {/* ── Center links ── */}
        <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className="relative font-heading text-base font-medium transition-colors"
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--c-brand-2)"
                    : "color-mix(in srgb, var(--c-brand-2) 80%, white 20%)",
                })}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 h-px w-full"
                        style={{ background: "var(--c-brand-2)" }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Right: phone + divider + partner block ── */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
            className="group flex items-center gap-3"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 group-hover:bg-[var(--c-brand-2)] group-hover:text-[var(--c-brand-ink)]"
              style={{
                borderColor: "var(--c-brand-2)",
                color: "var(--c-brand-2)",
              }}
            >
              <Phone size={15} />
            </span>
            <span
              className="font-display text-lg font-bold tracking-wide"
              style={{ color: "var(--c-brand-2)" }}
            >
              {siteInfo.phone}
            </span>
          </a>

          {/* vertical divider */}
          <span className="h-12 w-px" style={{ background: HAIRLINE }} />

          {/* partner / project mark */}
          <Link to="/about" className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-md"
              style={{
                background: "color-mix(in srgb, var(--c-brand-2) 12%, transparent)",
                border: `1px solid color-mix(in srgb, var(--c-brand-2) 30%, transparent)`,
              }}
            >
              <Building2 size={18} style={{ color: "var(--c-brand-2)" }} />
            </span>
            <div className="leading-tight">
              <p
                className="font-display text-sm font-bold uppercase tracking-[0.08em]"
                style={{ color: "var(--c-brand-2)" }}
              >
                {navbarPartner.name}
                <br />
                {navbarPartner.subtitle}
              </p>
              <p
                className="mt-0.5 font-heading text-[8px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "color-mix(in srgb, var(--c-brand-2) 55%, transparent)" }}
              >
                {navbarPartner.trustLine}
              </p>
            </div>
          </Link>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{
            borderColor: "color-mix(in srgb, var(--c-brand-2) 40%, transparent)",
            color: "var(--c-brand-2)",
          }}
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div
          className="border-t lg:hidden"
          style={{
            backgroundImage: NAV_BG,
            borderColor: HAIRLINE,
          }}
        >
          <ul className="container-site flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-heading text-base font-medium"
                  style={{ color: "color-mix(in srgb, var(--c-brand-2) 85%, white 15%)" }}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li className="mt-2 border-t pt-4" style={{ borderColor: HAIRLINE }}>
              <a
                href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3"
              >
                <Phone size={15} style={{ color: "var(--c-brand-2)" }} />
                <span
                  className="font-display text-lg font-bold"
                  style={{ color: "var(--c-brand-2)" }}
                >
                  {siteInfo.phone}
                </span>
              </a>
            </li>

            <li className="pb-2 pt-3">
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full px-6 py-2.5 text-center font-heading text-sm font-semibold uppercase tracking-[0.14em] text-white"
                style={{ backgroundImage: "linear-gradient(120deg, var(--c-brand), var(--c-brand-2))" }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}