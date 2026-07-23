import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Dict } from "@/lib/i18n";

export function Faq({ d }: { d: Dict["faq"] }) {
  return (
    <section id="sss" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-center text-[13px] font-bold tracking-[0.14em] text-brand-red">
          {d.kicker}
        </p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          {d.h2}
        </h2>

        <Accordion multiple={false} className="mt-10">
          {d.items.map(({ q, a }) => (
            <AccordionItem key={q} value={q} className="border-navy-950/10">
              <AccordionTrigger className="text-start text-[16px] font-bold text-navy-950 hover:text-gold-600 hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-navy-950/65">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
