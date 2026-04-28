import type { ReactElement } from "react";
import { faqItems } from "../content";

export function FaqSection(): ReactElement {
  return (
    <section
      id="faq"
      className="grid gap-12 px-6 py-20 sm:px-10 md:grid-cols-[190px_1fr] md:gap-16 md:px-14 md:py-24">
      <div>
        <p className="text-[14px] underline decoration-[#8d7444] underline-offset-4">FAQ.</p>
      </div>
      <div>
        <h2 className="max-w-[760px] text-4xl leading-[1.05] sm:text-5xl">Compliance advisory questions</h2>
        <div className="mt-14 border-black/25 border-t">
          {faqItems.map((item) => (
            <details key={item.question} className="group border-black/20 border-b">
              <summary className="grid cursor-pointer list-none grid-cols-[1fr_40px] gap-6 py-7 text-xl transition hover:bg-black/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8d7444] [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  className="flex h-9 w-9 items-center justify-center border border-black/20 text-[#8d7444] transition group-open:rotate-45"
                  aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-[720px] pb-7 text-[14px] text-black/70 leading-[1.5]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
