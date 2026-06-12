export default function SectionHeading({ label, title, desc, align = "left" }) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignCls} ${align === "center" ? "mx-auto" : ""}`}>
      {label && (
        <span className="eyebrow" data-reveal>
          {label}
        </span>
      )}
      <h2 className="section-title" data-reveal>
        {title}
      </h2>
      {desc && (
        <p className="section-desc" data-reveal>
          {desc}
        </p>
      )}
    </div>
  );
}
