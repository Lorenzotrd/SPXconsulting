import Image from "next/image";
import type { ReactElement } from "react";
import { ServiceRow } from "../_components/service-row";
import { services } from "../content";

export function ServicesSection(): ReactElement {
  return (
    <section
      id="services"
      className="grid gap-12 px-6 py-16 sm:px-10 md:grid-cols-[190px_1fr] md:gap-16 md:px-14 md:py-24">
      <div>
        <p className="text-[14px] underline decoration-[#8d7444] underline-offset-4">Services.</p>
        <div className="mt-14 hidden md:block">
          <Image
            src="/legal-landing/service-main.jpg"
            alt="Compliance advisory meeting"
            width={160}
            height={208}
            className="h-52 w-40 object-cover opacity-90"
          />
        </div>
      </div>

      <div>
        <div className="flex items-end justify-between gap-6">
          <h2 className="max-w-[700px] text-4xl leading-[1.05] sm:text-5xl">
            Senior compliance support for regulated growth
          </h2>
          <a
            href="#contact"
            aria-label="Contact SPX Consulting"
            className="hidden text-4xl text-[#8d7444] transition hover:translate-x-1 hover:-translate-y-1 md:block">
            →
          </a>
        </div>

        <div className="mt-20 border-black/35 border-t">
          {services.map((service, index) => (
            <ServiceRow key={service.number} service={service} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
