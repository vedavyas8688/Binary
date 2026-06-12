import { Target, Eye, ShieldCheck, Ruler, Clock, HeartHandshake } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { missionVision } from "../data/content";

const ICONS = { ShieldCheck, Ruler, Clock, HeartHandshake };

export default function MissionVision() {
  const ref = useReveal({ stagger: 0.08 });

  return (
    <section ref={ref} className="section bg-gradient-soft">
      <div className="container-site">
        <div className="mb-8 flex items-center gap-3" data-reveal>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-brand-ink">04</span>
          <span className="h-px w-10 bg-gradient-brand" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted">Mission & Vision</span>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Mission */}
          <div data-reveal className="relative overflow-hidden rounded-2xl bg-gradient-brand p-8 text-white md:p-10">
            <Target size={22} className="text-white/80" />
            <h2 className="mt-4 font-display text-3xl font-semibold">{missionVision.mission.title}</h2>
            <p className="mt-3 max-w-md text-lg leading-relaxed text-white/90">{missionVision.mission.desc}</p>
          </div>
          {/* Vision */}
          <div data-reveal className="card relative overflow-hidden p-8 md:p-10">
            <Eye size={22} className="text-brand-ink" />
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink">{missionVision.vision.title}</h2>
            <p className="mt-3 max-w-md text-lg leading-relaxed text-muted">{missionVision.vision.desc}</p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {missionVision.values.map((v) => {
            const Icon = ICONS[v.icon] ?? ShieldCheck;
            return (
              <div key={v.title} data-reveal className="rounded-xl border border-line bg-surface/70 p-5 backdrop-blur">
                <Icon size={17} className="text-brand-ink" />
                <h3 className="mt-3 font-heading text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-muted">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
