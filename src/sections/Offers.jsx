import { BadgePercent, Check } from "lucide-react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { offers } from "../data/content";

export default function Offers() {
  const ref = useReveal({ stagger: 0.08 });

  return (
    <section ref={ref} className="section">
      <div className="container-site">
        <SectionHeading num="03" label={offers.label} title={offers.title} align="center" />

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Launch offer card */}
          <div data-reveal className="relative overflow-hidden rounded-2xl bg-gradient-brand p-7 text-white md:p-8 lg:col-span-2">
            <BadgePercent size={20} className="text-white/85" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/85">{offers.launch.label}</p>
            <p className="mt-2 font-display text-5xl font-semibold">
              {offers.launch.value}
              <span className="ml-2 text-lg font-medium text-white/80">{offers.launch.unit}</span>
            </p>
            <p className="mt-3 max-w-xs text-base leading-relaxed text-white/90">{offers.launch.note}</p>
            <p className="mt-5 inline-block rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium">
              Standard rate: {offers.base.value} {offers.base.unit}
            </p>
          </div>

          {/* Pricing table */}
          <div data-reveal className="card overflow-hidden lg:col-span-3">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-line bg-bg text-xs uppercase tracking-[0.14em] text-muted">
                  <th className="px-6 py-4 font-semibold">Configuration</th>
                  <th className="px-6 py-4 font-semibold">Size</th>
                  <th className="px-6 py-4 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {offers.rows.map((r) => (
                  <tr key={r.config}>
                    <td className="px-6 py-5 font-heading text-lg font-semibold text-ink">{r.config}</td>
                    <td className="px-6 py-5 text-base text-muted">{r.size}</td>
                    <td className="px-6 py-5 font-heading text-lg font-bold text-gradient">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-line bg-bg px-6 py-4">
              {offers.perks.map((p) => (
                <span key={p} className="flex items-center gap-1.5 text-sm text-muted">
                  <Check size={12} strokeWidth={2.5} className="text-brand-ink" /> {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
