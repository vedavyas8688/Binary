import {
  TrainFront,
  Briefcase,
  Building2,
  Cpu,
  School,
  HeartPulse,
} from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { locationAdvantage } from "../data/content";

const ICONS = { TrainFront, Briefcase, Building2, Cpu, School, HeartPulse };

export default function Location() {
  const ref = useReveal({ stagger: 0.08 });

  return (
    <section ref={ref} id="location" className="section">
      <div className="container-site grid items-center gap-12 lg:grid-cols-5">
        {/* Image */}
        <div className="relative lg:col-span-2" data-reveal>
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={locationAdvantage.image}
              alt="Sarjapur Road, Bengaluru"
              loading="lazy"
              className="h-[300px] w-full object-cover md:h-[460px]"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-xl border border-line bg-surface px-5 py-3.5 shadow-lift">
            <p className="text-xs uppercase tracking-[0.12em] text-muted">
              Road Access
            </p>
            <p className="font-heading text-lg font-semibold text-gradient">
              100ft / 80ft wide roads
            </p>
          </div>
        </div>

        {/* Copy + points */}
        <div className="lg:col-span-3">
          <SectionHeading
            label={locationAdvantage.label}
            title={locationAdvantage.title}
            desc={locationAdvantage.description}
          />

          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {locationAdvantage.points.map((p) => {
              const Icon = ICONS[p.icon] ?? Building2;
              return (
                <div key={p.title} data-reveal className="flex gap-3.5">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-ink">
                    <Icon size={17} strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-muted">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
