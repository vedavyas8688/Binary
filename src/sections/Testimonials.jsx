import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MessageSquareQuote, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import { testimonials, testimonialsSection } from "../data/content";

const ROTATE_MS = 5000; // pair auto-rotate; set to 0 to disable

function TCard({ t }) {
  return (
    <figure className="relative rounded-xl bg-white px-7 pb-8 pt-10 text-center shadow-[0_18px_45px_rgba(16,34,47,0.12)]">
      {/* speech-bubble icon overlapping the top edge */}
      <span
        className="absolute -top-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-lg text-white shadow-card"
        style={{ backgroundImage: "linear-gradient(120deg, var(--c-brand), var(--c-brand-2))" }}
      >
        <MessageSquareQuote size={18} />
      </span>

      <blockquote className="text-base leading-relaxed text-muted">
        {t.quote}
      </blockquote>

      <img
        src={t.image}
        alt={t.name}
        loading="lazy"
        className="mx-auto mt-6 h-14 w-14 rounded-full object-cover"
      />
      <figcaption className="mt-3">
        <p className="font-heading text-sm font-bold uppercase tracking-[0.08em] text-ink">
          {t.name}
        </p>
        <p className="mt-1 text-sm font-medium text-brand-ink">{t.role}</p>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const ref = useReveal();
  const pairRef = useRef(null);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const pages = Math.ceil(testimonials.length / 2);
  const pair = [testimonials[page * 2], testimonials[page * 2 + 1]].filter(Boolean);

  useEffect(() => {
    if (!ROTATE_MS || paused || pages < 2) return;
    const id = setInterval(() => {
      const el = pairRef.current;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const next = (page + 1) % pages;
      if (!el || reduce) { setPage(next); return; }
      gsap.to(el, {
        opacity: 0, y: 16, duration: 0.35, ease: "power2.in",
        onComplete: () => {
          setPage(next);
          gsap.fromTo(el, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" });
        },
      });
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [page, paused, pages]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-surface py-14 md:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Big rounded brand panel, bleeding off the left edge ── */}
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-6 top-6 w-[58%] rounded-r-[5rem] md:rounded-r-[6.5rem]"
        style={{ backgroundImage: "linear-gradient(135deg, var(--c-brand), var(--c-brand-2))" }}
      />

      <div className="container-site relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">

          {/* ── Cards over the panel ── */}
          <div ref={pairRef} className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 lg:col-span-7" data-reveal>
            {pair.map((t) => (
              <TCard key={t.name} t={t} />
            ))}
          </div>

          {/* ── Right copy ── */}
          <div className="lg:col-span-5 lg:pl-6">
            <h2
              className="font-heading text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl"
              data-reveal
            >
              {testimonialsSection.heading}
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-muted" data-reveal>
              {testimonialsSection.paragraph}
            </p>

            {/* plus-in-square CTA */}
            <Link
              to={testimonialsSection.cta.href}
              className="group mt-8 inline-flex items-center gap-4"
              data-reveal
            >
              <span className="flex h-10 w-10 items-center justify-center border-2 border-brand text-brand-ink transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                <Plus size={16} strokeWidth={2.5} />
              </span>
              <span className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-colors duration-300 group-hover:text-brand-ink">
                {testimonialsSection.cta.label}
              </span>
            </Link>

            {/* pair dots */}
            {pages > 1 && (
              <div className="mt-8 flex items-center gap-2" data-reveal>
                {Array.from({ length: pages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`Show reviews ${i + 1}`}
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: i === page ? "2rem" : "0.5rem",
                      background: i === page ? "var(--g-brand)" : "var(--c-line)",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}