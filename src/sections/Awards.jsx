import { Trophy, Medal, Award, Star } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { awards } from "../data/content";

const ICONS = { Trophy, Medal, Award, Star };

export default function Awards() {
  const ref = useReveal({ stagger: 0.08 });

  return (
    <section ref={ref} className="section bg-surface">
      <div className="container-site">
        <SectionHeading num="05" label={awards.label} title={awards.title} desc={awards.desc} align="center" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {awards.items.map((a) => {
            const Icon = ICONS[a.icon] ?? Trophy;
            return (
              <div key={a.title} data-reveal className="relative overflow-hidden rounded-xl border border-line bg-bg p-6 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-white shadow-card">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{a.title}</h3>
                <p className="mt-1 text-sm text-muted">{a.meta}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
