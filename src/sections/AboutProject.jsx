import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { aboutProject } from "../data/content";
import useReveal from "../hooks/useReveal";

gsap.registerPlugin(ScrollTrigger);

function parseSpec(value) {
  const str = String(value);
  const match = str.match(/[\d.,]+/);
  if (!match) return { prefix: str, num: null, suffix: "", decimals: 0 };
  const raw = match[0];
  const prefix = str.slice(0, match.index);
  const suffix = str.slice(match.index + raw.length);
  const clean = raw.replace(/,/g, "");
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
  return { prefix, num: parseFloat(clean), suffix, decimals };
}
const fmt = (n, d) =>
  n.toLocaleString("en-IN", { minimumFractionDigits: d, maximumFractionDigits: d });

export default function AboutProject() {
  const ref = useReveal();
  const specsRef = useRef(null);

  // counting spec numbers
  useEffect(() => {
    const el = specsRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      el.querySelectorAll("[data-num]").forEach((node) => {
        const target = parseFloat(node.dataset.num);
        const decimals = parseInt(node.dataset.decimals, 10) || 0;
        if (reduce) { node.textContent = fmt(target, decimals); return; }
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target, duration: 1.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => { node.textContent = fmt(obj.v, decimals); },
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about" className="relative overflow-hidden bg-surface py-16 md:py-24">
      {/* faint blueprint texture, fading out */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(var(--c-line) 1px, transparent 1px), linear-gradient(90deg, var(--c-line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(110% 80% at 12% 15%, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(110% 80% at 12% 15%, black, transparent 70%)",
        }}
      />

      <div className="container-site relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 xl:gap-24">

          {/* ── Left — Images ── */}
          <div className="relative" data-reveal>
            {/* vertical side label */}
            <span className="absolute -left-7 top-1/2 hidden -translate-y-1/2 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-muted [writing-mode:vertical-rl] xl:block">
              Binary · Project 4
            </span>

            {/* Main image */}
            <div className="group relative aspect-[4/5] w-[88%] overflow-hidden">
              <img
                src={aboutProject.image1}
                alt="Binary exterior"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* warm wash to tie into beige */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-15 mix-blend-soft-light"
                style={{ backgroundImage: "linear-gradient(140deg, var(--c-brand), transparent 55%)" }}
              />
            </div>

            {/* Beige border offset */}
            <div className="absolute left-4 top-4 -z-10 aspect-[4/5] w-[88%] border border-brand/25" />
            {/* small corner accent on the offset frame */}
            <div className="absolute left-4 top-4 -z-10 h-16 w-16 border-l-2 border-t-2 border-brand/60" />

            {/* Floating second image */}
            <div className="absolute bottom-[-2rem] right-0 z-10 aspect-[4/3] w-[46%] overflow-hidden border-4 border-surface shadow-2xl">
              <img
                src={aboutProject.image2}
                alt="Interior detail"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.05]"
              />
            </div>

            {/* floating area chip */}
            <div className="absolute -bottom-5 left-6 z-10 rounded-full border border-line bg-surface px-4 py-2 shadow-card">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">
                3.5 Acres · 80%+ Open
              </span>
            </div>
          </div>

          {/* ── Right — Content ── */}
          <div className="flex flex-col">

            {/* Label */}
            <div className="mb-5 flex items-center gap-3" data-reveal>
              <span className="block h-px w-8 flex-shrink-0 bg-gradient-brand" />
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-brand-ink">
                {aboutProject.label}
              </span>
            </div>

            {/* Title — serif display */}
            <h2
              className="mb-4 whitespace-pre-line font-display text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-ink md:text-5xl"
              data-reveal
            >
              {aboutProject.title}
            </h2>

            {/* Subtitle (optional — add `subtitle` in content.js to show it) */}
            {aboutProject.subtitle && (
              <p className="mb-7 font-display text-xl italic text-brand-ink" data-reveal>
                {aboutProject.subtitle}
              </p>
            )}

            {/* Description */}
            <p className="section-desc mb-4" data-reveal>{aboutProject.description1}</p>
            <p className="section-desc mb-10" data-reveal>{aboutProject.description2}</p>

            {/* Specs — single row, hairline beige borders, counting numbers */}
            <div
              ref={specsRef}
              className="mb-10 grid grid-cols-2 border border-brand/20 sm:grid-cols-4"
              data-reveal
            >
              {aboutProject.specs.map((spec, i) => {
                const { prefix, num, suffix, decimals } = parseSpec(spec.value);
                return (
                  <div
                    key={spec.label}
                    className={`group flex flex-col gap-2 px-5 py-6 transition-colors duration-300 hover:bg-brand-soft/40 ${
                      i < aboutProject.specs.length - 1 ? "sm:border-r sm:border-brand/20" : ""
                    } ${i % 2 === 0 ? "border-r border-brand/20 sm:border-r" : ""} ${
                      i < 2 ? "border-b border-brand/20 sm:border-b-0" : ""
                    }`}
                  >
                    <span className="font-display text-3xl font-semibold leading-none text-ink md:text-4xl">
                      {num === null ? spec.value : (
                        <>
                          {prefix}
                          <span data-num={num} data-decimals={decimals}>0</span>
                          {suffix}
                        </>
                      )}
                    </span>
                    <span className="font-heading text-xs uppercase tracking-[3px] text-muted">
                      {spec.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="group inline-flex w-fit items-center gap-2 font-heading text-sm font-semibold uppercase tracking-widest text-brand-ink transition-colors duration-300 hover:text-brand"
            >
              Discover More
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}