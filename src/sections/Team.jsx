import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { team } from "../data/content";

export default function Team() {
  const ref = useReveal({ stagger: 0.08 });

  return (
    <section ref={ref} className="section">
      <div className="container-site">
        <SectionHeading
          num="02"
          label="Our Team"
          title="The people behind the project"
          desc="A single in-house team across design, engineering, and customer relations — accountable end to end."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article key={m.role} data-reveal className="group text-center">
              <div className="relative mx-auto overflow-hidden rounded-2xl">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="caption-fade absolute inset-x-0 bottom-0 px-4 pb-4 pt-12 text-left">
                  <p className="font-heading text-lg font-semibold text-white">{m.name}</p>
                  <p className="text-sm text-white/80">{m.role}</p>
                </div>
              </div>
              <p className="mx-auto mt-3.5 max-w-xs text-base leading-relaxed text-muted">{m.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
