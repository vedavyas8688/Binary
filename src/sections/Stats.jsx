import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const root = useRef(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (!reduce) {
        gsap.fromTo("[data-stat]", { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      }
      el.querySelectorAll("[data-count]").forEach((node) => {
        const target = Number(node.dataset.count);
        if (reduce) { node.textContent = target; return; }
        const obj = { v: 0 };
        gsap.to(obj, { v: target, duration: 1.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => { node.textContent = Math.round(obj.v); } });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden border-y border-line bg-brand-soft/40 py-14 md:py-20">
      {/* blueprint texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60"
        style={{ backgroundImage: "linear-gradient(var(--c-line) 1px, transparent 1px), linear-gradient(90deg, var(--c-line) 1px, transparent 1px)", backgroundSize: "72px 72px",
                 maskImage: "radial-gradient(100% 100% at 50% 0%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(100% 100% at 50% 0%, black, transparent 80%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full opacity-[0.12] blur-3xl" style={{ background: "var(--g-brand)" }} />

      <div className="container-site relative">
        <div className="flex items-center gap-3">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.28em] text-brand-ink">03 / By the Numbers</span>
          <span className="h-px w-12 bg-gradient-brand" />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} data-stat className={`px-2 md:px-8 ${i !== 0 ? "md:border-l md:border-line" : ""}`}>
              <p className="font-display text-6xl font-semibold leading-none text-gradient md:text-7xl">
                <span data-count={s.value}>0</span>{s.suffix}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
