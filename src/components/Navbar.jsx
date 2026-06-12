import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks, siteInfo } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <nav className="container-site flex h-20 items-center justify-between">
        {/* Logo — left */}
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand font-heading text-base font-bold text-white">
            B
          </span>
          <span className="font-heading text-xl font-bold tracking-tight text-white">
            {siteInfo.name}
          </span>
        </Link>

        {/* Links — center */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-heading text-base font-medium transition-colors ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* White pill CTA — right */}
        <a
          href="/#contact"
          className="hidden rounded-full bg-white px-6 py-2.5 font-heading text-base font-semibold text-ink transition-transform hover:-translate-y-px md:block"
        >
          Contact Us
        </a>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#0d0d0d] md:hidden">
          <ul className="container-site flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-heading text-base font-medium text-white/85"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2 pb-2">
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-white px-6 py-2.5 text-center font-heading text-base font-semibold text-ink"
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