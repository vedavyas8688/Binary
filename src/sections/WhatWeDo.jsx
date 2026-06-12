import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whatWeDo } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

const PANEL = "color-mix(in srgb, var(--c-brand-ink) 62%, #5a4636)"; // mocha panel
const CREAM = "#f1e6d8";

/* thumbnail spots on the rings (relative to the orbital center) */
const THUMB_POS = [
  { x: 8, y: -185, s: 56 },
  { x: -118, y: 0, s: 84 },
  { x: -62, y: 178, s: 48 },
];

export default function WhatWeDo() {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const slides = gsap.utils.toArray("[data-slide]", el);
        if (reduce || slides.length < 2) return;

        // stack: first visible, rest waiting below
        slides.forEach((s, i) => gsap.set(s, { yPercent: i === 0 ? 0 : 100 }));

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${(slides.length - 1) * window.innerHeight}`,
            pin: true,
            scrub: 0.9,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        slides.forEach((s, i) => {
          if (i === 0) return;
          // next slide wipes up over the current — buttery, like the reference
          tl.to(s, { yPercent: 0, ease: "none", duration: 1 }, i - 1);
          // subtle settle of the incoming content
          tl.fromTo(
            s.querySelectorAll("[data-rise]"),
            { y: 50, opacity: 0.4 },
            { y: 0, opacity: 1, ease: "power2.out", duration: 0.45 },
            i - 1 + 0.55
          );
        });

        // slow infinite ring drift per slide (thumbs counter-rotate to stay upright)
        slides.forEach((s) => {
          const orbit = s.querySelector("[data-orbit]");
          const thumbs = s.querySelectorAll("[data-thumb]");
          gsap.to(orbit, { rotation: 360, duration: 90, ease: "none", repeat: -1 });
          thumbs.forEach((t) =>
            gsap.to(t, { rotation: -360, duration: 90, ease: "none", repeat: -1 })
          );
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative">
      {/* desktop: stacked absolute slides inside a pinned 100vh frame
          mobile: normal flow, each slide its own block */}
      <div className="relative lg:h-screen lg:overflow-hidden">
        {whatWeDo.map((slide, i) => {
          const panelRight = slide.side === "right";
          return (
            <div
              key={slide.num}
              data-slide
              className="relative lg:absolute lg:inset-0"
              style={{ zIndex: i + 1 }}
            >
              <div className={`flex h-full flex-col lg:flex-row ${panelRight ? "" : "lg:flex-row-reverse"}`}>

                {/* ── image half ── */}
                <div className="relative h-[46vh] w-full lg:h-full lg:w-1/2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* ── panel half ── */}
                <div
                  className="relative flex min-h-[54vh] w-full flex-col justify-between px-7 py-12 lg:h-full lg:w-1/2 lg:px-20 lg:py-24"
                  style={{ background: PANEL }}
                >
                  <div data-rise className={panelRight ? "text-right" : "text-left"}>
                    <p
                      className="font-heading text-xs font-semibold uppercase tracking-[0.3em]"
                      style={{ color: "color-mix(in srgb, " + CREAM + " 75%, transparent)" }}
                    >
                      {slide.eyebrow}
                    </p>
                    <h2
                      className="mt-5 font-heading text-4xl font-light leading-[1.12] md:text-6xl"
                      style={{ color: CREAM, maxWidth: "22ch", marginLeft: panelRight ? "auto" : 0 }}
                    >
                      {slide.title}
                    </h2>
                  </div>

                  <p
                    data-rise
                    className={`max-w-sm text-base leading-relaxed md:text-lg ${panelRight ? "ml-auto text-right" : "text-left"}`}
                    style={{ color: "color-mix(in srgb, " + CREAM + " 80%, transparent)" }}
                  >
                    {slide.desc}
                  </p>
                </div>
              </div>

              {/* ── orbital centerpiece on the seam (desktop only) ── */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
                style={{ zIndex: 20 }}
              >
                {/* ghost number */}
                <span
                  data-rise
                  className="absolute left-1/2 top-1/2 -translate-x-[110%] -translate-y-1/2 font-heading text-[9rem] font-extralight leading-none"
                  style={{ color: "color-mix(in srgb, " + CREAM + " 55%, transparent)" }}
                >
                  {slide.num}
                </span>

                {/* rings + thumbs (slow drift) */}
                <div data-orbit className="relative h-[460px] w-[460px]">
                  <span className="absolute inset-0 rounded-full border" style={{ borderColor: "color-mix(in srgb, " + CREAM + " 30%, transparent)" }} />
                  <span className="absolute inset-[70px] rounded-full border" style={{ borderColor: "color-mix(in srgb, " + CREAM + " 38%, transparent)" }} />
                  <span className="absolute inset-[150px] rounded-full border" style={{ borderColor: "color-mix(in srgb, " + CREAM + " 26%, transparent)" }} />

                  {slide.thumbs.map((t, k) => (
                    <img
                      key={k}
                      data-thumb
                      src={t}
                      alt=""
                      loading="lazy"
                      className="absolute left-1/2 top-1/2 rounded-full object-cover shadow-lg"
                      style={{
                        width: THUMB_POS[k].s,
                        height: THUMB_POS[k].s,
                        transform: `translate(calc(-50% + ${THUMB_POS[k].x}px), calc(-50% + ${THUMB_POS[k].y}px))`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}