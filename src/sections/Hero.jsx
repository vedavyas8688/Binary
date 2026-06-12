import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, MapPin } from "lucide-react";
import { heroData } from "../data/content";

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-hero]", { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        "[data-hero]",
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.12, delay: 0.15 }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-gradient-soft pt-14">
      {/* soft ambient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--g-brand)" }}
      />

      <div className="container-site grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2">
        {/* Copy */}
        <div className="flex flex-col items-start gap-5">
          <span
            data-hero
            className="inline-flex items-center gap-1.5 rounded-full border border-line glass px-3 py-1.5 text-xs font-medium tracking-wide text-muted backdrop-blur"
          >
            <MapPin size={11} className="text-brand-ink" />
            {heroData.label}
          </span>

          <h1
            data-hero
            className="font-heading text-4xl font-bold leading-[1.08] md:text-5xl"
          >
            {heroData.title}
            <br />
            <span className="text-gradient">{heroData.titleAccent}</span>
          </h1>

          <p data-hero className="max-w-md text-base leading-relaxed text-muted">
            {heroData.subtitle}
          </p>

          <div data-hero className="flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              Book a Site Visit
              <ArrowRight size={13} strokeWidth={2.2} />
            </a>
            <a href="#floorplans" className="btn-ghost">
              View Floor Plans
            </a>
          </div>

          {/* Spec bar */}
          <div
            data-hero
            className="mt-2 grid w-full grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4"
          >
            {heroData.specs.map((s) => (
              <div key={s.label} className="bg-surface px-4 py-3">
                <p className="font-heading text-lg font-semibold text-ink">
                  {s.value}
                </p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div data-hero className="relative">
          <div className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src={heroData.image}
              alt="Binary Project 4 — exterior view"
              className="h-[340px] w-full object-cover md:h-[460px]"
              loading="eager"
            />
          </div>
          {/* floating chip */}
          <div className="absolute -bottom-4 left-5 rounded-xl border border-line bg-surface px-4 py-3 shadow-card">
            <p className="text-xs uppercase tracking-[0.12em] text-muted">
              Launch Offer
            </p>
            <p className="font-heading text-base font-semibold text-ink">
              First 50 flats ·{" "}
              <span className="text-gradient font-bold">{"\u20B9"}8,500/sq.ft</span>
            </p>
          </div>
        </div>
      </div>

      <div className="rule-gradient" />
    </section>
  );
}
