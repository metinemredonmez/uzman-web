import { notFound } from "next/navigation";
import { Landing } from "@/components/site/landing";
import { langs, type Lang } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.filter((l) => l !== "tr").map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return buildMetadata(lang as Lang);
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang === "tr" || !langs.includes(lang as Lang)) notFound();
  return <Landing lang={lang as Lang} />;
}
