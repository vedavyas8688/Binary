import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import {
  amenitiesSection,
  amenitiesMain,
  amenitiesSide,
  amenitiesMore,
} from "../data/content";

function Card({ img, title, desc, big = false }) {
  return (
    <article className="group flex flex-col" data-reveal>
      <div className={`overflow-hidden ${big ? "aspect-[4/3]" : "aspect-[16/11]"}`}>
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <h3 className="mt-5 font-display text-2xl font-normal text-brand-ink md:text-[1.7rem]">
        {title}
      </h3>
      <p className="mt-2.5 max-w-md text-sm leading-relaxed text-muted">{desc}</p>
    </article>
  );
}

export default function Amenities() {
  const ref = useReveal({ stagger: 0.08 });
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      ref={ref}
      id="amenities"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "var(--c-brand-soft)" }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left column ── */}
          <div className="flex flex-col">
            {/* eyebrow */}
            <div className="mb-5 flex items-center gap-3" data-reveal>
              <span className="block h-px w-8 bg-brand/50" />
              <span className="font-heading text-2xs font-semibold uppercase tracking-[0.28em] text-brand-ink">
                {amenitiesSection.eyebrow}
              </span>
            </div>

            {/* heading */}
            <h2
              className="mb-10 font-display text-4xl font-normal leading-[1.18] text-ink md:text-[2.9rem]"
              data-reveal
            >
              {amenitiesSection.titleLine1Before}
              <span className="italic">{amenitiesSection.titleItalic}</span>
              <br />
              {amenitiesSection.titleLine2}
            </h2>

            <Card {...amenitiesMain} big />

            {/* flat tan button */}
            <Link
              to={amenitiesSection.cta.href}
              data-reveal
              className="mt-9 inline-flex w-fit items-center px-5 py-2.5 font-heading text-2xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:opacity-90"
              style={{ background: "var(--c-brand)" }}
            >
              {amenitiesSection.cta.label}
            </Link>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-12">
            {amenitiesSide.map((c) => (
              <Card key={c.title} {...c} />
            ))}
          </div>
        </div>

        {/* ── Load more grid ── */}
        {showMore && (
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 border-t border-brand/15 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            {amenitiesMore.map((c) => (
              <Card key={c.title} {...c} />
            ))}
          </div>
        )}

        {/* ── Toggle ── */}
        <div className="mt-14 flex items-center justify-center gap-4" data-reveal>
          <span className="h-px w-12 bg-brand/25" />
          <button
            onClick={() => setShowMore((v) => !v)}
            className="inline-flex items-center gap-2 border border-brand/30 bg-transparent px-6 py-2.5 font-heading text-2xs font-semibold uppercase tracking-[0.18em] text-brand-ink transition-colors duration-300 hover:bg-brand hover:text-white"
          >
            {showMore ? amenitiesSection.showLessLabel : amenitiesSection.loadMoreLabel}
            <ArrowRight
              size={13}
              className={`transition-transform duration-300 ${showMore ? "-rotate-90" : "rotate-90"}`}
            />
          </button>
          <span className="h-px w-12 bg-brand/25" />
        </div>
      </div>
    </section>
  );
}