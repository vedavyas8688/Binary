import { Landmark } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { partners } from "../data/content";

export default function Partners() {
  const ref = useReveal({ stagger: 0.05 });

  return (
    <section ref={ref} className="section bg-surface">
      <div className="container-site">
        <SectionHeading num="06" label={partners.label} title={partners.title} desc={partners.desc} align="center" />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.names.map((n) => (
            <div
              key={n}
              data-reveal
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-line bg-bg px-4 py-6 grayscale transition-all duration-300 hover:grayscale-0 hover:shadow-card"
            >
              <Landmark size={18} className="text-brand-ink" />
              <span className="text-center font-heading text-base font-semibold text-ink">{n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
