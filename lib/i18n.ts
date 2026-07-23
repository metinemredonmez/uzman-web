import { tr } from "@/lib/locales/tr";

export type Dict = typeof tr;
export type Lang = "tr" | "en" | "de" | "nl" | "fr" | "ru" | "ar";

export const langs: Lang[] = ["tr", "en", "de", "nl", "fr", "ru", "ar"];

export const langNames: Record<Lang, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
  nl: "Nederlands",
  fr: "Français",
  ru: "Русский",
  ar: "العربية",
};

export const isRtl = (lang: Lang) => lang === "ar";

export const langPath = (lang: Lang) => (lang === "tr" ? "/" : `/${lang}`);

export async function getDict(lang: Lang): Promise<Dict> {
  switch (lang) {
    case "en":
      return (await import("@/lib/locales/en")).en;
    case "de":
      return (await import("@/lib/locales/de")).de;
    case "nl":
      return (await import("@/lib/locales/nl")).nl;
    case "fr":
      return (await import("@/lib/locales/fr")).fr;
    case "ru":
      return (await import("@/lib/locales/ru")).ru;
    case "ar":
      return (await import("@/lib/locales/ar")).ar;
    default:
      return tr;
  }
}
