import Image from "next/image";
import type { ReactElement } from "react";
import { contactLinks, navItems } from "../content";

export function Header(): ReactElement {
  return (
    <div className="sticky top-0 z-30 flex items-center justify-between gap-6 border-white/10 border-b bg-[#0a0a0a]/95 px-6 py-3 text-[12px] text-white backdrop-blur-md sm:px-10 md:px-14">
      <a href="/legal-landing" className="flex min-h-12 items-center" aria-label="SPX Consulting home">
        <Image
          src="/legal-landing/spx-logo-header.png"
          alt=""
          width={536}
          height={321}
          priority
          className="h-12 w-auto object-contain sm:h-14"
        />
      </a>
      <nav className="hidden items-center gap-10 md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-white/75">
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href={contactLinks.calendarUrl}
        className="inline-flex min-h-10 items-center border border-white/55 px-5 text-[11px] transition hover:bg-white hover:text-black">
        Book a Call
        <span className="ml-4" aria-hidden="true">
          →
        </span>
      </a>
    </div>
  );
}
