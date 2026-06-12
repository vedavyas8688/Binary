import { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { galleryCategories, galleryImages } from "../data/content";

export default function GalleryGrid() {
  const ref = useReveal({ stagger: 0.04 });
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState(-1);

  const images = useMemo(
    () => (cat === "All" ? galleryImages : galleryImages.filter((g) => g.category === cat)),
    [cat]
  );

  const close = () => setLightbox(-1);
  const prev = () => setLightbox((i) => (i - 1 + images.length) % images.length);
  const next = () => setLightbox((i) => (i + 1) % images.length);

  return (
    <section ref={ref} className="section !pt-12">
      <div className="container-site">
        <div className="mb-8 flex items-center gap-3" data-reveal>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-brand-ink">01</span>
          <span className="h-px w-10 bg-gradient-brand" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted">Gallery</span>
        </div>
        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-2.5" data-reveal>
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 font-heading text-sm font-semibold transition-all duration-300 ${
                cat === c
                  ? "bg-gradient-brand text-white shadow-card"
                  : "border border-line bg-surface text-muted hover:border-brand hover:text-brand-ink"
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto hidden text-sm text-muted sm:block">
            {images.length} photos
          </span>
        </div>

        {/* Masonry grid */}
        <div className="mt-8 columns-2 gap-4 lg:columns-3 [&>figure]:mb-4">
          {images.map((g, i) => (
            <figure
              key={g.title + g.category}
              data-reveal
              className="group relative cursor-zoom-in overflow-hidden rounded-xl break-inside-avoid"
              onClick={() => setLightbox(i)}
            >
              <img
                src={g.img}
                alt={g.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i % 3 === 0 ? "h-72 md:h-96" : "h-56 md:h-64"
                }`}
              />
              <div className="caption-fade absolute inset-x-0 bottom-0 flex items-end justify-between px-4 pb-3.5 pt-12">
                <div>
                  <span className="block text-2xs font-semibold uppercase tracking-[0.14em] text-white/75">{g.category}</span>
                  <span className="font-heading text-base font-medium text-white">{g.title}</span>
                </div>
                <Expand size={15} className="mb-1 text-white/80" />
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox >= 0 && images[lightbox] && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-10"
          style={{ background: "color-mix(in srgb, var(--c-ink) 92%, transparent)" }}
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button onClick={close} aria-label="Close" className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <X size={18} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className="absolute left-3 md:left-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <ChevronLeft size={18} />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightbox].img} alt={images[lightbox].title} className="max-h-[78vh] w-auto rounded-xl object-contain shadow-lift" />
            <figcaption className="mt-3.5 flex items-center justify-between text-white">
              <span className="font-heading text-lg font-medium">{images[lightbox].title}</span>
              <span className="text-sm text-white/70">{lightbox + 1} / {images.length}</span>
            </figcaption>
          </figure>
          <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className="absolute right-3 md:right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
