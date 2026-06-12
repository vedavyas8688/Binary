import { Quote } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section bg-surface">
      <div className="container-site">
        <SectionHeading
          label="Residents & Investors"
          title="Trusted by the people who live here"
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} data-reveal className="card flex flex-col p-5">
              <Quote size={16} className="text-brand-ink opacity-50" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="h-9 w-9 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading text-sm font-semibold text-ink">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
