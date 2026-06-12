import { ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { processSteps, processSection } from "../data/content";

// ── Very dark beige palette, all from your theme tokens ──
const PANEL = "color-mix(in srgb, var(--c-brand-ink) 24%, #0c0905)";   // near-black warm beige
const GLASS = "color-mix(in srgb, var(--c-brand-2) 7%, transparent)";  // translucent beige glass
const GLASS_BORDER = "color-mix(in srgb, var(--c-brand-2) 22%, transparent)";
const HAIRLINE = "color-mix(in srgb, var(--c-brand-2) 30%, transparent)";
const SOFT_TEXT = "color-mix(in srgb, var(--c-brand-soft) 68%, transparent)";

const gradText = {
  backgroundImage: "linear-gradient(110deg, var(--c-brand-2), #f5e9d6)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

export default function Process() {
  const ref = useReveal({ stagger: 0.1 });

  return (
    <section ref={ref} className="bg-surface py-10 md:py-14">
      <div className="container-site">
        {/* ── Rounded very-dark beige panel ── */}
        <div
          className="relative overflow-hidden rounded-[1.75rem] px-6 py-10 md:px-12 md:py-14"
          style={{ background: PANEL }}
        >
          {/* beige glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full opacity-[0.18] blur-3xl"
            style={{ background: "var(--g-brand)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-44 right-0 h-96 w-96 rounded-full opacity-[0.10] blur-3xl"
            style={{ background: "var(--g-brand)" }}
          />
          {/* faint grid texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />

          {/* ── Header ── */}
          <div className="relative" data-reveal>
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--c-brand-2)" }} />
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                {processSection.eyebrow}
              </span>
            </div>

            <div className="mt-3 flex items-end gap-8">
              <h2 className="font-display text-3xl font-semibold leading-[1.12] text-white md:text-5xl">
                {processSection.titleLine1}
                <br />
                <span className="italic" style={gradText}>{processSection.titleLine2}</span>
              </h2>
              <span className="mb-2 hidden h-px flex-1 md:block" style={{ background: HAIRLINE }} />
            </div>
          </div>

          {/* ── Glass step cards ── */}
          <div className="relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <div
                key={s.step}
                data-reveal
                className="group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 md:min-h-[250px] md:p-7"
                style={{
                  background: GLASS,
                  border: `1px solid ${GLASS_BORDER}`,
                  backdropFilter: "blur(14px) saturate(140%)",
                  WebkitBackdropFilter: "blur(14px) saturate(140%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 18px 40px rgba(0,0,0,0.35)",
                }}
              >
                {/* sheen sweep on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-full top-0 h-full w-2/3 -skew-x-12 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(100deg, transparent, color-mix(in srgb, var(--c-brand-2) 16%, transparent), transparent)",
                  }}
                />

                {/* serif gradient step number */}
                <p className="font-display text-3xl font-semibold leading-none" style={gradText}>
                  {s.step}.
                </p>

                {/* serif title + gradient tick */}
                <h3 className="mt-2.5 font-display text-2xl font-semibold leading-snug text-white">
                  {s.title}
                </h3>
                <span className="mt-2.5 block h-0.5 w-8 rounded-full bg-gradient-brand transition-all duration-500 group-hover:w-14" />

                {/* description — flows right after the tick, consistent gap */}
                <p className="mt-5 text-sm leading-relaxed" style={{ color: SOFT_TEXT }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── Bottom glass pill bar ── */}
          <div
            data-reveal
            className="relative mt-6 flex flex-col items-start gap-4 rounded-2xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            style={{
              background: GLASS,
              border: `1px solid ${GLASS_BORDER}`,
              backdropFilter: "blur(14px) saturate(140%)",
              WebkitBackdropFilter: "blur(14px) saturate(140%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-center gap-3.5">
              <div className="flex -space-x-2.5">
                {processSection.bar.avatars.map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt=""
                    loading="lazy"
                    className="h-9 w-9 rounded-full border-2 object-cover"
                    style={{ borderColor: "#1a140d" }}
                  />
                ))}
              </div>
              <p className="text-sm" style={{ color: SOFT_TEXT }}>
                {processSection.bar.text}{" "}
                <span className="font-semibold text-white">{processSection.bar.textBold}</span>
              </p>
            </div>

            <a
              href={processSection.bar.cta.href}
              className="group inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-2 pr-6 font-heading text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-0.5"
                style={{ backgroundImage: "linear-gradient(120deg, var(--c-brand), var(--c-brand-2))" }}
              >
                <ArrowRight size={14} />
              </span>
              {processSection.bar.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}