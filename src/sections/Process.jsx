import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { processSteps } from "../data/content";

export default function Process() {
  const ref = useReveal({ stagger: 0.12 });

  return (
    <section ref={ref} className="section">
      <div className="container-site">
        <SectionHeading
          label="How It Works"
          title="From site visit to keys, in four steps"
          align="center"
        />

        <div className="relative mt-10 grid gap-8 md:grid-cols-4 md:gap-5">
          {/* connector line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-4 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--c-line) 12%, var(--c-line) 88%, transparent)",
            }}
          />

          {processSteps.map((s) => (
            <div key={s.step} data-reveal className="relative">
              <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand font-heading text-xs font-bold text-white shadow-card">
                {s.step}
              </span>
              <h3 className="mt-3.5 font-heading text-base font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
