import type { ReactElement } from "react";
import type { ApproachItem } from "../content";

export function ApproachCard({ item }: { item: ApproachItem }): ReactElement {
  return (
    <div className="border-black/20 border-t pt-7">
      <h3 className="text-2xl text-[#8d7444]">{item.title}</h3>
      <p className="mt-6 max-w-[270px] text-[13px] text-black/70 leading-[1.45]">{item.copy}</p>
    </div>
  );
}
