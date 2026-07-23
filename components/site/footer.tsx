import Image from "next/image";
import { FileDown, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { StoreButtons } from "@/components/site/store-buttons";
import { site } from "@/lib/site";
import type { Dict } from "@/lib/i18n";

export function Footer({
  d,
  store,
}: {
  d: Dict["footer"];
  store: Dict["store"];
}) {
  return (
    <footer id="iletisim" className="bg-arabesque bg-navy-950 text-white">
      {/* İndirme çağrısı */}
      <div id="indir" className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 lg:py-20">
          <Image
            src="/brand/app-icon.png"
            alt="Uzman Umre"
            width={72}
            height={72}
            className="rounded-3xl shadow-[0_20px_50px_rgba(201,162,75,0.25)] ring-1 ring-white/20"
          />
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {d.ctaH2a} <span className="text-gold-gradient">{d.ctaH2b}</span>
          </h2>
          <p className="max-w-xl text-[16px] leading-relaxed text-slate-300">
            {d.ctaP}
          </p>
          <StoreButtons labels={store} />
        </div>
      </div>

      {/* Alt bilgi */}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-extrabold tracking-tight">
            uzman <span className="text-gold-400">umre</span>
          </p>
          <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-slate-400">
            {d.about}
          </p>
          <Image
            src="/brand/uzman-logo.png"
            alt="Uzman Turizm"
            width={120}
            height={90}
            className="mt-5 rounded-xl bg-white/95 p-2"
          />
        </div>

        <div>
          <p className="text-[13px] font-bold tracking-[0.14em] text-gold-400">
            {d.contact}
          </p>
          <ul className="mt-4 space-y-3 text-[14.5px] text-slate-300">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 hover:text-gold-300"
              >
                <Phone className="size-4 text-gold-500" /> {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2.5 hover:text-gold-300"
              >
                <MessageCircle className="size-4 text-gold-500" /> {d.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 hover:text-gold-300"
              >
                <Mail className="size-4 text-gold-500" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-500" />
              {site.address}
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-bold tracking-[0.14em] text-gold-400">
            {d.links}
          </p>
          <ul className="mt-4 space-y-3 text-[14.5px] text-slate-300">
            <li>
              <a
                href={site.toursUrl}
                target="_blank"
                rel="noopener"
                className="hover:text-gold-300"
              >
                {d.toursLink}
              </a>
            </li>
            <li>
              <a
                href="/umre-rehberi.pdf"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 hover:text-gold-300"
              >
                <FileDown className="size-4 text-gold-500" />
                {d.pdfLink}
              </a>
            </li>
            <li>
              <a href={site.appStoreUrl} target="_blank" rel="noopener" className="hover:text-gold-300">
                App Store
              </a>
            </li>
            <li>
              <a href={site.playStoreUrl} target="_blank" rel="noopener" className="hover:text-gold-300">
                Google Play
              </a>
            </li>
            <li>
              <a href="#ozellikler" className="hover:text-gold-300">
                {d.featuresLink}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-[12.5px] text-slate-500 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} Uzman Turizm. {d.rights} · {d.tursab}
          </p>
          <p>
            uzmanumre.com · uzmanumre.com.tr ·{" "}
            <a href={site.toursUrl} className="hover:text-gold-300">
              uzmanturizm.com.tr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
