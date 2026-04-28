import type { ReactElement } from "react";
import { contactLinks } from "../content";

export function ContactSection(): ReactElement {
  return (
    <section
      id="contact"
      className="grid gap-12 bg-[#10100f] px-6 py-20 text-white sm:px-10 md:grid-cols-[190px_1fr] md:gap-16 md:px-14 md:py-24">
      <div>
        <p className="text-[14px] underline decoration-[#b69a5f] underline-offset-4">Contact.</p>
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-5xl leading-[1.02] sm:text-6xl">Let&apos;s Talk</h2>
          <p className="mt-8 max-w-[520px] text-[15px] text-white/74 leading-[1.55]">
            If you are looking for pragmatic and senior compliance support, feel free to reach out.
          </p>
          <p className="mt-6 text-[#d3b46d] text-[14px]">{contactLinks.emailAddress}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={contactLinks.calendarUrl}
            className="inline-flex min-h-12 items-center bg-white px-7 text-[14px] text-black transition hover:bg-[#e9e5dc]">
            Book a Call
          </a>
          <a
            href={`mailto:${contactLinks.emailAddress}`}
            className="inline-flex min-h-12 items-center border border-white/40 px-7 text-[14px] text-white transition hover:bg-white hover:text-black">
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}
