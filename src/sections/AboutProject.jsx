import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { aboutProject } from "../data/content";

export default function AboutProject() {
  const ref = useReveal();

  return (
    <section ref={ref} id="about" className="section">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        {/* Images */}
        <div className="relative" data-reveal>
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={aboutProject.image1}
              alt="Binary residences — exterior"
              className="h-[320px] w-full object-cover md:h-[400px]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden w-44 overflow-hidden rounded-xl border-4 border-bg shadow-lift sm:block md:-right-6">
            <img
              src={aboutProject.image2}
              alt="Binary residences — interior"
              className="h-32 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-5">
          <SectionHeading label={aboutProject.label} title={aboutProject.title} />
          <p className="section-desc" data-reveal>
            {aboutProject.description1}
          </p>
          <p className="section-desc" data-reveal>
            {aboutProject.description2}
          </p>

          <div className="mt-1 grid grid-cols-2 gap-4 sm:grid-cols-4" data-reveal>
            {aboutProject.specs.map((s) => (
              <div key={s.label} className="border-l-2 border-brand pl-3">
                <p className="font-heading text-lg font-semibold text-ink">
                  {s.value}
                </p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.1em] text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
