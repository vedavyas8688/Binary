import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { showcase } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

const cream = (pct) => `color-mix(in srgb, #f1e6d8 ${pct}%, transparent)`;

export default function Showcase() {
  const root = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = root.current;
    const img = imgRef.current;
    if (!el || !img) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Card entrance animation
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-r]", { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        "[data-r]",
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 75%", once: true },
        }
      );
    }, el);

    // Continuous bottom-to-top pan using GSAP — only objectPosition changes
    if (!reduce) {
      gsap.fromTo(
        img,
        { objectPosition: "center 100%" },
        {
          objectPosition: "center 0%",
          duration: 20,
          ease: "none",
          repeat: -1,
          yoyo: false,
        }
      );
    }

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-surface py-16 md:py-24">
      <div className="container-site">
        <div className="relative h-[660px] overflow-hidden rounded-[2rem] md:h-[720px]">

          {/* ── Real estate building image with continuous upward pan ── */}
          <img
            ref={imgRef}
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=90"
            alt={showcase.title}
            loading="lazy"
            style={{ objectPosition: "center 100%" }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* cinematic scrim */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(8,7,5,0.85) 0%, rgba(8,7,5,0.55) 38%, rgba(8,7,5,0.22) 62%, rgba(8,7,5,0.55) 100%)",
            }}
          />
          {/* warm brand wash */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.22] mix-blend-soft-light"
            style={{ backgroundImage: "linear-gradient(125deg, var(--c-brand), transparent 55%)" }}
          />

          {/* ── Floating glass card ── */}
          <div
            data-r
            className="absolute left-7 right-7 top-1/2 z-10 -translate-y-1/2 md:left-12 md:right-auto md:max-w-lg md:p-1"
          >
            <div
              className="rounded-2xl p-[1.5px]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, color-mix(in srgb, var(--c-brand-2) 70%, transparent), transparent 50%, color-mix(in srgb, var(--c-brand) 50%, transparent))",
              }}
            >
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{
                  background: "color-mix(in srgb, #0a0807 62%, transparent)",
                  backdropFilter: "blur(22px) saturate(160%)",
                  WebkitBackdropFilter: "blur(22px) saturate(160%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.12), 0 30px 80px rgba(0,0,0,0.5)",
                }}
              >
                <h2 className="font-display text-4xl font-semibold leading-[1.04] text-white md:text-5xl">
                  {showcase.title}
                  <br />
                  <span
                    className="italic font-medium"
                    style={{
                      backgroundImage: `linear-gradient(110deg, #f5e9d6, color-mix(in srgb, var(--c-brand-2) 75%, #f5e9d6))`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {showcase.titleAccent}
                  </span>
                </h2>

                <span
                  className="mt-6 block h-0.5 w-14 rounded-full"
                  style={{ backgroundImage: `linear-gradient(to right, transparent, ${cream(80)}, var(--c-brand-2))` }}
                />

                <p
                  className="mt-6 max-w-md text-base leading-relaxed"
                  style={{ color: cream(80) }}
                >
                  {showcase.desc}
                </p>

                {/* CTA */}
                <Link
                  to={showcase.cta.href}
                  className="group/btn mt-8 inline-flex items-center gap-3 text-white"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover/btn:translate-x-1"
                    style={{ backgroundImage: "linear-gradient(120deg, var(--c-brand), var(--c-brand-2))" }}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                  <span className="font-heading text-sm font-semibold uppercase tracking-[0.18em]">
                    {showcase.cta.label}
                  </span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}