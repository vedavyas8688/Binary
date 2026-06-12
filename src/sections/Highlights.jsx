import { TrainFront, Building2, Trees, TrendingUp } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { highlights } from "../data/content";

const ICONS = { TrainFront, Building2, Trees, TrendingUp };

export default function Highlights() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section">
      <div className="container-site">
        <SectionHeading
          label="Why Binary"
          title="What sets this project apart"
          desc="A rare combination of location, low density, and open space on Sarjapur Road's growth corridor."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => {
            const Icon = ICONS[h.icon] ?? Building2;
            return (
              <article
                key={h.title}
                data-reveal
                className="card group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand-ink transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-white">
                  <Icon size={16} strokeWidth={2} />
                </span>
                <h3 className="mt-3.5 font-heading text-base font-semibold text-ink">
                  {h.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {h.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
