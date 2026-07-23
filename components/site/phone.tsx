import {
  AudioLines,
  BookOpenText,
  Compass,
  Headphones,
  Heart,
  Home,
  Library,
  MapPin,
  Mic,
  Play,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Screen = "home" | "ai" | "umre";

/* Uygulama ekranlarının CSS ile yeniden çizilmiş minyatürleri —
   gerçek ekran görüntüsü yerine her ortamda keskin duran mockuplar. */
export function Phone({
  screen,
  className,
  label,
}: {
  screen: Screen;
  className?: string;
  label?: string;
}) {
  return (
    <figure className={cn("select-none", className)}>
      <div className="relative mx-auto w-[270px] rounded-[2.6rem] border border-white/15 bg-navy-950 p-2 shadow-[0_40px_80px_-20px_rgba(2,6,23,0.8)]">
        <div className="absolute left-1/2 top-4 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative overflow-hidden rounded-[2.1rem] bg-[#0f172a] text-white">
          {screen === "home" && <HomeScreen />}
          {screen === "ai" && <AiScreen />}
          {screen === "umre" && <UmreScreen />}
          <TabBar active={screen} />
        </div>
      </div>
      {label ? (
        <figcaption className="mt-4 text-center text-sm font-semibold text-navy-900/70">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ScreenHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="flex items-center justify-between px-4 pb-3 pt-12">
      <div>
        <p className="text-[10px] font-medium text-slate-400">{sub}</p>
        <p className="text-[15px] font-extrabold tracking-tight">{title}</p>
      </div>
      <Image
        src="/brand/app-icon.png"
        alt=""
        width={28}
        height={28}
        className="rounded-lg ring-1 ring-white/15"
      />
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="pb-14">
      <ScreenHeader sub="Hayırlı günler 👋" title="Uzman Umre" />
      <div className="mx-4 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 p-3 ring-1 ring-white/10">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-gold-500/20 px-1.5 py-0.5 text-[9px] font-bold text-gold-300">
            ÖNE ÇIKAN
          </span>
          <span className="text-[9px] text-slate-400">Bölüm 12 · 38 dk</span>
        </div>
        <p className="mt-2 text-[13px] font-bold leading-snug">
          Kabe&apos;ye İlk Bakış: Tavafın Sırları
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-brand-red">
            <Play className="size-3.5 fill-white text-white" />
          </span>
          <div className="h-1 flex-1 rounded-full bg-white/10">
            <div className="h-1 w-2/5 rounded-full bg-gold-400" />
          </div>
          <Heart className="size-3.5 text-slate-400" />
        </div>
      </div>
      <div className="mt-3 flex gap-1.5 overflow-hidden px-4">
        {["Tümü", "Sohbetler", "Umre", "Siyer", "Dua"].map((c, i) => (
          <span
            key={c}
            className={cn(
              "whitespace-nowrap rounded-full px-2.5 py-1 text-[9px] font-semibold",
              i === 0 ? "bg-gold-500 text-navy-950" : "bg-white/10 text-slate-300",
            )}
          >
            {c}
          </span>
        ))}
      </div>
      <div className="mt-3 space-y-2 px-4">
        {[
          { t: "Hz. İbrahim'in Mirası", d: "Siyer · 24 dk", i: Headphones },
          { t: "Medine'de Bir Sabah", d: "Sohbet · 31 dk", i: AudioLines },
          { t: "İhrama Girerken", d: "Umre · 18 dk", i: Mic },
        ].map(({ t, d, i: Icon }) => (
          <div
            key={t}
            className="flex items-center gap-2.5 rounded-xl bg-white/5 p-2.5 ring-1 ring-white/5"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-navy-700/60">
              <Icon className="size-3.5 text-gold-300" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-bold">{t}</p>
              <p className="text-[9px] text-slate-400">{d}</p>
            </div>
            <Play className="size-3 text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AiScreen() {
  return (
    <div className="pb-14">
      <ScreenHeader sub="Sesli sohbet" title="AI Hocam" />
      <div className="space-y-2 px-4">
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/8 p-2.5 text-[10.5px] leading-relaxed text-slate-200 ring-1 ring-white/10">
          Selamün aleyküm! Umre hazırlığınızla ilgili merak ettiğiniz her şeyi
          bana sorabilirsiniz. 🌙
        </div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-red/90 p-2.5 text-[10.5px] leading-relaxed">
          Tavaf sırasında hangi duaları okumalıyım?
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/8 p-2.5 text-[10.5px] leading-relaxed text-slate-200 ring-1 ring-white/10">
          Tavafın her şavtında farklı dualar okuyabilirsiniz. Rükn-i Yemânî ile
          Hacerülesved arasında &quot;Rabbenâ âtinâ...&quot; duası özellikle
          tavsiye edilir…
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2">
        <span className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-[0_0_40px_rgba(201,162,75,0.45)]">
          <Mic className="size-6 text-navy-950" />
          <span className="absolute inset-0 animate-ping rounded-full bg-gold-500/30" />
        </span>
        <p className="text-[9px] font-medium text-slate-400">
          Konuşmak için basılı tutun
        </p>
      </div>
    </div>
  );
}

function UmreScreen() {
  const steps = [
    { t: "İhram & Niyet", done: true },
    { t: "Telbiye", done: true },
    { t: "Tavaf", done: true },
    { t: "Sa'y (Safa–Merve)", done: false },
    { t: "Tıraş & İhramdan Çıkış", done: false },
  ];
  return (
    <div className="pb-14">
      <ScreenHeader sub="Adım adım" title="Umre Rehberi" />
      <div className="mx-4 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-gold-500/15 to-transparent p-3 ring-1 ring-gold-500/20">
        <MapPin className="size-4 text-gold-300" />
        <div>
          <p className="text-[11px] font-bold">Mescid-i Haram</p>
          <p className="text-[9px] text-slate-400">3. adım / 5 · Tavaf devam ediyor</p>
        </div>
      </div>
      <div className="mt-3 space-y-1.5 px-4">
        {steps.map((s, i) => (
          <div
            key={s.t}
            className={cn(
              "flex items-center gap-2.5 rounded-xl p-2.5 ring-1",
              s.done
                ? "bg-white/5 ring-white/5"
                : i === 3
                  ? "bg-brand-red/15 ring-brand-red/30"
                  : "bg-white/[0.03] ring-white/5 opacity-60",
            )}
          >
            <span
              className={cn(
                "flex size-6 items-center justify-center rounded-full text-[9px] font-black",
                s.done
                  ? "bg-gold-500 text-navy-950"
                  : "bg-white/10 text-slate-300",
              )}
            >
              {s.done ? "✓" : i + 1}
            </span>
            <p className="flex-1 text-[11px] font-bold">{s.t}</p>
            {i === 3 && (
              <span className="rounded-md bg-brand-red px-1.5 py-0.5 text-[8px] font-bold">
                SIRADAKİ
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TabBar({ active }: { active: Screen }) {
  const tabs = [
    { i: Home, k: "home" },
    { i: Compass, k: "explore" },
    { i: Sparkles, k: "ai" },
    { i: BookOpenText, k: "umre" },
    { i: Library, k: "lib" },
  ] as const;
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/10 bg-navy-950/95 px-2 py-2.5 backdrop-blur">
      {tabs.map(({ i: Icon, k }) => (
        <Icon
          key={k}
          className={cn(
            "size-4",
            k === active ? "text-gold-400" : "text-slate-500",
          )}
        />
      ))}
    </div>
  );
}

export function PhoneGlow({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-[100px]" />
      {children}
    </div>
  );
}
