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
      const nums = el.querySelectorAll("[data-count]");
      nums.forEach((node) => {
        const target = Number(node.dataset.count);
        if (reduce) {
          node.textContent = target;
          return;
        }
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            node.textContent = Math.round(obj.v);
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-gradient-soft py-10 md:py-12">
      <div className="container-site grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-4xl font-bold text-gradient">
              <span data-count={s.value}>0</span>
              {s.suffix}
            </p>
            <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
