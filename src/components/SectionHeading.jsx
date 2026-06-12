export default function SectionHeading({ num, label, title, desc, align = "left" }) {
  const center = align === "center";
  const alignCls = center ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignCls} ${center ? "mx-auto" : ""}`}>
      {/* editorial marker (num) or plain eyebrow (label) */}
      {num ? (
        <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`} data-reveal>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-brand-ink">{num}</span>
          <span className="h-px w-10 bg-gradient-brand" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted">{label}</span>
        </div>
      ) : (
        label && (
          <span className="eyebrow" data-reveal>
            {label}
          </span>
        )
      )}
      <h2 className="section-title" data-reveal>{title}</h2>
      {desc && <p className="section-desc" data-reveal>{desc}</p>}
    </div>
  );
}
