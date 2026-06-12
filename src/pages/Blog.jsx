import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";
import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import useReveal from "../hooks/useReveal";
import { blogCategories, blogPosts } from "../data/content";

export default function Blog() {
  const ref = useReveal({ stagger: 0.06 });
  const [cat, setCat] = useState("All");

  const featured = blogPosts[0];
  const posts = useMemo(() => {
    const rest = cat === "All" ? blogPosts : blogPosts.filter((p) => p.category === cat);
    return rest.filter((p) => p.slug !== featured.slug || cat !== "All");
  }, [cat, featured.slug]);

  return (
    <PageLayout>
      <PageHeader
        label="Blog"
        title="Notes from the project"
        desc="Insights on the location, the design, and the buying process — written by the Binary team."
      />

      <div ref={ref}>
        {/* Featured post */}
        {cat === "All" && (
          <section className="section !pb-0">
            <div className="container-site">
              <Link
                to={`/blog/${featured.slug}`}
                data-reveal
                className="card group grid overflow-hidden transition-all duration-300 hover:shadow-lift lg:grid-cols-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-full"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 md:p-10">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-white">Featured</span>
                    <span className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ink">{featured.category}</span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-semibold leading-snug text-ink md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{featured.excerpt}</p>
                  <div className="mt-5 flex items-center gap-4 text-sm text-muted">
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1.5"><Clock3 size={12} /> {featured.readTime}</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-heading text-base font-semibold text-brand-ink">
                    Read the story <ArrowRight size={13} strokeWidth={2.2} />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Filter + grid */}
        <section className="section">
          <div className="container-site">
            <div className="flex flex-wrap gap-2.5" data-reveal>
              {blogCategories.map((c) => (
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
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  data-reveal
                  className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold uppercase tracking-[0.12em] text-brand-ink">{p.category}</span>
                      <span className="text-muted">{p.date}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-xl font-semibold leading-snug text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-base leading-relaxed text-muted">{p.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                      <span className="flex items-center gap-1.5 text-sm text-muted"><Clock3 size={12} /> {p.readTime}</span>
                      <span className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-ink">
                        Read more <ArrowRight size={12} strokeWidth={2.2} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
