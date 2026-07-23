import type { Metadata } from "next";
import { getDict, langPath, langs, type Lang } from "@/lib/i18n";

export async function buildMetadata(lang: Lang): Promise<Metadata> {
  const d = await getDict(lang);
  const languages = Object.fromEntries(langs.map((l) => [l, langPath(l)]));
  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: {
      canonical: langPath(lang),
      languages: { ...languages, "x-default": "/" },
    },
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      url: langPath(lang),
      siteName: "Uzman Umre",
      locale: lang === "tr" ? "tr_TR" : lang,
      type: "website",
    },
  };
}
