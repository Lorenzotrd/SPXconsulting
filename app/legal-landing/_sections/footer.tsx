import type { ReactElement } from "react";

export function FooterSection(): ReactElement {
  return (
    <footer className="flex flex-col gap-3 px-6 py-8 text-[12px] text-black/55 sm:px-10 md:flex-row md:items-center md:justify-between md:px-14">
      <p>SPX Consulting — Compliance Advisory</p>
      <p>Based in Belgium — Supporting clients across Europe</p>
    </footer>
  );
}
