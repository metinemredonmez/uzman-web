import { Faq } from "@/components/site/faq";
import { Features } from "@/components/site/features";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { MobileBar } from "@/components/site/mobile-bar";
import { Navbar } from "@/components/site/navbar";
import { Showcase } from "@/components/site/showcase";
import { Tours } from "@/components/site/tours";
import { getDict, isRtl, type Lang } from "@/lib/i18n";

export async function Landing({ lang }: { lang: Lang }) {
  const d = await getDict(lang);
  return (
    <main
      lang={lang}
      dir={isRtl(lang) ? "rtl" : "ltr"}
      className="pb-20 lg:pb-0"
    >
      <Navbar d={d.nav} lang={lang} />
      <Hero d={d.hero} store={d.store} />
      <Features d={d.features} />
      <Showcase d={d.showcase} />
      <Tours d={d.tours} />
      <Faq d={d.faq} />
      <Footer d={d.footer} store={d.store} />
      <MobileBar d={d.mobileBar} />
    </main>
  );
}
