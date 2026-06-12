import { Check } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { serviceDetails } from "../data/content";

export default function ServiceDetails() {
  const ref = useReveal({ stagger: 0.08 });

  return (
    <section ref={ref} className="section bg-surface">
      <div className="container-site">
        <div className="mb-8 flex items-center gap-3" data-reveal>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-brand-ink">02</span>
          <span className="h-px w-10 bg-gradient-brand" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted">What We Offer</span>
        </div>
        <div className="space-y-16 md:space-y-20">
        {serviceDetails.map((d, i) => (
          <div
            key={d.title}
            className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="overflow-hidden rounded-2xl shadow-card" data-reveal>
              <img src={d.image} alt={d.title} loading="lazy" className="h-[300px] w-full object-cover md:h-[400px]" />
            </div>
            <div data-reveal>
              <h3 className="font-display text-3xl font-semibold leading-snug text-ink md:text-4xl">{d.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-muted">{d.desc}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {d.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 rounded-lg border border-line bg-bg px-3.5 py-2.5 text-base text-ink">
                    <Check size={14} strokeWidth={2.5} className="shrink-0 text-brand-ink" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
