import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import { ArrowRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

const posts = [
  {
    title: "Why Sarjapur Road is Bengaluru's fastest-growing corridor",
    date: "Coming soon",
    excerpt:
      "Metro connectivity, the ORR IT corridor, and what it means for home buyers and investors.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    title: "Low-density living: what 6 units per floor really means",
    date: "Coming soon",
    excerpt:
      "Privacy, light, and ventilation — the design decisions behind Binary Project 4.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=80",
  },
  {
    title: "Understanding the EOI: a fully refundable way to reserve",
    date: "Coming soon",
    excerpt:
      "How the Expression of Interest works, and why the first 50 flats get launch pricing.",
    image:
      "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&q=80",
  },
];

export default function Blog() {
  const ref = useReveal();
  return (
    <PageLayout>
      <PageHeader
        label="Blog"
        title="Notes from the project"
        desc="Insights on the location, the design, and the buying process."
      />
      <section ref={ref} className="section">
        <div className="container-site grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              data-reveal
              className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs uppercase tracking-[0.12em] text-muted">
                  {p.date}
                </span>
                <h3 className="mt-2 font-heading text-base font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-ink">
                  Read more <ArrowRight size={12} strokeWidth={2.2} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
