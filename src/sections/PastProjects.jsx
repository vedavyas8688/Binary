import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { pastProjects } from "../data/content";

export default function PastProjects() {
  const ref = useReveal({ stagger: 0.1 });

  return (
    <section ref={ref} className="section">
      <div className="container-site">
        <SectionHeading num="05" label={pastProjects.label} title={pastProjects.title} desc={pastProjects.desc} />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pastProjects.projects.map((p) => (
            <article key={p.name} data-reveal className="group relative h-80 overflow-hidden rounded-2xl">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="caption-fade absolute inset-x-0 bottom-0 px-6 pb-6 pt-20">
                <span className="inline-block rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-brand-ink">
                  {p.status}
                </span>
                <h3 className="mt-2.5 font-heading text-2xl font-semibold text-white">{p.name}</h3>
                <p className="text-sm uppercase tracking-[0.12em] text-white/75">{p.type}</p>
                <p className="mt-2 text-base leading-relaxed text-white/85">{p.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
