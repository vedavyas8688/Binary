export default function PageHeader({ label, title, desc }) {
  return (
    <section className="bg-gradient-soft pt-14">
      <div className="container-site py-12 md:py-16">
        <span className="eyebrow">{label}</span>
        <h1 className="mt-3 font-heading text-5xl font-bold leading-tight md:text-6xl">
          {title}
        </h1>
        {desc && <p className="mt-3 max-w-xl text-base text-muted">{desc}</p>}
      </div>
      <div className="rule-gradient" />
    </section>
  );
}
