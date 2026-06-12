import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { milestones } from "../data/content";

export default function Milestones() {
  const ref = useReveal({ stagger: 0.12 });

  return (
    <section ref={ref} className="section bg-surface">
      <div className="container-site grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            num="03"
            label="Achievements"
            title="Milestones on the road to launch"
            desc="From land acquisition to RERA registration — every phase delivered as planned."
          />
        </div>

        <div className="relative lg:col-span-3">
          <div aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />
          <ol className="space-y-9">
            {milestones.map((m) => (
              <li key={m.title} data-reveal className="relative pl-9">
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-surface bg-gradient-brand shadow-card" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink">{m.year}</span>
                <h3 className="mt-1 font-heading text-xl font-semibold text-ink">{m.title}</h3>
                <p className="mt-1.5 max-w-xl text-base leading-relaxed text-muted">{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
