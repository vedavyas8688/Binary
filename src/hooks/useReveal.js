import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useReveal — animates elements into view on scroll.
 *
 * Attach the returned ref to a container. Every child carrying a
 * `data-reveal` attribute fades + slides up with a small stagger
 * when the container enters the viewport. If no child has
 * `data-reveal`, the container itself animates.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = el.querySelectorAll("[data-reveal]");
    const items = targets.length ? targets : [el];

    if (reduce) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: options.stagger ?? 0.1,
          scrollTrigger: {
            trigger: el,
            start: options.start ?? "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [options.stagger, options.start]);

  return ref;
}
