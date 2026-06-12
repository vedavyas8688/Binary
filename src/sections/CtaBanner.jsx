import { ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

export default function CtaBanner({ title, desc, primary, image }) {
  const ref = useReveal();

  return (
    <section ref={ref} className="section !py-10 md:!py-14">
      <div className="container-site">
        <div data-reveal className="relative overflow-hidden rounded-2xl">
          {image ? (
            <>
              <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ background: "color-mix(in srgb, var(--c-ink) 68%, transparent)" }} />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-brand" />
          )}
          <div className="relative flex flex-col items-start gap-5 px-7 py-10 text-white md:flex-row md:items-center md:justify-between md:px-12 md:py-12">
            <div>
              <h2 className="max-w-2xl font-display text-3xl font-semibold leading-snug md:text-4xl">{title}</h2>
              <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">{desc}</p>
            </div>
            <a
              href={primary.href}
              className="btn shrink-0 bg-surface font-heading text-base font-semibold text-ink shadow-lift hover:-translate-y-px"
            >
              {primary.label}
              <ArrowRight size={14} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
