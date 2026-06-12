import { Rotate3d, MousePointerClick } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { virtualTour } from "../data/content";

export default function VirtualTour() {
  const ref = useReveal();
  const hasTour = Boolean(virtualTour.tourUrl);

  return (
    <section ref={ref} className="section">
      <div className="container-site grid items-center gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading num="02" label={virtualTour.label} title={virtualTour.title} desc={virtualTour.desc} />
          <ul className="mt-6 space-y-2.5" data-reveal>
            <li className="flex items-center gap-2.5 text-base text-muted">
              <MousePointerClick size={15} className="text-brand-ink" /> Drag to look around in any direction
            </li>
            <li className="flex items-center gap-2.5 text-base text-muted">
              <Rotate3d size={15} className="text-brand-ink" /> Hotspots move you room to room
            </li>
          </ul>
        </div>

        <div data-reveal className="relative overflow-hidden rounded-2xl border border-line shadow-card lg:col-span-3">
          {hasTour ? (
            <iframe
              src={virtualTour.tourUrl}
              title="360 virtual tour"
              className="h-[320px] w-full md:h-[440px]"
              allowFullScreen
            />
          ) : (
            <div className="relative">
              <img src={virtualTour.poster} alt="Show flat interior" loading="lazy" className="h-[320px] w-full object-cover md:h-[440px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: "color-mix(in srgb, var(--c-ink) 50%, transparent)" }}>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-surface text-brand-ink shadow-lift">
                  <Rotate3d size={22} />
                </span>
                <p className="font-heading text-xl font-semibold text-white">360{"\u00B0"} Tour — Coming Soon</p>
                <p className="text-sm text-white/70">Paste your Kuula / Matterport embed URL in src/data/content.js</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
