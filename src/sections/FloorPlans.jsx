import { Check, ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { floorPlans } from "../data/content";

export default function FloorPlans() {
  const ref = useReveal();

  return (
    <section ref={ref} id="floorplans" className="section bg-surface">
      <div className="container-site">
        <SectionHeading
          label="Floor Plans & Pricing"
          title="Find the home that fits"
          desc="Transparent pricing, generous layouts, and a refundable EOI to reserve your unit."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {floorPlans.map((p) => (
            <article
              key={p.type}
              data-reveal
              className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.type} — Binary Project 4`}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-gradient-brand px-2.5 py-1 text-xs font-medium tracking-wide text-white">
                  {p.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    {p.type}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.1em] text-muted">
                    {p.area}
                  </span>
                </div>
                <p className="mt-1 font-heading text-lg font-bold text-gradient">
                  {p.price}
                </p>

                <ul className="mt-4 space-y-2 border-t border-line pt-4">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted">
                      <Check size={12} strokeWidth={2.5} className="shrink-0 text-brand-ink" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="btn-ghost mt-5 w-full">
                  Request Details
                  <ArrowRight size={12} strokeWidth={2.2} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
