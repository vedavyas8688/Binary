import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock3, MessageCircle, Send } from "lucide-react";
import PageLayout from "../components/PageLayout";
import useReveal from "../hooks/useReveal";
import { blogPosts } from "../data/content";

export default function BlogPost() {
  const { slug } = useParams();
  const ref = useReveal({ stagger: 0.07 });
  const post = blogPosts.find((p) => p.slug === slug);

  const [comments, setComments] = useState([
    { name: "Deepak R.", date: "2 weeks ago", text: "Very helpful — booked a site visit after reading this. The EOI being refundable was the deciding factor for us." },
    { name: "Anita S.", date: "1 week ago", text: "Could you share more details on the metro timeline? Looking at this for a rental investment." },
  ]);
  const [draft, setDraft] = useState({ name: "", text: "" });

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const fallback = blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  const relatedPosts = [...related, ...fallback].slice(0, 3);

  const submitComment = (e) => {
    e.preventDefault();
    if (!draft.name.trim() || !draft.text.trim()) return;
    setComments([...comments, { name: draft.name, date: "Just now", text: draft.text }]);
    setDraft({ name: "", text: "" });
  };

  return (
    <PageLayout>
      {/* Article hero */}
      <section className="relative pt-14">
        <div className="relative h-[320px] md:h-[440px]">
          <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "color-mix(in srgb, var(--c-ink) 55%, transparent)" }} />
          <div className="absolute inset-0 flex items-end">
            <div className="container-site pb-10 text-white">
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white">
                <ArrowLeft size={13} /> All articles
              </Link>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <span className="rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold">{post.category}</span>
                <span className="text-white/80">{post.date}</span>
                <span className="flex items-center gap-1.5 text-white/80"><Clock3 size={12} /> {post.readTime}</span>
              </div>
              <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">{post.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article ref={ref} className="section !pb-10">
        <div className="container-site">
          <div className="mx-auto max-w-3xl space-y-6">
            {post.body.map((para, i) => (
              <p key={i} data-reveal className="text-lg leading-relaxed text-muted first:font-medium first:text-ink">
                {para}
              </p>
            ))}
            <div data-reveal className="rounded-xl bg-gradient-soft border border-line p-6 md:p-7">
              <p className="font-heading text-lg font-semibold text-ink">Want to see it for yourself?</p>
              <p className="mt-1 text-base text-muted">Book a complimentary site visit at Chambenahalli, Sarjapur Road.</p>
              <Link to="/" className="btn-primary mt-4">Book a Site Visit <ArrowRight size={13} /></Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="section !pt-6">
        <div className="container-site">
          <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">Related reading</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ink">{p.category}</span>
                  <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-ink">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comments */}
      <section className="section bg-surface !py-14">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2 className="flex items-center gap-2.5 font-heading text-2xl font-semibold text-ink">
              <MessageCircle size={20} className="text-brand-ink" /> Comments ({comments.length})
            </h2>

            <div className="mt-6 space-y-4">
              {comments.map((c, i) => (
                <div key={i} className="rounded-xl border border-line bg-bg p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand font-heading text-sm font-bold text-white">
                      {c.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-heading text-base font-semibold text-ink">{c.name}</p>
                      <p className="text-xs text-muted">{c.date}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-muted">{c.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={submitComment} className="card mt-6 p-6">
              <p className="font-heading text-lg font-semibold text-ink">Join the conversation</p>
              <div className="mt-4 grid gap-3.5">
                <input
                  className="field"
                  placeholder="Your name"
                  value={draft.name}
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                  required
                />
                <textarea
                  className="field resize-none"
                  rows="3"
                  placeholder="Share your thoughts or questions..."
                  value={draft.text}
                  onChange={(e) => setDraft({ ...draft, text: e.target.value })}
                  required
                />
                <button type="submit" className="btn-primary justify-self-start">
                  Post Comment <Send size={13} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
