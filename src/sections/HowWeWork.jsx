import { PhoneCall, MapPin, FileText, Landmark, KeyRound } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { howWeWork } from "../data/content";

const ICONS = { PhoneCall, MapPin, FileText, Landmark, KeyRound };

export default function HowWeWork() {
  const ref = useReveal({ stagger: 0.1 });

  return (
    <section ref={ref} className="section">
      <div className="container-site grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            num="05"
            label={howWeWork.label}
            title={howWeWork.title}
            desc="Five touchpoints, one accountable team — so you always know what happens next."
          />
        </div>

        <ol className="space-y-4 lg:col-span-3">
          {howWeWork.steps.map((s, i) => {
            const Icon = ICONS[s.icon] ?? PhoneCall;
            return (
              <li key={s.title} data-reveal className="card flex gap-5 p-5 md:p-6">
                <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-ink">
                  <Icon size={18} strokeWidth={2} />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand text-2xs font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-muted">{s.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
