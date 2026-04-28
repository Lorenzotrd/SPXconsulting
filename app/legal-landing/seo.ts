import process from "node:process";
import type { Metadata } from "next";
import { contactLinks, faqItems, services } from "./content";

const siteOrigin: string = process.env.NEXT_PUBLIC_WEBAPP_URL ?? "http://localhost:3002";
const pagePath: string = "/legal-landing";
const pageUrl: string = `${siteOrigin}${pagePath}`;
const title: string = "SPX Consulting | Fintech Compliance, AML, GDPR & PSD2 Advisory";
const description: string =
  "SPX Consulting provides pragmatic compliance advisory for regulated fintechs, payment institutions, electronic money institutions, banks, and investors across Belgium and Europe.";

export const pageMetadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title,
  description,
  alternates: {
    canonical: pagePath,
  },
  keywords: [
    "fintech compliance consultant",
    "AML compliance advisory",
    "GDPR data protection consultant",
    "PSD2 payments compliance",
    "Belgium compliance advisory",
    "AMLCO interim",
    "DPO services Belgium",
    "financial crime advisory",
    "payment institution compliance",
    "electronic money compliance",
  ],
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "SPX Consulting",
    type: "website",
    locale: "en_BE",
    images: [
      {
        url: "/legal-landing/hero-compliance-desk.png",
        width: 1536,
        height: 1024,
        alt: "Compliance advisory desk with laptop, documents, and scales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/legal-landing/hero-compliance-desk.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "BE",
    "geo.placename": "Belgium",
    "business:contact_data:country_name": "Belgium",
    "business:contact_data:region": "Europe",
  },
};

export const structuredData: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${pageUrl}#professional-service`,
    name: "SPX Consulting",
    url: pageUrl,
    image: `${siteOrigin}/legal-landing/spx-logo-header.png`,
    description,
    founder: {
      "@type": "Person",
      name: "Sophyan Belataris",
      jobTitle: "Compliance Advisor",
      knowsAbout: [
        "AML/CTF",
        "GDPR",
        "PSD2",
        "Payments compliance",
        "Compliance monitoring",
        "Regulatory reporting",
        "Interim compliance leadership",
      ],
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Belgium",
      },
      {
        "@type": "Place",
        name: "Europe",
      },
    ],
    email: `mailto:${contactLinks.emailAddress}`,
    serviceType: services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Compliance advisory services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: "Europe",
        },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];
