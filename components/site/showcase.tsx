import { Phone } from "@/components/site/phone";
import type { Dict } from "@/lib/i18n";

export function Showcase({ d }: { d: Dict["showcase"] }) {
  return (
    <section id="uygulama" className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-[13px] font-bold tracking-[0.14em] text-brand-red">
            {d.kicker}
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {d.h2a}{" "}
            <span className="font-serif italic text-gold-600">{d.h2serif}</span>{" "}
            {d.h2b}
          </h2>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-10 sm:flex-row sm:items-end sm:gap-0">
          <Phone
            screen="ai"
            label={d.labels.ai}
            className="sm:translate-x-6 sm:translate-y-3 sm:-rotate-[5deg] sm:scale-95"
          />
          <Phone screen="home" label={d.labels.home} className="z-10" />
          <Phone
            screen="umre"
            label={d.labels.umre}
            className="sm:-translate-x-6 sm:translate-y-3 sm:rotate-[5deg] sm:scale-95"
          />
        </div>
      </div>
    </section>
  );
}
