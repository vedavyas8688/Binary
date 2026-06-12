import { useEffect, useRef } from "react";
import gsap from "gsap";
import { heroData } from "../data/content";

// color-matched collage: warm dusk exteriors + beige/cream interiors (fits black + beige)
const COLLAGE = {
  topLeft: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=620&q=85",    // glass tower, golden windows
  bottomLeft: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=560&q=85", // beige/cream bedroom
  topRight: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=640&q=85",   // white villa at dusk, pool
  bottomRight: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85",// warm neutral living room
};

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-h], [data-pic]", { opacity: 1, y: 0, scale: 1 });
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo("[data-h]", { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 })
        .fromTo(
          "[data-pic]",
          { opacity: 0, y: 34, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.12, ease: "power4.out" },
          "-=0.55"
        );

      gsap.utils.toArray("[data-pic]").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 ? 14 : -14,
          duration: 3.6 + i * 0.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100svh] overflow-hidden pt-20"
      style={{ background: "#0d0d0d" }}
    >
      {/* faint grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "110px 110px",
        }}
      />
      {/* soft beige glow behind the headline — ties brand into the black */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "var(--g-brand)" }}
      />

      <div className="container-site relative flex min-h-[calc(100svh-5rem)] items-center justify-center py-16">
        {/* ── Left collage (bigger) ── */}
        <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block">
          <img
            data-pic
            src={COLLAGE.topLeft}
            alt=""
            className="h-72 w-56 rounded-md object-cover shadow-2xl xl:h-80 xl:w-64"
          />
          <img
            data-pic
            src={COLLAGE.bottomLeft}
            alt=""
            className="-mt-16 ml-28 h-60 w-52 rounded-md object-cover shadow-2xl xl:ml-36 xl:h-68 xl:w-56"
          />
        </div>

        {/* ── Right collage (bigger) ── */}
        <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
          <img
            data-pic
            src={COLLAGE.topRight}
            alt=""
            className="ml-auto h-72 w-60 rounded-md object-cover shadow-2xl xl:h-80 xl:w-72"
          />
          <img
            data-pic
            src={COLLAGE.bottomRight}
            alt=""
            className="-mt-14 mr-24 h-56 w-60 rounded-md object-cover shadow-2xl xl:mr-32 xl:h-60 xl:w-72"
          />
        </div>

        {/* ── Centered copy ── */}
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          {/* text-white directly on h1 — overrides the global h1 ink color */}
          <h1 data-h className="font-heading text-5xl font-medium leading-[1.12] text-white md:text-6xl">
            {heroData.title}
            <br />
            <span
              style={{
                backgroundImage: "linear-gradient(100deg, var(--c-brand-2), #f5e9d6)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {heroData.titleAccent}
            </span>
          </h1>
          <p data-h className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/80">
            {heroData.subtitle}
          </p>
          <a
            data-h
            href="#contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-heading text-base font-semibold text-ink transition-transform hover:-translate-y-px"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}