import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { masterPlan } from "../data/content";

export default function MasterPlan() {
  const ref = useReveal();

  return (
    <section ref={ref} id="masterplan" className="section">
      <div className="container-site">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <SectionHeading label={masterPlan.label} title={masterPlan.title} />
          <p className="section-desc lg:pb-1" data-reveal>
            {masterPlan.description}
          </p>
        </div>

        <div className="relative mt-8" data-reveal>
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={masterPlan.image}
              alt="Binary Project 4 master plan"
              className="h-[280px] w-full object-cover md:h-[420px]"
              loading="lazy"
            />
          </div>

          {/* Feature strip */}
          <div className="relative z-10 mx-4 -mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line shadow-lift sm:grid-cols-4 md:mx-10">
            {masterPlan.features.map((f) => (
              <div key={f.label} className="bg-surface px-4 py-3.5 text-center">
                <p className="font-heading text-lg font-semibold text-gradient">
                  {f.value}
                </p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-muted">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
