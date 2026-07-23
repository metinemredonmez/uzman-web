import { site } from "@/lib/site";
import type { Dict } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden>
      <path d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  );
}

export function StoreButtons({
  labels,
  className,
  variant = "dark",
}: {
  labels: Dict["store"];
  className?: string;
  variant?: "dark" | "light";
}) {
  const base =
    "group flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-200 hover:-translate-y-0.5";
  const skin =
    variant === "dark"
      ? "bg-white text-navy-950 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)]"
      : "bg-navy-950 text-white shadow-[0_8px_30px_rgba(6,13,31,0.25)] hover:shadow-[0_12px_36px_rgba(6,13,31,0.35)]";

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a href={site.appStoreUrl} target="_blank" rel="noopener" className={cn(base, skin)}>
        <AppleLogo className="size-6 shrink-0" />
        <span className="text-start leading-tight">
          <span className="block text-[11px] font-medium opacity-70">
            {labels.appStoreTop}
          </span>
          <span className="block text-[15px] font-bold tracking-tight">
            {labels.appStoreBottom}
          </span>
        </span>
      </a>
      <a href={site.playStoreUrl} target="_blank" rel="noopener" className={cn(base, skin)}>
        <PlayLogo className="size-5 shrink-0" />
        <span className="text-start leading-tight">
          <span className="block text-[11px] font-medium opacity-70">
            {labels.playTop}
          </span>
          <span className="block text-[15px] font-bold tracking-tight">
            {labels.playBottom}
          </span>
        </span>
      </a>
    </div>
  );
}
