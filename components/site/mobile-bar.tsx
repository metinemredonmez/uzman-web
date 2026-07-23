import { Download, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import type { Dict } from "@/lib/i18n";

/* Mobilde alta sabitlenen hızlı erişim çubuğu */
export function MobileBar({ d }: { d: Dict["mobileBar"] }) {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 flex items-center gap-2 rounded-3xl border border-navy-950/10 bg-white/95 p-2 shadow-[0_16px_50px_rgba(6,13,31,0.28)] backdrop-blur-xl lg:hidden">
      <a
        href={site.phoneHref}
        className="flex flex-1 flex-col items-center gap-0.5 rounded-2xl py-2 text-navy-950"
      >
        <Phone className="size-4" />
        <span className="text-[11px] font-bold">{d.call}</span>
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener"
        className="flex flex-1 flex-col items-center gap-0.5 rounded-2xl bg-emerald-50 py-2 text-emerald-700"
      >
        <MessageCircle className="size-4" />
        <span className="text-[11px] font-bold">WhatsApp</span>
      </a>
      <a
        href="#indir"
        className="flex flex-[1.4] flex-col items-center gap-0.5 rounded-2xl bg-brand-red py-2 text-white"
      >
        <Download className="size-4" />
        <span className="text-[11px] font-bold">{d.download}</span>
      </a>
    </div>
  );
}
