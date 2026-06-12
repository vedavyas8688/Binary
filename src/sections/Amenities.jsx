import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { amenities } from "../data/content";

export default function Amenities() {
  const ref = useReveal({ stagger: 0.06 });

  return (
    <section ref={ref} id="amenities" className="section bg-surface">
      <div className="container-site">
        <SectionHeading
          label="Amenities"
          title="60+ ways to live well"
          desc="An 8,000+ sq.ft clubhouse and curated outdoor spaces across the 3.5-acre campus."
          align="center"
        />

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {amenities.map((a) => (
            <figure
              key={a.title}
              data-reveal
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={a.img}
                alt={a.title}
                loading="lazy"
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-48"
              />
              <figcaption className="absolute inset-x-0 bottom-0 caption-fade px-3.5 pb-3 pt-8">
                <span className="font-heading text-sm font-medium text-white">
                  {a.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
