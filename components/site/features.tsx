import {
  BellRing,
  BookOpenText,
  Compass,
  Headphones,
  Library,
  Moon,
  Radio,
  Sparkles,
} from "lucide-react";
import type { Dict } from "@/lib/i18n";

const icons = [
  Headphones,
  Sparkles,
  Radio,
  BookOpenText,
  Compass,
  Moon,
  BellRing,
  Library,
];

export function Features({ d }: { d: Dict["features"] }) {
  return (
    <section id="ozellikler" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Yapışkan başlık sütunu */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[13px] font-bold tracking-[0.14em] text-brand-red">
              {d.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              {d.h2a}{" "}
              <span className="font-serif italic text-gold-600">{d.h2serif}</span>
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-navy-950/65">
              {d.p}
            </p>
          </div>

          {/* Numaralı editoryal liste */}
          <ol className="divide-y divide-navy-950/8 border-y border-navy-950/8">
            {d.items.map(({ title, text }, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li key={title} className="group flex gap-5 py-6 sm:gap-7">
                  <span className="w-8 shrink-0 pt-1 font-serif text-[15px] italic text-navy-950/35 transition-colors group-hover:text-gold-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="flex items-center gap-2.5 text-[17px] font-extrabold tracking-tight text-navy-950">
                      <Icon className="size-[18px] text-gold-600" />
                      {title}
                    </h3>
                    <p className="mt-1.5 max-w-lg text-[14.5px] leading-relaxed text-navy-950/60">
                      {text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
