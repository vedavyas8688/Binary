import { useState } from "react";
import { masterPlan } from "../data/content";
import useReveal from "../hooks/useReveal";
import { X, Download, CheckCircle } from "lucide-react";

export default function MasterPlan() {
  const [showForm,   setShowForm]   = useState(false);
  const [unlocked,   setUnlocked]   = useState(false);
  const [submitted,  setSubmitted]  = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const ref = useReveal();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const downloadImage = async () => {
    try {
      const response = await fetch(masterPlan.image);
      const blob     = await response.blob();
      const url      = URL.createObjectURL(blob);
      const a        = document.createElement("a");
      a.href         = url;
      a.download     = "Binary-MasterPlan.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open(masterPlan.image, "_blank");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
    await new Promise((r) => setTimeout(r, 1500));
    setShowForm(false);
    setUnlocked(true);
    setSubmitted(false);
    downloadImage();
  };

  return (
    <>
      <section
        ref={ref}
        id="masterplan"
        className="overflow-hidden py-16 md:py-24"
        style={{ background: "var(--c-brand-soft)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 xl:gap-24">

            {/* ── Left ── */}
            <div className="flex flex-col" data-reveal>
              {/* Label */}
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="block h-px w-8 flex-shrink-0"
                  style={{ background: "var(--g-brand)" }}
                />
                <span className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-brand-ink">
                  {masterPlan.label}
                </span>
              </div>

              {/* Heading — two lines: ink + gold */}
              <h2
                className="mb-8 font-display font-semibold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
              >
                A Thoughtfully Designed
                <br />
                <span style={{ color: "var(--c-brand)" }}>
                  3.2-Acre Master Plan
                </span>
              </h2>

              <p className="mb-6 font-body text-base leading-relaxed text-muted">
                {masterPlan.description}
              </p>
              <p className="font-body text-base leading-relaxed text-muted">
                At its heart lies a sprawling club area surrounded by landscaped greens, wide internal roads, community spaces, and leisure zones — ensuring privacy, ventilation, and long-term livability.
              </p>
            </div>

            {/* ── Right — blurred image + unlock button ── */}
            <div data-reveal>
              <div className="relative overflow-hidden rounded-2xl bg-surface shadow-lift">
                <img
                  src={masterPlan.image}
                  alt="Master Plan"
                  className="w-full object-cover transition-all duration-700"
                  style={{
                    height: "420px",
                    filter: unlocked ? "none" : "blur(14px)",
                    transform: unlocked ? "scale(1)" : "scale(1.06)",
                  }}
                />

                {/* Unlock overlay */}
                {!unlocked && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                    style={{ background: "rgba(255,255,255,0.10)" }}
                  >
                    <button
                      onClick={() => setShowForm(true)}
                      className="font-heading text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:opacity-90"
                      style={{
                        background: "var(--c-brand)",
                        padding: "0.85rem 2rem",
                        letterSpacing: "0.18em",
                      }}
                    >
                      View Full Masterplan
                    </button>
                    <p
                      className="font-body text-xs text-muted"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      Fill a quick form to unlock &amp; download
                    </p>
                  </div>
                )}

                {/* Unlocked badge */}
                {unlocked && (
                  <div
                    className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2"
                    style={{ background: "rgba(10,10,10,0.7)" }}
                  >
                    <CheckCircle size={14} style={{ color: "var(--c-brand)" }} />
                    <span
                      className="font-heading text-[10px] uppercase"
                      style={{ letterSpacing: "0.2em", color: "var(--c-brand-2)" }}
                    >
                      Masterplan Unlocked
                    </span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(10,10,10,0.8)" }}
          onClick={() => setShowForm(false)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden bg-surface"
            style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.4)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold top bar */}
            <div
              className="h-1"
              style={{ background: "linear-gradient(to right, var(--c-brand), var(--c-brand-2), var(--c-brand))" }}
            />

            {/* Header */}
            <div
              className="flex items-start justify-between px-8 pb-5 pt-7"
              style={{ background: "var(--c-brand-soft)" }}
            >
              <div>
                <p
                  className="mb-2 font-heading text-[10px] font-semibold uppercase text-brand-ink"
                  style={{ letterSpacing: "0.3em" }}
                >
                  Binary Real Estate
                </p>
                <h3
                  className="font-display font-semibold leading-[1.2] text-ink"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  Unlock Master Plan
                </h3>
                <p className="mt-1.5 font-body text-sm text-muted">
                  Share your details to download the full master plan instantly.
                </p>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="mt-0.5 bg-transparent text-brand-ink transition-opacity hover:opacity-70"
                style={{ border: "none", cursor: "pointer" }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 bg-surface px-8 py-7"
            >
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ background: "var(--c-brand-soft)" }}
                  >
                    <Download size={28} style={{ color: "var(--c-brand)" }} />
                  </div>
                  <p className="text-center font-display text-2xl font-semibold text-ink">
                    Download Starting...
                  </p>
                  <p className="text-center font-body text-sm text-muted">
                    Your master plan will download shortly. Unlocking the image now.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      { label: "Full Name *",  name: "name",  type: "text", placeholder: "Your name" },
                      { label: "Phone *",      name: "phone", type: "tel",  placeholder: "+91 XXXXX XXXXX" },
                    ].map((field) => (
                      <div key={field.name} className="flex flex-col gap-2">
                        <label
                          className="font-heading text-[10px] font-semibold uppercase text-muted"
                          style={{ letterSpacing: "0.2em" }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full font-body text-sm text-ink outline-none transition-colors"
                          style={{
                            border: "1px solid rgba(176,141,87,0.3)",
                            padding: "0.75rem 1rem",
                            background: "var(--c-bg)",
                            fontSize: "0.9rem",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--c-brand)")}
                          onBlur={(e)  => (e.target.style.borderColor = "rgba(176,141,87,0.3)")}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className="font-heading text-[10px] font-semibold uppercase text-muted"
                      style={{ letterSpacing: "0.2em" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      required
                      className="w-full font-body text-sm text-ink outline-none transition-colors"
                      style={{
                        border: "1px solid rgba(176,141,87,0.3)",
                        padding: "0.75rem 1rem",
                        background: "var(--c-bg)",
                        fontSize: "0.9rem",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--c-brand)")}
                      onBlur={(e)  => (e.target.style.borderColor = "rgba(176,141,87,0.3)")}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className="font-heading text-[10px] font-semibold uppercase text-muted"
                      style={{ letterSpacing: "0.2em" }}
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any specific questions about the project?"
                      rows={3}
                      className="w-full resize-none font-body text-sm text-ink outline-none transition-colors"
                      style={{
                        border: "1px solid rgba(176,141,87,0.3)",
                        padding: "0.75rem 1rem",
                        background: "var(--c-bg)",
                        fontSize: "0.9rem",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--c-brand)")}
                      onBlur={(e)  => (e.target.style.borderColor = "rgba(176,141,87,0.3)")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-1 inline-flex w-full items-center justify-center gap-2 font-heading text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:opacity-90 disabled:opacity-70"
                    style={{
                      background: "var(--c-brand)",
                      padding: "0.85rem 2rem",
                      letterSpacing: "0.18em",
                    }}
                  >
                    <Download size={15} />
                    {submitting ? "Processing..." : "Download Master Plan"}
                  </button>

                  <p
                    className="text-center font-heading text-[9px] uppercase text-muted"
                    style={{ letterSpacing: "0.15em", opacity: 0.6 }}
                  >
                    Your details are safe with us · No spam
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}