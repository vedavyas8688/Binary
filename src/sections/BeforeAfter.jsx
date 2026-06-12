import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { beforeAfter } from "../data/content";

export default function BeforeAfter() {
  const ref = useReveal();
  const [pos, setPos] = useState(50);

  return (
    <section ref={ref} className="section bg-gradient-soft">
      <div className="container-site">
        <SectionHeading num="03" label={beforeAfter.label} title={beforeAfter.title} desc={beforeAfter.desc} align="center" />

        <div data-reveal className="relative mx-auto mt-10 max-w-4xl select-none overflow-hidden rounded-2xl shadow-card">
          {/* After (base) */}
          <img src={beforeAfter.after.img} alt={beforeAfter.after.label} className="h-[300px] w-full object-cover md:h-[480px]" draggable="false" />
          {/* Before (clipped) */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img
              src={beforeAfter.before.img}
              alt={beforeAfter.before.label}
              className="h-[300px] w-full max-w-none object-cover md:h-[480px]"
              style={{ width: "100%", minWidth: "100%" }}
              draggable="false"
            />
          </div>

          {/* Divider + handle */}
          <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
            <div className="absolute inset-y-0 -ml-px w-0.5 bg-surface shadow-lift" />
            <span className="absolute top-1/2 -ml-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-brand text-white shadow-lift">
              <MoveHorizontal size={16} />
            </span>
          </div>

          {/* Labels */}
          <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-ink">{beforeAfter.before.label}</span>
          <span className="absolute right-4 top-4 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-white">{beforeAfter.after.label}</span>

          {/* Invisible range control */}
          <input
            type="range"
            min="0"
            max="100"
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Compare before and after"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}
