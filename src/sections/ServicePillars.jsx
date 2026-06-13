import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { servicePillars } from "../data/content";

const CREAM = "#f1e6d8";
const cream = (pct) => `color-mix(in srgb, ${CREAM} ${pct}%, transparent)`;

export default function ServicePillars() {
  const ref = useReveal({ stagger: 0.12 });
  const [hovered, setHovered] = useState(0);

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-16"
      style={{ background: "#ffffff" }}
    >
      {/* Very faint warm tint in center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.045] blur-3xl"
        style={{ background: "var(--c-brand)" }}
      />

      <div className="container-site relative">
        <div style={{ paddingTop: "220px" }}>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {servicePillars.items.map((item, i) => {
              const isActive = hovered === i;
              return (
                <div
                  key={item.num}
                  data-reveal
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(0)}
                  className="group relative px-8 py-10 transition-colors duration-500 md:px-10 md:py-12"
                  style={{
                    background: isActive
                      ? "color-mix(in srgb, var(--c-brand) 5%, #ffffff)"
                      : "transparent",
                    borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                    boxShadow: isActive
                      ? "inset 0 0 0 1px color-mix(in srgb, var(--c-brand) 18%, transparent)"
                      : "none",
                    transition: "background 0.4s ease, box-shadow 0.4s ease",
                  }}
                >
                  {/* Floating image — pops above card, straddling right border */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute transition-all duration-500"
                    style={{
                      bottom: "calc(100% + 12px)",
                      left: "50%",
                      width: "260px",
                      height: "195px",
                      opacity: isActive ? 1 : 0,
                      transform: `translateX(10px) translateY(${isActive ? 0 : 20}px) scale(${isActive ? 1 : 0.92})`,
                      filter: "drop-shadow(0 20px 36px rgba(0,0,0,0.16))",
                      zIndex: 20,
                    }}
                  >
                    <img
                      src={item.hoverImage}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ borderRadius: "10px" }}
                    />
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "24px",
                        left: "50%",
                        width: "260px",
                        height: "195px",
                        opacity: isActive ? 1 : 0,
                        transform: `translateX(10px) translateY(${isActive ? 0 : 20}px) scale(${isActive ? 1 : 0.92})`,
                        filter: "drop-shadow(0 20px 36px rgba(0,0,0,0.16))",
                        zIndex: 20,
                      }}
                    />
                  </div>

                  {/* Ghost outlined number */}
                  <p
                    className="font-display font-bold leading-none transition-colors duration-500"
                    style={{
                      fontSize: "76px",
                      color: "transparent",
                      WebkitTextStroke: isActive
                        ? `1.5px color-mix(in srgb, var(--c-brand) 55%, transparent)`
                        : "1.5px rgba(0,0,0,0.10)",
                    }}
                  >
                    {item.num}
                  </p>

                  {/* Accent rule — only visible when active */}
                  <div
                    style={{
                      height: "1.5px",
                      width: isActive ? "48px" : "0px",
                      borderRadius: "2px",
                      background:
                        "linear-gradient(to right, var(--c-brand), var(--c-brand-2))",
                      transition: "width 0.4s ease",
                      marginTop: isActive ? "20px" : "0px",
                    }}
                  />

                  {/* Title */}
                  <h3
                    className="mt-6 font-heading text-2xl font-medium transition-colors duration-500 md:text-3xl"
                    style={{
                      color: isActive ? "var(--c-brand-ink)" : "#1a1410",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mt-4 text-base leading-relaxed transition-colors duration-500"
                    style={{
                      color: isActive
                        ? "color-mix(in srgb, var(--c-brand-ink) 70%, transparent)"
                        : "rgba(0,0,0,0.52)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
