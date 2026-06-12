import { useState } from "react";
import { Play, Video } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { droneSection } from "../data/content";

export default function DroneSection() {
  const ref = useReveal();
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(droneSection.videoUrl);

  return (
    <section ref={ref} className="section bg-surface">
      <div className="container-site">
        <div data-reveal className="relative overflow-hidden rounded-2xl">
          {playing && hasVideo ? (
            <video src={droneSection.videoUrl} controls autoPlay className="h-[320px] w-full object-cover md:h-[520px]" />
          ) : (
            <>
              <img src={droneSection.poster} alt="Aerial view of the project site" loading="lazy" className="h-[320px] w-full object-cover md:h-[520px]" />
              <div className="absolute inset-0" style={{ background: "color-mix(in srgb, var(--c-ink) 45%, transparent)" }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="eyebrow !text-white/85 before:!bg-white/60">{droneSection.label}</span>
                <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">{droneSection.title}</h2>
                <p className="mt-3 max-w-xl text-base text-white/85 md:text-lg">{droneSection.desc}</p>
                <button
                  onClick={() => hasVideo && setPlaying(true)}
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-surface py-2 pl-2 pr-6 font-heading text-base font-semibold text-ink shadow-lift transition-transform hover:-translate-y-px"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-white">
                    <Play size={15} fill="currentColor" />
                  </span>
                  {hasVideo ? "Play Drone Film" : "Drone Film — Coming Soon"}
                </button>
                {!hasVideo && (
                  <p className="mt-2.5 flex items-center gap-1.5 text-xs text-white/65">
                    <Video size={11} /> Add your footage URL in src/data/content.js
                  </p>
                )}
              </div>
              {/* Stats strip */}
              <div className="absolute inset-x-0 bottom-0 hidden grid-cols-3 divide-x divide-white/15 border-t border-white/15 backdrop-blur-sm md:grid" style={{ background: "color-mix(in srgb, var(--c-ink) 40%, transparent)" }}>
                {droneSection.stats.map((s) => (
                  <div key={s.label} className="px-8 py-4 text-white">
                    <p className="font-heading text-xl font-semibold">{s.value}</p>
                    <p className="text-xs uppercase tracking-[0.14em] text-white/70">{s.label}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
