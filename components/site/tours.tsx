import {
  ArrowUpRight,
  BadgeCheck,
  Hotel,
  Phone as PhoneIcon,
  PlaneTakeoff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import type { Dict } from "@/lib/i18n";

const perkIcons = [BadgeCheck, Hotel, PlaneTakeoff];

export function Tours({ d }: { d: Dict["tours"] }) {
  return (
    <section id="turlar" className="bg-ivory px-4 py-20 sm:px-6 lg:py-28">
      <div className="bg-arabesque relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-navy-950 shadow-[0_40px_90px_-30px_rgba(6,13,31,0.6)]">
        <div className="pointer-events-none absolute -end-24 -top-24 size-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-16">
          <div>
            <p className="text-[13px] font-bold tracking-[0.14em] text-gold-400">
              {d.kicker}
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              {d.h2a}{" "}
              <span className="font-serif italic text-gold-300">{d.h2serif}</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-slate-300">
              {d.p}
            </p>
            <ul className="mt-7 space-y-3">
              {d.perks.map((text, i) => {
                const Icon = perkIcons[i % perkIcons.length];
                return (
                  <li
                    key={text}
                    className="flex items-center gap-3 text-[15px] font-semibold text-white/85"
                  >
                    <span className="flex size-8 items-center justify-center rounded-full bg-gold-500/15 ring-1 ring-gold-500/30">
                      <Icon className="size-4 text-gold-400" />
                    </span>
                    {text}
                  </li>
                );
              })}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                render={
                  <a href={site.toursUrl} target="_blank" rel="noopener" />
                }
                className="h-12 rounded-2xl bg-brand-red px-6 text-[15px] font-bold text-white hover:bg-brand-red-dark"
              >
                {d.cta}
                <ArrowUpRight className="size-4" />
              </Button>
              <Button
                render={<a href={site.phoneHref} />}
                variant="outline"
                className="h-12 rounded-2xl border-white/25 bg-transparent px-6 text-[15px] font-bold text-white hover:bg-white/10 hover:text-white"
              >
                <PhoneIcon className="size-4" />
                {site.phone}
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {d.stats.map(({ k, v }) => (
              <div
                key={k}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur"
              >
                <p className="text-3xl font-extrabold tracking-tight text-gold-300">
                  {k}
                </p>
                <p className="mt-1.5 text-[14px] leading-snug text-slate-300">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
