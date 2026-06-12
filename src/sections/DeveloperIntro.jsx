import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { developer } from "../data/content";

export default function DeveloperIntro() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading num="01" label={developer.label} title={developer.title} />
          <p className="section-desc mt-5" data-reveal>{developer.description1}</p>
          <p className="section-desc mt-4" data-reveal>{developer.description2}</p>
        </div>

        <div className="relative" data-reveal>
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={developer.image}
              alt="Binary Real Estate"
              loading="lazy"
              className="h-[320px] w-full object-cover md:h-[420px]"
            />
          </div>
          <div className="relative z-10 mx-5 -mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line shadow-lift md:mx-8">
            {developer.facts.map((f) => (
              <div key={f.label} className="bg-surface px-4 py-3.5">
                <p className="text-xs uppercase tracking-[0.12em] text-muted">{f.label}</p>
                <p className="mt-0.5 font-heading text-base font-semibold text-ink">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
