import type { ReactElement } from "react";
import { ApproachCard } from "../_components/approach-card";
import { approachItems } from "../content";

export function ApproachSection(): ReactElement {
  return (
    <section
      id="approach"
      className="grid gap-12 px-6 py-20 sm:px-10 md:grid-cols-[190px_1fr] md:gap-16 md:px-14 md:py-24">
      <div>
        <p className="text-[14px] underline decoration-[#8d7444] underline-offset-4">Approach.</p>
      </div>
      <div>
        <h2 className="max-w-[760px] text-4xl leading-[1.05] sm:text-5xl">
          Compliance that fits the business reality
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {approachItems.map((item) => (
            <ApproachCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
