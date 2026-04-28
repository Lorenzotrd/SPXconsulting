import Image from "next/image";
import type { ReactElement } from "react";
import { certifications } from "../content";

export function AboutSection(): ReactElement {
  return (
      <section
        id="about"
        className="grid gap-10 px-6 py-20 sm:px-10 md:grid-cols-[190px_1fr_280px] md:gap-16 md:px-14 md:py-24">
        <div>
          <p className="text-[14px] underline decoration-[#8d7444] underline-offset-4">About.</p>
          <div className="mt-12 h-56 w-40 overflow-hidden border border-black/10 bg-white sm:h-64 sm:w-44">
            <Image
              src="/legal-landing/about-portrait.jpeg"
              alt="Sophyan Belataris, compliance consultant"
              width={360}
              height={480}
              className="h-full w-full object-cover object-[50%_18%]"
            />
          </div>
          <p className="mt-12 max-w-[140px] text-[11px] leading-[1.35]">Sophyan Belataris</p>
        </div>
        <div>
          <p className="max-w-[610px] text-3xl leading-[1.08] sm:text-4xl md:text-[42px]">
            Support regulated financial institutions with a pragmatic and business-oriented approach to
            compliance.
          </p>
          <div className="mt-10 max-w-[640px] space-y-6 text-[15px] text-black/72 leading-[1.55]">
            <p>
              My name is Sophyan Belataris, a Compliance professional with around 10 years of experience in
              payments, electronic money, retail and private banking. My focus is on delivering actionable
              solutions that align regulatory requirements with operational realities.
            </p>
            <p>
              Strongly believe that compliance should not be a constraint, but a lever for sustainable
              growth and a real competitive advantage. My approach combines regulatory expertise,
              adaptability, ethics, integrity, and execution.
            </p>
            <p>
              Particularly engaged in helping organizations structure, scale and transform their compliance
              functions in a way that supports both regulatory expectations and business objectives.
            </p>
          </div>
        </div>
        <aside className="space-y-5">
          <p className="text-[11px] text-black/45 uppercase tracking-[0.12em]">Certifications</p>
          <div className="grid gap-5">
            {certifications.map((certification) => (
              <div key={certification.name} className="border-t border-[#8d7444]/35 pt-4">
                <p className="text-[14px] text-black leading-[1.25]">{certification.name}</p>
                <p className="mt-1.5 text-[11px] text-[#8d7444] leading-[1.4]">{certification.issuer}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

  );
}
