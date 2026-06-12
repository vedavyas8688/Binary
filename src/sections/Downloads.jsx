import { FileDown } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { downloads } from "../data/content";

export default function Downloads() {
  const ref = useReveal({ stagger: 0.07 });

  return (
    <section ref={ref} className="section bg-gradient-soft">
      <div className="container-site">
        <SectionHeading num="04" label={downloads.label} title={downloads.title} desc={downloads.desc} align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {downloads.files.map((f) => (
            <a
              key={f.title}
              href={f.href}
              data-reveal
              className="card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-ink transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-white">
                <FileDown size={17} strokeWidth={2} />
              </span>
              <span>
                <span className="block font-heading text-base font-semibold text-ink">{f.title}</span>
                <span className="mt-0.5 block text-sm text-muted">{f.meta}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
