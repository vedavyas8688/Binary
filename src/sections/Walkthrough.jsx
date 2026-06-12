import { useState } from "react";
import { Play, Clock3 } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { walkthrough } from "../data/content";

export default function Walkthrough() {
  const ref = useReveal();
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(walkthrough.videoUrl);

  return (
    <section ref={ref} className="section bg-surface">
      <div className="container-site grid items-center gap-10 lg:grid-cols-5">
        {/* Video */}
        <div data-reveal className="relative overflow-hidden rounded-2xl shadow-card lg:col-span-3">
          {playing && hasVideo ? (
            <video src={walkthrough.videoUrl} controls autoPlay className="h-[300px] w-full object-cover md:h-[430px]" />
          ) : (
            <>
              <img src={walkthrough.poster} alt="Project walkthrough" loading="lazy" className="h-[300px] w-full object-cover md:h-[430px]" />
              <button
                onClick={() => hasVideo && setPlaying(true)}
                aria-label="Play walkthrough video"
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "color-mix(in srgb, var(--c-ink) 35%, transparent)" }}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-surface text-brand-ink shadow-lift transition-transform hover:scale-105">
                  <Play size={22} fill="currentColor" />
                </span>
              </button>
              {!hasVideo && (
                <span className="absolute bottom-4 left-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-ink">
                  Video coming soon — add URL in content.js
                </span>
              )}
            </>
          )}
        </div>

        {/* Chapters */}
        <div className="lg:col-span-2">
          <SectionHeading num="04" label={walkthrough.label} title={walkthrough.title} desc={walkthrough.desc} />
          <ol className="mt-6 divide-y divide-line rounded-xl border border-line bg-bg">
            {walkthrough.chapters.map((c) => (
              <li key={c.title} data-reveal className="flex items-center gap-4 px-5 py-3.5">
                <span className="flex items-center gap-1.5 rounded-md bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand-ink">
                  <Clock3 size={11} /> {c.time}
                </span>
                <span className="font-heading text-base font-medium text-ink">{c.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
