import useReveal from "../hooks/useReveal";
import { whyChooseUs } from "../data/content";

export default function Highlights() {
  const ref = useReveal({ stagger: 0.1 });

  return (
    <section ref={ref} id="why-choose-us" className="relative overflow-hidden bg-surface py-16 md:py-24">
      {/* faint dashed circle accent, left edge */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 lg:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="49.5" stroke="var(--c-line)" strokeWidth="0.3" strokeDasharray="1.2 2" />
      </svg>

      <div className="container-site relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ════ Left: image only, single curved corner ════ */}
          <div className="relative" data-reveal>
            <div
              className="group relative h-[460px] w-full max-w-[420px] overflow-hidden shadow-lift md:h-[560px]"
              style={{ borderRadius: "0 220px 0 0" }}
            >
              <img
                src={whyChooseUs.image}
                alt="Binary Project 4"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* warm brand wash */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20 mix-blend-soft-light"
                style={{ backgroundImage: "linear-gradient(140deg, var(--c-brand), transparent 55%)" }}
              />
              {/* beige gradient dune, bottom-right */}
              <svg
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-[68%]"
                viewBox="0 0 260 150"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="duneBrand" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--c-brand-2)" />
                    <stop offset="100%" stopColor="var(--c-brand)" />
                  </linearGradient>
                </defs>
                <path d="M260 150 L0 150 C70 138 150 105 195 60 C220 35 245 12 260 0 Z" fill="url(#duneBrand)" opacity="0.92" />
              </svg>
            </div>

            {/* floating glass chip */}
            <div className="absolute -bottom-5 left-6 rounded-full border border-line bg-surface px-4 py-2 shadow-card">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">
                3.5 Acres · Sarjapur Road
              </span>
            </div>
          </div>

          {/* ════ Right: premium modern ════ */}
          <div className="flex flex-col">
            {/* eyebrow marker */}
            <div className="flex items-center gap-3" data-reveal>
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.26em] text-brand-ink">
                Why Choose Us
              </span>
              <span className="h-px w-12 bg-gradient-brand" />
            </div>

            {/* serif heading with italic gradient accent */}
            <h2
              className="mt-5 max-w-md font-display text-4xl font-semibold leading-[1.12] text-ink md:text-5xl"
              data-reveal
            >
              {whyChooseUs.titleLine1}
              <br />
              <span className="italic text-gradient">{whyChooseUs.titleLine2}</span>
            </h2>

            {/* points — refined rows with ghost serif numbers */}
            <div className="mt-12 flex flex-col">
              {whyChooseUs.points.map((p, i) => (
                <div
                  key={p.num}
                  data-reveal
                  className={`group flex items-start gap-7 py-7 transition-all duration-300 hover:translate-x-1.5 ${
                    i !== 0 ? "border-t border-line" : ""
                  }`}
                >
                  {/* ghost serif number with gradient tick */}
                  <div className="relative shrink-0">
                    <span className="font-display text-5xl font-semibold leading-none text-line transition-colors duration-500 group-hover:text-transparent group-hover:[background:var(--g-brand)] group-hover:[background-clip:text] group-hover:[-webkit-background-clip:text] md:text-6xl">
                      {p.num}
                    </span>
                    <span className="absolute -bottom-2 left-0.5 h-0.5 w-8 rounded-full bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <p className="max-w-sm pt-2 text-base leading-relaxed text-muted transition-colors duration-300 group-hover:text-ink">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}