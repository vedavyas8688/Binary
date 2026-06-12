import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHeader({ label, title, desc, image }) {
  return (
    <section className="relative overflow-hidden pt-14">
      {/* backdrop */}
      <div className="absolute inset-0">
        {image ? (
          <img src={image} alt="" aria-hidden="true" className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-soft" />
        )}
        {image && (
          <>
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,10,12,0.55) 0%, rgba(8,10,12,0.35) 45%, rgba(8,10,12,0.72) 100%)" }} />
            <div aria-hidden="true" className="absolute inset-0 opacity-30 mix-blend-soft-light" style={{ backgroundImage: "linear-gradient(120deg, var(--c-brand), transparent 55%)" }} />
          </>
        )}
      </div>
      {/* ambient washes when no image */}
      {!image && (
        <>
          <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full opacity-[0.10] blur-3xl" style={{ background: "var(--g-brand)" }} />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -bottom-10 h-72 w-72 rounded-full opacity-[0.08] blur-3xl" style={{ background: "var(--g-brand)" }} />
        </>
      )}

      <div className={`container-site relative py-20 md:py-28 ${image ? "text-white" : ""}`}>
        {/* breadcrumb */}
        <nav className={`flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] ${image ? "text-white/70" : "text-muted"}`}>
          <Link to="/" className="transition-colors hover:text-brand-ink">Home</Link>
          <ChevronRight size={12} />
          <span className={image ? "text-white" : "text-brand-ink"}>{label}</span>
        </nav>

        <div className="mt-5 flex items-center gap-3">
          <span className={`font-heading text-xs font-semibold uppercase tracking-[0.26em] ${image ? "text-white/70" : "text-brand-ink"}`}>{label}</span>
          <span className={`h-px w-14 ${image ? "" : ""}`} style={{ background: image ? "rgba(255,255,255,0.4)" : "var(--g-brand)" }} />
        </div>

        <h1 className={`mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight md:text-6xl ${image ? "" : "text-ink"}`}
            style={image ? { textShadow: "0 2px 24px rgba(0,0,0,0.4)" } : undefined}>
          {title}
        </h1>
        {desc && <p className={`mt-4 max-w-xl text-lg ${image ? "text-white/85" : "text-muted"}`}>{desc}</p>}
      </div>

      {!image && <div className="rule-gradient" />}
    </section>
  );
}
