import { FileDown } from "lucide-react";
import { Phone, PhoneGlow } from "@/components/site/phone";
import { StoreButtons } from "@/components/site/store-buttons";
import type { Dict } from "@/lib/i18n";

export function Hero({ d, store }: { d: Dict["hero"]; store: Dict["store"] }) {
  return (
    <section className="bg-arabesque relative overflow-hidden bg-navy-950">
      {/* Kâbe tavaf arka plan videosu — dosyayı public/media/kabe-tavaf.mp4
          olarak ekleyin (10-20 sn'lik döngü, H.264, ~8-10 MB önerilir).
          Dosya yokken desenli zemin görünmeye devam eder; mobilde veri
          tasarrufu için video yüklenmez. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        className="absolute inset-0 hidden size-full object-cover opacity-30 motion-reduce:hidden sm:block"
      >
        <source src="/media/kabe-tavaf.mp4" type="video/mp4" />
      </video>
      {/* Okunabilirlik için koyu overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950/95" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-navy-700/40 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-24 end-[-100px] size-[420px] rounded-full bg-gold-600/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-40">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-[13px] font-bold text-gold-300">
            <span className="size-1.5 animate-pulse rounded-full bg-gold-400" />
            {d.badge}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            {d.h1a} <span className="text-gold-gradient">{d.h1b}</span>
            <span className="mt-3 block font-serif text-[0.58em] font-medium italic tracking-normal text-white/80">
              {d.h1serif}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-slate-300">
            {d.p}
          </p>

          <StoreButtons labels={store} className="mt-9" />

          <a
            href="/umre-rehberi.pdf"
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-gold-300/90 underline-offset-4 hover:text-gold-300 hover:underline"
          >
            <FileDown className="size-4" />
            {d.pdf}
          </a>

          {/* İnce ayraçlı satır içi istatistikler */}
          <dl className="mt-12 flex max-w-xl items-stretch divide-x divide-white/12">
            {d.stats.map(({ value, label }, i) => (
              <div
                key={value}
                className={i === 0 ? "pe-6" : i === d.stats.length - 1 ? "ps-6" : "px-6"}
              >
                <dd className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  {value}
                </dd>
                <dt className="mt-1 text-[11.5px] leading-snug text-slate-400">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <PhoneGlow>
          <div className="flex items-end justify-center gap-5">
            <Phone
              screen="ai"
              className="hidden translate-y-8 -rotate-[4deg] scale-[0.82] opacity-80 sm:block"
            />
            <Phone screen="home" className="z-10 rotate-[2deg]" />
          </div>
        </PhoneGlow>
      </div>

      <div className="relative h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
    </section>
  );
}
