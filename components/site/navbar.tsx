"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check, Download, Globe, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/lib/site";
import {
  langNames,
  langPath,
  langs,
  type Dict,
  type Lang,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar({ d, lang }: { d: Dict["nav"]; lang: Lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "#ozellikler", label: d.features },
    { href: "#uygulama", label: d.app },
    { href: "#turlar", label: d.tours },
    { href: "#sss", label: d.faq },
    { href: "#iletisim", label: d.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-navy-950/85 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href={langPath(lang)} className="flex items-center gap-2.5">
          <Image
            src="/brand/app-icon.png"
            alt="Uzman Umre"
            width={34}
            height={34}
            className="rounded-xl ring-1 ring-white/20"
          />
          <span className="leading-none">
            <span className="block text-[15px] font-extrabold tracking-tight text-white">
              uzman <span className="text-gold-400">umre</span>
            </span>
            <span className="block text-[9.5px] font-semibold tracking-[0.14em] text-white/50">
              {d.since}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] font-semibold text-white/75 transition-colors hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Dil seçici */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex h-9 items-center gap-1.5 rounded-xl border border-white/20 px-3 text-[12.5px] font-bold uppercase text-white/85 transition-colors hover:bg-white/10"
              aria-label="Language"
            >
              <Globe className="size-3.5" />
              {lang}
            </button>
            {langOpen && (
              <div className="absolute end-0 top-11 w-44 overflow-hidden rounded-2xl border border-white/10 bg-navy-900 p-1.5 shadow-2xl shadow-black/40">
                {langs.map((l) => (
                  <a
                    key={l}
                    href={langPath(l)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-2 text-[13.5px] font-semibold text-white/80 hover:bg-white/8 hover:text-gold-300",
                      l === lang && "text-gold-300",
                    )}
                  >
                    {langNames[l]}
                    {l === lang && <Check className="size-3.5" />}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              render={<a href={site.phoneHref} />}
              variant="outline"
              className="h-10 rounded-xl border-white/25 bg-transparent px-4 text-white hover:bg-white/10 hover:text-white"
            >
              <Phone className="size-4" />
              {site.phone}
            </Button>
            <Button
              render={<a href="#indir" />}
              className="h-10 rounded-xl bg-brand-red px-4 text-white hover:bg-brand-red-dark"
            >
              <Download className="size-4" />
              {d.download}
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="flex size-10 items-center justify-center rounded-xl text-white lg:hidden"
              aria-label="Menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-white/10 bg-navy-950 text-white"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="mt-10 flex flex-col gap-1 px-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-semibold text-white/85 hover:bg-white/5 hover:text-gold-300"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#indir"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-xl bg-brand-red px-4 py-3 text-center text-base font-bold"
                >
                  {d.download}
                </a>
                <div className="mt-6 grid grid-cols-2 gap-1 border-t border-white/10 pt-4">
                  {langs.map((l) => (
                    <a
                      key={l}
                      href={langPath(l)}
                      className={cn(
                        "rounded-lg px-3 py-2 text-[13px] font-semibold text-white/70 hover:bg-white/5",
                        l === lang && "text-gold-300",
                      )}
                    >
                      {langNames[l]}
                    </a>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
