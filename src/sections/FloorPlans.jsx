import useReveal from "../hooks/useReveal";
import { floorPlansSection, floorPlansCards } from "../data/content";

export default function FloorPlans() {
  const ref = useReveal({ stagger: 0.12 });

  return (
    <section ref={ref} id="floorplans" className="bg-surface py-16 md:py-24">
      <div className="container-site">

        {/* ── Section header ── */}
        <div className="mb-14 grid grid-cols-1 items-end gap-6 md:mb-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mb-5 flex items-center gap-3" data-reveal>
              <span className="block h-px w-8 bg-gradient-brand" />
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.26em] text-brand-ink">
                {floorPlansSection.eyebrow}
              </span>
            </div>
            <h2
              className="font-display text-4xl font-semibold leading-[1.1] text-ink md:text-5xl"
              data-reveal
            >
              {floorPlansSection.heading}{" "}
              <span className="italic text-gradient">{floorPlansSection.headingItalic}</span>
            </h2>
          </div>
          <p
            className="max-w-md text-base leading-relaxed text-muted lg:justify-self-end lg:pb-2"
            data-reveal
          >
            {floorPlansSection.description}
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid gap-x-14 gap-y-20 md:grid-cols-2">
          {floorPlansCards.map((p) => (
            <article key={p.title} data-reveal className="group">

              {/* Image — tall, sharp corners */}
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] md:h-[560px]"
                />
              </div>

              {/* Card — overlaps the image bottom, premium interior */}
              <div className="relative z-10 -mt-28 ml-10 bg-white px-7 pt-8 shadow-[0_22px_50px_rgba(16,34,47,0.10)] transition-shadow duration-300 group-hover:shadow-[0_26px_60px_rgba(16,34,47,0.16)] md:-mt-32 md:ml-14 md:px-9 md:pt-9">

                {/* eyebrow with tick */}
                {/* <div className="flex items-center gap-2.5">
                  <span className="h-px w-5 bg-gradient-brand" />
                  <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-ink">
                    {p.eyebrow}
                  </p>
                </div> */}

                {/* serif title */}
                <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                  {p.title}
                </h3>

                {/* price line */}
                <p className="mt-2 font-display text-xl font-semibold text-gradient md:text-2xl">
                  {p.price}{" "}
                  <span className="font-heading text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    {p.priceNote}
                  </span>
                </p>

                {/* spec chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.specs.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line bg-brand-soft/40 px-3 py-1 font-heading text-xs font-medium text-brand-ink"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* short description */}
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>

                {/* animated link */}
                <a
                  href={p.href}
                  className="group/link mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-semibold uppercase tracking-[0.12em] text-brand-ink"
                >
                  <span className="relative">
                    {floorPlansSection.viewMoreLabel}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-brand transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </a>

                {/* gradient accent line at the bottom edge */}
                <div className="mt-6 h-[3px] w-full bg-gradient-brand" />
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}