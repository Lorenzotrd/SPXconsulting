import type { ReactElement } from "react";
import { AboutSection } from "./_sections/about";
import { ApproachSection } from "./_sections/approach";
import { ContactSection } from "./_sections/contact";
import { FaqSection } from "./_sections/faq";
import { FooterSection } from "./_sections/footer";
import { Header } from "./_sections/header";
import { HeroSection } from "./_sections/hero";
import { ServicesSection } from "./_sections/services";
import { pageMetadata, structuredData } from "./seo";

function LegalLandingPage(): ReactElement {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#10100f]">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}

export { LegalLandingPage as default, pageMetadata as metadata };
