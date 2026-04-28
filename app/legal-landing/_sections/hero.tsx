import Image from "next/image";
import type { ReactElement } from "react";
import { contactLinks } from "../content";

export function HeroSection(): ReactElement {
  return (
    <section
      id="home"
      className="relative min-h-[560px] overflow-hidden bg-[#050505] px-6 pt-12 pb-16 text-white sm:px-10 md:min-h-[650px] md:px-14 md:pt-14 md:pb-20">
      <Image
        src="/legal-landing/hero-compliance-desk.png"
        alt="Compliance desk with laptop, documents, and scales"
        fill
        priority
        sizes="(min-width: 1280px) 1132px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 32px)"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_42px)] opacity-15" />

      <div className="relative z-10 grid min-h-[470px] grid-cols-1 gap-y-10 md:min-h-[540px] md:grid-cols-[1fr_0.72fr] md:gap-y-0">
        <div className="flex flex-col">
          <div className="grid max-w-md grid-cols-2 gap-8">
            <div>
              <p className="text-4xl sm:text-5xl">10y</p>
              <p className="mt-2 text-[12px] text-white/82">Compliance experience</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl">EU</p>
              <p className="mt-2 text-[12px] text-white/82">Fintech &amp; financial institutions</p>
            </div>
          </div>
          <h1 className="mt-auto max-w-[700px] pt-20 font-normal text-5xl leading-[1] sm:text-6xl md:text-[74px]">
            Pragmatic Compliance for Fintech Growth
          </h1>
        </div>

        <div className="flex flex-col justify-between gap-16 md:items-end">
          <div className="max-w-[310px] md:text-right">
            <p className="text-[15px] text-white/90 leading-[1.35]">
              Strategic and hands-on compliance for regulated fintechs and financial institutions.
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between md:w-auto md:flex-col md:items-end">
            <a
              href={contactLinks.calendarUrl}
              className="inline-flex min-h-14 items-center bg-white px-8 font-medium text-[15px] text-black transition hover:bg-[#e9e5dc]">
              Book a Call
              <span className="ml-5 text-lg" aria-hidden="true">
                →
              </span>
            </a>
            <div className="flex items-center gap-5 text-[12px] text-white/86">
              <span className="h-px w-28 bg-white/70" />
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/80 text-[10px]">
                ©
              </span>
              <span>Based in Belgium — Supporting clients across Europe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
