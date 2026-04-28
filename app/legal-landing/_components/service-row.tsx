import type { ReactElement } from "react";
import type { Service } from "../content";

export function ServiceRow({
  service,
  defaultOpen,
}: {
  service: Service;
  defaultOpen: boolean;
}): ReactElement {
  return (
    <details className="group border-black/20 border-b" open={defaultOpen}>
      <summary className="grid min-h-24 cursor-pointer list-none items-start gap-6 py-8 transition hover:bg-black/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8d7444] md:grid-cols-[0.22fr_1fr_48px] md:items-center md:gap-12 [&::-webkit-details-marker]:hidden">
        <p className="text-black/80 text-lg">{service.number}</p>
        <h3 className="text-2xl leading-tight">{service.title}</h3>
        <span
          className="flex h-10 w-10 items-center justify-center border border-black/20 text-[#8d7444] text-xl transition group-open:rotate-45"
          aria-hidden="true">
          +
        </span>
      </summary>
      <div className="grid gap-6 pb-8 md:grid-cols-[0.22fr_1fr_48px] md:gap-12">
        <span aria-hidden="true" />
        <p className="max-w-[620px] text-[14px] text-black/70 leading-[1.45]">{service.description}</p>
      </div>
    </details>
  );
}
