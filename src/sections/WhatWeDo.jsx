import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import { whatWeDo } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

const PANEL = "color-mix(in srgb, var(--c-brand-ink) 62%, #5a4636)";
const CREAM = "#f1e6d8";
const cream = (pct) => `color-mix(in srgb, ${CREAM} ${pct}%, transparent)`;

const ORBIT_R = 92;
const THUMB_SIZE = 64;

function thumbPos(index, total) {
  const angle = (-90 + (360 / total) * index) * (Math.PI / 180);
  return {
    x: Math.cos(angle) * ORBIT_R,
    y: Math.sin(angle) * ORBIT_R,
  };
}

export default function WhatWeDo() {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const n = whatWeDo.length;
        if (reduce || n < 2) return;

        const imgs = gsap.utils.toArray("[data-img]", el);
        const texts = gsap.utils.toArray("[data-text]", el);
        const nums = gsap.utils.toArray("[data-num]", el);
        const thumbSets = gsap.utils.toArray("[data-thumbset]", el);

        imgs.forEach((node, k) => gsap.set(node, { yPercent: 0, zIndex: n - k }));
        texts.forEach((node, k) => gsap.set(node, { opacity: k === 0 ? 1 : 0, y: k === 0 ? 0 : 30 }));
        thumbSets.forEach((node, k) => gsap.set(node, { opacity: k === 0 ? 1 : 0 }));
        nums.forEach((node, k) => gsap.set(node, { opacity: k === 0 ? 1 : 0, yPercent: k === 0 ? 0 : 60 }));

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${(n - 1) * window.innerHeight * 1.2}`,
            pin: true,
            scrub: 2.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        for (let i = 1; i < n; i++) {
          const at = i - 1;

          // image
          tl.fromTo(imgs[i - 1], { yPercent: 0 }, { yPercent: -100, duration: 1, ease: "power3.inOut" }, at);

          // text
          tl.to(texts[i - 1], { opacity: 0, y: -28, duration: 0.5, ease: "power2.in" }, at + 0.1);
          tl.fromTo(texts[i], { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, at + 0.5);

          // number — outgoing rolls out, incoming rolls to center (forced exact landing)
          tl.to(nums[i - 1], {
            opacity: 0,
            yPercent: -50,
            duration: 0.4,
            ease: "power2.in",
            overwrite: "auto",
          }, at + 0.3);

          tl.to(nums[i], {
            opacity: 1,
            yPercent: 0,
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
          }, at + 0.45);

          // thumbnails
          tl.to(thumbSets[i - 1], { opacity: 0, duration: 0.4, ease: "power1.inOut" }, at + 0.25);
          tl.fromTo(thumbSets[i], { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.55, ease: "power2.out" }, at + 0.6);
        }

        gsap.to("[data-orbit]", { rotation: 360, duration: 140, ease: "none", repeat: -1 });
        gsap.utils.toArray("[data-thumb]", el).forEach((t) =>
          gsap.to(t, { rotation: -360, duration: 140, ease: "none", repeat: -1 })
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative">
      {/* ════ DESKTOP ════ */}
      <div className="relative hidden h-screen overflow-hidden lg:block">

        <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
          {whatWeDo.map((s, i) => (
            <img
              key={s.num}
              data-img
              src={s.image}
              alt={s.title}
              loading={i === 0 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
            />
          ))}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24"
            style={{ background: "linear-gradient(to left, rgba(0,0,0,0.22), transparent)" }}
          />
        </div>

        <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden" style={{ background: PANEL }}>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-[0.14] blur-3xl"
            style={{ background: `radial-gradient(closest-side, ${CREAM}, transparent 70%)` }}
          />

          {whatWeDo.map((s) => (
            <div
              key={s.num}
              data-text
              className="absolute inset-0 flex flex-col justify-between px-20 py-24 text-right"
            >
              <div>
                <div className="flex items-center justify-end gap-3">
                  <span className="h-px w-14" style={{ background: cream(50) }} />
                  {/* <span className="font-display text-base font-medium italic" style={{ color: cream(85) }}>
                    Chapter {s.num}
                  </span> */}
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.32em]" style={{ color: cream(60) }}>
                    {s.eyebrow}
                  </span>
                </div>

                <h2 className="ml-auto mt-8 max-w-[18ch] font-display text-5xl font-light leading-[1.06] md:text-6xl" style={{ color: CREAM }}>
                  {s.title}{" "}
                  <span
                    className="italic font-medium"
                    style={{
                      backgroundImage: `linear-gradient(110deg, ${CREAM}, color-mix(in srgb, var(--c-brand-2) 80%, ${CREAM}))`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {s.titleAccent || ""}
                  </span>
                </h2>

                <span
                  className="ml-auto mt-7 block h-0.5 w-16 rounded-full"
                  style={{ backgroundImage: `linear-gradient(to right, transparent, ${cream(80)}, var(--c-brand-2))` }}
                />
              </div>

              <div className="ml-auto max-w-md">
                <p className="text-lg leading-relaxed" style={{ color: cream(82) }}>
                  <span className="font-display italic" style={{ color: CREAM, marginRight: "0.2em" }}>
                    {s.desc.split("—")[0].trim()}
                    {s.desc.includes("—") ? " — " : ""}
                  </span>
                  {s.desc.includes("—") ? s.desc.split("—").slice(1).join("—").trim() : ""}
                </p>

                {s.chip && (
                  <div className="mt-6 flex items-center justify-end gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-heading text-xs font-medium tracking-wide"
                      style={{ borderColor: cream(35), background: cream(8), color: cream(90) }}
                    >
                      <MapPin size={11} style={{ color: "var(--c-brand-2)" }} />
                      {s.chip}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">

          <div className="absolute left-1/2 top-1/2 z-20 h-32 w-32 -translate-x-1/2 -translate-y-1/2">
            {whatWeDo.map((s, i) => (
              <div key={s.num} data-num className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-display font-bold leading-none"
                  style={{
                    fontSize: "36px",
                    color: CREAM,
                    textShadow: [
                      "0 1px 0 rgba(255,255,255,0.28)",
                      "0 -1px 1px color-mix(in srgb, #2a1f16 60%, transparent)",
                      "0 2px 3px color-mix(in srgb, #2a1f16 35%, transparent)",
                    ].join(", "),
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>

          <div data-orbit className="relative" style={{ width: ORBIT_R * 2, height: ORBIT_R * 2 }}>
            <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox={`0 0 ${ORBIT_R * 2} ${ORBIT_R * 2}`} fill="none">
              <circle cx={ORBIT_R} cy={ORBIT_R} r={ORBIT_R} stroke={cream(55)} strokeWidth="1.2" />
            </svg>

            {whatWeDo.map((s) => (
              <div key={s.num} data-thumbset className="absolute inset-0">
                {s.thumbs.map((t, k) => {
                  const pos = thumbPos(k, s.thumbs.length);
                  return (
                    <span
                      key={k}
                      data-thumb
                      className="absolute left-1/2 top-1/2 block overflow-hidden rounded-full"
                      style={{
                        width: THUMB_SIZE,
                        height: THUMB_SIZE,
                        transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                        border: `2px solid ${cream(75)}`,
                        boxShadow: "0 10px 24px rgba(0,0,0,0.4)",
                      }}
                    >
                      <img src={t} alt="" loading="lazy" className="h-full w-full object-cover" />
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════ MOBILE / TABLET ════ */}
      <div className="lg:hidden">
        {whatWeDo.map((s, i) => (
          <div key={s.num}>
            <img src={s.image} alt={s.title} loading="lazy" className="h-[44vh] w-full object-cover" />
            <div className="px-7 py-12" style={{ background: PANEL }}>
              <div className="flex items-center gap-3">
                <span className="h-px w-10" style={{ background: cream(50) }} />
                <span className="font-display text-sm font-medium italic" style={{ color: cream(85) }}>
                  Chapter {s.num}
                </span>
              </div>
              <h2 className="mt-5 font-display text-3xl font-light leading-[1.1]" style={{ color: CREAM }}>
                {s.title}{" "}
                <span className="italic" style={{ color: "var(--c-brand-2)" }}>{s.titleAccent}</span>
              </h2>
              <span className="mt-5 block h-0.5 w-12 rounded-full" style={{ background: `linear-gradient(to right, ${cream(80)}, var(--c-brand-2))` }} />
              <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: cream(80) }}>
                {s.desc}
              </p>
              {s.chip && (
                <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-heading text-xs font-medium" style={{ borderColor: cream(35), background: cream(8), color: cream(90) }}>
                  <MapPin size={11} style={{ color: "var(--c-brand-2)" }} />
                  {s.chip}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}