import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteInfo } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass backdrop-blur-md border-b border-line shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="container-site flex h-14 items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-brand font-heading text-sm font-bold text-white">
            B
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-ink">
            Binary
            <span className="ml-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted">
              {siteInfo.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-heading text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-brand-ink" : "text-ink hover:text-brand-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary !px-4 !py-2">
            <Phone size={13} strokeWidth={2.2} />
            Enquire Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-surface md:hidden">
          <ul className="container-site flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2.5 font-heading text-base font-medium ${
                      isActive ? "text-brand-ink" : "text-ink"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                <Phone size={13} strokeWidth={2.2} />
                Enquire Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
