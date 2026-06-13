import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Hero1() {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-r]", { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        "[data-r]",
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="hero1 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1c3d2a 0%, #0e2b1c 45%, #1a4a35 80%, #0d3020 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dot texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #4a8c5c, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-40 h-[500px] w-[500px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #2d6b4a, transparent)" }}
      />

      {/* Enquire Now — vertical tab */}
      <div
        className="absolute right-0 top-1/2 z-20"
        style={{
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        <Link
          to="/enquire"
          className="flex items-center justify-center px-3 py-5 text-xs font-bold uppercase tracking-[0.2em]"
          style={{
            background: "linear-gradient(180deg, #a07828, #c49a32)",
            color: "#fff",
            borderRadius: "6px 0 0 6px",
          }}
        >
          Enquire Now
        </Link>
      </div>

      <div className="container-site relative z-10 w-full py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

          {/* ── Left ── */}
          <div>
            <div data-r className="mb-6 flex items-center gap-3">
              <span className="h-px w-10" style={{ background: "#c9a84c" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: "#c9a84c" }}
              >
                Chambenahalli, Sarjapur Road · Bengaluru
              </span>
            </div>

            <h1
              data-r
              className="font-display font-bold leading-[1.02]"
              style={{ fontSize: "clamp(44px, 6vw, 82px)", color: "#ffffff" }}
            >
              Binary
            </h1>

            <p
              data-r
              className="mt-6 max-w-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.68)", fontSize: "16px" }}
            >
              Ultra luxury 2 & 3 BHK homes on Sarjapur Road with 80% open space,
              only 6 apartments per floor, no common walls, and upcoming metro
              connectivity — built for those who choose better.
            </p>

            <div data-r className="mt-6 flex items-baseline gap-3">
              <span
                className="font-display text-2xl font-bold"
                style={{ color: "#c9a84c" }}
              >
                ₹95 Lakhs
              </span>
              <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px" }}>
                onwards · ₹8,499/sq.ft
              </span>
              <span
                className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                style={{
                  background: "rgba(201,168,76,0.18)",
                  color: "#c9a84c",
                  border: "1px solid rgba(201,168,76,0.35)",
                }}
              >
                Launch Offer
              </span>
            </div>

            <div data-r className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/price"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(120deg, #a07828, #c9a84c)",
                  color: "#ffffff",
                }}
              >
                Get Price Sheet
              </Link>
              <Link
                to="/brochure"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-80"
                style={{ color: "#ffffff" }}
              >
                Download Brochure
              </Link>
            </div>
          </div>

          {/* ── Right: image-only card + stats tiles ── */}
          <div data-r className="flex flex-col gap-3">

            {/* Poster card — image only */}
            <div
              className="overflow-hidden"
              style={{
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
              }}
            >
               <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1000&q=90"
                alt="Binary Project 4"
                className="block h-[500px] w-full animate-[float_6s_ease-in-out_infinite] object-cover"
              />
            </div>

            {/* Stats tiles */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { label: "Total Land Area", value: "3.5 Acres" },
                { label: "Total Units", value: "234 Apartments" },
                { label: "Open Space", value: "80%+" },
                { label: "Location", value: "Sarjapur Road, Bengaluru" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl px-4 py-3.5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: "#c9a84c" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="mt-1.5 text-sm font-semibold"
                    style={{ color: "#ffffff" }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}