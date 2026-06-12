import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { faqs } from "../data/content";

export default function Faq() {
  const ref = useReveal({ stagger: 0.06 });
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section ref={ref} className="section">
      <div className="container-site grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            label="FAQ"
            title="Questions, answered"
            desc="Everything buyers usually ask about the project, pricing, and the EOI process. Still unsure? Our team is a call away."
          />
          <a href="/#contact" className="btn-primary mt-6" data-reveal>
            Talk to Our Team
          </a>
        </div>

        <div className="lg:col-span-3">
          <div className="divide-y divide-line rounded-xl border border-line bg-surface shadow-card">
            {faqs.map((f, i) => {
              const open = openIdx === i;
              return (
                <div key={f.q} data-reveal>
                  <button
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                  >
                    <span className="font-heading text-lg font-semibold text-ink">
                      {f.q}
                    </span>
                    <span
                      className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                        open
                          ? "bg-gradient-brand text-white"
                          : "bg-brand-soft text-brand-ink"
                      }`}
                    >
                      {open ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
                  </button>
                  {open && (
                    <p className="px-5 pb-5 text-base leading-relaxed text-muted md:px-6">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
