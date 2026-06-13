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
      {/* Glow top-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #4a8c5c, transparent)" }}
      />
      {/* Glow bottom-right */}
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

            {/* Price callout */}
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
                style={{ background: "rgba(201,168,76,0.18)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.35)" }}
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

          {/* ── Right: brochure card ── */}
          <div data-r className="flex flex-col gap-3">

            {/* Main brochure poster card */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.15)",
                height: "360px",
              }}
            >
              {/* Full bleed image */}
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&q=90"
                alt="Binary Project 4"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Left-side dark gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(105deg, rgba(8,24,16,0.90) 0%, rgba(8,24,16,0.75) 38%, rgba(8,24,16,0.20) 65%, rgba(8,24,16,0.05) 100%)",
                }}
              />

              {/* Content overlaid on image */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Top: title + tagline + location */}
                <div>
                  <p
                    className="font-display font-bold leading-tight"
                    style={{ fontSize: "20px", color: "#ffffff", letterSpacing: "0.06em" }}
                  >
                    BINARY<br />PROJECT 4
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span style={{ color: "#c9a84c", fontSize: "10px" }}>✦</span>
                    <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.85)" }}>
                      Ultra Luxury Living on Sarjapur Road
                    </p>
                  </div>
                  <p
                    className="mt-1.5 text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)", maxWidth: "170px" }}
                  >
                    Chambenahalli, Sarjapur Road,<br />Bengaluru
                  </p>
                </div>

                {/* Bottom: stats */}
                <div>
                  <div className="flex items-center gap-4">
                    {[
                      { val: "3.5", label: "Acres" },
                      { val: "234", label: "Units" },
                      { val: "60+", label: "Amenities" },
                    ].map((s, idx) => (
                      <div key={s.label} className="flex items-center gap-4">
                        {idx > 0 && (
                          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "18px" }}>|</span>
                        )}
                        <div className="text-center">
                          <p className="text-base font-bold leading-none" style={{ color: "#ffffff" }}>
                            {s.val}
                          </p>
                          <p
                            className="mt-0.5 text-xs uppercase tracking-wider"
                            style={{ color: "rgba(255,255,255,0.50)" }}
                          >
                            {s.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-bold" style={{ color: "#ffffff" }}>
                      Ultra Luxury 2 & 3 BHK
                    </p>
                    <p
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.50)" }}
                    >
                      Only 6 Units Per Floor · No Common Walls
                    </p>
                  </div>
                </div>
              </div>
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
                  <p className="mt-1.5 text-sm font-semibold" style={{ color: "#ffffff" }}>
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