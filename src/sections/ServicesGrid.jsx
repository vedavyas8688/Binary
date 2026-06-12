import { Building2, Home, Store, LandPlot, Sofa, KeyRound, ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { servicesGrid } from "../data/content";

const ICONS = { Building2, Home, Store, LandPlot, Sofa, KeyRound };

export default function ServicesGrid() {
  const ref = useReveal({ stagger: 0.07 });

  return (
    <section ref={ref} className="section">
      <div className="container-site">
        <SectionHeading num="01" label={servicesGrid.label} title={servicesGrid.title} desc={servicesGrid.desc} />

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {servicesGrid.items.map((s) => {
            const Icon = ICONS[s.icon] ?? Building2;
            return (
              <article key={s.title} data-reveal className="group relative bg-surface p-7 transition-colors duration-300 hover:bg-brand-soft/50 md:p-8">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-ink transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-white">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <ArrowUpRight size={16} className="text-line transition-colors duration-300 group-hover:text-brand-ink" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
