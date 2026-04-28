export type Service = {
  number: string;
  title: string;
  description: string;
};

export type ExpertiseItem = {
  title: string;
  detail: string;
};

export type ApproachItem = {
  title: string;
  copy: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const contactLinks = {
  emailAddress: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@spxconsulting.example",
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL ?? "#contact",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "AML / CTF",
    detail: "KYC, CDD, transaction monitoring, FIU reporting.",
  },
  {
    title: "GDPR & Data Protection",
    detail: "Governance, DPO support, privacy programmes.",
  },
  {
    title: "PSD2 & Payments",
    detail: "Payment and electronic money regulatory advisory.",
  },
  {
    title: "Compliance Monitoring",
    detail: "Control frameworks, advisory, remediation plans.",
  },
  {
    title: "Regulatory Reporting",
    detail: "Incident management and regulator-facing execution.",
  },
  {
    title: "Training Programmes",
    detail: "Awareness sessions for teams, leaders, and boards.",
  },
];

export type Certification = {
  name: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { name: "Certified Compliance Officer", issuer: "Febelfin Academy & FSMA" },
  { name: "CIPP/E", issuer: "IAPP" },
  { name: "CIPM", issuer: "IAPP" },
  { name: "Fellow of Information Privacy", issuer: "IAPP" },
  {
    name: "ICA Specialist Certificate",
    issuer: "Money Laundering Risk in New Payments Products and Services",
  },
];

export const services: Service[] = [
  {
    number: "01.",
    title: "AML & Financial Crime Advisory",
    description:
      "Design and implementation of pragmatic AML/CTF frameworks aligned with your business model, including KYC/CDD, transaction monitoring, and reporting obligations.",
  },
  {
    number: "02.",
    title: "GDPR & Data Protection",
    description:
      "Support in building and strengthening data protection frameworks, including DPO services, governance, policies, and operational implementation.",
  },
  {
    number: "03.",
    title: "PSD2 & Payments Compliance",
    description:
      "Advisory on regulatory requirements related to payment institutions and electronic money, ensuring compliant and scalable operations.",
  },
  {
    number: "04.",
    title: "Compliance Strategy & Transformation",
    description:
      "Structuring and transforming compliance functions to move from reactive control to proactive business enabler, including governance and operating model.",
  },
  {
    number: "05.",
    title: "Compliance Monitoring & Remediation",
    description:
      "Design and execution of monitoring plans, control frameworks, and remediation programmes following audits, incidents, or regulatory findings.",
  },
  {
    number: "06.",
    title: "Interim Leadership",
    description:
      "Hands-on support as Head of Compliance, AMLCO, or DPO to ensure continuity, leadership, and execution during key phases or transitions.",
  },
  {
    number: "07.",
    title: "Awareness & Training",
    description:
      "Design and delivery of tailored training sessions for operational teams, senior management, executive committees, and boards.",
  },
  {
    number: "08.",
    title: "Board & Executive Advisory",
    description:
      "Strategic guidance to boards and executive committees on compliance risks, governance, and decision-making.",
  },
  {
    number: "09.",
    title: "Investor Advisory",
    description:
      "Compliance-focused due diligence on target entities prior to acquisition or investment, identifying risks and regulatory exposure.",
  },
];

export const approachItems: ApproachItem[] = [
  {
    title: "Pragmatic",
    copy: "Solutions designed to work in real operational environments, not theoretical frameworks.",
  },
  {
    title: "Business-Oriented",
    copy: "Compliance aligned with growth, product, and commercial strategy.",
  },
  {
    title: "Execution-Focused",
    copy: "From strategy to implementation, with direct involvement where it matters.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Who does SPX Consulting support?",
    answer:
      "SPX Consulting supports regulated fintechs, payment institutions, electronic money institutions, banks, and investors with senior compliance expertise across Belgium and Europe.",
  },
  {
    question: "Which compliance topics are covered?",
    answer:
      "Core areas include AML/CTF, KYC/CDD, transaction monitoring, GDPR, PSD2, payments regulation, compliance monitoring, regulatory reporting, and interim compliance leadership.",
  },
  {
    question: "Can SPX Consulting support interim leadership roles?",
    answer:
      "Yes. SPX Consulting can provide hands-on interim support for Head of Compliance, AMLCO, and DPO responsibilities during transitions, growth phases, or remediation programmes.",
  },
  {
    question: "Is the approach strategic or operational?",
    answer:
      "Both. The work combines regulatory strategy with practical execution so compliance frameworks can operate effectively inside real business environments.",
  },
];
