import { Quote } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { spotlightTestimonial as t } from "../data/content";

export default function SpotlightTestimonial() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section">
      <div className="container-site">
        <div data-reveal className="card grid overflow-hidden lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img src={t.image} alt={t.name} loading="lazy" className="h-64 w-full object-cover lg:h-full" />
          </div>
          <div className="relative flex flex-col justify-center p-8 md:p-12 lg:col-span-3">
            <Quote size={34} className="text-brand-ink opacity-20" />
            <blockquote className="mt-4 font-display text-2xl font-medium italic leading-relaxed text-ink md:text-3xl">
              {t.quote}
            </blockquote>
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-brand" />
              <div>
                <p className="font-heading text-lg font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
